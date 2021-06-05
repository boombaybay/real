import { useRouter } from 'next/dist/client/router'
import React from 'react'
import styled from 'styled-components'
import { FiCheck } from 'react-icons/fi'
import { VscDebugStackframeDot } from 'react-icons/vsc'

const Styles = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #409fff;
    border: 1px solid #409fff;
    border-radius: 1.25em;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-size: 1em;
    height: 2.5em;
    outline: 0;
    font-weight: 500;
    margin-top: 10px;
    min-width: 9.75em;
  }
  .circle {
    width: 25px;
    height: 25px;
    border-radius: 20px;
    background: #00ce1a;
    color: #fff;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
  }
  .credentials {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tagline-point {
    color: red;
    font-size: 14px;
  }
`
export default function StepFour() {
  const router = useRouter()
  return (
    <Styles>
      <div className="credentials">
        <div className="circle">
          <FiCheck />
        </div>
        Success
      </div>
      <p className="tagline-point">
        3 files, 145 MB <VscDebugStackframeDot /> Has expired - contact sender
      </p>
      <div
        className="button"
        tabIndex={0}
        role="button"
        onKeyPress={() => router.push('https://dropbox.com/')}
        onClick={() => router.push('https://dropbox.com/')}
      >
        Return Home
      </div>
    </Styles>
  )
}
