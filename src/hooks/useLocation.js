import { useState, useEffect } from "react";
import { requestForegroundPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (shouldTrack, cb) => {
    const [err, setErr] = useState('');
    const[subscriber, setSubscriber] = useState(null)


    const startWatching = async () => {
        try {
            const { granted } = await requestForegroundPermissionsAsync();
            const sub = await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            },
                cb
                )
                setSubscriber(sub)
            if (!granted) {
                throw new Error('Location permission not granted');
            }
        } catch (e) {
            setErr(e);
        }
    };

    useEffect(() => {
        if(shouldTrack){
            startWatching();
        }else{
            subscriber.remove();
            setSubscriber(null)
        }
    }, [shouldTrack])

    return[err];
}