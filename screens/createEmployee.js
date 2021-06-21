import React,{useState} from 'react';
import { StyleSheet, Text, View , Image, FlatList, Modal} from 'react-native';
import {TextInput,Button} from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


const CreateEmployee = ()=> {
    const [Name,setName] = useState("")
    const [Phone,setPhone] = useState("")
    const [Email,setEmail] = useState("")
    const [Salary,setSalary] = useState("")
    const [Picture,setPicture] = useState("")
    const [modal,setModal] = useState(false)



    const pickFromGallery = async ()=> {

    const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
          if (granted){
            console.log("Granted")
                  let data = await ImagePicker.launchImageLibraryAsync({
                    mediaTypes: ImagePicker.MediaTypeOptions.Images,
                    allowsEditing: true,
                    aspect: [1, 1],
                    quality: 1,
                  });
              console.log(data)

              if(!data.cancelled){
                let newfile = {uri:data.uri,type:'test/${data.uri.split(".")[1]}',
                name: 'test.${data.uri.split(".")[1]}'}
                handleUpload();
              }

          }else {
            console.log(" not Granted")

              Alert.alert("you need to give us the premission in order to upload image")
          }
}
const pickFromCamera = async ()=> {
      const {granted} = await Permissions.askAsync(Permissions.CAMERA)

      if (granted){
               let data = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [1, 1],
                quality: 1,
              });
          if(!data.cancelled){
            let newfile = {uri:data.uri,
            type:`test/${data.uri.split(".")[1]}`,
            name: `test.${data.uri.split(".")[1]}`}
            handleUpload(newfile);
          }
      }else {
          Alert.alert("you need to give us the premission in order to upload image")
      }
}

const handleUpload = (image)=>{

    const data = new FormData()
    data.append("file",image)
    data.append('upload_preset','besmellah')
    data.append('cloud_name','dh1co9bsr')

    fetch("https://api.cloudinary.com/v1_1/dh1co9bsr/image/upload",{
      method:"post",
      body: data

    }).then(res=>res.json()).
    then(data=>{
      console.log(data)
    })
}

    return(
        <View style = {styles.root}>
    <TextInput style = {styles.input}
      label="Email"
      value={Email}
      mode= "outlined"
      theme= {theme}

      //theme = {{colors:""}}
      onChangeText={text => setEmail(text)}
    />
    <TextInput style = {styles.input}
      label="Name"
      value={Name}
      mode= "outlined"
      theme= {theme}
      //theme = {{colors:""}}
      onChangeText={text => setName(text)}
    />
    <TextInput style = {styles.input}
      label="Phone"
      value={Phone}
      mode= "outlined"
      theme= {theme}
      keyboardType= "number-pad"
      //theme = {{colors:""}}
      onChangeText={text => setPhone(text)}
    />
    <TextInput style = {styles.input}
      label="Salary"
      value={Salary}
      mode= "outlined"
      theme= {theme}
      keyboardType= "number-pad"
      //theme = {{colors:""}}
      onChangeText={text => setSalary(text)}
    />
    <Button style = {styles.input}
    icon="upload" 
    mode="contained" 
    theme= {theme}
    onPress={() => setModal(true)}>
      Upload Image
    </Button>

    <Button style = {styles.input}
    icon="content-save" 
    mode="contained" 
    theme= {theme}
    onPress={() => console.log("save")}>
      Save
    </Button>

        <Modal
        animationType="slide"
        transparent= {true}
        visible={modal}
        onRequestClose={()=>{
            setModal(false)
        }}
        >
            <View style= {styles.modelview}>
              <View style={styles.modalbutton}>
                          <Button icon="camera" 
                          theme= {theme} mode="contained" 
                          onPress={pickFromCamera}>
                         Camera
                          </Button>
                          <Button icon="image-area" 
                          theme= {theme} 
                          mode="contained" 
                          onPress={pickFromGallery}>
                          Gallery
                          </Button>

              </View>
            <Button icon="camera"  onPress={() => setModal(false)}>
     cancel
    </Button>
            </View>
        </Modal>
        </View>
    )

}
const theme= {
  colors:{
    primary:'#006aff'
  }
}

const styles = StyleSheet.create({
    root:{
        flex : 1
    },
    input: {
        margin: 10
    },
    modalbutton:{
      flexDirection: 'row',
      justifyContent:'space-around',
      padding: 10

    },
    modelview:{
      position: "absolute",
      bottom:2,
      width: '100%',
      backgroundColor: '#b8e6ff'
    }

})
export default CreateEmployee