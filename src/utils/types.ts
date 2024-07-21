export type TNewsItem = {
  id: number;
  by: string;
  title: string;
  score: number;
  url: string;
  favorite: boolean;
  numbersComments: number;
  deleted: boolean;
  type: 'job' | 'story' | 'comment' | 'poll' | 'pollopt';
  time: Date;
  text: string;
  dead: boolean;
  parent: number;
  poll: number;
  kids: number[];
  parts: number[];
  descendants: number;
};

export type TNews = TNewsItem[];

export type TComment = {
  by: string;
  id: number;
  kids: number[];
  parent: number;
  text: string;
  time: Date;
  type: 'comment';
};
