interface Props {
    children: number;
  
  }

function Score({children}: Props) {
    return <div>Score: {children}</div>
}

export default Score;