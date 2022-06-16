import { useForm } from "react-hook-form";
import './Form.scss';
import { useSelector } from 'react-redux';
import { User } from "../User/User";
import { sendUsers } from "../../api/api";


export const Form = () => {


  const filds = useSelector(state => state.main.filds);
  const selects = useSelector(state => state.main.selects);
  const passengers = useSelector(state => state.main.passengers);

  const {register, handleSubmit, control,
    formState: {errors}, reset} = useForm({mode: 'onChange'});

  const submit = (data) => {

    const getUser = (id) => {
      const user = {};

      for (const key in data) {
        if (key.includes(id)) {
          const newKey = key.replace(`_id-${id}`, '');
          user[newKey] = data[key]
        }
      }
      user.id = id;
      return user;
    };

    const users = [];

    passengers.forEach((user) => {
        users.push(getUser(user.id))
    });

    // console.log(users);
    sendUsers(users);
    
    reset();
  };

  const getValue = (options, value) => value ? options.find((option) => option.value === value) : '';

  return (
    <div className="form_container">


        {passengers.length ? <form onSubmit={handleSubmit(submit)}>

        {passengers.map(({id}, i) => <User 
        key={id} 
        userId={id} 
        filds={filds}
        register={register}
        errors={errors}
        selects={selects}
        control={control}
        count={i}
        getValue={getValue}/>)}


        <button>отправить</button>
      </form> : <div className={'empty'}>Пассажир не добавлен</div>}
    </div>
  );
}
