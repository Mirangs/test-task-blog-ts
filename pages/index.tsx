import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Posts, PostType } from '../types/post'
import { Spin, Empty } from 'antd'

import PostsList from '../components/PostsList'
import Layout from '../components/Layout'

const Home: React.FC = () => {
  const [posts, setPosts] = useState<Posts>([])
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await axios.get('https://simple-blog-api.crew.red/posts')

        const filteredPosts = posts.data.filter(
          (post: PostType) => post.title && post.body
        )
        setPosts(filteredPosts)
      } catch (err) {
        setError(err)
      }
    }

    fetchPosts()
  }, [])

  return (
    <Layout>
      {Array.length !== 0 && !error ? (
        <PostsList posts={posts} />
      ) : error ? (
        <Empty />
      ) : (
        <Spin />
      )}
    </Layout>
  )
}

export default Home
