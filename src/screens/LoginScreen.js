import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
            <Button 
                title='Login Screen'
                onPress={() => alert('Button Clicked !')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default LoginScreen