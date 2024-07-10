interface Props {
    onClick: () => void;
    item: string;
    id?: string;
}

function Item({item, onClick, id}: Props) { 

    return <div id={id} onClick={onClick}>{item}</div>
    
}

export default Item;