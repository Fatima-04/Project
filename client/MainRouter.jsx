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
            <Route exact path="/" component={Home}/> 
            <Route exact path="/about" component={About}/>
            <Route exact path="/cake" component={Cakes}/>
            <Route exact path="/account" component={Account}/>
            <Route exact path="/customorder" component={CustomOrder}/>
        </Routes>
        </div> 
    )
}
export default MainRouter