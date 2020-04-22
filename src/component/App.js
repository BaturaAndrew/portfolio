import React, {Component} from 'react';
import './App.scss';
import Header from './Header';
import About from './About/About';
import Contacts from './Contacts/Contacts';
import Projects from './Projects/Projects';
import Footer from './Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

class App extends Component {
  componentDidMount() {
    AOS.init({
      duration: 3000,
    });
  }

  render() {
    return (
      <div className="app flex-column">
        <Header />
        <About />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    );
  }
}
export default App;
