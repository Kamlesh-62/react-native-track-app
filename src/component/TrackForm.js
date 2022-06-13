import React, {useContext} from "react";
import { Input,Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
    const { state : { trackName, isRecording }, startRecording, stopRecording, changeName } = useContext(LocationContext);


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
        </>
    )

}
export default TrackForm;