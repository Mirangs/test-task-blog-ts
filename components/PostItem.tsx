import React from 'react'
import Link from 'next/link'
import { PostType } from '../types/post'
import { Card } from 'antd'
import styled from 'styled-components'
import { Typography } from 'antd'

const { Paragraph } = Typography

export interface MoreLinkProps {
  id: number;
}

const MoreLink: React.FC<MoreLinkProps> = ({ id }) => (
  <Link href="/posts/[id]" as={`/posts/${id}`}>
    <a>More</a>
  </Link>
)

const Post: React.FC<PostType> = ({ title, body, id }) => {
  return (
    <article>
      <PostCard title={title} extra={<MoreLink id={id} />}>
        <Paragraph ellipsis>{body}</Paragraph>
      </PostCard>
    </article>
  )
}

const PostCard = styled(Card)`
  width: 300px;
`

export default Post
