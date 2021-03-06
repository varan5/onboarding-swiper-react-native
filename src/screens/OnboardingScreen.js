import React from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';


const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
            onSkip={() => navigation.replace('Login')}
            // .replace will disable the ability to come back, once we skip
            onDone={() => navigation.navigate('Login')}
            pages={[
                {
                backgroundColor: '#a6e4d0',
                image: <Image source={require('../../assets/onboarding-img1.png')} />,
                title: 'Onboarding1',
                subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                backgroundColor: '#fdeb93',
                image: <Image source={require('../../assets/onboarding-img2.png')} />,
                title: 'Onboarding2',
                subtitle: 'Done with React Native Onboarding Swiper',
                },{
                backgroundColor: '#e9bcbe',
                image: <Image source={require('../../assets/onboarding-img3.png')} />,
                title: 'Onboarding3',
                subtitle: 'Done with React Native Onboarding Swiper',
                },

            
            ]}
        />
    )
}

export default OnboardingScreen