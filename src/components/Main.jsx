import React, { useContext } from 'react'
import './Main.css'; // Assuming you have a CSS file for styling
import { assets } from '../assets/assets';
import {Context} from '../context/context.jsx';
const Main = () => {

  const {onSent,recentPrompt,showResult,loading,resultData,setInput,input} = useContext(Context);
  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? <>
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
        </>
        :
        <div className="result">
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading ? <div className="loader">
              <hr />
              <hr />
              <hr />
            </div>
            :
            <p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
          </div>

        </div>
        }
        
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter your query here.' />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
                </div>
            </div>
            <p className='bottom-info'> Gemini might diaplay inaccurate info just so yk</p>
        </div>
      </div>
    </div>
  )
}

export default Main
