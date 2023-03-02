import React, {useState} from 'react';
import Loader from "./Loader";
import _ from "lodash";
import {Helmet} from 'react-helmet';
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";



function Wrapper(props) {
    const {children = {}, pageName} = props;
    const [status, setStatus] = useState('');

    return (
        <div className='wrapper'>
            <Helmet>
                <title>{_.startCase(pageName)}</title>
            </Helmet>
            <Header/>
            {children}
            {
                status.includes('pending') ? (
                    <Loader/>
                ) : null
            }
            <Footer/>
        </div>
    );
}


Wrapper.propTypes = {
    statuses: PropTypes.object,
    children: PropTypes.any,
    pageName: PropTypes.string.isRequired,
}

export default Wrapper;