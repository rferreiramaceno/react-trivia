interface Props {
  children: string;
  onClick: () => void;
}

function MyBtn({ children, onClick }: Props) {
  return (
    <>
      <button type="button" className="btn btn-light" onClick={onClick}>
        {children}
      </button>
    </>
  );
}

export default MyBtn;
