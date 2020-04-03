import React, { useState } from 'react'
import axios from 'axios'
import { Form, Input, Button, message } from 'antd'
import styled from 'styled-components'
import Router from 'next/router'

interface NewPostValues {
  post: {
    title: string,
    body: string,
  };
}

const NewPost = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const onFinish = () => {
    form.validateFields().then(({ post: { title, body } }) => {
      setLoading(true)
      axios
        .post('https://simple-blog-api.crew.red/posts', { title, body })
        .then(() => {
          message.info('Post was successfully created!')
          Router.push('/')
        })
        .catch(() => {
          message.error('Something went wrong, please try again')
        })
        .finally(() => {
          setLoading(false)
        })
    })
  }

  return (
    <NewPostForm form={form} name="new-post" onFinish={onFinish}>
      <Form.Item
        name={['post', 'title']}
        label="Post Title"
        rules={[
          {
            required: true,
            message: 'Post title is required!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={['post', 'body']}
        label="Post Body"
        rules={[
          {
            required: true,
            message: 'Post body is required!',
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item>
        <AddPostButton type="primary" htmlType="submit" loading={loading}>
          Create new post
        </AddPostButton>
      </Form.Item>
    </NewPostForm>
  )
}

const NewPostForm = styled(Form)`
  max-width: 500px;
  margin: 0 auto;
  margin-top: 10vh;
`

const AddPostButton = styled(Button)`
  width: 100%;
`

export default NewPost
