import React,{useState,useEffect} from 'react'
import logo from '../Assets/Images/white.svg'
import figure from '../Assets/Images/figure.svg'
import milo from '../Assets/Images/milo.svg'
import '../css/CompareToOthers.css';
import $ from "jquery";
import SubscribeComponent from './SubscribeComponent';
// import Chart from 'react-google-charts';
import {ResponsiveContainer,LineChart, Line,XAxis,YAxis, CartesianGrid} from 'recharts'

function CompareToOthers() {

    const chartdata =[
        {
            Tprice: 0,
            Cprice: 0,
            Lprice:0
        },
        {
            Tprice: 400000,
            Cprice: 552000,
            Lprice:250000
        },
        {
            Tprice: 700000,
            Cprice: 952000,
            Lprice:450000
        },
        {
            Tprice: 1444000,
            Cprice: 1844000,
            Lprice: 844000
        }
        
    ]
    

    const [initialDepoValue, setInitialDepoValue] = useState(1000)
    const [monthlyDepovalue, setMonthlyDepovalue] = useState(1000)

    $(document).ready(function(){
        // initial Deposite progress bar
        var in_value = document.querySelector('input[type="range"]');
        var rangeInitialDeposit_value = function(){
        var newValue_price = in_value.value;
        var target = document.querySelector('#initialValue');
        target.innerHTML = newValue_price;
      }
      in_value.addEventListener("input",rangeInitialDeposit_value);


      // Monthly Deposite progress bar
      var monthly_value = document.querySelector('.monthlyDepositeRangeBar');
      var rangeMonthlyDeposit_value = function(){
      var newMonthlyValue_price = monthly_value.value;
      var monthly_target = document.querySelector('#monthlyvalue');
      monthly_target.innerHTML = newMonthlyValue_price;
    }
    monthly_value.addEventListener("input",rangeMonthlyDeposit_value);

    })

      useEffect(() => {
        setInitialDepoValue();
        setMonthlyDepovalue();
      }, [])
      

  return (
    <div>
        <div className="container mainContainerCompareToOthers">
            <div className="row">
                <p className='lightTxtComareToOthers'>COMAPRE TO OTHERS</p>
                <p className='headingOfCompareToOthers'>Make sure you in the right platform</p>
                <table className="table tableOfCompareToOthers">
                    <thead >
                        <tr>
                            <th className='tableHeadingblank'></th>
                            <th className='tableHeadingCompareToOthers'><img src={logo} alt="" /></th>
                            <th className='tableHeadingCompareToOthers'><img src={figure} alt="" /></th>
                            <th className='tableHeadingCompareToOthersMilo'><img src={milo} alt="" /></th>
                            <th className='tableHeadingTraditionalBanks'>Traditional Banks</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>
                                <p className='percentageOfPerAnnum'>Rates</p>
                            </td>
                            <td>
                                <p className='percentageOfPerAnnum'>2.6% / p.a </p>
                                <p className='discriptionOfPercentage'>Enim in erat sit nibh viverra. Porta congue id molestie.</p>
                            </td>
                            <td>
                                <p className='percentageOfPerAnnum'>2.2% / p.a</p>
                                <p className='discriptionOfPercentage'>Enim in erat sit nibh viverra. Porta congue id molestie.</p>
                            </td>
                            <td>
                                <p className='percentageOfPerAnnum'>2.5% / p.a</p>
                                <p className='discriptionOfPercentage'>Enim in erat sit nibh viverra. Porta congue id molestie.</p>
                            </td>
                            <td>
                                <p className='percentageOfPerAnnum'>2.4% / p.a</p>
                                <p className='discriptionOfPercentage'>Enim in erat sit nibh viverra. Porta congue id molestie.</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Collateral</td>
                            <td>
                                <p className='collateralRowFirstLine'>TBD</p>
                                <p className='collateralRowSecondLine'>Enim in erat sit nibh viverra. Porta congue id molestie.</p>
                            </td>
                            <td>
                                <p className='collateralRowFirstLine'>TBD</p>
                                <p className='collateralRowSecondLine'>Enim in erat sit nibh viverra. Porta congue id molestie.</p>
                            </td>
                            <td>
                                <p className='collateralRowFirstLine'>TBD</p>
                                <p className='collateralRowSecondLine'>Enim in erat sit nibh viverra. Porta congue id molestie.</p>
                            </td>
                            <td>
                                <p className='collateralRowFirstLine'>TBD</p>
                                <p className='collateralRowSecondLine'>Enim in erat sit nibh viverra. Porta congue id molestie.</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Margin calls </td>
                            <td>
                                <p className='margineCallsInPercentage'>25%</p>
                                <p className='margineCallsDiscription'>Enim in erat sit nibh viverra. Porta congue id molestie.</p>
                            </td>
                            <td>
                                <p className='margineCallsInPercentage'>25%</p>
                                <p className='margineCallsDiscription'>Enim in erat sit nibh viverra. Porta congue id molestie.</p>
                            </td>
                            <td>
                                <p className='margineCallsInPercentage'>25%</p>
                                <p className='margineCallsDiscription'>Enim in erat sit nibh viverra. Porta congue id molestie.</p>
                            </td>
                            <td>
                                <p className='margineCallsInPercentage'>25%</p>
                                <p className='margineCallsDiscription'>Enim in erat sit nibh viverra. Porta congue id molestie.</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Liquidation risk</td>
                            <td>
                                <p className='liquidationRiskNumberPera'>$10 Billion</p>
                                <p className='liquidationRiskDiscription'>Enim in erat sit nibh viverra. Porta congue id molestie.</p>
                            </td>
                            <td>
                                <p className='liquidationRiskNumberPera'>$10 Billion</p>
                                <p className='liquidationRiskDiscription'>Enim in erat sit nibh viverra. Porta congue id molestie.</p>
                            </td>
                            <td>
                                <p className='liquidationRiskNumberPera'>$10 Billion</p>
                                <p className='liquidationRiskDiscription'>Enim in erat sit nibh viverra. Porta congue id molestie.</p>
                            </td>
                            <td>
                                <p className='liquidationRiskNumberPera'>$10 Billion</p>
                                <p className='liquidationRiskDiscription'>Enim in erat sit nibh viverra. Porta congue id molestie.</p>
                            </td>
                        </tr>
                        <tr>
                            <td>Tax impact</td>
                            <td>
                                <p className='taxImpactInPercentage'>43%</p>
                                <p className='taxImpactDiscription'>Enim in erat sit nibh viverra. Porta congue id molestie.</p>
                            </td>
                            <td>
                                <p className='taxImpactInPercentage'>43%</p>
                                <p className='taxImpactDiscription'>Enim in erat sit nibh viverra. Porta congue id molestie.</p>
                            </td>
                            <td>
                                <p className='taxImpactInPercentage'>43%</p>
                                <p className='taxImpactDiscription'>Enim in erat sit nibh viverra. Porta congue id molestie.</p>
                            </td>
                            <td>
                                <p className='taxImpactInPercentage'>43%</p>
                                <p className='taxImpactDiscription'>Enim in erat sit nibh viverra. Porta congue id molestie.</p>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p className='lightTxtCalculator'>CALCULATOR</p>
                <p className='headingOfInvestForYourFuture'>Invest for your future</p>
                <p className='lightTxtOfSliderMoneyCanGrow'>Use the slider to see how your money can grow.</p>

                <div className="col-md-5">
                    <div className="row">
                        <p className='txtInitialDeposite'>Initial deposit</p>
                        <div className="col-md-6">
                            <input type="range" min="1000" max="10000" className='InitialDepositeRangeBar' value={initialDepoValue} id='initialDepo' />
                        </div>
                        <div className="col-md-6">
                            <i className="fa-solid fa-dollar-sign initialDollarIcon" > <span className='initialDepositeSpan'  id='initialValue'></span></i>
                        </div>
                        <div className="col-md-12 mt-4">
                            <p>Monthly deposit</p>
                        </div>
                        <div className="col-md-6">
                            <input type="range" min="1000" max="10000" className='monthlyDepositeRangeBar' value={monthlyDepovalue}></input>
                        </div>
                        <div className="col-md-6">
                            <i className="fa-solid fa-dollar-sign monthlyDollarIcon"><span className='monthlyDollarSpan' id='monthlyvalue'></span></i> 
                        </div>
                        <div className="col-md-12 mt-4">
                            <p>Risk level</p>
                        </div>
                        <div className="col-md-6">
                            <input type="range" min="1" max="100" className='InitialDepositeRangeBar'></input>
                        </div>
                        <div className="col-md-6">
                            <i className="fa-solid fa-arrow-right-arrow-left riskLevelIconDiv"><span className='numberOfDollarSpan'>Growth</span></i> 
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-4 ">
                            <div className='traditionalFirst text-center '>
                                <span className='traditionalSpan'><i className="fa-solid fa-wallet walletFirstIcon"></i></span>
                                <p className='txtTraditional'>Traditional</p>
                                <p className='valueofTraditional'>$1,444,000</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='traditionalDivSecond text-center '>
                                <span className='SecondBitcoinIconSpan'><i className="fa-solid fa-bitcoin-sign SecondBitcoinIcon"></i></span>
                                <p className='txtTraditional'>Coin</p>
                                <p className='valueofTraditional'>$1,844,000</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className='traditionalDivThird text-center '>
                                <span className='ThirdDivIconSpan'><i className="fa-solid fa-tachograph-digital ThirdDivIcon"></i></span>
                                <p className='txtTraditional'>Lender</p>
                                <p className='valueofTraditional'>$844,000</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="col-lg-12">
                   <ResponsiveContainer width='100%' aspect={3}>
                        <LineChart data={chartdata} margin={{top:100,right:5,left:15, bottom:5}}>
                        <CartesianGrid horizontal={false}/>
                        <XAxis  width={100} interval={'preserveStartEnd'}    />
                        <YAxis  />
                        <Line type='monotone' dataKey='Tprice' stroke='#4A93FF' dot={false}/>
                        <Line type='monotone' dataKey='Cprice' stroke='#F4B655'dot={false}/>
                        <Line type='monotone' dataKey='Lprice' stroke='#10C26D' dot={false}/>
                        </LineChart>                    
                   </ResponsiveContainer>
                </div>

                <SubscribeComponent/>
            </div>
        </div>
        
    </div>
  )
}

export default CompareToOthers