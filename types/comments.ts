export interface CommentType {
  body: string;
  id: number;
  postId: number;
}

export type Comments = Array<CommentType> | undefined
