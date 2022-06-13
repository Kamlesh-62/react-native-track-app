import React, { useContext } from 'react';
import {View, StyleSheet} from 'react-native';
import { Button, Text } from 'react-native-elements';
import Spacer from '../component/Spacer';
import { Context } from '../context/AuthContext';
import { SafeAreaView } from 'react-navigation';

const ProfileScreen = () => {
    const { signout } = useContext(Context)
    return(
        <View>
            <SafeAreaView forceInset={{top: 'always'}} />
            <Text style={styles.text}> Profile</Text>
            <Spacer>
                <Button
                title='Sign Out'
                onPress={signout} />
            </Spacer>
        </View>
    )
}
const styles = StyleSheet.create({
    text:{
        fontSize: 48
    }
})

export default ProfileScreen;