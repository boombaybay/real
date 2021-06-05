/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from 'react-query'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { useRouter } from 'next/dist/client/router'
import NavBar from '../components/NavBar'
import Launcher from '../components/Launcher'
import Transfer from '../components/Transfer'
import Overlay from '../components/Overlay'
import getUserLocation from '../actions/get-user-location'
import MobileHeader from '../components/MobileHeader'

const Styles = styled.div`
  // overflow: hidden;
  // h1 {
  //   color: red;
  // }
  // img {
  //   width: 100vw;
  //   height: 100vh;
  //   max-height: 824px;
  //   object-fit: contain;
  // }
  // .nav {
  //   position: absolute;
  //   top: 0;
  // }
  // .overlay {
  //   position: fixed;
  //   top: 0;
  //   width: 100%;
  //   height: 100%;
  //   background: rgba(0, 0, 0, 0.4);
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   z-index: 9999;
  //   transition: opacity 0.15s linear;
  // }
  // @media (max-width: 600px) {
  //   .webg {
  //     display: none;
  //   }
  // }
`

const Index = () => {
  const [showOverlay, setShowOverLay] = useState<boolean>(false)
  const [location, setLocation] = useState({})
  const { data } = useQuery('location', getUserLocation, {
    onSuccess: (res) => {
      setLocation(res)
    },
  })

  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = 'hidden'
    }
    document.body.style.overflow = 'unset'
  }, [showOverlay])
  return (
    <Styles>
      <Head>
        <title>WeTransfer</title>
      </Head>
      {/* 
      <div className="container">
        <img src="/bg.png" alt="bg" className="webg" />
        <MobileHeader />
        <div>
          <NavBar />
        </div>
        <div>
          <Launcher />
        </div>
        <div>
          <Transfer setShowOverLay={setShowOverLay} />
        </div>
        {showOverlay && (
          <>
            <div className="overlay">
              <Overlay location={location} />
            </div>
          </>
        )}
      </div> */}
    </Styles>
  )
}

export default Index
