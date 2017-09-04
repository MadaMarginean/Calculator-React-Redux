import React, {Component} from 'react';
import './home.css';
import Nav from '../Nav';
import albumsImg from '../assets/albums.jpg';
import postsImg from '../assets/posts.png';
import calculatorImg from '../assets/calculator.png';
import { Link } from 'react-router-dom';

class Home extends Component {
  render(){
    return (
       <div>
        <Nav />
        <a href="/albums">
          <img src={albumsImg} alt="" id="image" />
        </a>
        <a href="/posts">
          <img src={postsImg} alt="" id="image"></img>
        </a>
        <a href="/calculator">
          <img src={calculatorImg} alt="" id="imageCalc"></img>
        </a>
      </div>
    );
  }
}

export default Home
