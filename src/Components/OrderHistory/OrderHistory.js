import React, { useState } from 'react'
import { Modal } from 'antd';

const OrderHistory = () => {
    const [DetailsModalShow, setDetailsModalShow] = useState(false);
    const [PurchasedShow, setPurchasedShow] = useState(true)
    const [SoldShow, setSoldShow] = useState(false)

    const ShowDetailsModal = () => {
        setDetailsModalShow(true);
    };

    const DetailsHandleYes = () => {
        setDetailsModalShow(false);
    };

    const DetailsHandleCancel = () => {
        setDetailsModalShow(false);
    };

    const onPurchasedClick = () => {
        setPurchasedShow(true)
        setSoldShow(false)
    }

    const onSoldClick = () => {
        setSoldShow(true)
        setPurchasedShow(false)
    }

    return (
        <>
            <div className='Order-container'>
                <h2>Order History</h2>
                <div className='sec-1'>
                    <div className='name-nav'>
                        <h3 onClick={onPurchasedClick} className={PurchasedShow && 'active'}>Purchased</h3>
                        <h3 onClick={onSoldClick} className={SoldShow && 'active'}>Sold</h3>
                    </div>
                    <input placeholder='Search Product' />
                </div>
             {PurchasedShow &&    <div className='Table'>
                    <div className='Table-H'>
                        <h3>Status</h3>
                        <h3>Order</h3>
                        <h3>Date</h3>
                        <h3>Total</h3>
                    </div>
                    <div className='Table-list'>
                        <div className='Table-D'>
                            <h3> <span className='red'></span> Canceled</h3>
                            <h3>#7895</h3>
                            <h3>20 April,2020</h3>
                            <h3>$4521</h3>
                        </div>
                        <div className='Table-D'>
                            <h3> <span className='yellow'></span> Pending</h3>
                            <h3>#2353</h3>
                            <h3>12 Feb,2020</h3>
                            <h3>$6421</h3>
                        </div>
                        <div className='Table-D'>
                            <h3> <span className='green'></span> Success</h3>
                            <h3>#1255</h3>
                            <h3>10 March,2021</h3>
                            <h3>$5421</h3>
                        </div>
                        <div className='Table-D'>
                            <h3> <span className='yellow'></span> Pending</h3>
                            <h3>#3333</h3>
                            <h3>23 Dec,2021</h3>
                            <h3>$5321</h3>
                        </div>
                        <div className='Table-D'>
                            <h3> <span className='red'></span> Canceled</h3>
                            <h3>#7895</h3>
                            <h3>20 April,2020</h3>
                            <h3>$4521</h3>
                        </div>
                        <div className='Table-D'>
                            <h3> <span className='yellow'></span> Pending</h3>
                            <h3>#2353</h3>
                            <h3>12 Feb,2020</h3>
                            <h3>$6421</h3>
                        </div>
                        <div className='Table-D'>
                            <h3> <span className='green'></span> Success</h3>
                            <h3>#1255</h3>
                            <h3>10 March,2021</h3>
                            <h3>$5421</h3>
                        </div>
                        <div className='Table-D'>
                            <h3> <span className='yellow'></span> Pending</h3>
                            <h3>#2353</h3>
                            <h3>12 Feb,2020</h3>
                            <h3>$6421</h3>
                        </div>
                        <div className='Table-D'>
                            <h3> <span className='green'></span> Success</h3>
                            <h3>#1255</h3>
                            <h3>10 March,2021</h3>
                            <h3>$5421</h3>
                        </div>
                    </div>
                </div> }
                { SoldShow &&    <div className='Table'>
                    <div className='Table-H'>
                        <h3>Status</h3>
                        <h3>Order</h3>
                        <h3>Date</h3>
                        <h3>Total</h3>
                    </div>
                    <div className='Table-list'>
                        <div className='Table-D'>
                            <h3> <span className='yellow'></span> Pending</h3>
                            <h3>#2353</h3>
                            <h3>12 Feb,2020</h3>
                            <h3>$6421</h3>
                        </div>
                        <div className='Table-D'>
                            <h3> <span className='green'></span> Success</h3>
                            <h3>#1255</h3>
                            <h3>10 March,2021</h3>
                            <h3>$5421</h3>
                        </div>
                        <div className='Table-D'>
                            <h3> <span className='red'></span> Canceled</h3>
                            <h3>#7895</h3>
                            <h3>20 April,2020</h3>
                            <h3>$4521</h3>
                        </div>
                    </div>
                </div> }
            </div>


            {/* Details Modal */}
            <Modal width='600px' style={{ top: '50px' }} closable={false} footer={false} visible={DetailsModalShow} >
                <div className='OrderView-container'>
                    <i class="fas fa-times"></i>
                    <p>Order <span> #7854 </span> was placed on Octuber 13, 2020 and is currently Processing.</p>
                    <h3>Order details</h3>
                    <div className='Table'>
                        <div className='Data'>
                            <h3>Customer Name</h3>
                            <h3>Ray Adam</h3>
                        </div>
                        <div className='Data'>
                            <h3>Customer address</h3>
                            <h3>Melbourne,Australia, 746500</h3>
                        </div>
                        <div className='Data'>
                            <h3>Product</h3>
                            <h3>Iphone 12</h3>
                        </div>
                        <div className='Data'>
                            <h3>Payment Method</h3>
                            <h3>Paypal</h3>
                        </div>
                        <div className='Data'>
                            <h3>Total</h3>
                            <h3>$3400</h3>
                        </div>

                    </div>
                </div>
            </Modal>


        </>
    )
}

export default OrderHistory