import React, { useState } from 'react'
import { EyeOutlined, GoldOutlined, ReconciliationOutlined, PoundCircleOutlined } from '@ant-design/icons'
import ChartistGraph from "react-chartist";

const Dashboard = () => {
    const [Revenue, setRevenue] = useState(false)
    const [Orders, setOrders] = useState(false)

    const RevenueDays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
    const YearlyMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octubor', 'November', 'December']

    const RevenueData = [11, 4, 7, 3, 5, 11, 6, 8, 14, 10, 6, 2, 9, 4, 10, 6, 2, 8, 1, 10, 14, 2, 13, 4, 15, 6, 17, 8, 9, 1]
    const YearlyData = [120, 322, 22, 54, 834, 111, 113, 532, 563, 688, 244, 533]


    return (
        <div className='Dashboard-div'>
            <h2>Dashboard</h2>
            <h3>Analytics</h3>
            <div className='Sec-1'>
                <div className='Card'>
                    <EyeOutlined className='icon' />
                    <h3>Total Views</h3>
                    <h4>8990</h4>
                </div>
                <div className='Card'>
                    <GoldOutlined className='icon' />
                    <h3>Total Orders</h3>
                    <h4>990</h4>
                </div>
                <div className='Card'>
                    <PoundCircleOutlined className='icon' />
                    <h3>Total Earning</h3>
                    <h4>$42290</h4>
                </div>
                <div className='Card'>
                    <ReconciliationOutlined className='icon' />
                    <h3>Total Ads</h3>
                    <h4>23</h4>
                </div>
            </div>
            <div className='Sec-2'>
                <h3>Revenue</h3>
                <h4>Statistics</h4>
                <div className='Tab-div'>
                    <h3 onClick={() => setRevenue(false)} className={Revenue ? '' : 'active'}>This Year</h3>
                    <h3 onClick={() => setRevenue(true)} className={Revenue ? 'active' : ''}>Last Month</h3>
                </div>
                <div className='Revenue-Chart-div'>
                <div className='inner-div'>
                    <ChartistGraph
                        data={{
                            labels: Revenue ? RevenueDays : YearlyMonths,
                            series: [
                                Revenue ? RevenueData : YearlyData,
                            ]
                        }}
                        type="Line"
                        options={{
                            seriesBarDistance: 10,
                            axisX: { showGrid: false, }, height: "255px",
                        }}
                        responsiveOptions={[
                            [
                                "screen and (max-width: 640px)",
                                {
                                    seriesBarDistance: 5,
                                },
                            ],
                        ]}
                    />
                </div>
                </div>
            </div>

            <div className='Sec-2'>
                <h3>Total Orders</h3>
                <h4>Statistics</h4>
                <div className='Tab-div'>
                    <h3 onClick={() => setOrders(false)} className={Orders ? '' : 'active'}>This Year</h3>
                    <h3 onClick={() => setOrders(true)} className={Orders ? 'active' : ''}>Last Month</h3>
                </div>
                <div className='Revenue-Chart-div'>
                    <div className='inner-div'>
                    <ChartistGraph
                        data={{
                            labels: Orders ? RevenueDays : YearlyMonths,
                            series: [
                                Orders ? RevenueData : YearlyData,
                            ]
                        }}
                        type="Bar"
                        options={{
                            seriesBarDistance: 10,
                            axisX: { showGrid: false, }, height: "255px", width:'100%'
                        }}
                        responsiveOptions={[
                            [
                                "screen and (max-width: 640px)",
                                {
                                    seriesBarDistance: 5,
                                },
                            ],
                        ]}
                    />
                </div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard
