import { ReactNode } from "react";

interface Props {
    children: ReactNode;
  }

function Score({children}: Props) {
    return <div id="score">Score: {children}</div>
}

export default Score;