import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Card, message, Typography, Empty, Spin } from 'antd'
import { LargePostType } from '../types/post'
import axios from 'axios'
import styled from 'styled-components'
import CommentsList from './CommentsList'

const { Paragraph } = Typography

const LargePost = () => {
  const {
    query: { id },
  } = useRouter()

  const [post, setPost] = useState<Partial<LargePostType>>()
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axios(
          `https://simple-blog-api.crew.red/posts/${id}?_embed=comments`
        )
        setPost(data)
      } catch (err) {
        message.error('Failed fetching')
        setError(err)
      }
    }

    fetchPost()
  }, [])

  return post && !error ? (
    <LargePostWrapper>
      <LargePostCard title={post.title}>
        <Paragraph>{post.body}</Paragraph>
      </LargePostCard>
      <CommentsList comments={post.comments} />
    </LargePostWrapper>
  ) : error ? (
    <Empty />
  ) : (
    <Spin />
  )
}

const LargePostCard = styled(Card)`
  max-width: 500px;
`

const LargePostWrapper = styled.article`
  display: flex;
  flex-direction: column;
`

export default LargePost
