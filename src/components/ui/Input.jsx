
export const Input = ({register, type, fildName, errors, placeholder, title, obligatory}) => {


  return (
    <div className={`input_container__${fildName}`}>

          <div className={'title'}>
            <h2>{title}</h2>{obligatory && <span>*</span>}
          </div>

          <input {...(register(fildName, {
            required: 'Это поле обязательно для заполнения'
          }))} type={type} placeholder={placeholder}/>
          {errors[fildName] && <div className={'error'}>{errors[fildName].message}</div>}
    </div>
  );
}
