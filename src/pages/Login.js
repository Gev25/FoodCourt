import React, {useCallback, useEffect, useState} from 'react';
import Header from "../components/Header";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {login} from "../store/actions/login";
import _ from 'lodash';


function Login() {
    const dispatch = useDispatch();
    const status = useSelector(state => state.login.status);
    const error = useSelector(state => state.login.error);
    const navigate = useNavigate();
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const handleChangeValues = useCallback((val, key) => {
        setValues({
            ...values,
            [key]: val,
        });
    }, [values]);


    const handleSgnIn = useCallback(() => {

        const sendData = {...values}
        dispatch(login(sendData));
    }, [values]);


    useEffect(() => {
        if (status === 'success') {
            toast.success('Successfully logged in' )
            setValues({
                email: '',
                password: '',
            });
            navigate('/');
        }
    }, [status]);

    useEffect(() => {
        if(!_.isEmpty(error)){
            toast.error(error.message);
        }
    }, [error]);

    return (

        <div className='container__signup'>
            <Header/>
            <div className="box">
                <div className="signup">
                    <form>
                        <h2 className='title'>Sign In</h2>
                        <div className="input-field">
                            <i className="ri-mail-fill"></i>
                            <input
                                type="text"
                                className="form-control"
                                id="email"
                                placeholder="Email"
                                value={values.email}
                                onChange={(e) => {
                                    handleChangeValues(e.target.value, 'email')
                                }}
                            />
                        </div>
                        <div className="input-field">
                            <i className="ri-lock-fill"></i>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                value={values.password}
                                onChange={(e) => {
                                    handleChangeValues(e.target.value, 'password')
                                }}
                            />
                        </div>
                        <button className='sing-up-btn'
                                onClick={handleSgnIn}
                            type='button'
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
