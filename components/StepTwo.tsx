import React, { useEffect, useState } from 'react'
import { HiOutlineDownload } from 'react-icons/hi'
import styled from 'styled-components'

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100%;
  .wepro {
    width: 150px;
    height: 90px;
  }
  .download {
    color: #409fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    margin-top: 10px;
  }
  .error {
    color: red;
    width: 70%;
  }
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
    background: #409fff;
    color: #fff;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
  }
`
export default function StepTwo({ setShow }) {
  const [error, setError] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setError(true)
    }, 3000)
  })
  const handleTryAgain = () => {
    setShow({
      stepOne: false,
      stepTwo: false,
      stepThree: true,
      stepFour: false,
    })
  }
  return (
    <Styles>
      {!error && <img className="wepro" src="/pro.gif" alt="pro" />}
      {!error && (
        <div className="download">
          <div className="circle">
            <HiOutlineDownload />
          </div>
          Downloading Files ...
        </div>
      )}
      {error && (
        <>
          <p className="error">Technical error encountered please confirm email and password</p>
          <div
            className="button"
            tabIndex={0}
            role="button"
            onKeyPress={handleTryAgain}
            onClick={handleTryAgain}
          >
            Try Again
          </div>
        </>
      )}
    </Styles>
  )
}
