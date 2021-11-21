import React, { useState } from 'react'

import UnknownProfile from '../../Assets/unknownProfile.png'

const ProfileEdit = () => {
    const [Password, setPassword] = useState('4723907273')
    const [Email, setEmail] = useState('afaqueahmed@gmail.com')
    const [image, setImage] = useState({ preview: "", raw: "" });

    const handleChange = e => {
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });
        }
    };
    console.log(image)

    return (
        <div className='ProfileEdit-container'>
            <h2>Edit Profile</h2>
            <h3>Configuration</h3>
            <div className='sec-1'>
                <div className='info-div'>
                    <img src={image.preview ? image.preview : UnknownProfile} alt='Unknown Profile' draggable='false' />
                    <div className='details'>
                        <h4>Afaque Ahmed</h4>
                        <div>
                            <h5>Bought : <span> 500 </span> </h5>
                            <h5>Sold : <span> 200 </span> </h5>
                        </div>
                    </div>
                </div>
                <div className='Btn-div'>
                    <input
                        type="file"
                        id="upload-button"
                        style={{ display: "none" }}
                        onChange={handleChange}
                    />
                    <label for='upload-button' className=''>
                        <h2 className='Upload-heading'> <i class="fas fa-upload"></i> Upload Photo </h2>
                    </label>
                </div>
            </div>
            <div className='sec-2'>
                <h3>Details</h3>
                <div className='details-inputs'>
                    <div className='inputs-div'>
                        <h4>User name <span>*</span> </h4>
                        <input placeholder='Afaque Ahmed' />
                    </div>
                    <div className='inputs-div'>
                        <h4>Name</h4>
                        <input />
                    </div>
                    <div className='inputs-div'>
                        <h4>Surname</h4>
                        <input />
                    </div>
                    <div className='inputs-div'>
                        <h4>Phone</h4>
                        <input disabled placeholder='+923344234809' />
                    </div>
                </div>
                <button>Save changes</button>
            </div>

            <div className='sec-3'>
                <h3>Password</h3>
                <div className='details-inputs'>
                    <div className='inputs-div'>
                        <h4>Email</h4>
                        <input value={Email} onChange={e => setEmail(e.target.value)} type='email' placeholder='afaqueahmed@gmail.com' />
                    </div>
                    <div className='inputs-div'>
                        <h4>Password</h4>
                        <input value={Password} onChange={e => setPassword(e.target.value)} type='password' />
                    </div>
                </div>
                <button>Save changes</button>
            </div>
        </div>
    )
}

export default ProfileEdit