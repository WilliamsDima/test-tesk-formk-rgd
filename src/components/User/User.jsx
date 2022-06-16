import './User.scss';
import { useDispatch } from 'react-redux';
import { Input } from "../ui/Input";
import { Select } from "../ui/Select";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { removePassengers } from '../../store/redusers/main';


export const User = ({filds, register, errors, selects, control, getValue, userId, count}) => {

    const dispatch = useDispatch();

    const removeHandler = (id) => {
        dispatch(removePassengers(id));
    };

  return (
    <div className={'user'} id={userId.toString()}>
        <h1>Пассажир №{count+1}</h1>
        {filds.map(({ fildName, placeholder, id, title, obligatory }) => <Input
          key={id}
          type={'text'}
          register={register}
          fildName={fildName + '_id-' + userId.toString()}
          errors={errors}
          title={title}
          obligatory={obligatory}
          placeholder={placeholder} />)}

        {selects.map(({ name, required, options, id, placeholder, title, obligatory }) => <Controller
          key={id}
          control={control}
          name={name + '_id-' + userId.toString()}
          rules={{
            required
          }}
          render={({ field: { onChange, value }, fieldState: { error } }) => <Select error={error}
            placeholder={placeholder}
            options={options}
            name={name + '_id-' + userId.toString()}
            title={title}
            obligatory={obligatory}
            getValue={() => getValue(options, value)}
            onChange={onChange}
            value={value} />} />)}


        <Controller
          control={control}
          name={'date' + '_id-' + userId.toString()}
          render={({ field: { onChange, value }, fieldState: { error } }) => <div className={'input_container__date'}>

            <div className={'title'}>
              <h2>Дата рождения</h2><span></span>
            </div>

            <DatePicker
              selected={value}
              onChange={onChange} />

            {error && <div className={'error'}>{error.message}</div>}

          </div>} />

          <button onClick={() => removeHandler(userId)}>Удалить пассажира</button>
    </div>

  );
}
