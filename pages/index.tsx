import React from 'react'
import axios from 'axios'
import { GetServerSideProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Spin } from 'antd'

import { Posts, PostType } from '../types/post'
const PostsList = dynamic(import('../components/PostsList'), {
  loading: () => <p>...</p>,
})
import Layout from '../components/Layout'

export interface HomeProps {
  posts: Posts;
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <Layout>
      <PostsList posts={posts} />
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await axios.get('https://simple-blog-api.crew.red/posts')

  const filteredPosts: Posts = posts.data.filter(
    (post: PostType) => post.title && post.body
  )

  return {
    props: {
      posts: filteredPosts,
    },
  }
}

export default Home
