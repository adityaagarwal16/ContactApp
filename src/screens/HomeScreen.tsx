import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ContactObject from "../components/ContactObject";
import {fetchContactData} from "../redux/actions/contactActions";

export default function HomeScreen({ navigation }) {

    const dispatch = useDispatch()
    const users = useSelector(state => state.contactReducer.users);
    const loading = useSelector(state => state.contactReducer.loading);

    // this is what we do without redux
    /*useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/users')
           .then((response) => {
               setUsers(response.data);
               console.log(response)
       });
    }, []);*/



    //for redux, we use a dispatch, that updates the store and ultimately the state of the App
    // this is a react-redux hook, dispatch calls an action -> reducer -> updates store

    useEffect(() => {
        dispatch(fetchContactData())
    }, []);

    return(
        <View style={{ flex: 1 }}>
            {loading == true ?
                (
                    <View style={{ flex:1, justifyContent: 'center', alignItems: 'center'}}>
                        <ActivityIndicator size={'large'} color={'white'}/>
                    </View>)
                :
                (
                    <>
                        <Text style={{ marginHorizontal: 30, marginVertical: 10, fontSize: 50, color: 'white' }}>
                            Contacts
                        </Text>
                        <ScrollView style={{ paddingHorizontal: 20, marginVertical: 10 }}>
                            {users && users.map((user) => {
                                return (
                                    <ContactObject userDetails={user} onClick={() => {
                                        navigation.push('Details', {
                                            userID: user.id,
                                        })
                                    }}/>
                                );
                            })}
                        </ScrollView>
                    </>
                )
            }
        </View>
    );

}
