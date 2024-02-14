const FormInput = ({
  formObj: {
    divInfo: { divClass },
    labelInfo: { labelFor, labelClass, labelContent },
    inputInfo: { inputType, inputClass, inputId, inputPlaceholder },
  },
}) => {
  return (
    <>
      <div className={divClass}>
        <label htmlFor={labelFor} className={labelClass}>
          {labelContent}
        </label>
        <input
          type={inputType}
          className={inputClass}
          id={inputId}
          placeholder={inputPlaceholder}
        />
      </div>
    </>
  );
};

export default FormInput;
