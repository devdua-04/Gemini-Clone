import React from 'react'
import './Main.css'; // Assuming you have a CSS file for styling
import { assets } from '../assets/assets';
const Main = () => {
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
            <p><span>Hello, Dev.</span></p>
            <p>How can I help you today?</p>
        </div>
        <div className="cards">
            <div className="card">
                <p>Brief random words ass defdn sdvdfmkbkxcmzxca vsdsfcdac</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Buls and what the heck is going on words ass defdn sdvdfmkbkxcmzxca vsdsfcdac</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>random words ass defdn sdvdfmkbkxcmzxca vsdsfcdac</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>introductin dfz msefsv ksdfsdfv bkxcmzxca vsdsfcdac</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
        <div className="main-bottom">
            <div className="search-box">
                <input type="text" placeholder='Enter your query here.' />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className='bottom-info'> Gemini might diaplay inaccurate info just so yk</p>
        </div>
      </div>
    </div>
  )
}

export default Main
