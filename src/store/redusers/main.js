import { createSlice } from '@reduxjs/toolkit'
import { reducers } from "../actions/mainAC";

const initialState = {

    passengers: [],

    filds: [{
        title: 'Имя',
        fildName: 'name',
        placeholder: 'Имя',
        id: 345,
        obligatory: true
    },
    {
        title: 'Фамилия',
        fildName: 'surname',
        placeholder: 'Фамилия',
        id: 348,
        obligatory: true
    },
    {
        title: 'Отчество',
        fildName: 'patronymics',
        placeholder: 'Отчество',
        id: 344,
        obligatory: true
    }],

    selects: [{
        title: 'Гражданство',
        name: 'country',
        placeholder: 'Страна',
        required: 'Вы не выбрали страну',
        id: 546,
        obligatory: true,
        options: [
            {
            value: 'Польша',
            label: 'Польша'
            }, 
            {
            value: 'США',
            label: 'США'
            }, 
            {
            value: 'Украина',
            label: 'Украина'
        }]
    },
    {
        title: 'Пол',
        name: 'sex',
        placeholder: 'Пол',
        required: 'Пол не выбран',
        id: 5454,
        obligatory: true,
        options: [{
            value: 'Мужской',
            label: 'Мужской'
            }, 
            {
            value: 'Женский',
            label: 'Женский'
            },
            {
            value: 'Неопределился',
            label: 'Неопределился'
        }]
    }]
};

const counterSlice = createSlice({
    name: 'main',
    initialState,
    reducers: reducers,
})

export const mainReducer = (state = initialState, action) => {
    return counterSlice.reducer(state, action);
};

export const { addPassengers, removePassengers } = counterSlice.actions;