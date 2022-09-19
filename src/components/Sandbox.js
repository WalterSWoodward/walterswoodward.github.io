import React, { Component, Fragment } from 'react';

import NavBar from "./NavBar";
import Footer from "./Footer";
import { RandomProfileGenerator } from '../hooks/Sandbox';

class Sandbox extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <div className='page'>
                    <div className='page__row page-row__name'>Welcome to Walter's React Sandbox</div>
                    <RandomProfileGenerator />
                </div>
                <Footer />
            </Fragment>
        );
    }
}

export default Sandbox;
