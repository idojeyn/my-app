import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Question from '../question/Question'
import Reason from '../reason/Reason'
import './App.css'
import Awesome from '../awesome/awesome'

const App = () => {
  return (
    <div>
        <Header/>
        <Awesome/>
        <Reason/>
        <Question/>
        <Footer/>
    </div>
  )
}

export default App