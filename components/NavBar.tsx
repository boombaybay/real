import React from 'react'
import styled from 'styled-components'

const Styles = styled.div`
  background: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(23, 24, 26, 0.11);
  border-radius: 5px;
  overflow: hidden;
  position: absolute;
  right: 10px;
  top: 10px;

  transition: border-color 0.5s ease, opacity 0.4s ease;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: centent;

  .label {
    display: flex;
    color: #17181a;
    font-weight: 500;
    font-size: 0.875em;
    padding: 0 12px;
    text-decoration: none;
    border-right: 1px solid rgba(23, 24, 26, 0.11);
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: centent;
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: centent;
  }
  @media (max-width: 500px) {
    display: none;
  }
`

export default function NavBar() {
  return (
    <Styles>
      <div className="container">
        <div className="label">Help</div>
        <div className="label">Products</div>
        <div className="label">Company</div>
        <div className="label">Sign up</div>
        <div className="label">Log in</div>
      </div>
    </Styles>
  )
}
