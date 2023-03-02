import React from 'react';
import {CircularProgress} from "@mui/material";

function Loader() {
    return (
        <div>
            <CircularProgress className='loading' color="secondary"/>
        </div>
    );
}

export default Loader;