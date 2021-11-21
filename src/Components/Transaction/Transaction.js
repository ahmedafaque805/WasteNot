import React, { useState } from 'react'

const Transaction = () => {
    const [AllTransactionShow, setAllTransactionShow] = useState(true)
    const [PendingTransactionShow, setPendingTransactionShow] = useState(false)

    const AllTransactionClick = () => {
        setAllTransactionShow(true)
        setPendingTransactionShow(false)
    }
    const PendingTransactionClick = () => {
        setPendingTransactionShow(true)
        setAllTransactionShow(false)
    }
    return (
        <div className='Transaction-container'>
            <h2>Transaction</h2>
            <div className='tabs-btn'>
                <h3 onClick={AllTransactionClick} className={AllTransactionShow && 'active'}>All Transactions</h3>
                <h3 onClick={PendingTransactionClick} className={PendingTransactionShow && 'active'} >Pending Transactions</h3>
            </div>
            <div className='Tabs'>
                {
                    AllTransactionShow && <div className='T-Table'>
                        <div className='Table-H'>
                            <h3>Status</h3>
                            <h3>Amount</h3>
                            <h3>Date</h3>
                            <h3>Description</h3>
                        </div>
                        <div className='Table-list'>
                            <div className='Table-D'>
                                <h3> <span className='red'></span> Canceled </h3>
                                <h3>$4521</h3>
                                <h3>20 April 2020</h3>
                                <h3>Payment via Stripe</h3>
                            </div>
                            <div className='Table-D'>
                                <h3> <span className='green'></span> Success </h3>
                                <h3>$1321</h3>
                                <h3>10 Feb 2020</h3>
                                <h3>Payment via Paypal</h3>
                            </div>
                            <div className='Table-D'>
                                <h3> <span className='yellow'></span> Pending </h3>
                                <h3>$9603</h3>
                                <h3>25 Nov 2021</h3>
                                <h3>Payment via Paypal</h3>
                            </div>
                            <div className='Table-D'>
                                <h3> <span className='green'></span> Success </h3>
                                <h3>$1321</h3>
                                <h3>10 Feb 2020</h3>
                                <h3>Payment via Stripe</h3>
                            </div>
                            <div className='Table-D'>
                                <h3> <span className='yellow'></span> Pending </h3>
                                <h3>$9603</h3>
                                <h3>25 Nov 2021</h3>
                                <h3>Payment via Paypal</h3>
                            </div>
                            <div className='Table-D'>
                                <h3> <span className='yellow'></span> Pending </h3>
                                <h3>$9603</h3>
                                <h3>25 Nov 2021</h3>
                                <h3>Payment via Paypal</h3>
                            </div>
                            <div className='Table-D'>
                                <h3> <span className='green'></span> Success </h3>
                                <h3>$1321</h3>
                                <h3>10 Feb 2020</h3>
                                <h3>Payment via Stripe</h3>
                            </div>
                            <div className='Table-D'>
                                <h3> <span className='yellow'></span> Pending </h3>
                                <h3>$9603</h3>
                                <h3>25 Nov 2021</h3>
                                <h3>Payment via Paypal</h3>
                            </div>
                            <div className='Table-D'>
                                <h3> <span className='yellow'></span> Pending </h3>
                                <h3>$9603</h3>
                                <h3>25 Nov 2021</h3>
                                <h3>Payment via Paypal</h3>
                            </div>
                            <div className='Table-D'>
                                <h3> <span className='green'></span> Success </h3>
                                <h3>$1321</h3>
                                <h3>10 Feb 2020</h3>
                                <h3>Payment via Stripe</h3>
                            </div>
                            <div className='Table-D'>
                                <h3> <span className='yellow'></span> Pending </h3>
                                <h3>$9603</h3>
                                <h3>25 Nov 2021</h3>
                                <h3>Payment via Paypal</h3>
                            </div>
                        </div>
                    </div>
                }

                {
                    PendingTransactionShow && <div className='T-Table'>
                        <div className='Table-H'>
                            <h3>Status</h3>
                            <h3>Amount</h3>
                            <h3>Date</h3>
                            <h3>Description</h3>
                        </div>
                        <div className='Table-list'>
                            <div className='Table-D'>
                                <h3> <span className='yellow'></span> Pending </h3>
                                <h3>$1321</h3>
                                <h3>10 Feb 2020</h3>
                                <h3>Payment via SSl</h3>
                            </div>
                            <div className='Table-D'>
                                <h3> <span className='yellow'></span> Pending </h3>
                                <h3>$1203</h3>
                                <h3>12 Nov 2021</h3>
                                <h3>Payment via SSL</h3>
                            </div>
                            <div className='Table-D'>
                                <h3> <span className='yellow'></span> Pending </h3>
                                <h3>$9603</h3>
                                <h3>25 Nov 2021</h3>
                                <h3>Payment via Paypal</h3>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Transaction