import React from 'react'
import axios from 'axios'
import { GetServerSideProps, NextPage } from 'next'
import dynamic from 'next/dynamic'

import Layout from '../../components/Layout'
import { LargePostType } from '../../types/post'

export interface PostPageProps {
  post: LargePostType;
}

const LargePost = dynamic(() => import('../../components/LargePost'), {
  loading: () => <p>...</p>,
})

const PostPage: NextPage<PostPageProps> = ({ post }) => (
  <Layout>
    <LargePost post={post} />
  </Layout>
)

export const getServerSideProps: GetServerSideProps = async ({
  query: { id },
}) => {
  const { data: post } = await axios(
    `https://simple-blog-api.crew.red/posts/${id}?_embed=comments`
  )

  return { props: { post } }
}

export default PostPage
