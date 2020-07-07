import React from 'react'
import { Card, Typography } from 'antd'
import styled from 'styled-components'

import CommentsList from './CommentsList'
import { LargePostType } from '../types/post'

const { Paragraph } = Typography

export interface LargePostProps {
  post: LargePostType;
}

const LargePost: React.FC<LargePostProps> = ({ post }) => {
  return (
    <LargePostWrapper>
      <LargePostCard title={post.title}>
        <Paragraph>{post.body}</Paragraph>
      </LargePostCard>
      <CommentsList comments={post.comments} />
    </LargePostWrapper>
  )
}

const LargePostCard = styled(Card)`
  max-width: 500px;
  width: 100%;
`

const LargePostWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export default LargePost
