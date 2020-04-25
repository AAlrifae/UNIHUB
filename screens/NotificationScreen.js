import React from "react";
import Fire from "../Fire";
import { View, Text, StyleSheet, Button} from "react-native";

export default class NotificationScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Notification Screen</Text>
                <Button
                    onPress={() => {
                        Fire.shared.signOut();
                    }}
                    title="Log out"
                />
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});
