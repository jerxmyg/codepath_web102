import React from "react";
import {useState} from "react";
import './App.css'
import arrow from './assets/arrow.png'
import backArrow from './assets/backArrow.png'
import Flashcard from './components/Flashcards.jsx';




function App()  {
  const [count, setCount] = useState(0);
  
  
  const ok = () => {
    console.log()
  }

  const Flashcards = [
    <Flashcard question="The Bronx is the only borough of New York City which is believed to be part of the United States mainland." answer="True" />,

    <Flashcard question="The major sports arena located in the Bronx is..." answer="Yankee Stadium"/>,

    <Flashcard question="Which famous university calls The Bronx its home?" answer="Fordham University"/>,

    <Flashcard question="The Bronx boasts its own beach which faces Long Island Sound. What is the name of this well known beach area?" answer="Orchard Beach"/>,

    <Flashcard question="What is probably one of the most famous zoos in the world is located here. It's called The Bronx Zoo." answer="True"/>,

    <Flashcard question="Which park, which is the fourth largest in the city, is located in the Northern Bronx, along the border with Westchester County?" answer="Van Cortlandt Park"/>,

    <Flashcard question="This amusement park which was once located in the Bronx, is no longer in existence. Name it!" answer="Freedomland"/>,

    <Flashcard question="There is a Hall Of Fame for Great Americans located in The Bronx." answer="True"/>,

    <Flashcard question="What Bronx high school has the most Nobel Prize winners?" answer="Bronx Science"/>,

    <Flashcard question="What two letters are an abbreviation for the Bronx?" answer="BX"/>
  ]

  const [card, changeFlashcard] = React.useState(Flashcards[Math.floor(Math.random()*Flashcards.length)])

  const [text, changeText] = React.useState(card.props.question)



  console.log(card.props.question)
  const question = card.props.question
  const answer = card.props.answer 

  

  const cardClick = () => {

    if (text===question){
      changeText(answer)
    }

    else if (text===answer){
      changeText(question)
    }
  }
  

  const shuffle = () => {
    
    const newCard = Flashcards[Math.floor(Math.random()*Flashcards.length)]
    
    changeText(newCard.props.question)
    changeFlashcard(newCard)
  }

  const forward = () => {

    const flashwhatever = count + 1
    changeText(Flashcards[flashwhatever].props.question)
    changeFlashcard(Flashcards[flashwhatever])
    setCount(flashwhatever)
    
  }

  const back = () => {
    
    const flashwhatever = count - 1
    changeText(Flashcards[flashwhatever].props.question)
    changeFlashcard(Flashcards[flashwhatever])
    setCount(flashwhatever)
    }
  

  const guess = () => {

  }
  

  return(

    <div className="App">
      
      <div className="information">

        <h3>The Bronx Trivia</h3>
        <h6>How much do you know about The Bronx? Find out through these questions!</h6>
        <h6>Number of cards: {Flashcards.length}</h6>

      </div>

      <div onClick={cardClick} className="flashcards">

        {text}

      </div>

        <button onClick={back} className="backArrow"> <img src={backArrow} width="40px"/> </button>

        <button onClick={forward} className="forwardArrow"> <img src={arrow} width="40px"/> </button>

        <button onClick={shuffle} className="shuffleButton"> Shuffle </button>
        
        <button onClick={guess} className="guessButton"> Guess </button>


    </div>
  )
}

export default App;

