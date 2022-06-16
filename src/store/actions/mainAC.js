export const reducers = {

    addPassengers: (state, {payload}) => {

        state.passengers.push(payload);
    },

    
    removePassengers: (state, {payload}) => {

        state.passengers = state.passengers.filter(todo => todo.id !== payload);
    },
};
