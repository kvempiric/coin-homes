import React from 'react'
import "../css/BitcoinWhitePaper.css"
import whitepaperimg from "../Assets/Images/whitepaper.svg";

const BitcoinWhitePaper = () => {
  return (
    <div>
        <div className="container-fluid mainbitcoinwhitepaper">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p className='bitcoinWhitePaperLightTxt'>Bitcoin Whitepaper</p>

                        <h1 className='bitcoinWhitePaperHeading'>At Coin Homes we believe that Bitcoin should be the default world currency.</h1>

                        <p className='bitcoinwhitepaperupperpera mt-5'>Money is a tool unique to humans. It coordinates human activities and allows for voluntary cooperation between people on a scale so grand as to dwarf anything that we could accomplish without it.</p>

                        <p className='bitcoinwhitepaperupperpera'>Given access to it, humans will use sound money to create a civilization in which an overwhelming majority of them can apply their talents and time to obtain their essential needs and other values that will delight and inspire them. As they develop and their inspiration drives them towards greater accomplishments, money allows civilization to adapt by re-coordinating human action.</p>

                        <p className='bitcoinwhitepaperupperpera'>Unfortunately, some centralized organizations tamper with money and its magnificent coordination process. Central banks monopolize and control money itself so that its benefits are distorted, destroyed, or even reversed. Our money has been under their control since 1971, with startling consequences.</p>
                    </div>
                    <div className='row bitcoinwhitepapersecondrow'>
                        <div className='col-md-6 pe-5'>
                            <p className='bitcoinwhitepaperitalicpera'>“The root problem with conventional currency is all the trust that’s required to make it work. The central bank must be trusted not to debase the currency, but the history of fiat 	currencies is full of breaches of that trust”</p>
                            <p className='bitcoinWhitePaperAutherName'>- Satoshi Nakamoto</p>
                        </div>
                        <div className='col-md-6 ps-5'>
                            <p className='bitcoinwhitepaperlighttextpera mb-4'>They use their control over money to drive unnecessary, unwanted consumption in the short term by destroying people’s ability to save for the long term. They claim that money should lose its purchasing power over time.
                            </p>

                            <p className='bitcoinwhitepaperlighttextpera mb-4'>We each live longer, healthier, and happier lives when we focus on the long term and are permitted to plan for it. Bitcoin allows humanity to coordinate its activities peacefully for the long term.</p>

                            <p className='bitcoinwhitepaperlighttextpera mb-4'>Bitcoin is open-source, accessible, and controlled by no one. Everyone should have the same opportunity to benefit from this technological evolution. That is why we are proud to do our small part and show solidarity with the community by hosting the Bitcoin Whitepaper on our website.</p>
                        </div>

                    </div>
                    <div className="col-lg-12 bitcoinWhitePaperbelowDivImage">
                        <img src={whitepaperimg} alt="" className='bitcoinWhitePaperbelowImage'/>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default BitcoinWhitePaper
