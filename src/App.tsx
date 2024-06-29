import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { NewsItem } from './components/news-item/NewsItem';
import {
  getBestNews,
  getNewNews,
  getNewsItem,
  getTopNews,
} from './utils/api.ts';
import { TNews } from './utils/types';
import { Header, sortingType } from './components/header/Header';

function App() {
  const [newsIdList, setNewsIdList] = useState<number[]>([]);
  const [news, setNews] = useState<TNews>([]);
  const [loading, setLoading] = useState(false);
  const [activeButton, setActiveButton] = useState<'new' | 'best' | 'top'>(
    'new',
  );

  useEffect(() => {
    setLoading(true);
    getNewNews().then((news) => {
      setNewsIdList(news);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    Promise.all(
      newsIdList.slice(0, 10).map(async (id) => await getNewsItem(id)),
    ).then((items) => {
      setNews(items);
      setLoading(false);
    });
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

  return (
    <div className={styles.main}>
      <Header handleSortButton={handleSort} activeButton={activeButton} />
      {!loading && (
        <ul className={styles.list}>
          {news?.map((item, i) => (
            <NewsItem
              key={item.id}
              serialNumber={i + 1}
              by={item.by}
              id={item.id}
              score={item.score}
              title={item.title}
              url={item.url}
            />
          ))}
        </ul>
      )}
      {loading && <span className={styles.loader}></span>}
    </div>
  );
}

export default App;
