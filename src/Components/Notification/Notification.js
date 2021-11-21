import React from 'react'

import Notebook from '../../Assets/notebook.png'
import Message from '../../Assets/messages.png'
import Admin from '../../Assets/admin.png'

const Notifications = () => {
    return (
        <div className='Notification-container'>
            <h2>Notifications</h2>
            <div className='inner-box'>
                <div className='list-div'>
                    <div className='Card Item-Card'>
                        <img src={Notebook} alt='icon' />
                        <div className='details'>
                            <p> <span>Item Sold : </span> Product descriptions have the power to make or break you.Right up until you're broke </p>
                            <h6>1 hour ago</h6>
                        </div>
                    </div>
                    <div className='Card message-Card'>
                        <img src={Message} alt='icon' />
                        <div className='details'>
                            <p> <span>Message : </span>The first thing you need in order to send an SMS notification is a Twilio-powered phone </p>
                            <h6>2 minutes ago</h6>
                        </div>
                    </div>
                    <div className='Card Admin-Card'>
                        <img src={Admin} alt='icon' />
                        <div className='details'>
                            <p> <span>Admin : </span>The first thing you need in order to send an SMS notification is a Twilio-powered phone </p>
                            <h6>54 minutes ago</h6>
                        </div>
                    </div>
                    <div className='Card Item-Card'>
                        <img src={Notebook} alt='icon' />
                        <div className='details'>
                            <p> <span>Item Sold : </span> Product descriptions have the power to make or break you.Right up until you're broke </p>
                            <h6>1 hour ago</h6>
                        </div>
                    </div>
                    <div className='Card message-Card'>
                        <img src={Message} alt='icon' />
                        <div className='details'>
                            <p> <span>Message : </span>The first thing you need in order to send an SMS notification is a Twilio-powered phone </p>
                            <h6>2 minutes ago</h6>
                        </div>
                    </div>
                    <div className='Card Admin-Card'>
                        <img src={Admin} alt='icon' />
                        <div className='details'>
                            <p> <span>Admin : </span>The first thing you need in order to send an SMS notification is a Twilio-powered phone </p>
                            <h6>54 minutes ago</h6>
                        </div>
                    </div>
                    <div className='Card Item-Card'>
                        <img src={Notebook} alt='icon' />
                        <div className='details'>
                            <p> <span>Item Sold : </span> Product descriptions have the power to make or break you.Right up until you're broke </p>
                            <h6>1 hour ago</h6>
                        </div>
                    </div>
                    <div className='Card message-Card'>
                        <img src={Message} alt='icon' />
                        <div className='details'>
                            <p> <span>Message : </span>The first thing you need in order to send an SMS notification is a Twilio-powered phone </p>
                            <h6>2 minutes ago</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notifications