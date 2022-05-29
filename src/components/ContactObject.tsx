import React from 'react';
import {StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';

const ContactObject = ({userDetails, onClick}) => {

    const user = userDetails;
    const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png'

    return(
        <TouchableOpacity onPress={onClick}
                          style={{ flexDirection: 'row', padding: 5 }}>
            <View>
                <Text style={{ color: 'white', fontSize: 19 }}>
                    {user.name}
                </Text>
                <Text>
                    {user.phone}
                </Text>
            </View>
        </TouchableOpacity>
    );

};

export default ContactObject;
