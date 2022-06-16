import ReactSelect from "react-select";

export const Select = ({options, getValue, onChange, value, error, placeholder, name, title, obligatory}) => {


    return (
        <div className={`input_container__${name}`}>

          <div className={'title'}>
            <h2>{title}</h2>{obligatory && <span>*</span>}
          </div>
          
          <ReactSelect 
        placeholder={placeholder}
        options={options}
        value={getValue(value)}
        onChange={(newValue) => onChange(newValue.value)}
        />
        {error && <div className={'error'}>{error.message}</div>}
      </div>
    );
  }