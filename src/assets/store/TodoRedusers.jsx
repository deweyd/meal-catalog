import {
    DATA_CARD,
    FILTER_CARD,
    DATA_CARD_VOTES,
    DATA_REVENUE,
    DATA_PRIMARY,
    DATA_TV,
    DATA_ID,
    DATA_ROLE,
    DATA_PERSON,
    DATA_MOVIE,
    DATA_PERSON_PAGE,
    DATA_LOAD, DATA_VIDEO, SORT_FILMS, DATA_LOAD_TV, DATA_MOVIE_TV, DATA_ROLE_TV, DATA_VIDEO_TV
} from './actions.jsx';
import dataSection from "../dataSection.jsx";
import data from "../data.jsx";



export function TodoReducer(state = {
    data, dataSection,
    todos: [],
    todos1: [],
    todosMovieTv: [],
    todosFilter: [],
    todosLoad: [],
    todosLoadTv: [],
    todosVotes: [],
    todosRole: [],
    todosVideo: [],
    todosRevenue: [],
    todosPrimary: [],
    todosTv: [],
    todosPerson: [],
    todosMovie: [],
    todosFilms: [],
    todosRoleTv: [],
    todosVideoTv: [],
    todosPersonPage: [],
    personId: [0]                        },
    action) {
    console.log(action)

    switch (action.type) {
        case FILTER_CARD:
            return  {...state, todosFilter: action.todosFilter}
        case DATA_CARD:
            return { ...state, data: data, dataSection: dataSection, todos1: [...state.todos1, ...action.todos1], todosLoad: []};
        case DATA_LOAD:
            return { ...state, todos1: [], todosLoad: [...state.todosLoad, ...action.todosLoad] };
        case DATA_LOAD_TV:
            return { ...state, todosTv: [], todosLoadTv: [...state.todosLoadTv, ...action.todosLoadTv] };
        case DATA_CARD_VOTES:
            return { ...state, todosVotes: [...state.todosVotes, ...action.todosVotes] };
        case DATA_REVENUE:
            return { ...state, todosRevenue: [...state.todosRevenue, ...action.todosRevenue] };
        case DATA_PRIMARY:
            return { ...state, todosPrimary: action.todosPrimary };
        case DATA_TV:
            return { ...state, todosTv: [...state.todosTv, ...action.todosTv], todosLoadTv: [] };
        case DATA_PERSON:
            return { ...state, todosPerson: [...state.todosPerson, ...action.todosPerson] };
        case DATA_ID:
            return { ...state, personId: action.personId };
        case DATA_MOVIE:
            return { ...state, todosMovie: action.todosMovie };
        case DATA_MOVIE_TV:
            return { ...state, todosMovieTv: action.todosMovieTv };
        case DATA_VIDEO:
            return { ...state, todosVideo: action.todosVideo };
        case SORT_FILMS:
            return { ...state, todosFilms: action.todosFilms };
        case DATA_ROLE:
            return { ...state, todosRole: action.todosRole };
        case DATA_ROLE_TV:
            return { ...state, todosRoleTv: action.todosRoleTv };
        case DATA_VIDEO_TV:
            return { ...state, todosVideoTv: action.todosVideoTv };
        case DATA_PERSON_PAGE:
            return { ...state, todosPersonPage: action.todosPersonPage };
        default:
            return state;
    }
}


