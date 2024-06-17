import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import MyBtn from "./components/Mybtn";
import Score from "./components/Score";
import Item from "./components/Item";

let num = 0;
let points = 0;

const cards = [
  { question:"Which of these movies is not based on a book?", answer:"Avatar", items: ["Little Women", "The Hunger Games", "The Godfather", "Avatar"]},
  { question:'Who directed the film adaptation of J.R.R. Tolkien\'s "The Lord of the Rings" trilogy?', answer:"Peter Jackson", items: ["Peter Jackson", "Christopher Nolan", "Steven Spielberg", "George Lucas"]},
  { question:'In the "Harry Potter" film series, who played the character Hermione Granger?', answer:"Emma Watson", items: ["Emma Watson", "Emma Stone", "Emma Roberts", "Emma Thompson"]},
  { question:"Which of Jane Austen's novels was adapted into the movie starring Keira Knightley?", answer:"Pride and Prejudice", items: ["Little Women", "The Hunger Games", "The Godfather", "Avatar"]},
  { question:"Which 2013 film, directed by Alfonso Cuarón, follows two astronauts stranded in space after their shuttle is destroyed?", answer:"Gravity", items: ["Little Women", "The Hunger Games", "The Godfather", "Avatar"]},
  { question:"What is the title of the 1979 Ridley Scott film that introduced the iconic extraterrestrial creature known as the Xenomorph?", answer:"Alien", items: ["Little Women", "The Hunger Games", "The Godfather", "Avatar"]},
  { question:'Who directed the 2014 science fiction film "Interstellar"?', answer:"Christopher Nolan", items: ["Little Women", "The Hunger Games", "The Godfather", "Avatar"]},
  { question:'Who narrates the animated classic "How the Grinch Stole Christmas!"?', answer:"Boris Karloff", items: ["Little Women", "The Hunger Games", "The Godfather", "Avatar"]},
];



function App() {

  const [score, setScore] = useState(0);

  const [card, setCard] = useState(cards[num].question); 

  const goBack = () => {
    if (num > 0) {
      num--;
      setCard(cards[num].question);
    }
  };

  const nextCard = () => {
    if (num < cards.length - 1) {
      num++;
      setCard(cards[num].question);
    }
  };

  function checkItem(item:string) {
    if (item === cards[num].answer) {
      setScore(++points);
      alert("Correct!"); 
      nextCard()
    } else alert("Wrong!")
  }
  
  
  return (
    <>
    <div className="App">
      <div className="row">
        <div className="col">
          <MyBtn onClick={goBack}>Back</MyBtn>
        </div>
        <div className="col">
          <Card>{card}</Card>
          {cards[num].items.map((element,index) => {return <Item key={index} onClick={() => checkItem(element)}>{element}</Item>})}
          
        </div>
        <div className="col">
          <MyBtn onClick={nextCard}>Next</MyBtn>
        </div>
      </div>
    </div>

    <Score>{score}</Score>
    </>
  );
}

export default App;
