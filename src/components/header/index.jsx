import React from 'react'

import './style.scss'
import Popup from 'components/popup/comingsoon'

const Header = () => {
  return (
    <header>
      <div className="hd-items">
        <div className="item">
          <img src={require('assets/img/coin.png')} alt="error png" />
          <span>0</span>
        </div>
        <div className="item">
          <img src={require('assets/img/coin2.png')} alt="error png" />
          <span>0</span>
        </div>
      </div>
      <div className="button">
        <Popup />
      </div>
    </header>
  )
}

export default Header
