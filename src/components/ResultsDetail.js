import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({result}) => {
    
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image} 
                source={{ uri: result.image_url}}>
            </Image>
            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.name}>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    container: {
        marginLeft: 15
    }
});

export default ResultsDetail;