import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './App.module.css';
import { NewsItem } from './components/news-item/NewsItem';
import {
  getBestNews,
  getMaxNewsItem,
  getNewNews,
  getNewsItem,
  getTopNews,
} from './utils/api.ts';
import { TNews } from './utils/types';
import { Header, sortingType } from './components/header/Header';

const LIMIT = 15;

function App() {
  const [newsIdList, setNewsIdList] = useState<number[]>([]);
  const [news, setNews] = useState<TNews>([]);
  const [loading, setLoading] = useState(false);
  const [refreshButtonDisabled, setRefreshButtonDisabled] = useState(false);
  const [activeButton, setActiveButton] = useState<'new' | 'best' | 'top'>(
    'new',
  );
  const [maxNewsItem, setMaxNewsItem] = useState(0);
  const observer = useRef<IntersectionObserver>();

  const actionInSight: IntersectionObserverCallback = useCallback(
    (entries) => {
      if (entries[0].isIntersecting) {
        setLoading(true);
        Promise.all(
          newsIdList
            .slice(news.length, news.length + LIMIT)
            .map((id) => getNewsItem(id)),
        ).then((items) => {
          setNews([...news, ...items]);
          setLoading(false);
        });
      }
    },
    [news, newsIdList],
  );

  const lastItem = useCallback(
    (node: Element) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(actionInSight);

      if (node) observer.current.observe(node);
    },
    [actionInSight],
  );

  useEffect(() => {
    setLoading(true);
    getNewNews().then((news) => setNewsIdList(news));
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getMaxNewsItem().then((max) => {
        if (max > maxNewsItem) {
          setMaxNewsItem(max);
          getNewNews().then((news) => setNewsIdList(news));
        }
      });
    }, 30000);

    return () => clearTimeout(timeoutId);
  }, [maxNewsItem]);

  useEffect(() => {
    setLoading(true);
    Promise.all(newsIdList.slice(0, LIMIT).map((id) => getNewsItem(id))).then(
      (items) => {
        setNews(items);
        setLoading(false);
      },
    );
  }, [newsIdList]);

  const handleSort = async (sortingType: sortingType) => {
    if (sortingType === 'new') {
      setLoading(true);
      const news = await getNewNews();
      setNewsIdList(news);
      setActiveButton('new');
    }
    if (sortingType === 'top') {
      setLoading(true);
      const news = await getTopNews();
      setNewsIdList(news);
      setActiveButton('top');
    }
    if (sortingType === 'best') {
      setLoading(true);
      const news = await getBestNews();
      setNewsIdList(news);
      setActiveButton('best');
    }
  };

  const handleUpdateNews = async () => {
    setRefreshButtonDisabled(true);
    const lastNews = await getNewNews();
    const prevLastNewsId = lastNews.indexOf(news[0].id);
    if (prevLastNewsId <= 0) {
      setRefreshButtonDisabled(false);
      return;
    }

    try {
      const items = await Promise.all(
        lastNews.slice(0, prevLastNewsId).map((id) => getNewsItem(id)),
      );
      setNews([...items, ...news]);
    } finally {
      setRefreshButtonDisabled(false);
    }
  };

  return (
    <div className={styles.main}>
      <Header handleSortButton={handleSort} activeButton={activeButton} />
      <button onClick={handleUpdateNews} disabled={refreshButtonDisabled}>
        Получить новые новости
      </button>

      <ul className={styles.list}>
        {news
          .map((item, i) => {
            if (i + 1 === news.length) {
              return (
                <NewsItem
                  key={item.id}
                  serialNumber={i + 1}
                  by={item.by}
                  id={item.id}
                  score={item.score}
                  title={item.title}
                  url={item.url}
                  favorite={item.favorite}
                  descendants={item.descendants}
                  ref={lastItem}
                />
              );
            }

          return (
            <NewsItem
              key={item?.id}
              serialNumber={i + 1}
              by={item?.by}
              id={item?.id}
              score={item?.score}
              title={item?.title}
              url={item?.url}
              favorite={item?.favorite}
              descendants={item?.descendants}
            />
          );
        })}
      </ul>
      {loading && (
        <div className={styles['loader-block']}>
          <span className={styles.loader}></span>
        </div>
      )}
      {loading && <span className={styles.loader}></span>}
    </div>
  );
}

export default App;
