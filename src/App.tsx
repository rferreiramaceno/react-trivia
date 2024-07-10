import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import MyBtn from "./components/MyButton";
import "bootstrap/dist/css/bootstrap.css";
import Score from "./components/Score";
import Alert from "./components/Alert";

const cards = [
  {question: "Which of these movies is not based on a book?",answer: "Avatar",items: ["Little Women", "The Hunger Games", "The Godfather", "Avatar"],},
  {question:'Who directed the film adaptation of J.R.R. Tolkien\'s "The Lord of the Rings" trilogy?',answer: "Peter Jackson",items: ["Ridley Scott","Peter Jackson","David Fincher","George Lucas",],},
  {question:'In the "Harry Potter" film series, who played the character Hermione Granger?',answer: "Emma Watson",items: ["Emma Watson", "Emma Stone", "Emma Roberts", "Emma Thompson"],},
  {question:"Which of Jane Austen's novels was adapted into the movie starring Keira Knightley?",answer: "Pride and Prejudice",items: ["Sense and Sensibility","Mansfield Park","Pride and Prejudice","Emma",],},
  {question:"Which 2013 film, directed by Alfonso Cuarón, follows two astronauts stranded in space after their shuttle is destroyed?",answer: "Gravity",items: ["Astronomical", "Gravity", "Black Hole", "Orbit"],},
  {question:"What is the title of the 1979 Ridley Scott film that introduced the iconic extraterrestrial creature known as the Xenomorph?",answer: "Alien",items: ["E.T. - The Extra-Terrestrial", "The Thing", "Prometheus", "Alien"],},
  {question: 'Who directed the 2014 science fiction film "Interstellar"?',answer: "Christopher Nolan",items: ["Christopher Nolan","Steven Spielberg","Quentin Tarantino","Alfred Hitchcock",],},
  {question:'Who narrates the animated classic "How the Grinch Stole Christmas!"?',answer: "Boris Karloff",items: ["Jim Carrey", "Will Ferrell", "Boris Karloff", "Tom Hanks"],},
  {question:'In "A Charlie Brown Christmas," what kind of tree does Charlie choose?',answer: "A real tree",items: ["A fake tree", "A real tree", "A giant tree", "A Christmas bush"],},
  {question:'Which 1989 film features a dysfunctional family trying to have a "good old-fashioned family Christmas"?',answer: "National Lampoon's Christmas Vacation",items: ["National Lampoon's Christmas Vacation","A Christmas Story","Scrooged","Home Alone 2: Lost in New York",],},
  {question:"Which 1999 sci-fi film directed by the Wachowskis explores the concept of simulated reality?",answer: "The Matrix",items: ["Star Trek Two", "The Matrix", "Resident Evil", "Vanilla Sky"],},
  {question:'In the movie "Home Alone," what is the name of the young boy who is accidentally left behind when his family goes on vacation for Christmas?',answer: "Kevin",items: ["Buzz", "Marvin", "Charlie", "Kevin"],},
  {question:'In the movie "Blade Runner," what is the term used for bioengineered beings that are virtually identical to humans?',answer: "Replicants",items: ["Robots", "Terminators", "Replicants", "A.I."],},
  {question:'In "The Fifth Element," who plays the character Korben Dallas, a former special forces major?',answer: "Bruce Willis",items: ["Jason Statham","Bruce Willis","Vin Diesel","Sylvester Stallone",],},
  {question:'In the "Star Wars" saga, what is the name of the desert planet where Anakin Skywalker and Luke Skywalker were raised?',answer: "Tatooine",items: ["Dimidium", "Halla", "Bambaruush", "Tatooine"],},
  {question: 'Who was known as the "King of Hollywood" during the Golden Age?',answer: "Clark Gable",items: ["Clark Gable", "Cary Grant", "Marlon Brando", "Henry Fonda"],},
  {question:'Which legendary actress starred in "Gone with the Wind" and won an Oscar for her role?',answer: "Vivien Leigh",items: ["Olivia de Havilland","Hattie McDaniel","Alicia Rhett","Vivien Leigh",],},
  {question:'Which iconic film director was responsible for classics like "Citizen Kane" and "The Third Man"?',answer: "Orson Welles",items: ["Orson Welles", "Alfred Hitchcock", "John Ford", "John Huston"],},
  {question:'Who played the role of Rick Blaine in "Casablanca," one of the most celebrated films of the era?',answer: "Humphrey Bogart",items: ["Paul Henreid", "Humphrey Bogart", "Peter Lorre", "Claude Rains"],},
  {question:"Which film won the first Academy Award for Best Picture in 1929?",answer: "Wings",items: ["7th Heaven", "The Parade", "The Racket", "Wings"],},
];

let points = 0;
let wrongAnswers : string[] = [];
let rightAnswers : string[] = [];
let gameOver = false;

function App() {
  const [score, setScore] = useState(0);
  let [currentCard, setCurrentCard] = useState(0);
  const [selectedItem, setSelectedItem] = useState("");

  const goBack = () => {
    if (currentCard > 0) {
      setCurrentCard(--currentCard);
    }
  };

  const nextCard = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(++currentCard)
    }
  };

  return (
    <>
      {gameOver && wrongAnswers.length >= 10 &&  <Alert alertOption={1}>You Lost!!!</Alert>}
      {gameOver && rightAnswers.length > 10 &&  <Alert alertOption={2}>You Won!!!</Alert>}
      
      <div className="App">
        <div className="row">
          <div className="col">
            <MyBtn onClick={goBack}>Back</MyBtn>
          </div>
          <div className="col">            
            <h4 id="question">Question {currentCard + 1}</h4> 
          
            <Card 
                  onSelectItem={
                    (item:string) => {
                      setSelectedItem(item);
                      // console.log(selectedItem);
                      if(!gameOver) {
                        
                        if(
                          item == cards[currentCard].answer){rightAnswers.push(item); ++points; setScore(points);
                        }
                        else {
                          wrongAnswers.push(item);
                        }
                      } 
                        if(wrongAnswers.length + rightAnswers.length == 20) {gameOver = true};
                    }} 
                  
                  items = {cards[currentCard].items} answer={cards[currentCard].answer}>

                {cards[currentCard].question}
            
            </Card>
         
          </div>
          <div className="col">
            <MyBtn onClick={nextCard}>Next</MyBtn>
          </div>
        </div>
      </div>
      <Score>{score} / {cards.length}</Score>
    </>
  );
}

export default App;