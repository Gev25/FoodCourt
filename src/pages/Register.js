import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "../store/actions/register";
import Header from '../components/Header'


function Register() {
    const dispatch = useDispatch();
    const status = useSelector(state => state.register.status);
    // const registerErrors = useSelector(state => state.register.registerErrors);

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNum: '',
        password: '',
        confirmPassword: '',
    });
    const [error, setError] = useState('');

    const handleChangeValues = useCallback((val, key) => {
        setValues({
            ...values,
            [key]: val,
        });
    }, [values]);

    const handleRegister = useCallback((e) => {
        e.preventDefault();
        const data = {...values};
        // if (data.password === data.repeat) {
            dispatch(registerUser(data));
        // }
        // else {
        //     setError('Wrong repeat password!');
        // }

    }, [values]);

    const handleBlur = useCallback((e) => {
        const data = {...values};
        if (data.password === e.target.value) {
            setError('');
        } else {
            setError('Wrong repeat password!');
        }

    }, [values]);

    useEffect(() => {
        if (status === 'success') {
            setValues({
                firstName: '',
                lastName: '',
                email: '',
                phoneNum: '',
                password: '',
                confirmPassword: '',
            });
        }
    }, [status]);

    return (
        <div className='container__signup'>
            <Header/>
            <div className="box">
                <div className="signup">
                    <form>
                        <h2 className='title'>Sign In</h2>
                        <div className="input-field">
                            <i className="ri-user-fill"></i>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                placeholder="First Name"
                                value={values.firstName}
                                onChange={(e) => {
                                    handleChangeValues(e.target.value, 'firstName')
                                }}
                            />
                        </div>
                        <div className="input-field">
                            <i className="ri-user-fill"></i>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                placeholder="Last Name"
                                value={values.lastName}
                                onChange={(e) => {
                                    handleChangeValues(e.target.value, 'lastName')
                                }
                                }
                            />
                        </div>
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
                            <i className="ri-phone-fill"></i>
                            <input
                                type='tel'
                                className="form-control"
                                id="phoneNum"
                                placeholder="Phone Number"
                                value={values.phoneNum}
                                onChange={(e) => {
                                    handleChangeValues(e.target.value, 'phoneNum')
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
                        <div className="input-field">
                            <i className="ri-lock-fill"></i>
                            <input
                                onBlur={handleBlur}
                                type="password"
                                className="form-control"
                                id="confirmPassword"
                                placeholder="Confirm Password"
                                value={values.repeat}
                                onChange={(e) => {
                                    handleChangeValues(e.target.value, 'confirmPassword')
                                }}
                            />
                            {/*<p>{error</p>*/}
                        </div>
                        <button className='sing-up-btn' onClick={handleRegister}>
                            <p>Register</p>
                        </button>
                    </form>
                </div>
            </div>

            {/*{*/}
            {/*    status === 'fail' ? (<ToastContainer>*/}
            {/*        {toast.error('Error')}*/}
            {/*    </ToastContainer>) : null*/}
            {/*}*/}
        </div>


    );
}

export default Register;
