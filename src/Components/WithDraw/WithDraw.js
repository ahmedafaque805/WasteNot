import React from 'react'

import PaypalImage from "../../Assets/paypal.png";
import Stripemage from "../../Assets/Stripe.png";

const WithDraw = () => {
    return (
        <div className='RW-container'>
            <h2>Withdraw Money</h2>
            <div className='Submit-div'>
            <div className='Input-div'>
                <h3>Enter Amount</h3>
                <input type='number' placeholder='$' />
            </div>
            <button className='primary2-btn'>Submit</button>
            </div>
            <h3>Add your Payment Method</h3>
            <div className='Btn-div'>
                <button className='Btn paypal-btn'>
                    <img src={PaypalImage} />
                </button>
                or
                <button className='Btn SSL-btn'>
                <img src={Stripemage} />
                </button>
            </div>
        </div>
    )
}

export default WithDraw