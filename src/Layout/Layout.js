import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import { DashboardOutlined, BarsOutlined, UserOutlined, FileDoneOutlined, BellOutlined, QrcodeOutlined, LogoutOutlined } from '@ant-design/icons'

import ProfileEdit from '../Components/ProfileEdit/ProfileEdit';
import Dashboard from '../Components/Dashboard/Dashboard';
import Notification from '../Components/Notification/Notification';
import ProfileImage from '../Assets/Profile.jpeg';
import Wallet from '../Components/Wallet/Wallet';
import MyAds from '../Components/MyAds/MyAds';
import OrderHistory from '../Components/OrderHistory/OrderHistory';

const Layout = () => {
    const [DashboardShow, setDashboardShow] = useState(true)
    const [ProfileEditShow, setProfileEditShow] = useState(false)
    const [AdsShow, setAdsShow] = useState(false)
    const [OrderShow, setOrderShow] = useState(false)
    const [NotificationShow, setNotificationShow] = useState(false)
    const [WalletShow, setWalletShow] = useState(false)
    const history = useHistory()


    const onEditProfileClick = () => {
        setProfileEditShow(true)
        setDashboardShow(false)
        setAdsShow(false)
        setNotificationShow(false)
        setOrderShow(false)
        setWalletShow(false)
    }
    const onDashboardClick = () => {
        setDashboardShow(true)
        setAdsShow(false)
        setProfileEditShow(false)
        setNotificationShow(false)
        setOrderShow(false)
        setWalletShow(false)
    }
    const onNotificationClick = () => {
        setNotificationShow(true)
        setProfileEditShow(false)
        setDashboardShow(false)
        setWalletShow(false)
        setOrderShow(false)
        setAdsShow(false)
    }
    const onWalletClick = () => {
        setWalletShow(true)
        setAdsShow(false)
        setProfileEditShow(false)
        setOrderShow(false)
        setDashboardShow(false)
        setNotificationShow(false)
    }
    const onAdsClick = () => {
        setAdsShow(true)
        setProfileEditShow(false)
        setDashboardShow(false)
        setWalletShow(false)
        setOrderShow(false)
        setNotificationShow(false)
    }

    const onOrderClick = () => {
        setOrderShow(true)
        setNotificationShow(false)
        setWalletShow(false)
        setProfileEditShow(false)
        setDashboardShow(false)
        setAdsShow(false)
    }

    const OnLogout = () => {
        history.push('/')
    }

    return (
        <div className='Layout-container'>
            <div className='Nav-conatiner'>
                <div className='Profile-div'>
                    <img src={ProfileImage} alt='Profile' />
                    <div className='info-div'>
                        <h3>Jhon Dev</h3>
                        <h4 onClick={() => history.push('/verification')}>Not Verified</h4>
                    </div>

                </div>
            </div>
            <div className='SideBar'>
                <div className='Option'>
                    <DashboardOutlined onClick={onDashboardClick} className='icon' />
                    <h4>Dashboard</h4>
                </div>
                <div className='Option'>
                    <UserOutlined onClick={onEditProfileClick} className='icon' />
                    <h4>Edit Profile</h4>
                </div>
                <div className='Option'>
                    <BellOutlined onClick={onNotificationClick} className='icon' />
                    <h4>Notifications</h4>
                </div>
                <div className='Option'>
                    <FileDoneOutlined onClick={onWalletClick} className='icon' />
                    <h4>Wallet</h4>
                </div>
                <div className='Option'>
                    <QrcodeOutlined onClick={onAdsClick} className='icon' />
                    <h4>My Ads</h4>
                </div>
                <div className='Option'>
                    <BarsOutlined onClick={onOrderClick} className='icon' />
                    <h4>My Ads</h4>
                </div>
                <div className='Option'>
                    <LogoutOutlined onClick={OnLogout} className='icon' />
                    <h4>Logout</h4>
                </div>
            </div>
            <div className='Content-div'>
                {ProfileEditShow && <ProfileEdit />}
                {DashboardShow && <Dashboard />}
                {NotificationShow && <Notification />}
                {WalletShow && <Wallet />}
                {AdsShow && <MyAds />}
                {OrderShow && <OrderHistory />}
            </div>
        </div>
    )
}

export default Layout
