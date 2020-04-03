import React from 'react'
import CommentItem from './CommentItem'
import { Comments } from '../types/comments'
import { Typography } from 'antd'
import styled from 'styled-components'

const { Title } = Typography

export interface CommentsListProps {
  comments: Comments;
}

const CommentsList: React.FC<CommentsListProps> = ({ comments }) => {
  return (
    <>
      <CommentsTitle>Comments</CommentsTitle>
      <ul>
        {comments && comments.length === 0 ? (
          <p>there are no comments</p>
        ) : (
          comments &&
          comments.map(({ body, id, postId }) => (
            <CommentItem body={body} key={id} id={id} postId={postId} />
          ))
        )}
      </ul>
    </>
  )
}

const CommentsTitle = styled(Title)`
  margin-top: 1rem;
`

export default CommentsList
