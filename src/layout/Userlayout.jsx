import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header';
import Footer from '../Components/Footer'

function Userlayout() {
    return (
        <div>

            <div className="mainmainuser">
                <div className="headermains">
                    <Header />
                </div>
                <div className="portion">
                    <Outlet/>

                </div>
                <div className="footermains">
                    <Footer />
                </div>

            </div>
        </div>
    )
}

export default Userlayout
