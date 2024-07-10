import Item from "./Item";

interface Props {
  children: string;
  items: string[];
  answer: string;
  onSelectItem: (item:string) => void;
}

let cardsClicked : string[] = []; 
let userAnswers : string[] = [];

function Card({ children, items, onSelectItem, answer }: Props) {

  return (
    <div 
      style={{
        display: "block",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="card text-bg-primary">
        <h5 className="card-title">{children}</h5>
      </div>
      
      {items.map((element, index) => {
        
        return (
          
          <Item id={userAnswers.includes(element) && element == answer ? "item-correct" : userAnswers.includes(element) ? "item-wrong" : "item" } 
            item={element} key={index} 
            onClick= {() => 
              {
                if(!cardsClicked.includes(children))
                  { 
                    onSelectItem(element);
                    userAnswers.push(element);
                    cardsClicked.push(children);
                  }
              }}/>
        ) 
      })} 

    </div>
  );
}

export default Card;

