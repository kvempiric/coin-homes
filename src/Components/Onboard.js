import React from 'react'
import '../css/Onboard.css'

function Onboard() {

    $(function(){
        $('input[type=radio]').change(function() {    
            $('.selected').addClass('redio_btn_div').removeClass('selected');
            $(this).parent().addClass('selected');
        });
    });
    
    
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5">
                    <button className='onboard_new_home_btn me-4' >New Home</button>
                    <button className='onboard_existing_home_btn'>Existing Home</button>
                </div>
                <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{width:"15%"}}  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="col-md-6 mt-5 onboard_heading_div">
                    <p className='onboard_heading_text'>What type of home are you most interested in?</p>
                </div>
                <div className="col-md-12 mt-5 mb-5 ">
                    
                    <div id='first_rediobox' className='redio_btn_div col-md-12' >
                        <input type="radio" name='input_primary_residence' className='radio_input_primary_home'  id='primary_residence'/>
                        <label htmlFor="primary_residence" className='label_of_primary_residency ms-4'>Primary residence</label>
                    </div>
                   
                    <div id='second_radiobox' className='redio_btn_div mt-4 col-md-12'>
                        <input type="radio" name='input_primary_residence' className='radio_input_primary_home'  id='second_home' />
                        <label htmlFor="second_home" className='label_of_second_home ms-4'>Second Home</label>
                    </div>
                    <div id='third_radiobox' className='redio_btn_div mt-4 '>
                        <input type="radio" name='input_primary_residence' className='radio_input_primary_home'  id='investment' />
                        <label htmlFor="investment" className='label_of_investment ms-4' >Investment</label>
                    </div>
                    
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default Onboard