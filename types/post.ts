import { Comments } from './comments'

export interface LargePostType extends PostType {
  comments: Comments;
}

export interface PostType {
  title: string;
  body: string;
  id: number;
}

export type Posts = Array<PostType>
