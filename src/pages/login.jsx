import React, {useState} from "react";
import './style.scss';

import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target[0].value;
        const password = e.target[1].value;

    try{
        await signInWithEmailAndPassword(auth, email, password);
        await navigate("/");

    }catch(err){
        setErr(true);
    };
};
    
    return (
        <div className="formcontainer">
            <div className="formwrapper">
                <span className="logo">Chat</span>
                <span className="title">登陆</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='email'/>
                    <input type="password" placeholder='password'/>
                    <button>登陆</button>
                    {err && "页面有错误"}
                </form>
                <p>还没有有账号？<Link to="/register">注册一个</Link></p>
            </div>
        </div>
    )
}

export default Login