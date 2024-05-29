import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import CreatePost from './components/Blog/CreatePost';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/create-post" component={CreatePost} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
