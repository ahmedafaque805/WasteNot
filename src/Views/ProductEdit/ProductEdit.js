import React, { useState } from 'react'
import { ArrowLeftOutlined} from '@ant-design/icons'
import SortableList, { SortableItem } from 'react-easy-sort'
import { arrayMoveImmutable } from 'array-move'
import { useHistory } from "react-router-dom";

const ProductEdit = () => {
    const history = useHistory()
    const [ArrayList, setArrayList] = useState(
        [
            'https://media.gq-magazine.co.uk/photos/5edfa087310483753e788e82/master/w_1920,c_limit/20200609-adidas-11.jpg',
            'data:image/jpeg;base64,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',
            'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c653d88f003245258132ab4a009c5169_9366/Galaxy_5_Shoes_Black_FW5717_01_standard.jpg',
            'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3d71930a346742dfa383acee01891718_9366/Forum_Exhibit_Low_Shoes_White_GZ5390_01_standard.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReD4NtpRHpg7Au0Tf6sHkU9qPEJ18K8ehp0A&usqp=CAU',
            'https://assets.adidas.com/images/w_600,f_auto,q_auto/414a0af449a94f17b0eead8f00ebaea2_9366/NMD_R1_Shoes_Beige_GZ8025_01_standard.jpg',
            'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c7f7cd7bd6b0426faa2cacee0151f846_9366/Mississippi_State_Ultraboost_21_Shoes_White_GY0430_01_standard.jpg',
            'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/3ea023ac72a84585b0e2ad0b00febbcb_9366/Superstar_Shoes_White_H05645_01_standard.jpg',
            'https://assets.adidas.com/images/w_600,f_auto,q_auto/f5eb6e69c809492ca09babad0106f8a5_9366/Lite_Racer_Adapt_3.0_Shoes_Red_FX8809_01_standard.jpg',
            'https://assets.adidas.com/images/w_600,f_auto,q_auto/b021aabd9254426f99e3ad2000309d0e_9366/adidas_Ultraboost_DNA_x_LEGO(r)_Colors_Shoes_Black_H67953_01_standard.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQvPcnr-Xtdi3CQzRW0jWMBPQ99_aTQGlMnA&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9KZI_2nCYgaLtfqIt38MdRECCv8rBbE9BA&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRSd0Ye_CjfwXdqE7LGsUpPvGYlURRnzebqg&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzR-iCt-Jw-GV16u8ptsKBQro5A7ozRvGddA&usqp=CAU',
            'https://5.imimg.com/data5/TE/BL/JK/SELLER-21853567/adidas-500x500.PNG',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYB2r8WbG_B3bxAN5BqdxVf18UC7u10qj1Z8TLOomgSecoZOci5ow1THUIeoZAUlaC9-4&usqp=CAU',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGd_529RDNgB-ck-ymb1rVGE2wRqSUBfawRg&usqp=CAU',
            'https://media.gq-magazine.co.uk/photos/5edfa0851fb5d752dc0fcf0a/master/w_1920,h_1280,c_limit/20200609-adidas-06.jpg',
            'https://i.ytimg.com/vi/jlb4yHqhGak/maxresdefault.jpg',
            'https://assets.adidas.com/images/w_600,f_auto,q_auto/ff2e419f1eda4ebab23faad6009a3a9e_9366/Superstar_Shoes_White_EG4958.jpg',
        ]
    )

    const onSortEnd = (oldIndex, newIndex) => {
        setArrayList((array) => arrayMoveImmutable(array, oldIndex, newIndex))
    }

    return (
        <div className='PE-container'>
            <div className='Nav'>
                <h2>Adidas Max Shoe</h2>
                <ArrowLeftOutlined onClick={() => history.goBack()} className='icon' />
            </div>
            <div className='Sec-1'>
                <img className='CoverImage' src='https://media.gq-magazine.co.uk/photos/5edfa087310483753e788e82/master/w_1920,c_limit/20200609-adidas-11.jpg' alt='Cover Image' />
            </div>
            <div className='Sec-2'>
                <h2>All Images</h2>
                <SortableList onSortEnd={onSortEnd} className="list" draggedItemClassName="dragged">
                    {ArrayList.map((item, index) => (
                        <SortableItem key={index}>
                            <img className="item" src={item} draggable='false' />
                        </SortableItem>
                    ))}
                </SortableList>
            </div>
            <div className='Sec-3'>
                <h2>Product Details</h2>
                <div className='Double-input'>
                    <div className='input-div'>
                        <h4>Product Name</h4>
                        <input placeholder='Adidas Max Shoe' />
                    </div>
                    <div className='input-div input-div2'>
                        <h4>Product Price</h4>
                        <input placeholder='$ 0.00' type='number' />
                    </div>
                </div>
                <div className='input-div3'>
                    <h4>Location</h4>
                    <textarea placeholder='ST-16 University Rd, Block 5 Gulshan-e-Iqbal, Karachi, Karachi City, Sindh, Pakistan' />
                </div>
                <div className='input-div3'>
                    <h4>Description</h4>
                    <textarea className='Desc' placeholder="Get comfort with every step in these running-inspired shoes. You'll dig the feel of super-soft Cloudfoam cushioning as you move through the day. A wide fit gives your feet the extra space they need. Lace these up and add a touch of retro adidas style to your everyday look. This product is made with recycled content as part of our ambition to end plastic waste. 20% of pieces used to make the upper are made with minimum 50% recycled content.
                    Get comfort with every step in these running-inspired shoes. You'll dig the feel of super-soft Cloudfoam cushioning as you move through the day. A wide fit gives your feet the extra space they need. Lace these up and add a touch of retro adidas style to your everyday look. This product is made with recycled content as part of our ambition to end plastic waste. 20% of pieces used to make the upper are made with minimum 50% recycled content." />
                </div>
            </div>
            <div className='sec-4'>
                <button> Save </button>
            </div>
        </div>
    )
}

export default ProductEdit