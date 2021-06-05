import React from 'react'
import styled from 'styled-components'
import { AiOutlineMenu } from 'react-icons/ai'

const Styles = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  color: #fff;
  .logo {
    width: 41px;
    height: 21px;
  }
  .icon {
    font-size: 19px;
  }
  @media (max-width: 500px) {
    display: flex;
  }
`

export default function MobileHeader() {
  return (
    <Styles>
      <AiOutlineMenu className="icon" />
      <img src="/logo.png" alt="logo" className="logo" />
      <p>Login</p>
    </Styles>
  )
}
