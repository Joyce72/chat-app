import React, {useState} from 'react'
import './style.scss';
import Add from '../img/touxiang.png';

import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";

import { useNavigate } from "react-router-dom";


const Register = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const displayName = e.target[0].value;
        const email = e.target[1].value;
        const password = e.target[2].value;
        const file = e.target[3].files[0];

    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const storageRef = ref(storage, displayName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        //register three observer
        uploadTask.on(
            (error) => {
                setErr(true);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    await updateProfile(res.user, {
                        displayName,
                        photoURL: downloadURL,
                    });
                    await setDoc(doc(db, "users", res.user.uid), {
                        uid: res.user.uid,
                        displayName,
                        email,
                        photoURL: downloadURL
                    });
                    await navigate("/login");
                    await setDoc(doc(db, "userChats", res.user.uid), {
                    });

                });
            },
        );
    }catch(err){
        setErr(true);

    }

    };


    return (
        <div className="formcontainer">
            <div className="formwrapper">
                <span className="logo">Chat</span>
                <span className="title">注册</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='name'/>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    <label htmlFor="file">
                        <img src={Add} alt=''/>
                        <span>添加头像</span>
                    </label>
                    <input style={{display:"none"}} type="file" id='file'/>
                    <button>注册</button>
                    {err && "页面有错误"}
                </form>
                <p>已经有账号？<Link to="/login">登陆</Link></p>
            </div>
        </div>
    )
}

export default Register