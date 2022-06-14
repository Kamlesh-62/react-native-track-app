import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
    switch(action.type){
        case 'ADD_CURRENT_LOCATION':
            return{...state, currentLocation: action.payload};
        case 'START_RECORDING':
            return{...state, isRecording: true};
        case 'STOP_RECORDING':
            return{...state, isRecording: false};
        case 'ADD_LOCATION':
            return {...state, locations: [...state.locations, action.payload]};
        case 'CHANGE_NAME': 
            return{ ...state, trackName: action.payload}
        case 'RESET': 
            return{ ...state, trackName: '', locations: []}
        default:
            return state;
    }
};

const changeName = (dispatch) => {
    return (trackName) => {
        dispatch({type: 'CHANGE_NAME', payload: trackName})
    }
}

const startRecording = (dispatch) => {
    return () => {
        dispatch({type: 'START_RECORDING'})
    }
}

const stopRecording = (dispatch) => {
    return () => {
        dispatch({ type: 'STOP_RECORDING' })
    }
}

const addLocation = (dispatch) => {
    return (location, isRecording) => {
        dispatch({type:'ADD_CURRENT_LOCATION', payload:location});
        if(isRecording){
            dispatch({type: 'ADD_LOCATION', payload: location})
        }
    }
}
const reset = (dispatch) => {
    return () => {
        dispatch({type: 'RESET'})
    }
}

export const {Context, Provider} = createDataContext(
    locationReducer,
    {startRecording, stopRecording, addLocation, changeName, reset},
    {trackName: '', isRecording: false, locations: [], currentLocation: null}
)
