import React from "react";
import { LoginBg } from "../../assets";
import { Button, Input, Gap, Link } from "../../components";


const Login = () => {
    return (
        <div>
            <div className="main-page">
            <div className="left">
                <img src={LoginBg} className="bg-image" alt="Login" />
            </div>
            <div className="right">
                <p className="title">Login</p>
                <Input label="Email" placeholder="Email" />
                <Gap height={18} />
                <Input label="Password" placeholder="Password" />
                <Gap height={50} />
                <Button title="Login" />
                <Gap height={100} />
                <Link title="Dont Have account? Please Register."></Link>
            </div>
        </div>
        </div>
    );
};

export default Login;
