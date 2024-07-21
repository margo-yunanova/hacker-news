import { TComment, TNewsItem } from './types';
import { NEWS_API_URL } from './constants';

const checkResponse = (res: Response) =>
  res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);

const request = async (endpoint: string, options?: RequestInit) => {
  const url = `${NEWS_API_URL}/${endpoint}.json?print=pretty`;
  const params = {
    ...options,
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      ...options?.headers,
    },
  };
  return checkResponse(await fetch(url, params));
};

export const getNewNews = (): Promise<number[]> =>
  request('newstories', { method: 'GET' });

export const getTopNews = (): Promise<number[]> =>
  request('topstories', { method: 'GET' });

export const getBestNews = (): Promise<number[]> =>
  request('beststories', { method: 'GET' });

export const getNewsItem = (id: number): Promise<TNewsItem> =>
  request(`item/${id}`, { method: 'GET' });

export const getComment = (id: number): Promise<TComment> =>
  request(`item/${id}`, { method: 'GET' });
