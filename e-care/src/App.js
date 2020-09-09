import React from 'react'
import './App.css';

import HomePage from './Page/HomePage/HomePage';

import PublicNav from './Components/Partials/PublicNav/PublicNav';
import Footer from './Components/Partials/Footer/Footer';

import { Switch, Route } from 'react-router-dom'



const App = () => {
  return (
    <div>
      <PublicNav />
      <Switch>
        <Route path='/' component={HomePage} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
