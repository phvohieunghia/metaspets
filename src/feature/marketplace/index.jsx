import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'
import Domdom from 'components/domdom'
import Pagination from 'components/pagination'
import Icons from 'assets/icons'
// import ItemList from 'assets/data/items.json'

const MarketPlace = () => {
  return (
    <div id="marketplace">
      <Domdom />
      <div className="main">
        <div className="summary">
          <div className="d-flex container justify-content-center">
            <div className="item">
              <span className="img">
                <img src={require('assets/img/item.png')} />
              </span>
              <span className="infor">
                <h4>Last price</h4>
                <span className="greenColor">384</span>
              </span>
            </div>
            <div className="item">
              <span className="img">
                <img src={require('assets/img/item.png')} />
              </span>
              <span className="infor">
                <h4>Total volume</h4>
                <span className="yellowColor">161284</span>
              </span>
            </div>
            <div className="item">
              <span className="img">
                <img src={require('assets/img/item.png')} />
              </span>
              <span className="infor">
                <h4>MSP price</h4>
                <span className="yellowColor">
                  0.18 <span>BUSD</span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="tab">
          <a className="item">Egg Basbet</a>
          <a className="item">Item</a>
        </div>
        <div className="filter">
          <label>Filter</label>
          <div className="select">
            <Icons.AngleDown height={'10'} />
            <select>
              <option value="lowest">Lowest Price</option>
              <option value="highest">Highest Price</option>
            </select>
          </div>
          <div className="input">
            <input type="text" placeholder="Egg basket ID" />
            <img src={require('assets/img/search.png')} alt="error png" />
          </div>
        </div>
        <div className="list-item">
          <div className="container">{renderItemList()}</div>
        </div>
      </div>
      <Pagination />
    </div>
  )
}
function renderItemList() {
  const items = []
  for (var i = 0; i < 4; i++) {
    const itemRow = []
    for (var j = 0; j < 6; j++) {
      itemRow.push(<Item id={i * 6 + j} />)
    }
    items.push(<div className="row">{itemRow}</div>)
  }
  return items
}
const Item = ({ id }) => {
  return (
    <div className="item col-6 col-sm-2" key={id}>
      <Link className="wrapper" to={'/marketplace/' + id}>
        <div className="title">
          <img src={require('assets/img/title.png')} alt="error png" />
          <span>ID: 3165</span>
        </div>
        <div className="img">
          <img src={require('assets/img/item.png')} alt="error png" />
        </div>
        <div className="price">
          <span className="img">
            <img src={require('assets/img/coin.png')} alt="error png" />
          </span>
          <span className="coins">
            <h4 className="cCoin">380MSP</h4>
            <span className="convertCoin">~ 89.70 BUSD</span>
          </span>
        </div>
      </Link>
    </div>
  )
}

export default MarketPlace
