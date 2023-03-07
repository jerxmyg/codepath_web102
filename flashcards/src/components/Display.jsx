import React from "react";

import Flashcard from './Flashcards.jsx'
import arrow from '../assets/arrow.png'

import './Display.css'



const Display = () => {
  
  const ok = () => {
    console.log()
  }

  const Flashcards = [

    <Flashcard question="The Bronx is the only borough of New York City which is believed to be part of the United States mainland." answer="True!" color="lightblue"/>,

    <Flashcard question="The major sports arena located in the Bronx is..." answer="Yankee Stadium!"/>,

    <Flashcard question="Which famous university calls The Bronx its home?" answer="Fordham University"/>,

    <Flashcard question="The Bronx boasts its own beach which faces Long Island Sound. What is the name of this well known beach area?" answer="Orchard Beach!"/>,

    <Flashcard question="What is probably one of the most famous zoos in the world is located here. It's called The Bronx Zoo." answer="True!"/>,

    <Flashcard question="Which park, which is the fourth largest in the city, is located in the Northern Bronx, along the border with Westchester County?" answer="Van Cortlandt Park!"/>,

    <Flashcard question="This amusement park which was once located in the Bronx, is no longer in existence. Name it!" answer="Freedomland"/>,

    <Flashcard question="There is a Hall Of Fame for Great Americans located in The Bronx." answer="True!"/>
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
  const arrowClick = () => {
    
    const newCard = Flashcards[Math.floor(Math.random()*Flashcards.length)]
    
    changeText(newCard.props.question)
    changeFlashcard(newCard)
  }


  return(
    <div className="display">

      <div className="information">

        <h3>The Bronx Trivia</h3>
        <h6>How much do you know about The Bronx? Find out through these questions!</h6>
        <h6>Number of cards: {Flashcards.length}</h6>

      </div>

      <div onClick={cardClick} className="flashcards">

        {text}

      </div>

      <button onClick={arrowClick} className="arrowButton"><img src={arrow} width="40px"/></button>

    </div>
  )
}

export default Display;
