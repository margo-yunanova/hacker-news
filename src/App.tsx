import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { INewsItem, NewsItem } from './components/news-item/NewsItem';
import { getNewNews, getNewsItem } from './utils/api';
import { TNews, TNewsItem } from './utils/types';
import { Header } from './components/header/Header';

function App() {
  const [newsIdList, setNewsIdList] = useState<number[]>([]);
  const [news, setNews] = useState<TNews>([]);

  useEffect(() => {
    getNewNews().then((news) => {
      setNewsIdList(news);
    });
  }, []);

  useEffect(() => {
    Promise.all(
      newsIdList.slice(0, 10).map(async (id) => await getNewsItem(id)),
    ).then((items) => {
      setNews(items);
    });
  }, [newsIdList]);

  return (
    <div className={styles.main}>
      <Header />
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
    </div>
  );
}

export default App;
