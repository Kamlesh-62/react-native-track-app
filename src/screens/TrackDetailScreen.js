import React, {useContext} from 'react';
import {  Text, StyleSheet } from 'react-native';
import { Context } from '../context/TrackContext';
import MapView, {Polyline} from 'react-native-maps';

const TrackDetailScreen = ({navigation}) => {
    const {state} = useContext(Context)

    const _id = navigation.getParam('_id');
    const tracks = state.find( track => track._id === _id );
    const initialCoords = tracks.locations[0].coords;
    return (
        <>
            <Text>{tracks.name}</Text>
            <MapView
            initialRegion={{
                longitudeDelta: 0.01,
                latitudeDelta: 0.01,
                ...initialCoords
            }}
            style={styles.map}>
                <polyline coordinates={tracks.locations.map(loc => loc.coords)} />
            </MapView>
        </>
    )
}
const styles = StyleSheet.create({
    map:{
        height: 300
    }
})

export default TrackDetailScreen;