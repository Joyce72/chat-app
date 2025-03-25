import React, { useState } from 'react'
import Webcam from "react-webcam"

const Camera = ({handleToggleWebcam}) => {
    const [position, setPosition] = useState({ x: 20, y: 20 });
    const [bposition, setBposition] = useState({ x: 20, y: 20 });

    //webcam
    const handleDragStart = (event) => {
      setPosition({
        x: event.clientX - event.target.offsetLeft,
        y: event.clientY - event.target.offsetTop
      });
    };
  
    const handleDrag = (event) => {
      event.preventDefault();
      setPosition({
        x: event.clientX - position.x,
        y: event.clientY - position.y
      });
    };
    //webcam button
    const bhandleDragStart = (event) => {
      setBposition({
        x: event.clientX - event.target.offsetLeft,
        y: event.clientY - event.target.offsetTop
      });
    };
  
    const bhandleDrag = (event) => {
      event.preventDefault();
      setBposition({
        x: event.clientX - bposition.x,
        y: event.clientY - bposition.y
      });
    };
  
    const handleDragEnd = () => {
      // do something when drag ends
    };

    return (
        <div className='webCam'>
            <Webcam className='web-cam'
            style={{left: position.x, top: position.y,}}
            mirrored={true}
            onDragStart={handleDragStart}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            draggable
            />
            <button 
            onClick={handleToggleWebcam}

            style={{left: position.x, top: position.y,}}
            onDragStart={bhandleDragStart}
            onDrag={bhandleDrag}
            onDragEnd={handleDragEnd}
            draggable
            >关闭</button>
        </div>
    )
}

export default Camera