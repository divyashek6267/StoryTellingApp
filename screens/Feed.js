import * as React from 'react';
import {Text,View,StyleSheet,SafeAreaView,StatusBar,Platform,Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import {FlatList} from 'react-native-gesture-handler';

import StoryCard from './StoryCard';


export default class Feed extends React.Component{
    render(){
        return(
            <View style = {{
                flex:1,
                justifyContent:"center",
                alignItems:"center"
            }}>
                <Text> Feed</Text>
            </View>
        )
    }
}