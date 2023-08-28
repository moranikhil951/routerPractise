import './App.css'

import {Route, Switch} from 'react-router-dom'

import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Contact from './components/Contact'

const App = () => (
  <>
    <div className="total-container">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <NotFound component={NotFound} />
      </Switch>
    </div>
  </>
)

export default App
