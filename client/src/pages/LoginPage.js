import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Login from '../components/Login'

export default function LoginPage() {
    return (
        <div className="pagecontainer">
            <div className="contentwrap">
                <Header />
                <Login />
                <Login />
                <Login />
                <Login />
            </div>
            <Footer />
        </div>
    )
}
