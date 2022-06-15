// import from react
import React, { useContext } from 'react';
import {View, StyleSheet} from 'react-native';
import { Button, Text } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
// import spacer
import Spacer from '../component/Spacer';
// import context
import { Context } from '../context/AuthContext';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
    const { signout } = useContext(Context)
    return(
        <View>
            <SafeAreaView forceInset={{top: 'always'}} />
            <Spacer />
            <Text style={styles.text }> Profile</Text>
            <Spacer />
            <Spacer>
                <Button
                title='Sign Out'
                onPress={signout} />
            </Spacer>
        </View>
    )
}
ProfileScreen.navigationOptions = {
    title: 'Profile',
    tabBarIcon: <MaterialIcons name="account-circle" size={24} color="black" />
}
const styles = StyleSheet.create({
    text:{
        fontSize: 48,
        textAlign: 'center'
    }
})

export default ProfileScreen;