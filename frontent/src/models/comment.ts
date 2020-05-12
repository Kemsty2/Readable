import { Post } from './post';

export interface Comment extends Post {
  parentId: string;
  parentDeleted: boolean;
}
