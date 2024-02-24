const FormInput = ({
  formObj: {
    divInfo: { divClass },
    labelInfo: { labelFor, labelClass, labelContent },
    inputInfo: { inputType, inputClass, inputName, inputId, inputPlaceholder },
  },
  onChange,
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
          name={inputName}
          id={inputId}
          placeholder={inputPlaceholder}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default FormInput;
