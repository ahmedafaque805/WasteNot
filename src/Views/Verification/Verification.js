import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { FileAddOutlined , FileDoneOutlined } from '@ant-design/icons'

import Illustration from '../../Assets/verification.png'

const Verification = () => {
    const [Document, setDocument] = useState({ raw: "" });
    const history = useHistory()

    const OnVerification = () => {
        history.push('/home')
    }


    const DocumenthandleChange = e => {
        if (e.target.files.length) {
            setDocument({
                raw: e.target.files[0]
            });
        }
    };

    console.log(Document)

    return (
        <div className='Verification-container'>
            <div className='left-box'>
                <img src={Illustration} alt='Illustration' draggable='false' />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            </div>
            <div className='right-box'>
                <h2>Submit Details to Verify</h2>
                <input placeholder='Name' />
                <input placeholder='Email' />
                <input placeholder='Id Card Number' />
                <input placeholder='Id Card issue Date' />
                <input
                    type="file"
                    id="upload-button"
                    style={{ display: "none" }}
                    onChange={DocumenthandleChange}
                    accept='.doc,.docx,application/pdf'
                />
                <label for='upload-button'>
                    {Document.raw === '' ?
                        <>
                            <FileAddOutlined className='icon' />
                            <h4>Upload documents</h4>
                        </>
                        : <>
                            <FileDoneOutlined className='icon' />
                            <h4>Uploaded Successfully</h4>
                        </>}
                </label>
                <button onClick={OnVerification}>Submit</button>
            </div>
        </div>
    )
}

export default Verification
