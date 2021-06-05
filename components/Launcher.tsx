import React from 'react'
import styled from 'styled-components'
import { GoChevronDown } from 'react-icons/go'

const Styles = styled.div`
  position: absolute;
  left: 30px;
  top: 30px;
  .icon {
    width: 34px;
    height: 16px;
  }
  .down {
    color: #fff;
  }
  @media (max-width: 500px) {
    display: none;
  }
`

export default function Launcher() {
  return (
    <Styles>
      <img src="/logo.png" alt="launcher" className="icon" /> <GoChevronDown className="down" />
    </Styles>
  )
}
