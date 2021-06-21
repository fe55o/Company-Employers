import React,{useState} from 'react';
import { StyleSheet, Text, View , Image, Linking, Platform, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {Card, Title, Button} from 'react-native-paper'
import { MaterialIcons,Entypo } from '@expo/vector-icons';


const Profile = (props)=>{

    const {id, name, picture, email, phone,position, salary} = props.route.params.item


    const openDial = ()=>{
        if(Platform.OS === 'android'){
            Linking.openURL("tel:12345")
        }else {
            Linking.openURL("telprompt:12345")
        }
    }
    return (
        <View style= {styles.root}>
        <LinearGradient
        colors={["#0033ff","#6bc1ff"]}
        style={{height:'20%'}}
        />
        <View style = {{alignItems:"center"}}>
        <Image
        style={{width:140, height:140,borderRadius:70, marginTop:-50}}
        source={{uri: picture}}/>
        </View >
        <View style = {{alignItems:'center' , margin:15}}>
            <Title style={styles.mytext}>{name}</Title>
            <Text style={styles.mytext}>{position}</Text>
        </View>
        <Card 
        style={styles.mycard}
        onPress = {()=>{Linking.openURL('mailto:bc@abc.com')}}
        >
            <View style={styles.cardcontent}>
            <MaterialIcons name="email" size={32} color="#006aff" />
            <Text style={styles.mytext}>{email}</Text>

            </View>
        </Card>
        <Card style={styles.mycard}
        onPress = {()=> openDial()}>
            <View style={styles.cardcontent}>
            <Entypo name="phone" size={32} color="#006aff" />
            <Text style={styles.mytext}>{phone}</Text>

            </View>
        </Card>
        <Card style={styles.mycard}>
            <View style={styles.cardcontent}>
            <MaterialIcons name="attach-money" size={32} color="#006aff" />
            <Text style={styles.mytext}>{salary}</Text>

            </View>
        </Card>
        <View style={{flexDirection:'row', justifyContent:'space-around' , padding:10}}>
        <Button icon="account-edit" 
        mode="contained" 
        theme = {theme}
        onPress={() => console.log('Pressed')}>
            Edit
        </Button>
        <Button icon="delete"
         mode="contained" 
         theme = {theme}
         onPress={() => console.log('Pressed')}>
            fire Employee
        </Button>
        </View>
        </View>

    )

      
}
const theme= {
    colors:{
      primary:'#006aff'
    }}

const styles = StyleSheet.create({
    root:{
            flex: 1,
    },

    mycard:{
        margin: 3,
    },
    cardcontent:{
        flexDirection:'row',
        padding: 8
    },
    mytext:{
        fontSize: 18,
        marginTop:3,
        marginLeft:3,
    }
})

export default Profile