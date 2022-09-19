import React, { Component, Fragment } from 'react';

import NavBar from "./NavBar";
import Footer from "./Footer";
import { RandomProfileGenerator } from '../hooks/Sandbox';

class ProfileGenerator extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <div className='page'>
                    <RandomProfileGenerator />
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default ProfileGenerator;
