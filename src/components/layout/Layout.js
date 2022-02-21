import React from 'react';
import Header from './Header';

const Layout = (props) =>{
    const { children } = props;
    return (
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    {children}   
                </div>
                <div>
                <p>@2022 Diego's Store inc, All Rights Reseverd</p>
                </div>
            </div>
    )
}


export default Layout;