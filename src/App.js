import React, { Component } from "react";
import "./App.css";
import Cards from "./components/images";
import pictures from "./pictures.json";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {

    
 
  state = {
    message: "",
    topScore: 0,
    currentScore: 0,
    characters: pictures,
    unselectedCharacter: pictures,
    chris: {
      display: "block",
      transform: "none",
      transition: "all 0s ease 0s"
    },
    container: {
      display: "none"
    },
    cross: {
      display: "block",
      left: "850px",
      position: "relative",
      transform: "none",
      transition: "all 0s ease 0s"
    },
    messagestyle: {
      transform: "none"
    },
    play: {
      display: "none"
    },
    sidebar: {
      display: "none"
    }
    
  };

  componentDidMount() { 
   setTimeout(
      function() {
          this.chris();
      }
      .bind(this),
      100
   );
  setTimeout(
    function() {
        this.cross();
    }
    .bind(this),
    100
);
setTimeout(
  function() {
    this.setState({
      play: {
       display: "block"
      }
     });
 
  }
  .bind(this),
  7000
);
    
  }

chris = () => {
    this.setState({
     chris: {
      transform: "translate(80%)",
      transition: "transform 1000ms ease-in-out"
     }
    });

    setTimeout(
      function() {
        this.setState({
          chris: {
           transform: "translate(5%)",
           transition: "transform 1000ms ease-in-out"
          }
         });
      }
      .bind(this),
      1000
  );  

  setTimeout(
    function() {
      this.setState({
        chris: {
         transform: "translate(0px, 400px)",
         transition: "transform 1000ms ease-in-out"
        }
       });
    }
    .bind(this),
    2000
);

setTimeout(
  function() {
    this.setState({
      chris: {
       transform: "translate(0px, 200px)",
       transition: "transform 1000ms ease-in-out"
      }
     });
  }
  .bind(this),
  3000
);

setTimeout(
  function() {
    this.setState({
      chris: {
       transform: "translate(32%, 200px)",
       transition: "transform 1000ms ease-in-out"
      }
     });
  }
  .bind(this),
  4000
);

setTimeout(
  function() {
    this.setState({
      chris: {
       transform: "translate(5px)",
       transition: "transform 1000ms ease-in-out"
      }
     });
  }
  .bind(this),
  5000
);

  };

cross = () => {
    this.setState({
     cross: {
      left: "850px",
      position: "relative",
      transform: "translate(-70%)",
      transition: "transform 1000ms ease-in-out"
     }
    });

    setTimeout(
      function() {
        this.setState({
          cross: {
          left: "850px",
          position: "relative",
          transform: "translate(10%)",
          transition: "transform 1000ms ease-in-out"
          }
         });
      }
      .bind(this),
      1000
  );  

  setTimeout(
    function() {
      this.setState({
        cross: {
        left: "850px",
        position: "relative",
        transform: "translate(0px, -400px)",
        transition: "transform 1000ms ease-in-out"
        }
       });
    }
    .bind(this),
    2000
);

setTimeout(
  function() {
    this.setState({
      cross: {
      left: "850px",
      position: "relative",
      transform: "translate(0px, 0px)",
      transition: "transform 1000ms ease-in-out"
      }
     });
  }
  .bind(this),
  3000
);

setTimeout(
  function() {
    this.setState({
      cross: {
      left: "850px",
      position: "relative",
      transform: "translate(-25%)",
      transition: "transform 1000ms ease-in-out"
      }
     });
  }
  .bind(this),
  4000
);
setTimeout(
  function() {
    this.setState({
      cross: {
      left: "850px",
      position: "relative",
      transform: "translate(5%, 250px)",
      transition: "transform 1000ms ease-in-out"
      }
     });
  }
  .bind(this),
  5000
);

  };
  
  playgame = () => {
    this.setState({
      chris: {
        display: "none"
      },
      container: {
        display: "flex"
      },
      cross: {
        display: "none"
      },
      play: {
        display: "none"
      },
      sidebar: {
        display: "block"
      }
    });
  };


  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  lose = () => {
    this.setState({
      message: "You Lose",
      messagestyle: {
        transform: "scale(3.5)"
      },
      topScore:
        this.state.currentScore > this.state.topScore
          ? this.state.currentScore
          : this.state.topScore,
      currentScore: 0,
      characters: pictures,
      unselectedCharacter: pictures
    });
  };

  win = () => {
    this.setState({
      message: "You Win!!",
      messagestyle: {
        transform: "scale(3.5)"
      },
      topScore: 16,
      currentScore: 0,
      characters: pictures,
      unselectedCharacter: pictures
    });
  };



  selectCharacter = name => {
    const findCharacter = this.state.unselectedCharacter.find(
      item => item.name === name
    );
    this.setState({
      messagestyle: {
        transform: "scale(0)"
      }
    });

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

    if (this.state.currentScore === 15) {
      const newCharacter = this.state.unselectedCharacter.filter(
        item => item.name !== name
      );
      
     this.win();
    }
  };

  render() {
    return (
      <div>
  
        <p className="logo" style={this.state.chris}>Chris</p>
        <p className="logo" style={this.state.cross}>Cross</p>
        <button onClick={this.playgame} style={this.state.play}>Click To Play</button>
       
        <main className="container" style={this.state.container}>
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
        <div className="sidebar" style={this.state.sidebar}>
        <p className="chriscross">Chris</p>
        <p className="chriscross sidecross">Cross</p>
        <p>Click on all twelve images of the Chris' before clicking on one twice to win!</p>
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
          <p className="message" style={this.state.messagestyle}>
          {this.state.message }
          </p>
        </div>
        
      </div>
    );
  }
}
export default App;
