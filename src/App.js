import React from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl'

import Landing from './components/Landing';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About'

const App = () =>{

  return(
    <div className="Page">
    <Layout >
        <Header className="Header" title="Alexis Poveda" scroll>
            <Navigation>
                <a href="#projects">Projects</a>
                <a href="#about">About Me</a>
                <a href="#contact">Contact</a>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
                <a href="#projects">Projects</a>
                <a href="#about">About Me</a>
                <a href="#contact">Contact</a>
            </Navigation>
        </Drawer>
        <Content>
        <Landing/>
            <Projects/>
            <About/>
            <Contact/>
        </Content>
            <div/>
    </Layout>
</div>
  )
}

export default App;
