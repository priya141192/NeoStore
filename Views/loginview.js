import React,{ Component } from 'react';
import{
    View,SafeAreaView,Text,TextInput,StyleSheet,Button, TouchableOpacity,Image
} from 'react-native';

export class LoginView extends Component
{
    render()
    {
        return(
            <SafeAreaView style = {styles.maincontainerStyle}>
                <View style = {styles.containerStyle}>
                    <Text style = {styles.textStyle}>NeoSTORE</Text>
                    <View style = {styles.textinputcontainerStyle}>
                    <Image style = {styles.imageStyle} source = {require('../Resources/user.png')}></Image>
                        <TextInput style = {styles.textinputStyle} placeholder = 'Username' placeholderTextColor = 'white'></TextInput>
                    </View>
                    <View style = {styles.textinputcontainerStyle}>
                    <Image style = {styles.imageStyle} source = {{uri : 'https://www.iconsdb.com/icons/preview/white/padlock-3-xxl.png'}}></Image>
                        <TextInput style = {styles.textinputStyle}  placeholder = 'Password' placeholderTextColor = 'white'></TextInput>
                    </View>
                    <TouchableOpacity style = {styles.buttonStyle}>
                    <Text style = {styles.buttontextStyle}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{alignSelf:'center', alignItems :'center',
                        justifyContent:'center',
                        color:'white',
                        marginTop: 10,
                        fontWeight : 'bold',
                        fontSize: 20}}>Forgot Password ?</Text>
                    </TouchableOpacity>
                </View>
                <View style = {styles.labelinputcontainerStyle}>
                    <TouchableOpacity>
                        <Text style={{alignSelf:'flex-start', alignItems :'center',marginBottom : 10, textAlignVertical : 'bottom',
                        justifyContent:'center',
                        color:'white',
                        marginTop: 50,
                        marginRight : 20,
                        fontWeight : 'bold',
                        fontSize: 15}}>DON'T HAVE AN ACCOUNT?</Text>
                    </TouchableOpacity>
                    <Image style={{justifyContent : 'flex-end' ,
                    alignSelf :'flex-end', alignItems : 'flex-end',height : 50,width :50,marginLeft : 50
                    }} source = {require('../Resources/user.png')} ></Image>
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
            flex:1,
        },
        textStyle : {
            color : 'white',
            fontStyle : 'normal',
            fontWeight : 'bold',
            fontSize : 50,
            marginBottom : 20,
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
            elevation : 10,
            backgroundColor : '#e91b1a',
            color : 'white',
            alignSelf : 'center',
            marginTop : 20,
            width : '100%',
            padding : 10,
            margin : 10
        },
        textinputcontainerStyle : {
            elevation : 10,
            flexDirection : 'row',
            borderColor :'white',
            padding : 5,
            borderWidth : 2,
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