import React,{useEffect,useState} from "react";
import "../css/FeaturedComponent.css";
import { Link } from "react-router-dom";
import data from "../Data.json";
import BTCconvertAPI from './BtcAPI'

function FeaturedComponent() {
  const [btcUsdPrice, setBtcUsdPrice] = useState([])
  
  useEffect(() => {

        BTCconvertAPI.getBTCPrice().then((response) => {
          var btcprc = response.data.bitcoin.usd;
          // console.log(btcprc);
          setBtcUsdPrice(btcprc);
        });
  
  }, [])
  

  return (
    <div>
      <div className="conte1">
        <div className="head1">
          <h1>Featured property</h1>
        </div>
        <div className="row">
          {data.map(post=>{
            // console.log(btcUsdPrice);
            var btcprice = (post.list_price/btcUsdPrice).toFixed(2)
            return (
               <div className="col-lg-4">
                  <div className="card w-auto h-auto my-3 cardMainarea">
                    <img src={post.primary_photo.href} className="card-img-top cardphoto" alt="cardimg1" />
                    <div className="card-body ">
                      <h5 className="card-title fetIcons">
                        <div className="row">
                          <div className="col-lg-4">
                            <i className="fa fa-bed"></i>
                            <span className="fetName">{post.description.beds}</span>
                          </div>
                          <div className="col-4">
                            <i className="fa fa-bath"></i>
                            <span className="fetName">{post.description.baths} </span>
                          </div>
                          <div className="col-4">
                            <i className="fa-solid fa-arrows-up-down-left-right"></i>
                            <span className="fetName">{post.description.sqft}</span>
                          </div>
                        </div>
                      </h5>
                      <h1 className="card-text mainText">
                      {post.location.address.line},{post.location.address.city},{post.location.address.state_code}
                      </h1>
                      <div className="row fetPrice">
                      <span className="D-price col-6">$ {post.list_price}</span> 
                      <span className="B-price col-6 text-end"> ₿ {btcprice} </span>
                      </div>
                    </div>
                  </div>
                </div>
            )
          })}
          
          
        </div>
        <div className="row FeatBtn text-center">
          <Link to="/" className="col-12 my-auto btn feat">
            SEE ALL PROPERTIES
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedComponent;
