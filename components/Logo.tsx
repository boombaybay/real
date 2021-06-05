import React from 'react'
import styled from 'styled-components'
const Styles = styled.div`
  img {
    width: 244px;
    height: 40px;
    object-fit: contain;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`
export default function Logo() {
  return (
    <Styles>
      <img src="/dropbox.png" className="logo" />
    </Styles>
  )
}
