import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(){
    super();
    this.state ={
      Picture : 'https://london.dauphine.fr/fileadmin/mediatheque/london/pics/Team/Caroline_Gautier.jpg',
      Firstname : 'Caroline',
      Lastname : 'Gautier',
      Birthday : '15 juin 1970',
      Tweet : 'Hum sorry ? I heard someone say "je ne sais pas"'
    }
  }
  Zacchary =() => {
    this.setState({
      Picture : 'https://m.media-amazon.com/images/M/MV5BYmM3MGZhNmYtZTk1Ny00ZGI4LWI1YTgtYzg1ZTdiZGU5YjU5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMjIwNzI3ODY@._V1_.jpg',
      Firstname : 'Zacchary',
      Lastname : 'Falconer-Barfield',
      Birthday : '6 mai 1985',
      Tweet : "Saviez-vous que le nombre 6 est un nombre impair ?"
    });
  }
  Lal =() => {
    this.setState({
      Picture : 'http://www.dcs.gla.ac.uk/~sumitha/sumitha.jpg',
      Firstname : 'Lal',
      Lastname : 'Balasuriya',
      Birthday : '22 janvier 1998',
      Tweet : 'Il faut savoir différencier des loups et des lynx pour aller loin dans la vie'
    });
  }
  Caroline =() => {
    this.setState({
      Picture : 'https://london.dauphine.fr/fileadmin/mediatheque/london/pics/Team/Caroline_Gautier.jpg',
      Firstname : 'Caroline',
      Lastname : 'Gautier',
      Birthday : '15 juin 1970',
      Tweet : 'Hum sorry ? I heard someone say "je ne sais pas"'
    });
  }
  Background = () => {
    if(this.state.backgroundcolor === "white"){
      this.setState({
        backgroundcolor: "#85FEFF",
      });
    }
    else if(this.state.backgroundcolor === "#85FEFF"){
      this.setState({
        backgroundcolor: "#FFF754",
      });
    }
    else if(this.state.backgroundcolor === "#FFF754"){
      this.setState({
        backgroundcolor: "pink",
      });
    }
    else{
      this.setState({
        backgroundcolor: "white",
      });
    }
  }


  render() {
    return (
      <div>
        <div class="buttons">
          <button class="button" onClick={this.Zacchary}>Zacchary</button>
          <button class="button" onClick={this.Lal}>Lal</button>
          <button class="button" onClick={this.Caroline}>Caroline</button>
        </div>
        <div class="box" style={{backgroundColor: this.state.backgroundcolor}}>
          <div>
            <div><img src={this.state.Picture} alt="img" /></div>
            <div class="info">{this.state.Firstname}</div>
            <div class="info">{this.state.Lastname}</div>
            <div class="info">{this.state.Birthday}</div>
          </div>
          <button class="button2" onClick={this.Background}>Changer de style</button>
        </div>
        <div class="box">
          <p>
            Dernier tweet : {this.state.Tweet}
          </p>
          <button class="button">C'est cool &#129305;</button>
        </div>
      </div>
    );
  }
}

