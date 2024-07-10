interface Props {
  children: string;
  alertOption: number;
}

const Alert = ({children,alertOption}:Props) => {

  function checkOption(value:number) {

    if (value === 1)
      return "alert alert-danger";

    if (value === 2)
      return "alert alert-success";
  }

  return (
    <div className={checkOption(alertOption)} role="alert">
      {children}
    </div>
  );
};

export default Alert;
