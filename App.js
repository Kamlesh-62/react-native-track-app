import React from 'react';
// import navigation
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import screens
import ProfileScreen from "./src/screens/ProfileScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import SigninScreen from "./src/screens/SigninScreen";
//context
import { Provider as AuthProvider} from './src/context/AuthContext';
import { Provider as LocationProvider} from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import { setNavigator } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { Entypo } from '@expo/vector-icons';


const trackListFlow = createStackNavigator({
  TrackList: TrackListScreen,
  TrackDetail: TrackDetailScreen
})
trackListFlow.navigationOptions={
  title: 'Tracks',
  tabBarIcon: <Entypo name="list" size={24} color="black" />,
}

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthScreen,
  loginFlow: createStackNavigator({
    SignUp: SignUpScreen,
    Signin: SigninScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow,
    TrackCreate:TrackCreateScreen,
    Profile: ProfileScreen

  })
})
const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <App ref={(navigator) => {setNavigator(navigator)}} />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  )
}