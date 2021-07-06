import axios from 'axios';
import { SET_TICKETS, SET_LOADED } from './constants';

export const axiosTickets = () => dispatch => {
    dispatch(setLoaded(false));
    axios.get('/flights.json')
        .then(({ data }) => {
            dispatch(setTickets(data));
            console.log(data);
        });
};

export const setTickets = (tickets) => ({
    type: SET_TICKETS,
    payload: tickets,
});

export const setLoaded = (status) => ({
    type: SET_LOADED,
    payload: status,
});