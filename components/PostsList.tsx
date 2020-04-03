import React from 'react'
import { Posts } from '../types/post'
import PostItem from './PostItem'
import { Row, Col } from 'antd'

export interface PostsListProps {
  posts: Posts;
}

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
  return (
    <Row gutter={[16, 16]} justify="center">
      {posts.map(({ title, body, id }) => (
        <Col key={id} xl={6} lg={12} md={18} sm={20} xs={24}>
          <PostItem title={title} body={body} id={id} />
        </Col>
      ))}
    </Row>
  )
}

export default PostsList
