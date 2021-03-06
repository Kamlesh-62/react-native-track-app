// import '../_mockLocation'
import React, { useContext, useCallback} from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../component/Map';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import TrackForm from '../component/TrackForm';
import { AntDesign } from '@expo/vector-icons';
import Spacer from '../component/Spacer';

import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({isFocused}) => {

    const { state, addLocation } = useContext(LocationContext);
    const cb = useCallback((location) => {
        addLocation(location, state.isRecording)
    }, [state.isRecording])
    const [err] = useLocation(isFocused || state.isRecording, cb)
    
    return (
        <View>
            <SafeAreaView forceInset={{top: 'always'}} >
            <Spacer />
            <Map />
            {err ? <Text> Please enable location service </Text>: null}
            <TrackForm />
            </SafeAreaView>
        </View>
    )
}
TrackCreateScreen.navigationOptions = {
    title: 'Create Track',
    tabBarIcon: <AntDesign name="pluscircle" size={24} color="black" />
}


export default withNavigationFocus(TrackCreateScreen);