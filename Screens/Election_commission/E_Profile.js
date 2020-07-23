import React, {useState} from 'react'
import { StyleSheet, Image, TouchableOpacity,View } from 'react-native'
import ImagePicker from 'react-native-image-picker';
import Icon  from 'react-native-vector-icons/FontAwesome';
import { Akira } from 'react-native-textinput-effects';


export default function E_Profile() {
    const chooseImage = () => {
        let options = {
        title: 'Select Avatar', 
        cameraType: 'front',
        mediaType: 'photo' ,
        storageOptions: {
        skipBackup: true,
        path: 'images',
        },
        };
        ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
        if (response.didCancel) {
        console.log('User cancelled image picker');
        } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
        } else {
        SetFileuri(response.uri) 
        }
        });
        }
      var [fileUri, SetFileuri] = useState();
    
    return (
        <View>
            <View style={{
                alignSelf: 'center',
                marginTop: 35,
                }}>
                <Image
                style={{ height: 100, width: 100, borderRadius: 50, }}
                source={fileUri ? { uri: fileUri } : // if clicked a new img
                require('./assets/dummy.png')} //else show random
                />
                <TouchableOpacity style={styles.addPictureIcon} onPress={
                chooseImage
                }>
                <Icon name="camera" size={20} />
                </TouchableOpacity>
                </View>
                <Akira
                    label={'First Name'}
                    // this is used as active and passive border color
                    borderColor={'#a5d1cc'}
                    inputPadding={16}
                    labelHeight={24}
                    labelStyle={{ color: '#ac83c4' }}
                    value={'My Name'}
                />
                <Akira
                    label={'First Name'}
                    // this is used as active and passive border color
                    borderColor={'#a5d1cc'}
                    inputPadding={16}
                    labelHeight={24}
                    labelStyle={{ color: '#ac83c4' }}
                    value={'My Name'}
                />
                <Akira
                    label={'First Name'}
                    // this is used as active and passive border color
                    borderColor={'#a5d1cc'}
                    inputPadding={16}
                    labelHeight={24}
                    labelStyle={{ color: '#ac83c4' }}
                    value={'My Name'}
                />
                <Akira
                    label={'First Name'}
                    // this is used as active and passive border color
                    borderColor={'#a5d1cc'}
                    inputPadding={16}
                    labelHeight={24}
                    labelStyle={{ color: '#ac83c4' }}
                    value={'My Name'}
                />
                <Akira
                    label={'First Name'}
                    // this is used as active and passive border color
                    borderColor={'#a5d1cc'}
                    inputPadding={16}
                    labelHeight={24}
                    labelStyle={{ color: '#ac83c4' }}
                    value={'My Name'}
                />
  
                
            
        </View>
    )
}

const styles = StyleSheet.create({
    addPictureIcon: {
        height: 30,
        width: 30,
        backgroundColor: 'white',
        borderRadius: 50,
        position: 'absolute',
        left: 65,
        top: 75,
        justifyContent: 'center',
        alignItems: 'center',
        alignItems: 'center',
        }
})
