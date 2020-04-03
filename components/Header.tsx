import React from 'react'
import { Typography } from 'antd'
import Navigation from './Navigation'
import styled from 'styled-components'

const { Title } = Typography

const Header = () => {
  return (
    <PageHeader>
      <CenteredTitle level={1}>Simple test blog site</CenteredTitle>
      <Navigation />
    </PageHeader>
  )
}

const CenteredTitle = styled(Title)`
  text-align: center;
`

const PageHeader = styled.header`
  padding-top: 20px;
`

export default Header
