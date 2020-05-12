export interface Post {
  id: string;
  timestamp: number;
  title: string;
  body: string;
  author: string;
  category: string;
  voteScore: string;
  deleted: boolean;
}
