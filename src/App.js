import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.css'

//pages
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import Contact from './pages/Contact'

const App = () => {
  const authenticate = () => {
    return new Promise((resolve) => setTimeout(resolve, 1000))
  }
  useEffect(() => {
    authenticate().then(() => {
      const ele = document.getElementById('ipl-progress-indicator')
      if (ele) {
        // fade out
        ele.classList.add('available')
        setTimeout(() => {
          // remove from DOM
          ele.outerHTML = ''
        }, 2000)
      }
    })
  }, [])

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/about-me" component={AboutMe} />
        <Route path="*" component={Error} />
      </Switch>
    </>
  )
}
export default App
