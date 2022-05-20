import React from "react";
import { Link } from "react-router-dom";
import "../css/DetailProperty.css";

const DetailPropety = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <img
                src="https://www.thegrovefrisco.com/media/9640402/new-build-homes-the-grove-frisco-tx.jpg?format=jpeg"
                className="img-fluid"
                alt="..."
              />
              <div className="row mb-2">
                <div className="col-md-6">
                  <img
                    src="https://renaissance-homes.com/sites/default/files/styles/manual_crop__1500x750_/public/RH-3509Lanewood-1098_.jpg?itok=IuDXIZe-"
                    className="img-fluid-pic"
                    alt="..."
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src="https://littlelioness.net/wp-content/uploads/2021/08/Homes-Layout.jpg"
                    className="img-fluid-pic"
                    alt="..."
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <img
                    src="https://www.thegrovefrisco.com/media/9640402/new-build-homes-the-grove-frisco-tx.jpg?format=jpeg"
                    className="img-fluid-pic"
                    alt="..."
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src="https://media.bizj.us/view/img/11074094/ashland-model-elevation-d-fireplace-front-view*1200xx5229-2941-0-273.jpg"
                    className="img-fluid-pic"
                    alt="..."
                  />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <img
                    src="https://renaissance-homes.com/sites/default/files/styles/manual_crop__1500x750_/public/RH-3509Lanewood-1098_.jpg?itok=IuDXIZe-"
                    className="img-fluid-pic"
                    alt="..."
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src="https://littlelioness.net/wp-content/uploads/2021/08/Homes-Layout.jpg"
                    className="img-fluid-pic"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="col-md-5 ">
              <div className="row">
                <div className="col-md-12">
                  <h3 className="propertyheading1">
                    432 Park Ave Unit 80, New York, NY
                  </h3>
                </div>
                
                <div className="col-md-4 col-sm-4">
                  <p>
                    <i className="fas fa-bed show-icon"></i> 10 Beds
                  </p>
                </div>
                <div className="col-md-4 col-sm-4">
                  <p>
                   <i className="fas fa-bath show-icon"></i> 3 Baths
                  </p>
                </div>
                <div className="col-md-4 col-sm-4">
                  <p>
                    <i className="fas fa-ruler-combined show-icon"></i> 12,000 ft
                  </p>
                </div>
           
                <div className="row amount mx-0 mt-2">
                  <div className="col-lg-6 col-md-8 ">
                    <b className="bolt">₿ 8800.99</b>
                    <span className="min-amt"> $ 1,288,299</span>
                  </div>
                  <div className="col-md-2 col-lg-3">
                    <p>
                      <i className="fas fa-heart"></i> Save
                    </p>
                  </div>
                  <div className="col-md-2 col-lg-3">
                    <p>
                      <i className="fas fa-share-nodes"></i> Share
                    </p>
                  </div>
                </div>

                <div className="col-lg-12">Bitcoin Needed</div>
                
                <div className="mt-2">
                  <div className="col-md-12">
                    <div className="input-group mb-3">
                      <span className="input-group-text ">
                        ₿ <span className="bit-need"> Bitcoin needed</span>
                      </span>
                      <input
                        type="text"
                        className="form-control mx-0"
                        value={"440.00 BTC"}
                      />
                      <span className="input-group-text">
                        <i className="fa-solid fa-arrows-up-down"></i>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-evenly bg-light">
                  <div className="col-md-5 align-self-center">
                    <i className="fas fa-calendar-days icon-cele"></i><b className="cele-bolt px-3">30 years</b><p className="p-loan">Loan term</p>
                  </div>
                  <div className="col-md-5">
                    <i class="fas fa-rotate-left icon-rotate"></i><b className="ro-price px-2">$466,912</b><p className="ro-text">Monthly payment</p>
                  </div>
                  <div className="col-md-5"><i class="fa-solid fa-credit-card icon-card"></i> <b className="card-percentage px-2">0.00%</b><p className="d-pay">Down payment</p></div>
                  <div className="col-md-5"><i class="fas fa-tag icon-tag"></i><b className="dis-per px-2">5%</b><p className="cls-txt">Closing cost</p></div>
                </div>
                <div className="row my-4">
                <div className="col-lg-6 col-md-12 mb-2">
                  <button type="button" className="btn btn-outline-secondary btn-compare text-center text-dark">Compare listings<i class="fas fa-arrows-left-right ms-5 btn-arrow"></i></button>
                </div>
                <div className="col-lg-6 col-md-12">
                  <button type="button" className="btn btn-outline-secondary btn-request text-center bg-dark text-white">REQUEST INFO<i class="fas fa-arrow-right btn-arrow ms-5 my-auto"></i></button>
                </div>
                </div>

                  <div className="col-lg-12 col-md-12 mt-2">
                    <div className="accord-text">
                      <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                          <h2 class="accordion-header  border-top" id="Overview">
                            <button class="accordion-button collapsed focus-btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Overview
                            </button>
                          </h2>
                          <div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="Overview" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Cursus sit gravida ipsum neque urna. Condimentum purus leo, etiam mauris viverra tristique elit faucibus. Etiam tincidunt praesent ante viverra. Lectus lorem pellentesque sit diam nunc nunc egestas nulla malesuada. Congue ultrices cursus at molestie pharetra. Eget nisl, nulla eu, facilisis volutpat non vulputate gravida sollicitudin. Ornare tortor quis tempus vestibulum, molestie. Orci, egestas gravida posuere in cursus tincidunt mattis tellus. Iaculis volutpat eu pulvinar <b>read more </b></div>
                          </div>
                        </div>

                        <div class="accordion-item">
                          <h2 class="accordion-header" id="Location">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Location
                            </button>
                          </h2>
                          <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="Location"    data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                          </div>
                        </div>

                        <div class="accordion-item">
                          <h2 class="accordion-header" id="Tour-open-house">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Tour and open house
                            </button>
                          </h2>
                          <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="Tour-open-house"    data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                          </div>
                        </div>

                        <div class="accordion-item">
                          <h2 class="accordion-header" id="Property-details">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Property details and specification
                            </button>
                          </h2>
                          <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="Property-details"    data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                          </div>
                        </div>

                        <div class="accordion-item">
                          <h2 class="accordion-header" id="Property-history">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            Property history
                            </button>
                          </h2>
                          <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="Property-history"    data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                          </div>
                        </div>

                        <div class="accordion-item">
                          <h2 class="accordion-header" id="Monthly-payment">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            Monthly payment
                            </button>
                          </h2>
                          <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="Monthly-payment"    data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                          </div>
                        </div>

                        <div class="accordion-item">
                          <h2 class="accordion-header" id="Neighborhood">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                            Neighborhood
                            </button>
                          </h2>
                          <div id="flush-collapseSeven" class="accordion-collapse collapse" aria-labelledby="Neighborhood"    data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                          </div>
                        </div>

                        <div class="accordion-item">
                          <h2 class="accordion-header border-bottom" id="Schools">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                            Schools
                            </button>
                          </h2>
                          <div id="flush-collapseEight" class="accordion-collapse collapse" aria-labelledby="Schools"    data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12">
              <h4>Similar property in the area</h4>
            </div>
          </div>

          <div className="row mt-3">
            <div className="card-modify">
              <div class="card" >
                <img src="https://mediavault.point2.com/p2h/listing/695a/5497/cd24/a62bb9c74940e9610045/wm_large.jpg" className="img-fluid card-img-1" alt="home-image" />
                <div className="pt-3">
                  <h4 className="px-2">₿ 8800.99</h4>
                  <p className="card-text-light">432 Park Ave Unit 80, New York</p>
                </div>
              <div class="card-footer p-0 m-0">
                <ul class=" mb-0 row text-unstyle">
                  <li class="col-lg-6 d-inline "><i className="fas fa-bed "></i> 10 Beds</li>
                  <li class="col-lg-6 d-inline"><i className="fas fa-bath "></i> 3 Baths</li>
                </ul>
                </div>
              </div>
            </div>
            <div className="card-modify">
              <div class="card" >
                <img src="https://www.briarchapelnc.com/media/9649342/burlington-b-web.png?width=900&mode=min&quality=80&format=jpeg" className="img-fluid card-img-1" alt="home-image" />
                <div className="pt-3">
                  <h4 className="px-2">₿ 8800.99</h4>
                  <p className="card-text-light">432 Park Ave Unit 80, New York</p>
                </div>
              <div class="card-footer p-0 m-0">
                <ul class=" mb-0 row text-unstyle">
                  <li class="col-lg-6 d-inline "><i className="fas fa-bed "></i> 10 Beds</li>
                  <li class="col-lg-6 d-inline"><i className="fas fa-bath "></i> 3 Baths</li>
                </ul>
                </div>
              </div>
            </div>
            <div className="card-modify">
              <div class="card" >
                <img src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/05c67de1-f8e0-4c81-a4a0-556653cebb18-new-lead-big-homes-for-sale-small-prices-new-hampton-ny.jpg" className="img-fluid card-img-1" alt="home-image" />
                <div className="pt-3">
                  <h4 className="px-2">₿ 8800.99</h4>
                  <p className="card-text-light">432 Park Ave Unit 80, New York</p>
                </div>
              <div class="card-footer p-0 m-0">
                <ul class=" mb-0 row text-unstyle">
                  <li class="col-lg-6 d-inline "><i className="fas fa-bed "></i> 10 Beds</li>
                  <li class="col-lg-6 d-inline"><i className="fas fa-bath "></i> 3 Baths</li>
                </ul>
                </div>
              </div>
            </div>
            <div className="card-modify">
              <div class="card" >
                <img src="https://renaissance-homes.com/sites/default/files/styles/manual_crop__1500x750_/public/RH-3509Lanewood-1098_.jpg?itok=IuDXIZe-" className="img-fluid card-img-1" alt="home-image" />
                <div className="pt-3">
                  <h4 className="px-2">₿ 8800.99</h4>
                  <p className="card-text-light">432 Park Ave Unit 80, New York</p>
                </div>
              <div class="card-footer p-0 m-0">
                <ul class=" mb-0 row text-unstyle">
                  <li class="col-lg-6 d-inline "><i className="fas fa-bed "></i> 10 Beds</li>
                  <li class="col-lg-6 d-inline"><i className="fas fa-bath "></i> 3 Baths</li>
                </ul>
                </div>
              </div>
            </div>
            <div className="card-modify">
              <div class="card" >
                <img src="https://www.thegrovefrisco.com/media/9640402/new-build-homes-the-grove-frisco-tx.jpg?format=jpeg" className="img-fluid card-img-1" alt="home-image" />
                <div className="pt-3">
                  <h4 className="px-2">₿ 8800.99</h4>
                  <p className="card-text-light">432 Park Ave Unit 80, New York</p>
                </div>
              <div class="card-footer p-0 m-0">
                <ul class=" mb-0 row text-unstyle">
                  <li class="col-lg-6 d-inline "><i className="fas fa-bed "></i> 10 Beds</li>
                  <li class="col-lg-6 d-inline"><i className="fas fa-bath "></i> 3 Baths</li>
                </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-lg-12">
              <h4>Property around BTC 8800</h4>
            </div>
          </div>

          <div className="row mt-3">
            <div className="card-modify">
              <div class="card" >
                <img src="https://mediavault.point2.com/p2h/listing/695a/5497/cd24/a62bb9c74940e9610045/wm_large.jpg" className="img-fluid card-img-1" alt="home-image" />
                <div className="pt-3">
                  <h4 className="px-2">₿ 8800.99</h4>
                  <p className="card-text-light">432 Park Ave Unit 80, New York</p>
                </div>
              <div class="card-footer p-0 m-0">
                <ul class=" mb-0 row text-unstyle">
                  <li class="col-lg-6 d-inline "><i className="fas fa-bed "></i> 10 Beds</li>
                  <li class="col-lg-6 d-inline"><i className="fas fa-bath "></i> 3 Baths</li>
                </ul>
                </div>
              </div>
            </div>
            <div className="card-modify">
              <div class="card" >
                <img src="https://www.briarchapelnc.com/media/9649342/burlington-b-web.png?width=900&mode=min&quality=80&format=jpeg" className="img-fluid card-img-1" alt="home-image" />
                <div className="pt-3">
                  <h4 className="px-2">₿ 8800.99</h4>
                  <p className="card-text-light">432 Park Ave Unit 80, New York</p>
                </div>
              <div class="card-footer p-0 m-0">
                <ul class=" mb-0 row text-unstyle">
                  <li class="col-lg-6 d-inline "><i className="fas fa-bed "></i> 10 Beds</li>
                  <li class="col-lg-6 d-inline"><i className="fas fa-bath "></i> 3 Baths</li>
                </ul>
                </div>
              </div>
            </div>
            <div className="card-modify">
              <div class="card" >
                <img src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/05c67de1-f8e0-4c81-a4a0-556653cebb18-new-lead-big-homes-for-sale-small-prices-new-hampton-ny.jpg" className="img-fluid card-img-1" alt="home-image" />
                <div className="pt-3">
                  <h4 className="px-2">₿ 8800.99</h4>
                  <p className="card-text-light">432 Park Ave Unit 80, New York</p>
                </div>
              <div class="card-footer p-0 m-0">
                <ul class=" mb-0 row text-unstyle">
                  <li class="col-lg-6 d-inline "><i className="fas fa-bed "></i> 10 Beds</li>
                  <li class="col-lg-6 d-inline"><i className="fas fa-bath "></i> 3 Baths</li>
                </ul>
                </div>
              </div>
            </div>
            <div className="card-modify">
              <div class="card" >
                <img src="https://renaissance-homes.com/sites/default/files/styles/manual_crop__1500x750_/public/RH-3509Lanewood-1098_.jpg?itok=IuDXIZe-" className="img-fluid card-img-1" alt="home-image" />
                <div className="pt-3">
                  <h4 className="px-2">₿ 8800.99</h4>
                  <p className="card-text-light">432 Park Ave Unit 80, New York</p>
                </div>
              <div class="card-footer p-0 m-0">
                <ul class=" mb-0 row text-unstyle">
                  <li class="col-lg-6 d-inline "><i className="fas fa-bed "></i> 10 Beds</li>
                  <li class="col-lg-6 d-inline"><i className="fas fa-bath "></i> 3 Baths</li>
                </ul>
                </div>
              </div>
            </div>
            <div className="card-modify">
              <div class="card" >
                <img src="https://www.thegrovefrisco.com/media/9640402/new-build-homes-the-grove-frisco-tx.jpg?format=jpeg" className="img-fluid card-img-1" alt="home-image" />
                <div className="pt-3">
                  <h4 className="px-2">₿ 8800.99</h4>
                  <p className="card-text-light">432 Park Ave Unit 80, New York</p>
                </div>
                <div class="card-footer p-0 m-0">
                  <ul class=" mb-0 row text-unstyle">
                    <li class="col-lg-6 d-inline "><i className="fas fa-bed "></i> 10 Beds</li>
                    <li class="col-lg-6 d-inline"><i className="fas fa-bath "></i> 3 Baths</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-secondary text-white  ">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 my-5 mb-0 ">
                <h1 className="w-50 fot-head ">Looking to sell property for Bitcoin?</h1>
              </div>
              <div className="row">
                <div className="col-lg-8 col-md-8 m">
                 <p className="my-5 w-50 fot-pera">Volutpat fermentum dolor viverra sagittis pulvinar diam.</p>
                </div>
                <div className="col-lg-4 col-md-4 text-center">
                  <button className="fot-btn my-4" >Get a free offer</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPropety;
