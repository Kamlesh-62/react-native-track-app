import React, {useContext} from "react";
import { Input,Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
    const { state : { trackName, isRecording, locations }, startRecording, stopRecording, changeName } = useContext(LocationContext);
    const [saveTrack] = useSaveTrack();
    return(
        <>
            <Spacer>
                <Input 
                onChangeText={changeName}
                placeholder= 'Enter Name'
                value={trackName}
                />
            </Spacer>
            <Spacer>
                {
                    isRecording ?
                    <Button 
                    title= 'Stop Recording...' 
                    onPress={stopRecording}
                    />:
                    <Button
                    title='Start Recording'
                    onPress={startRecording}
                    />
                }
            </Spacer>
            <Spacer>
                { !isRecording && locations.length ? (
                    <Button title='Save Recording' onPress={saveTrack} />
                    ) : null
                }
            </Spacer>
        </>
    )

}
export default TrackForm;