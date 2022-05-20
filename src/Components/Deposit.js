import React, { useEffect, useState } from "react";
import "../css/Deposit.css";
import scan from "../Assets/Images/scan.svg";
import bank from "../Assets/Images/bank name.svg";
import plaid from "../Assets/Images/Plaid-logo.svg";
import BankIcon1 from "../Assets/Images/bank icon1.svg";
import BankIcon2 from "../Assets/Images/bank icon2.svg";
import BankIcon3 from "../Assets/Images/bank icon3.svg";
import BankIcon4 from "../Assets/Images/bank icon4.svg";
import { Link } from "react-router-dom";
import Spinner from "./Spinner.js";

function Deposit() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    $(document).ready(function () {
      var progressBar = {
        Next: function () {
          $("#progress-bar li:not(.active):first").addClass("active");
        },
      };
      $(".next").on("click", function () {
        progressBar.Next();
      });
    });

    // setModalVisiblity(true);
  }, []);

  $(document).ready(function () {
    var fieldsets = $("#fieldset_set>fieldset");
    var now = 0; // currently shown fieldset
    fieldsets.hide().first().show(); // hide all fieldsets except first

    $(".next").click(function () {
      fieldsets.eq(now).hide();
      now = now + 1 < fieldsets.length ? now + 1 : 0;
      fieldsets.eq(now).show(); // show next
    });
  });

  const handlechange = () => {
    setLoading(true);
  };

  return (
    <div>
      <div className="container-fluid deposite_main_container_fluid ">
            <div className="container ">
                <div className="row">
                    <div className="col-12">
                        <p className="heading_of_make_deposit">Make your deposit</p>
                        <p className="description_of_heading_txt"> Short description or explanation of the title</p>
                    </div>
                </div>
                <div className="row">
                    <ul id="progress-bar" className="progressbar_deposit">
                        <li className="active">
                            <span>Deposit</span>
                        </li>
                        <li>
                            <span>Payment address</span>
                        </li>
                        <li>
                            <span>Confirm</span>
                        </li>
                        <li>
                            <span>Connect bank</span>
                        </li>
                    </ul>   
                </div>
                <div className="row justify-content-center">
                    <div className="col-9 diposit_amount_bg mt-5">
                        <div className="row" id="fieldset_set">
                            <fieldset id="payment_deposit_process">
                                <div className="row">
                                    <div className="col-12">
                                        <p className="deposit_detail_title">Enter your deposit details</p>
                                    </div>
                                    <div className="col-xs-12 mt-4">
                                        <p className="select_currency_text">Select currency</p>
                                    </div>
                                    <div className="col-12">
                                        <button className="btn choose_currency_bitcoin_btn me-3"><span><i className="fa-brands fa-bitcoin pe-1"></i></span> Bitcoin</button>
                                        <button className="btn choose_currency_etherum_btn"><span><i className="fa-brands fa-ethereum pe-1"></i></span>{" "}Etherum</button>
                                    </div>
                                    <div className="col-12">
                                        <div className="mb-3 deposit_amount_main_div ">
                                            <label htmlFor="deposit_amount" className="form-label deposit_amount_label mt-4"> Deposit amount</label>
                                            <input type="text" className="form-control deposit_amount_input" id="deposit_amount" placeholder="BTC 583"/>
                                            <div className="mt-2 min_deposite_warning_text">
                                                <i className="fa-solid fa-circle-exclamation me-1"></i>
                                                Minimum deposit is 50%
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-4">
                                        <button className="btn btn_deposite_amount_next next"> Next <i className="fa-solid fa-angle-right ms-3"></i></button>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="payment_deposit_process">
                                <div className="row">
                                    <div className="col-12 ">
                                        <p className="deposit_detail_title ">Send your deposit</p>
                                        <p className="deposit_description_text">Copy or scan wallet address below to send your deposit</p>
                                    </div>
                                    <div className=" col-12 text-center mt-4">
                                        <img src={scan} alt="scan" width="auto" height="auto" />
                                    </div>
                                    <div className="scan_code_copy_div mt-3">
                                        <div className="col-12 m-2 ">
                                            <span className="code_span">0x98123eb12687eh9127jbka01823...0123 <button className=" btn_copy_code"><i className="fa-solid fa-copy "></i></button></span>
                                        </div>
                                    </div>
                                    <div className="text-center mt-4">
                                        <button className="btn btn_deposite_amount_next next"> Next <i className="fa-solid fa-angle-right ms-3"></i></button>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="payment_deposit_process">
                                <div className="row pt-0">
                                    <div className="col-12">
                                        <p className="deposit_detail_title">Confirm your payment</p>
                                        <p className="deposit_description_text">Description here. massa sit nibh rhoncus ut faucibus id purus.</p>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="conform_payment_slip_div">
                                                <div className="thank_you_div mt-1">
                                                    <p className="thank_you_text mb-0 pb-1">Thank you!</p>
                                                </div>
                                                <div className="mt-1 payment_infomation_div">
                                                    <p className="payment_completed_bold_text">Your payment is completed</p>
                                                    <p className="payment_information_light_text mb-0 pb-1">You're all set.More information about your payment can be found below </p>
                                                </div>
                                                <div className="row amount_number_parent_div m-0">
                                                    <div className="col-6 p-0 mt-1">
                                                        <p className="amount_text_child">Amount</p>
                                                    </div>
                                                    <div className="col-6 text-end mt-1">
                                                        <p className="mb-0 amount_text_child">0.000019 ETH</p>
                                                        <p className="amount_in_Dollar mb-0 pb-1">$10.00</p>
                                                    </div>
                                                </div>
                                                <div className="row mt-1">
                                                    <div className="col-6">
                                                        <p className="order_number_text mb-0 pt-1">Order Number</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="order_number_div">
                                                            <p className="order_number_code">QY34A1T</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <p className="payment_status_text mb-0 ">Status</p>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="payment_status_completed_div">
                                                            <p className="payment_status_completed_text">COMPLETED</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6 ">
                                                        <p className="date_time_text mb-0">Date & time</p>
                                                    </div>
                                                    <div className="col-6 text-end pt-1">
                                                        <p className="show_current_date_time mb-0">{new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-3">
                                        <button className="btn btn_deposite_amount_next next">Yes, I have sent the deposit <i className="fa-solid fa-angle-right ms-3"></i></button>
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset className="payment_deposit_process">
                                <div className="row">
                                    <div className="col-12">
                                        <p className="deposit_detail_title">Connect your bank account </p>
                                        <p className="deposit_description_text">This application uses Plaid to link your bank. Don’t worry, payment start after move in date </p>
                                    </div>
                                    <div className="text-center mt-3">
                                        <img src={bank} alt="bank name" width="auto" height="auto"/>
                                    </div>
                                    <div className="text-center mt-5">
                                        <button className="btn btn_deposite_amount_next" data-bs-toggle="modal" data-bs-target="#popup_link_with_bank"> Connect your bank 
                                            <i className="fa-solid fa-angle-right ms-3"></i>
                                        </button>
                                    </div>
                                </div>
                            </fieldset>
                            {/* ==================================== Modal popup link with bank ====================================  */}

                            <div className="modal fade" width="794px" height="490px" id="popup_link_with_bank" tabIndex="-1" aria-labelledby="popup_link_with_bank" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header ">
                                            <div className="col-11 text-center">
                                                <img src={plaid} alt="plaid_logo" />
                                            </div>
                                            <div className="col-1 text-end">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                        </div>
                                        <div className="modal-body">
                                            <div className="mt-4">
                                                <p className="plaid_to_link_with_bank_title">This application uses Plaid to link your bank</p>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-6 ps-5 pt-3 pb-5 secure_div_main">
                                                    <p className="mb-0 bank_secure_text"><i className="fa-solid fa-circle-check me-1"></i> Secure</p>
                                                    <p className="ps-4">Transfer of your bank data is encrypted end-to-end</p>
                                                </div>
                                                <div className="col-sm-6 ps-5 pt-3 pb-5 private_div_main">
                                                    <p className="mb-0 bank_secure_text">
                                                    <i className="fa-solid fa-circle-check me-1"></i> Private</p>
                                                    <p className="ps-4">This application will never be able to access your credentials</p>
                                                </div>
                                                <div className="col-12">
                                                    <p className="selection_continue_light_text">By selection “Continue” you agree to the</p>
                                                </div>
                                                <div className="col-12">
                                                    <p className="plaid_privacy_policy_text">Plaid Privacy Policy</p>
                                                </div>
                                                <div className="col-12 text-center mb-3 mt-3">
                                                    <button type="button" className="btn continue_btn_popup mx-auto" data-bs-toggle="modal" data-bs-target="#popup_select_bank">Continue</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ========================================== Modal popup select bank ================================================= */}

                            <div className="modal fade" id="popup_select_bank" tabIndex="-1" aria-labelledby="popup_select_bank" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header ">
                                            <div className="col-1 text-start">
                                                <button type="button" className="border-0 bg-transparent"><i className="fa-solid fa-arrow-left"></i></button>
                                            </div>
                                            <div className="col-10 text-center">
                                                <img src={plaid} alt="plaid_logo" />
                                            </div>
                                            <div className="col-1 text-end">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                        </div>
                                        <div className="modal-body">
                                            <div className="mt-4">
                                                <p className="plaid_to_link_with_bank_title">Select your bank</p>
                                            </div>
                                            <div className="select_bank_main_div ">
                                                <div className="col-sm-12 input-group rounded">
                                                    <input type="search" className="form-control rounded" placeholder="Search your bank" aria-label="Search" aria-describedby="search-addon"/>
                                                    <span className="input-group-text border-0" id="search-addon"><i className="fas fa-search"></i></span>
                                                </div>
                                                <div className="col-sm-12 bank_name_div mt-3">
                                                    <img src={BankIcon1} alt="icon" className="bank_icon_image me-3" />
                                                    <Link data-bs-toggle="modal" data-bs-target="#popup_fill_bank_detail" className="bank_name_text mb-0">BankName</Link>
                                                    <p className="bank_web_site_text">website.com</p>
                                                </div>
                                                <div className="col-sm-12 bank_name_div mt-3">
                                                    <img src={BankIcon2} alt="icon" className="bank_icon_image me-3"/>
                                                    <Link data-bs-toggle="modal" data-bs-target="#popup_fill_bank_detail" className="bank_name_text mb-0">BankName</Link>
                                                    <p className="bank_web_site_text">website.com</p>
                                                </div>
                                                <div className="col-sm-12 bank_name_div mt-3">
                                                    <img src={BankIcon3} alt="icon" className="bank_icon_image me-3"/>
                                                    <Link data-bs-toggle="modal" data-bs-target="#popup_fill_bank_detail" className="bank_name_text mb-0">BankName</Link>
                                                    <p className="bank_web_site_text">website.com</p>
                                                </div>
                                                <div className="col-sm-12 bank_name_div mt-3 border-0">
                                                    <img src={BankIcon4} alt="icon" className="bank_icon_image me-3"/>
                                                    <Link data-bs-toggle="modal" data-bs-target="#popup_fill_bank_detail" className="bank_name_text mb-0">BankName</Link>
                                                    <p className="bank_web_site_text">website.com</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ========================================== Modal popup credentials ================================================= */}

                            <div className="modal fade" id="popup_fill_bank_detail" tabIndex="-1" aria-labelledby="popup_fill_bank_detail" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered ">
                                    <div className="modal-content">
                                        <div className="modal-header ">
                                            <div className="col-1 text-start">
                                                <button type="button" className="border-0 bg-transparent"><i className="fa-solid fa-arrow-left"></i></button>
                                            </div>
                                            <div className="col-10 text-center">
                                                <img src={plaid} alt="plaid_logo" />
                                            </div>
                                            <div className="col-1 text-end">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                        </div>
                                        <div className="modal-body">
                                            <div className="main_div_of_user_enter_bank_detail">
                                                <div className="bank_name_div mt-3 border-0">
                                                    <img src={BankIcon1} alt="icon" className="bank_icon_image me-3"/>
                                                    <p data-bs-toggle="modal" data-bs-target="#popup_fill_bank_detail" className="bank_name_text mb-0">BankName</p>
                                                    <p className="bank_web_site_text">website.com</p>
                                                </div>
                                                <div className="">
                                                    <p className="enter_credential_text">Enter your credentials</p>
                                                </div>
                                                <div className="">
                                                    <input type="text" className="form-control input_for_bank_detail mb-3" placeholder="Username"/>
                                                    <input type="text" className="form-control input_for_bank_detail mb-3" placeholder="Password"/>
                                                </div>
                                                <div>
                                                    <button type="button" className="btn continue_btn_popup w-100 mx-auto mb-3" onClick={handlechange} data-bs-toggle="modal" data-bs-target="#popup_success">Continue</button>
                                                    <button type="button" className="btn text-center w-100 mb-4">Reset password</button>
                                                </div>
                                            </div>
                                            <div className="mb-5 showloader">
                                                {loading && <Spinner />}
                                                <p className="text-center text-black">Sending credentials</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ========================================== Modal popup loading ================================================= */}

                            <div className="modal fade" id="popup_loader" tabIndex="-1" aria-labelledby="popup_loader" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered ">
                                    <div className="modal-content">
                                        <div className="modal-header ">
                                            <div className="col-1 text-start">
                                                <button type="button" className="border-0 bg-transparent"><i className="fa-solid fa-arrow-left"></i></button>
                                            </div>
                                            <div className="col-10 text-center">
                                                <img src={plaid} alt="plaid_logo" />
                                            </div>
                                            <div className="col-1 text-end">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                        </div>
                                        <div className="modal-body" style={{ height: "405px", fontSize: "20px" }}>
                                            <div className="mb-5">
                                                <Spinner />
                                                <p className="text-center text-black">Sending credentials</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ========================================== Modal popup success ================================================= */}

                            <div className="modal fade" id="popup_success" tabIndex="-1" aria-labelledby="popup_success" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered ">
                                    <div className="modal-content">
                                        <div className="modal-header ">
                                            <div className="col-10 text-center">
                                                <img src={plaid} alt="plaid_logo" />
                                            </div>
                                            <div className="col-1 text-end">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                        </div>
                                        <div className="modal-body">
                                            <div className="">
                                                <p className="modal_popup_success_text text-center">Success</p>
                                                <button type="button" className="btn continue_btn_popup mx-auto mb-3">Continue</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Deposit;
