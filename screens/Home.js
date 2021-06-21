import {Card,FAB} from 'react-native-paper'
import React from 'react';
import { StyleSheet, Text, View , Image, FlatList} from 'react-native';
// import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

const Home = (Props)=> {
    const data = [
        {id:"1", name:"mahmoud",email : "ghgfgds@abc.com",salary: '3000',phone : '12345', position: "web developer",picture:"https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
        {id:"2", name:"Muhammed",email : "ukjk@abc.com",salary: '3000',phone : '12345', position: "mobile developer",picture:"https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
        {id:"3", name:"Ahmed",email : "hgh@abc.com",salary: '3000',phone : '12345', position: "desketop developer",picture:"https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
        {id:"4", name:"Mustafa",email : "bc@abc.com",salary: '3000',phone : '12345', position: "mobile developer",picture:"https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
        {id:"5", name:"Abdo",email : "sgs@abc.com",salary: '3000',phone : '12345', position: "back end developer",picture:"https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
        {id:"6", name:"Hassan",email : "fgfyf@abc.com",salary: '3000',phone : '12345', position: "web developer",picture:"https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},

    ]

    const render_list = ((item)=>{
        return(
            <Card style = {styles.mycard} 
            onPress={()=> Props.navigation.navigate("Profile",{item})}>
            <View style= {styles.cardview}>
                <Image
                 style = {styles.myimage}
            source ={{ uri : "https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}}>
                </Image>
                <View>
                    <Text style = {styles.text}>{item.name}</Text>
                    <Text style = {styles.text}>{item.position}</Text>
                </View>
            </View>
            </Card>
        )

    })
  return (
        <View style= {{flex: 1}}>

            {/* {render_list} */}
            <FlatList
            data = {data}
            renderItem={({item})=>{
                return render_list(item)           }
            }
            // keyExtractor = {item => '${item.id}'}
            />
                    <FAB onPress = {()=>Props.navigation.navigate('Create')}
                        style={styles.fab}
                        small= {false}
                        icon="plus"
                        theme = {{colors: {accent:"#6bc1ff"}}}
                    />
        </View>

  )
}

const styles = StyleSheet.create({
    mycard: {
      margin: 6,
    },
    myimage:{
        width:60,
        height:60,
        borderRadius: 30

    },
    cardview:{
        flexDirection: 'row',
        padding:5
    },
    text:{
        fontSize: 20,
    },
     textview:{
        marginLeft: 10,
        flexDirection: 'column'

     },
        fab: {
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 0,
        },
  })
export default Home