import React, { useState } from 'react'
import Card from '../Card/Card'


const MyAds = () => {
    const [PublishedAdsShow, setPublishedAdsShow] = useState(true)
    const [PrivateAdsShow, setPrivateAdsShow] = useState(false)

    const onPublishedAdsClick = () => {
        setPublishedAdsShow(true)
        setPrivateAdsShow(false)
    }

    const onPrivateAdsClick = () => {
        setPrivateAdsShow(true)
        setPublishedAdsShow(false)
    }

    return (
        <div className='Ads-container'>
            <h2>Listings</h2>
            <div className='sec-1'>
                <div className='name-nav'>
                    <h3 onClick={onPublishedAdsClick} className={PublishedAdsShow && 'active'}>Published Ads</h3>
                    <h3 onClick={onPrivateAdsClick} className={PrivateAdsShow && 'active'}>Archived Ads</h3>
                </div>
                <input placeholder='Search Product' />
            </div>
            <div className='sec-2'>
                {PublishedAdsShow && <>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </>}
                {PrivateAdsShow && <>
                    <Card />
                    <Card />
                    <Card />
                </>}
            </div>

        </div>
    )
}

export default MyAds