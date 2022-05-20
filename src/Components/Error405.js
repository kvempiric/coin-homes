import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Error404.css';
import error405 from '../Assets/Images/405_image.png'

function Error404() {
  return (
    <div>
        <div className="container-fluid">
            <div className="container text-center">
                <div className="row">
                    <div className='col-md-12 mt-4 mb-5'>
                        <p className='oops_no_one_is_home_text '>Oops. No one is home</p>
                    </div>
                    <div className='col-md-12'>
                        <img src={error405} alt="" className='four_zero_four_error_image' height='auto' />
                    </div>
                    <div className='col-12 mt-5'>
                        <p className='below_404_text'>Please make sure you have the right link. Go to <Link to='/' className='home_page_link_in_error_page'>home page</Link> or <Link to='/contactus' className='home_page_link_in_error_page' >contact us</Link> if you need more information</p>
                    </div>
                    <div className='col-12 mt-5'>
                        <p className='copyright_2022_text mt-5' style={{color:'#9E9E9E'}}>Copyright © 2022 Coin Homes Inc. All rights reserved.</p>
                    </div>
                    <div className='mt-4'>
                        <ul className="nav justify-content-center footer_social_links">
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
    </div>
  )
}

export default Error404