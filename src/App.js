import React, { Component } from "react";
import "./App.css";
import Cards from "./components/images";

import pictures from "./pictures.json";


class App extends Component {

    
 
  state = {
    message: "",
    topScore: 0,
    currentScore: 0,
    characters: pictures,
    unselectedCharacter: pictures
    
  };

  componentDidMount() { }


  

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  lose = () => {
    this.setState({
      message: "You Lose",
      topScore:
        this.state.currentScore > this.state.topScore
          ? this.state.currentScore
          : this.state.topScore,
      currentScore: 0,
      characters: pictures,
      unselectedCharacter: pictures
    });
  };
  

  selectCharacter = name => {
    const findCharacter = this.state.unselectedCharacter.find(
      item => item.name === name
    );

    if (findCharacter === undefined) {
      // failure to select a new character
      
      this.lose();
      
    } else {
      // success to select a new character
      const newCharacter = this.state.unselectedCharacter.filter(
        item => item.name !== name
      );

      this.setState({
        message: "",
        currentScore: this.state.currentScore + 1,
        characters: pictures,
        unselectedCharacter: newCharacter
      });
    }

    this.shuffleArray(pictures);

    if (this.state.currentScore === 11) {
      const newCharacter = this.state.unselectedCharacter.filter(
        item => item.name !== name
      );
      
      this.setState({
        message: 
        this.state.currentScore > this.state.topScore
        ? "You Lose"
        : "You Win!",
        topScore:
          this.state.currentScore > this.state.topScore
            ? this.state.currentScore
            : 12,
        currentScore: 0,
        characters: pictures,
        unselectedCharacter: pictures
      });
    }
  };

  render() {
    return (
      <div>
    
        <header>
          <h1>CHRIS CROSS</h1>
          
          <h2>
            Click on all twelve images of the Chris' before clicking on one twice to win!
          </h2>
          <div className="top">
          <h3>Top Score</h3>
          <h3>
          {this.state.topScore }
          </h3>
          </div>
          <div className="current">
          <h3>Current Score</h3>
          <h3>
          {this.state.currentScore }
          </h3>
          </div>
      
          <h3 className="message">
          {this.state.message }
          </h3>
        </header>
        <main className="container">
          {this.state.characters.map(character => (
            <Cards
              key={Math.random() * 12}
              name={character.name}
              image={character.image}
              selectCharacter={this.selectCharacter}
              currentScore={this.state.currentScore}
            />
          ))}
        </main>
        
      </div>
    );
  }
}
export default App;
