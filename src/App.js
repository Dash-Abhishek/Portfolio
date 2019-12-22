import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Navbar from './components/Navbar/Navbar';
import Contact from './components/Contact/Contact';
import styles from 'styled-components';
import { ThemeProvider } from 'styled-components';
import Datafeed from './components/Feed/DataFeed';
import LoginPage from './components/LoginPage/LoginPage';


const Container = styles.div`
background-color: #2d3436;
background-image: linear-gradient(360deg, #1976D2 0%, #000000 74%);
flex: 1;
resizeMode: 'cover'
width: 180vh;
height: 100vh;
`

const theme = {
  primarycolor:"aliceblue",
  secondarycolor: "aliceblue",
  ternarycolor: "#ff5722",
  pannelcolor: "#242f40"
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/skills" component={Skills}></Route>
            <Route exact path="/projects" component={Projects}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/login" component={LoginPage}></Route>
          </Switch>
        </Router>
        <Datafeed/>
      </Container>
    </ThemeProvider>


  );
}

export default App;
