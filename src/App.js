import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Blogs from './Pages/Blogs/Blogs';
import About from './Pages/Home/About/About';
import Contacts from './Pages/Home/Contacts/Contacts';
import Home from './Pages/Home/Home/Home';
import Project1 from './Pages/Project1/Project1';
import Project2 from './Pages/Project2/Project2';
import Resume from './Pages/Resume/Resume';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/resume">
          <Resume/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contacts />
        </Route>
        <Route path="/details">
          <Project1 />
        </Route>
        <Route path="/details2">
          <Project2 />
        </Route>

      </Switch>

      <Footer/>


    </BrowserRouter>
  );
}

export default App;
