import React from 'react'
import styled from 'styled-components'
import { HiOutlineArrowCircleDown } from 'react-icons/hi'
import { CgArrowDownO } from 'react-icons/cg'
import { VscDebugStackframeDot } from 'react-icons/vsc'

const Styles = styled.div`
  margin: 10px;

  .trans {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 0 12px 0 rgb(0 0 0 / 10%), 0 10px 30px 0 rgb(0 0 0 / 20%);
    transition: transform 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    z-index: 30;
    display: flex;
    flex-direction: column;
    align-items: Center;
    padding-bottom: 15px;
    width: 19.5em;

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
      min-width: 9.75em;
    }

    .item-wrapper {
      display: flex;
      width: 90%;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e7e7e7;
      padding-bottom: 5px;
      margin-bottom: 15px;

      p {
        padding: 0;
        margin: 0;
        font-size: 14px;
        font-size: 14px;
        line-height: 10px;
      }
    }

    .icon {
      width: 25px;
      height: 25px;
      color: #409fff;
    }

    .big-icon {
      width: 100px;
      height: 100px;
      color: #e7e7e7;
      margin-top: 10px;
    }

    .tagline {
      font-weight: 400;
      font-size: 22px;
      color: #17181a;
      margin: 0;
      margin-top: 10px;
    }

    .tagline-point {
      font-size: 12px;
      color: #babcbf;
      margin: 0;
      margin-bottom: 15px;
      border-bottom: 1px solid #d5d5d5;
      width: 100%;
      text-align: center;
      padding-bottom: 10px;
    }

    .item-info {
      font-size: 12px;
      color: #babcbf;
    }

    .item {
      font-size: 15px;
    }
  }

  .extras {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;

    .wetransfer-pro {
      width: 150px;
      height: 40px;
    }

    .products {
      width: 100px;
      height: 40px;
    }
  }
`
export default function Transfer({ setShowOverLay }) {
  return (
    <Styles>
      <div className="trans">
        <CgArrowDownO className="big-icon" />
        <p className="tagline">Ready when you are</p>
        <p className="tagline-point">
          3 files, 145 MB <VscDebugStackframeDot /> Files deleted in 7 days
        </p>
        <div className="item-wrapper">
          <div className="">
            <p className="item">Product Specification</p>
            <span className="item-info">
              259 KB <VscDebugStackframeDot /> pdf
            </span>
          </div>
          <div>
            <HiOutlineArrowCircleDown className="icon" />
          </div>
        </div>
        <div className="item-wrapper">
          <div className="">
            <p className="item">Purchase Order #61521053</p>
            <span className="item-info">
              15 MB <VscDebugStackframeDot /> zip
            </span>
          </div>
          <div>
            <HiOutlineArrowCircleDown className="icon" />
          </div>
        </div>
        <div
          className="item-wrapper"
          style={{ width: '100%', padding: '0 5%', paddingBottom: '10px' }}
        >
          <div className="">
            <p className="item">Company Profiles</p>
            <span className="item-info">
              130 MB <VscDebugStackframeDot /> m4v
            </span>
          </div>
          <div>
            <HiOutlineArrowCircleDown className="icon" />
          </div>
        </div>

        <div
          className="button"
          onKeyPress={() => setShowOverLay(true)}
          onClick={() => setShowOverLay(true)}
          tabIndex={0}
          role="button"
        >
          Download all
        </div>
      </div>
      {/* <div className="extras">
        <img className="wetransfer-pro" src="/wetransfer-pro.svg" alt="weTransfer-pro" />
        <img className="products" src="/products.svg" alt="products" />
      </div> */}
    </Styles>
  )
}
