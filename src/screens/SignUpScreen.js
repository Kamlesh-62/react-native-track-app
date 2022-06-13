import React, {useContext} from 'react';
import { View, StyleSheet} from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../component/AuthForm';
import NavLink from '../component/NavLink';
import { NavigationEvents } from 'react-navigation';

const SignUpScreen = () => {

    const { state, signup, clearErrorMessage } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents 
            onWillFocus={clearErrorMessage} 
            />
            <AuthForm 
                headerText= 'Sign Up for Tracker' 
                errorMessage= {state.errorMessage}
                onSubmit = {signup}
                buttonText='Sign Up' />
            <NavLink
                routeName = 'Signin'
                navLinkText= 'Already have an account? Sign in insted' />
        </View>
    )
}

SignUpScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container:{
        marginBottom: 200,
        flex: 1,
        justifyContent: 'center'
    },
   
    
})

export default SignUpScreen;