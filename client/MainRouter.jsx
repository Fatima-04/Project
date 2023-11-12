import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './core/Home' 
import About from './core/About'
import Cakes from './core/Cakes'
import Account from './core/Account'
import CustomOrder from './core/CustomOrder'
const MainRouter = () => {
    return ( <div> 
        <Routes>
            <Route exact path="/" element={<Home />}/> 
            <Route exact path="/about" element={<About />}/>
            <Route exact path="/cake" element={<Cakes />}/>
            <Route exact path="/account" element={<Account />}/>
            <Route exact path="/customorder" element={<CustomOrder />}/>
        </Routes>
        </div> 
    )
}
export default MainRouter