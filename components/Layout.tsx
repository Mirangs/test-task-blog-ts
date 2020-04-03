import React from 'react'
import Header from './Header'
import styled from 'styled-components'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`

export default Layout
