import { useState } from "react";

interface Props {
    children: string;
    onClick: () => void;
}

function Item({children, onClick}: Props) {
    
    return <div id="item" onClick={onClick} >{children}</div>
}

export default Item;