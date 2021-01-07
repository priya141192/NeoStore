import React,{ Component } from 'react';
import{
    View,SafeAreaView,Text,TextInput,StyleSheet,Button, TouchableOpacity,Image
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export class RegisterView extends Component
{
    render()
    {
        return(
            <SafeAreaView style = {styles.maincontainerStyle}>
                <View style = {styles.containerStyle}>
                    <Text style = {styles.textStyle}>NeoSTORE</Text>
                    <View style = {styles.textinputcontainerStyle}>
                    <Image style = {styles.imageStyle} source = {require('../Resources/user.png')}></Image>
                        <TextInput style = {styles.textinputStyle} placeholder = 'First Name' placeholderTextColor = 'white'></TextInput>
                    </View>
                    <View style = {styles.textinputcontainerStyle}>
                    <Image style = {styles.imageStyle} source = {{uri : 'https://www.iconsdb.com/icons/preview/white/padlock-3-xxl.png'}}></Image>
                        <TextInput style = {styles.textinputStyle}  placeholder = 'Last Name' placeholderTextColor = 'white'></TextInput>
                    </View>
                    <View style = {styles.textinputcontainerStyle}>
                    <Image style = {styles.imageStyle} source = {{uri : 'https://www.iconsdb.com/icons/preview/white/padlock-3-xxl.png'}}></Image>
                        <TextInput style = {styles.textinputStyle}  placeholder = 'Email' placeholderTextColor = 'white'></TextInput>
                    </View>
                    <View style = {styles.textinputcontainerStyle}>
                    <Image style = {styles.imageStyle} source = {{uri : 'https://www.iconsdb.com/icons/preview/white/padlock-3-xxl.png'}}></Image>
                        <TextInput style = {styles.textinputStyle}  placeholder = 'Password' placeholderTextColor = 'white'></TextInput>
                    </View>
                    <View style = {styles.textinputcontainerStyle}>
                    <Image style = {styles.imageStyle} source = {{uri : 'https://www.iconsdb.com/icons/preview/white/padlock-3-xxl.png'}}></Image>
                        <TextInput style = {styles.textinputStyle}  placeholder = 'Confirm Password' placeholderTextColor = 'white'></TextInput>
                    </View>
                    <View style = {styles.textinputcontainerStyle}>
                    <Image style = {styles.imageStyle} source = {{uri : 'https://www.iconsdb.com/icons/preview/white/padlock-3-xxl.png'}}></Image>
                        <TextInput style = {styles.textinputStyle}  placeholder = 'Phone Number' placeholderTextColor = 'white'></TextInput>
                    </View>
                    <View style = {styles.labelinputcontainerStyle} >
                        <CheckBox
                        style = {{
                        height : 25,
                        width : 25}}
                        color = 'white'
                        borderColor = 'white' 
                        onCheckColor = 'white' 
                        tintColor = 'white'
                        boxType = 'square'
                        onTintColor = 'white'
                        alignSelf = 'center'
                        alignItems = 'center'/>
                        <Text style={{alignSelf:'center', alignItems :'center',
                        justifyContent:'flex-start',
                        color:'white',
                        fontSize : 15,
                        textAlign : 'center',
                        textAlignVertical : 'center',
                        marginLeft : 10,
                        fontWeight : 'bold'}}>I agree the Terms and Conditions</Text>
                    </View>
                    <TouchableOpacity style = {styles.buttonStyle}>
                    <Text style = {styles.buttontextStyle}>REGISTER</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create(
    {
        maincontainerStyle : {
            backgroundColor :'#e91b1a',
            padding : 20,
            height : '100%',
            width : '100%',
        },
        containerStyle : {
            padding : 20,
            justifyContent : 'center',
        },
        textStyle : {
            color : 'white',
            fontStyle : 'normal',
            fontWeight : 'bold',
            fontSize : 40,
            marginBottom : 10,
            justifyContent : 'center',
            alignSelf : 'center',
            alignItems : 'center'
        },
        textinputStyle : {
            flex :1,
            color : 'white',
            backgroundColor : '#e91b1a',
            borderColor :'white',
            borderRadius : 5,
            fontSize : 15,
            fontWeight : 'bold'
        },
        buttonStyle : {
            elevation : 1,
            backgroundColor : '#e91b1a',
            color : 'white',
            alignSelf : 'center',
            width : '100%',
        },
        textinputcontainerStyle : {
            elevation : 10,
            flexDirection : 'row',
            borderColor :'white',
            padding : 5,
            borderWidth : 1,
            justifyContent : 'center',
            flexDirection : 'row',
            backgroundColor : '#e91b1a',
            margin : 10
        },
        buttontextStyle : {
            color : '#e91b1a',
            backgroundColor : 'white',
            fontStyle : 'normal',
            fontWeight : 'bold',
            fontSize : 25,
            borderRadius : 10,
            padding : 15,
            alignItems : 'center',
            justifyContent : 'center',
            textAlign : 'center',
        },
        imageStyle: {
            padding: 10,
            margin: 10,
            marginBottom : 5,
            height: 25,
            width: 25,
            resizeMode: 'stretch',
            alignItems : 'center'
          },
          logoimageStyle: {
            height: 180,
            width: 180,
            margin : 10,
            resizeMode: 'center',
            alignItems : 'center',
            alignSelf : 'center',
            justifyContent : 'center'
          },
          labelinputcontainerStyle : {
            elevation : 10,
            flexDirection : 'row',
            padding : 5,
            justifyContent : 'flex-start',
            flexDirection : 'row',
            backgroundColor : '#e91b1a',
            margin : 10,
            fontWeight : 'bold',
            fontSize : 16
        },
    }
)