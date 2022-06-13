import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
    switch(action.type){
        case 'ADD_ERROR':
            return {...state, errorMessage: action.payload};
        case 'SIGNIN':
            return {...state, token: action.payload, errorMessage: ''};
        case 'CLEAR_ERRORMESSAGE':
            return { ...state, errorMessage: ''};
        case 'SIGNOUT': 
            return{token: null, errorMessage: ''};
        default: 
            return state;
    }

};

const signinBackAfterRestart = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token');
    if(token){
        dispatch({type: 'SIGNIN', payload: token});
        navigate('TrackList');
    }else{
        navigate('SignUp')
    }
}

const clearErrorMessage = dispatch => {
    return () => {
        dispatch({type : 'CLEAR_ERRORMESSAGE'})
    }
}

const signup = dispatch => {
    return async ({email, password}) => {
        try{
            const response = await trackerApi.post('/signup', {email, password});
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type:'SIGNIN', payload: response.data.token});
            navigate('TrackList')

        }catch(err){
            console.log(err)
            dispatch({type: 'ADD_ERROR', payload: 'Something went wrong with Sign up'});
        }        
    }
}
const signin = (dispatch) => {
    return async ({email, password}) => {
        try{
            const response = await trackerApi.post('/signin', {email, password})
            await AsyncStorage.setItem('token', response.data.token)
            dispatch({ type: 'SIGNIN', payload: response.data.token });
            navigate('TrackList')
        }catch(err){
            dispatch({ type: 'ADD_ERROR', payload: 'Something went wrong with Sign in' });
        }
        
    }
}
const signout = (dispatch) => {
     return async () => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'SIGNOUT'})
        navigate('loginFlow')
    }
}


export const { Provider, Context} = createDataContext(
    authReducer,
    { signup, signin, signout, clearErrorMessage, signinBackAfterRestart },
    {token : null, errorMessage: ''}
)