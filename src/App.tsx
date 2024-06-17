import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import MyBtn from "./components/Mybtn";
import Score from "./components/Score";

let num = 0;
let score = 0;

function App() {

  const questions = [
    { question:"Which of these movies is not based on a book?", answer:"Avatar"},
    { question:'Who directed the film adaptation of J.R.R. Tolkien\'s "The Lord of the Rings" trilogy?', answer:"Peter Jackson"},
    { question:'In the "Harry Potter" film series, who played the character Hermione Granger?', answer:"Avatar"},
    { question:"Which of Jane Austen's novels was adapted into the movie starring Keira Knightley?", answer:"Emma Watson"},
    { question:"Which 2013 film, directed by Alfonso Cuarón, follows two astronauts stranded in space after their shuttle is destroyed?", answer:"Gravity"},
    { question:"What is the title of the 1979 Ridley Scott film that introduced the iconic extraterrestrial creature known as the Xenomorph?", answer:"Alien"},
    { question:'Who directed the 2014 science fiction film "Interstellar"?', answer:"Christopher Nolan"},
    { question:'Who narrates the animated classic "How the Grinch Stole Christmas!"?', answer:"Boris Karloff"},
  ];

  const [score, setScore] = useState(0);

  const [card, setCard] = useState("Blank");

  const goBack = () => {
    if (num > 0) {
      num--;
      setCard(questions[num].question);
    }
  };

  const nextCard = () => {
    if (num < questions.length - 1) {
      num++;
      setCard(questions[num].question);
    }
  };

  return (
    <>
    <div className="App">
      <div className="row">
        <div className="col">
          <MyBtn onClick={goBack}>Back</MyBtn>
        </div>
        <div className="col">
          <Card>{card}</Card>
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
