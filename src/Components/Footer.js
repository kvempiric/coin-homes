import React from 'react'
import '../css/Footer.css'
import FooterLogo from '../Assets/Images/white.svg'
import GooglePlay from '../Assets/Images/google_play.svg'
import AppStore from '../Assets/Images/apple_store.svg'
import EqualHousing from '../Assets/Images/equal-housing.svg'
function Footer() {
    return (
        <div>
            <div className="containrer-fluid margin_t_100 ">
                <div className="container my-5">
                    <a href='#' className='footer_img'>
                        <img src={FooterLogo} alt="" width="200px"/>
                    </a>
                    <div className="row mt-5">
                        <div className="col-lg-4 col-md-4">
                            
                            <p className="footer_Big_text ">Live anywhere.™</p>
                            <p className="footer_text">
                                Coin Homes is the first platform in North America that empowers you with inspiration, tools, and knowledge to purchase real estate with Bitcoin. Coin Homes serves the full lifecycle of buying, financing, and selling real estate with Bitcoin.
                            </p>
                            <div className='mt-5'>
                                <a href="" style={{marginRight: '10px'}}>
                                    <img src={GooglePlay} alt=""  className='img-fluid1 googlePlay_image'/>
                                </a>
                                <a href="">
                                    <img src={AppStore} alt="" className='img-fluid1 '/>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 offset-2 main_div_of_about">
                            <p className='footer_Big_text'>About</p>

                            <ul className="nav flex-column footer_links">
                                <li className="nav-item footer_nav_item">
                                    <a className="nav-link footer_link" href="#">Services</a>
                                </li>
                                <li className="nav-item footer_nav_item">
                                    <a className="nav-link footer_link" href="#">Careers</a>
                                </li>
                                <li className="nav-item footer_nav_item">
                                    <a className="nav-link footer_link" href="#">Partnership</a>
                                </li>
                                <li className="nav-item footer_nav_item">
                                    <a className="nav-link footer_link" href="#">Referral program</a>
                                </li>
                                <li className="nav-item footer_nav_item">
                                    <a className="nav-link footer_link" href="#">Realtor</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-3">
                            <p className="footer_Big_text">Follow us</p>
                            <div className="">
                                <p className="footer_text mb-0">@coinhomes on</p>
                                <p className="footer_text">all available social media</p>

                                <ul className="nav justify-content footer_social_links">
                                    <li className="nav-item social_link_item">
                                        <a className="nav-link social_link" href="#"><i className="fa-brands fa-twitter"></i></a>
                                    </li>
                                    <li className="nav-item social_link_item">
                                        <a className="nav-link social_link" href="#"><i className="fa-brands fa-instagram"></i></a>
                                    </li>
                                    <li className="nav-item social_link_item">
                                        <a className="nav-link social_link" href="#"><i className="fa-brands fa-tiktok"></i></a>
                                    </li>
                                    <li className="nav-item social_link_item">
                                        <a className="nav-link social_link" href="#"><i className="fa-brands fa-reddit-alien"></i></a>
                                    </li>
                                    <li className="nav-item social_link_item">
                                        <a className="nav-link social_link" href="#"><i className="fa-brands fa-discord"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container margin_t_100 mb-5">
                    <div className="row align-items-center">
                        <div className="col-5 mt-3">
                            <p className='footer_text'>Copyright © 2022 Coin Homes Inc. All rights reserved.</p>
                        </div>
                        <div className="col-2 text-end">
                            <a className="footer_bottom_link" href="#">Terms of Use</a>
                        </div>
                        <div className="col-2 text-end">
                            <a className="footer_bottom_link" href="#">Privacy Policy</a>
                        </div>
                        <div className="col-2 text-end">
                            <a className="footer_bottom_link" href="#">Bitcoin Whitepaper</a>
                        </div>
                        <div className="col-1 text-end">
                            <img src={EqualHousing} alt="" width='60px'/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
