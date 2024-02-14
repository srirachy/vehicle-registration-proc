const Button = ({ btnType, btnClass, btnContent }) => {
  return (
    <>
      <button type={btnType} className={btnClass}>
        {btnContent}
      </button>
    </>
  );
};

export default Button;
