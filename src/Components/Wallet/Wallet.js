import React,{ useState } from 'react'
import { DollarCircleFilled } from '@ant-design/icons'

import Transaction from '../Transaction/Transaction'
import WithDraw from '../WithDraw/WithDraw'

const Wallet = () => {
    const [TransactionsShow, setTransactionsShow] = useState(true)
    const [WithDrawMoneyShow, setWithDrawMoneyShow] = useState(false)


    const onTransactionClick = () => {
        setTransactionsShow(true)
        setWithDrawMoneyShow(false)
    }

    const onWithDrawMoneyClick = () => {
        setWithDrawMoneyShow(true)
        setTransactionsShow(false)
    }

    return (
        <div className='wallet-conatiner'>
            <h2>Wallet</h2>
            <div className='inner-container'>
                <div className='left-div'>
                    <div className='sec-1'>
                        <DollarCircleFilled className='icon' />
                        <div className='info-div'>
                            <h2>Wallet Balance</h2>
                            <h3>USD 0.00</h3>
                        </div>
                    </div>
                    <div className='sec-2'>
                        <button onClick={() => onTransactionClick()} className={TransactionsShow && 'active'}>Transactions</button>
                        <button onClick={() => onWithDrawMoneyClick()} className={WithDrawMoneyShow && 'active'}>Withdraw Money</button>
                    </div>
                </div>
                <div className='right-div'>
                    {TransactionsShow && <Transaction /> }
                    {WithDrawMoneyShow && <WithDraw /> }
                </div>
            </div>
        </div>
    )
}

export default Wallet