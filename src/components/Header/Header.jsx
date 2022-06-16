import './Header.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addPassengers } from '../../store/redusers/main';
import { useState } from 'react';


export const Header = () => {

    const dispatch = useDispatch();

    const [modal, setModal] = useState(false);

    const passengers = useSelector(state => state.main.passengers);

    const addHandler = () => {
        const data = {
            id: +new Date(),
            name: '',
            surname: '',
            patronymics: '',
            country: '',
            sex: '',
            date: ''
        };

        if (passengers.length < 2) {
            dispatch(addPassengers(data));
        } else {
            setModal(true);
        }
    };

    const cloceModalHandler = ({target}) => {
        if (!target.classList.contains('modal_content')) {
            setModal(false);
        }
    };

  return (
    <div className={'header'}>
            <h1>Данные пассажиров</h1>
            <button onClick={addHandler}>
                <span>+</span>
                Добавить пассажира
            </button>

            {modal && <div className={'modal'} onClick={cloceModalHandler}>
                <div className={'modal_content'}>Максимум 2 пассажира</div>
            </div>}
    </div>

  );
}
