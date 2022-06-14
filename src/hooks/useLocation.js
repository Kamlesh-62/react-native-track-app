import { useState, useEffect } from "react";
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (shouldTrack, cb) => {
    const [err, setErr] = useState('');
    
    useEffect(() => {
        let subscriber;
        const startWatching = async () => {
            try {
                const { granted } = await requestForegroundPermissionsAsync();
                const subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                },
                    cb
                )
                if (!granted) {
                    throw new Error('Location permission not granted');
                }
            } catch (e) {
                setErr(e);
            }
        };

        if(shouldTrack){
            startWatching();
        }else{
            if(subscriber){
                subscriber.remove();
            }
            subscriber = null
        }

        return () => {
            if(subscriber){
                subscriber.remove();
            }
        }
    }, [shouldTrack, cb ])

    return[err];
}