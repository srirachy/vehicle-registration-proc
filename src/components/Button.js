const Button = ({ btnType, btnClass, btnContent, onClick }) => {
  return (
    <>
      <button type={btnType} className={btnClass} onClick={onClick}>
        {btnContent}
      </button>
    </>
  );
};

export default Button;
