import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import {toast} from "react-toastify";
import Modal from "react-modal";
import Wrapper from "../components/Wrapper";
import {getUserProfileRequest} from "../store/actions/user";
import Validator from "../helpers/Validator";
import Header from "../components/Header";
import {UserModifyRequest} from "../store/actions/modify";
import {UserForgetRequest} from "../store/actions/forget";
import {UserChangeRequest} from "../store/actions/changepass";

function Profile() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user);
    const getUserStatus = useSelector(state => state.user.status);
    const statusModify = useSelector(state => state.modify.status);
    const statusGetKey = useSelector(state => state.forget.status);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [passwordModalIsOpen, setPasswordModalIsOpen] = useState(false);
    const [newValues, setNewValues] = useState({
        token: '',
        password: '',
        confirmPassword: ''
    });


    const [value, setValue] = useState({
        key: '',
        name: '',
        value: '',
    });

    useEffect(() =>{
        if(statusModify === 'success'){
            openCloseModal();
        }
    },[statusModify]);

    useEffect(() =>{
        if(statusGetKey === 'success'){
            openCloseModal();
            openClosePassModal();
        }
    },[statusGetKey]);


    const openCloseModal = useCallback((key, val, name) => {
        if (modalIsOpen) {
            setValue({
                key: '',
                name: '',
                value: '',
            });

            setNewValues({
                ...newValues,
                password: '',
                token: '',
                confirmPassword: '',
            });
        } else if (key && val && name) {
            setValue({
                key,
                name,
                value: val,
            });
        }

        setModalIsOpen(!modalIsOpen);
    }, [modalIsOpen, newValues]);

    const openClosePassModal = useCallback(() => {
        setNewValues({
            ...newValues,
            password: '',
            token: '',
            confirmPassword: '',
        });
        setPasswordModalIsOpen(!passwordModalIsOpen);
    }, [passwordModalIsOpen, newValues]);

    const handleChangeValue = useCallback((val) => {
        setValue({
            ...value,
            value: val,
        });
    }, [value]);

    const handleChangeNewValues = useCallback((key, val) => {
        setNewValues({
            ...newValues,
            [key]: val,
        });
    }, [newValues]);

    const handleModifyAccount = useCallback(async () => {
        let validateValues;

        if(value.key === 'firstName'){
            validateValues = [Validator.validFName(value.value)]
            toast.success('Changes have been made successfully')
        }else if(value.key === 'lastName'){
            validateValues = [Validator.validLName(value.value)];
            toast.success('Changes have been made successfully')
        }else if(value.key === 'phoneNum'){
            validateValues = [Validator.validPhoneNum(value.value)];
            toast.success('Changes have been made successfully')
        }

        const invalidVal = validateValues.find((v) => v!==true);

        if(invalidVal){
            toast.error(`Invalid ${invalidVal}`);
            return;
        }

        dispatch(UserModifyRequest({
            [value.key]: value.value,
        }));

    }, [value]);

    const handleGetKey = useCallback(async () => {
        dispatch(UserForgetRequest(user.email));
    }, [value, newValues]);

    const handleChangePass = useCallback(async () => {
        const validateValues = [
            Validator.validPass(newValues.password),
            Validator.validPass(newValues.confirmPassword),
            Validator.validUUID(newValues.token),
        ];

        const invalidVal = validateValues.find((v) => v!==true);

        if(invalidVal){
            toast.error(`Invalid ${invalidVal}`);
            return;
        }

        if(newValues.confirmPassword !== newValues.password){
            toast.error("Confirm password is wrong!");
            return
        }

        dispatch(UserChangeRequest({
            email: user.email,
            password: newValues.password,
            token: newValues.token,
            confirmPassword: newValues.confirmPassword,
        }))

        // if (data.error) {
        //     toast.error("Something goes wrong!");
        //     return;
        // }else if(data.payload.status === 'ok'){
        //     openClosePassModal();
        //     toast.success('Password changed successfully.');
        // }
    }, [newValues]);

    useEffect(() => {
        dispatch(getUserProfileRequest());
    }, []);


    return (
        <Wrapper
            pageName='profile'
            statuses={{getUserStatus, /*statusModify, getKeyStatus, changePassStatus*/}}
        >
            <Header/>
            <div className='column'>
                <div className='profile__header'>
                    <h3>{`Hi Dear ${!_.isEmpty(user) ? user.firstName : ''}`}</h3>
                </div>
                {
                    !_.isEmpty(user) ? (
                        <div className="profile__table">
                            <table className="table">
                                <tbody>
                                <tr
                                    className='profile__row'
                                    onClick={() => {
                                        openCloseModal('firstName', user.firstName, 'First Name')
                                    }}
                                >
                                    <td>First Name</td>
                                    <td>{user.firstName}</td>
                                    <td>></td>
                                </tr>
                                <tr
                                    className='profile__row'
                                    onClick={() => {
                                        openCloseModal('lastName', user.lastName, 'Last Name')
                                    }}
                                >
                                    <td>Last Name</td>
                                    <td>{user.lastName}</td>
                                    <td>></td>
                                </tr>
                                <tr
                                    className='profile__row'
                                    onClick={() => {
                                        openCloseModal('phoneNum', user.phoneNum, 'Phone Number')
                                    }}
                                >
                                    <td>Phone Num</td>
                                    <td>{user.phoneNum}</td>
                                    <td>></td>
                                </tr>
                                <tr
                                    className='profile__row'
                                    onClick={() => {
                                        openCloseModal('email', user.email, 'Email')
                                    }}
                                >
                                    <td>Password</td>
                                    <td>Forgot password?</td>
                                    <td></td>
                                </tr>
                                <tr className='profile__row'>
                                    <td>Email</td>
                                    <td>{user.email}</td>
                                    <td></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    ) : null
                }
            </div>

            <Modal
                isOpen={modalIsOpen}
                className="modals small"
                overlayClassName="overlays"
                onRequestClose={() => {
                    openCloseModal()
                }}
            >
                <div className="bg-light rounded h-100 p-4 modal-container">
                    <div
                        className="modal_close"
                        onClick={() => {openCloseModal()}}
                    >
                        X
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-controler"
                            id='name'
                            disabled={value.key === 'email'}
                            placeholder={value.name}
                            value={value.value}
                            onChange={(e) => {
                                handleChangeValue(e.target.value)
                            }}
                        />
                        <label htmlFor='name'>{value.name}</label>
                    </div>
                    <div className='modal-btn-container'>
                        <p
                            className="close-btn filter-btn"
                            onClick={() => {
                                openCloseModal()
                            }}
                        >
                            Cancel
                        </p>
                        <p
                            className="modify-btn filter-btn"
                            onClick={value.key === 'email' ? handleGetKey : handleModifyAccount}
                        >
                            {
                                value.key === 'email' ? 'Get Key' : 'Modify'
                            }
                        </p>
                    </div>
                </div>
            </Modal>

            <Modal
                isOpen={passwordModalIsOpen}
                className="modals small"
                overlayClassName="overlays"
                onRequestClose={() => {
                    openClosePassModal()
                }}
            >
                <div className="bg-light rounded h-100 p-4 modal-container">
                    <div
                        className="modal_close"
                        onClick={() => {openClosePassModal()}}
                    >

                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id='token'
                            placeholder='Token'
                            value={newValues.token}
                            onChange={(e) => {
                                handleChangeNewValues('token', e.target.value)
                            }}
                        />
                        <label htmlFor='token'>Token</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id='password'
                            placeholder='Password'
                            value={newValues.password}
                            onChange={(e) => {
                                handleChangeNewValues('password', e.target.value)
                            }}
                        />
                        <label htmlFor='password'>Password</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id='confirmPassword'
                            placeholder='Confirm password'
                            value={newValues.confirmPassword}
                            onChange={(e) => {
                                handleChangeNewValues('confirmPassword', e.target.value)
                            }}
                        />
                        <label htmlFor='confirmPassword'>Confirm password</label>
                    </div>
                    <div className='modal-btn-container'>
                        <button
                            className="close-btn filter-btn"
                            onClick={() => {
                                openClosePassModal();
                                openCloseModal('email', user.email, 'Email');
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            className="modify-btn filter-btn"
                            onClick={async () => {
                                await handleChangePass();
                            }}
                        >
                            Change Password
                        </button>
                    </div>
                </div>
            </Modal>
        </Wrapper>
    );
}

export default Profile;
