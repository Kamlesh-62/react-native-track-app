import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../component/AuthForm';
import NavLink from '../component/NavLink';
import { Context } from '../context/AuthContext';
import { NavigationEvents } from 'react-navigation';

const SigninScreen = () => {
    
    const {state, signin, clearErrorMessage} = useContext(Context);

    return (
        <View style= {styles.container}>
            <NavigationEvents 
             onWillFocus={clearErrorMessage}
            />
            <AuthForm
                headerText='Sign In to Your Account'
                errorMessage={state.errorMessage}
                onSubmit={ signin}
                buttonText='Sign In'/>
            <NavLink
                navLinkText= "Don't have account? Sign Up"
                routeName="SignUp"
             />

        </View>
    )
}

SigninScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 200,
        flex: 1,
        justifyContent: 'center'
    },
})

export default SigninScreen;