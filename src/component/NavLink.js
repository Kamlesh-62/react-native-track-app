import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({navigation, routeName, navLinkText }) => {
    return(
        <TouchableOpacity
            onPress={() => navigation.navigate({routeName})}>
            <Spacer>
                <Text style={styles.siginLink}>{navLinkText}</Text>
            </Spacer>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    siginLink: {
        color: 'blue'
    }
})
export default withNavigation(NavLink);
