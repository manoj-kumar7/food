import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useEffect, useState } from 'react/cjs/react.development';
import yelp from '../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const [result, setResult] = useState(null);

    console.log(result);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    //Until we get result from api, dont return any html to avoid unnecessary error messages
    if (!result) {
        return null;
    }

    return (
        <View style={styles.container}>
           
            <Text style={styles.title}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{uri: item}}></Image>
                }}>

            </FlatList>
           
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 200
    }
});

export default ResultsShowScreen;