import '../_mockLocation'
import React, { useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../component/Map';
import { SafeAreaView, withNavigationFocus } from 'react-navigation';
import TrackForm from '../component/TrackForm';

import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

const TrackCreateScreen = ({isFocused}) => {

    const { state, addLocation } = useContext(LocationContext);
    const [err] = useLocation(isFocused, (location) => {
        addLocation(location, state.isRecording )
    })
    
    return (
        <View>
            <SafeAreaView forceInset={{top: 'always'}} >
            <Text h2>Create a Track</Text>
            <Map />
            {err ? <Text> Please enable location service </Text>: null}
            <TrackForm />
            </SafeAreaView>
        </View>
    )
}


export default withNavigationFocus(TrackCreateScreen);