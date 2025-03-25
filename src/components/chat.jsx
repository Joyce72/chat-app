import React, { useState, useContext } from 'react'
import Cam from '../img/cam1.png'
// import Add from '../img/add1.png'
import More from '../img/more1.png'
import Messages from './messages'
import Input from './input'

import WebCam from './webcam'
import { ChatContext } from "../context/ChatContext"



const Chat = () => {
    const { data } = useContext(ChatContext);
    const [showWebcam, setShowWebcam] = useState(false);
    const [shareTalk, setShareTalk] = useState(false);

    const handleToggleWebcam = () => {
      setShowWebcam(!showWebcam);
    };

    
    const handleToggleTalk = () => {
      setShareTalk(!shareTalk);
    };

    return (
      <>
        <div className="chat">
            <div className="chatInfo">
              <span>{data.user?.displayName}</span>
              <div className="chatIcons">
                <img src={Cam} alt="" onClick={handleToggleWebcam}/>
                {/* <img src={Add} alt="" /> */}
                <img src={More} alt="" onClick={handleToggleTalk}/>
              </div>
            </div>
            {showWebcam && <WebCam handleToggleWebcam={handleToggleWebcam}/>}
            <Messages />
            <Input />
        </div>

      </> 
    )
}

export default Chat