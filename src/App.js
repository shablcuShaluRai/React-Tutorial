import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// React router using arrow function
const BasicExample = () => (
  //The <Route> component is the main building block of React Router.
  // Anywhere that we  want to only render something if it matches the location’s pathname,
  // then we should create a <Route> element.
  <Router>
    <div>
      <ul>
      //Finally, our application needs a way to navigate between pages.
      // If we were to create links using anchor elements, clicking on them would cause the whole page to reload.
      // React Router provides a <Link> component to prevent that from happening.
      // When clicking a <Link>, the URL will be updated and the rendered content will change without reloading the page.

        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topic">Topic</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
        <Route path="/topic" component={Topic}/>

    </div>
  </Router>
)

const Home = () => (
  <div>
    <h2>Now!Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2> All About Link </h2>
  </div>
)
const Topic = () => (  <div>
  <h2>topic is here </h2>
  </div>
)



export default BasicExample
