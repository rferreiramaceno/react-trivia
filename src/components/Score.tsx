interface Props {
    children: number;
  
  }

function Score({children}: Props) {
    return <div id="score">Score: {children}</div>
}

export default Score;