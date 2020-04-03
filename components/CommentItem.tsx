import React from 'react'
import { Typography } from 'antd'
import { CommentType } from '../types/comments'

const { Paragraph } = Typography

const Comment: React.FC<CommentType> = ({ body }) => {
  return (
    <li>
      <Paragraph ellipsis>{body}</Paragraph>
    </li>
  )
}

export default Comment
