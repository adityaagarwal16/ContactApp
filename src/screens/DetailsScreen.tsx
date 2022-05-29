import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {fetchDetailsData} from "../redux/actions/detailsActions";

export default function DetailsScreen({ route, navigation }) {

    const { userID } = route.params;
    const dispatch = useDispatch();

    const user = useSelector(state => state.userDetailsReducer.user)
    const loading = useSelector(state => state.userDetailsReducer.loading)

    useEffect(() => {
        dispatch(fetchDetailsData({ id : userID }))
    }, []);

    return(
        <View>
            <Text>
                {user && user.name}
            </Text>
        </View>
    );

}
