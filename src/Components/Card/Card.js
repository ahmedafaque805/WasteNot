import React from 'react'
import { useHistory } from "react-router-dom";
import { Popconfirm } from 'antd';
import { EditFilled, DeleteFilled, QuestionCircleOutlined , } from '@ant-design/icons'

const Card = () => {
    const history = useHistory()

    return (
        <div class="card">
            <div class="card-img"></div>
            <a class="card-link">
                <div class="card-img-hovered" style={{ backgroundImage: `url(https://media.gq-magazine.co.uk/photos/5edfa087310483753e788e82/master/w_1920,c_limit/20200609-adidas-11.jpg)`, zIndex: '1' }}></div>
            </a>
            <div class="card-info">
                <div class="card-about">
                    <a class="card-tag tag-news">$1800</a>
                    <div class="card-time">6/11/2018</div>
                </div>
                <h1 class="card-title">Adidas Max Shoe </h1>
                <div class="card-creator">by <a href="">Sardorbek Usmonov</a></div>
            </div>
            <EditFilled onClick={() => history.push('/productEdit')} className='Editicon' />
            <Popconfirm title="Are you sure to delete this Product？" icon={<QuestionCircleOutlined style={{ color: 'red' }} />}>
                <DeleteFilled className='Deleteicon' />
            </Popconfirm>



        </div>
    )
}

export default Card
