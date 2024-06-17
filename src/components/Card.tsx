interface Props {
  children: string;
}

function Card({ children }: Props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="card text-bg-primary">
        <h5 className="card-title">{children}</h5>
      </div>
    </div>
  );
}

export default Card;
