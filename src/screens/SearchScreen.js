import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price == price;
        });
    };

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={newTerm => setTerm(newTerm)} //can be also written as onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}/>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            
            <ScrollView>
                <ResultsList title="Cost Effective" results={filterResultsByPrice('$')}></ResultsList>
                <ResultsList title="Bit pricier" results={filterResultsByPrice('$$')}></ResultsList>
                <ResultsList title="Expensive" results={filterResultsByPrice('$$$')}></ResultsList>
            </ScrollView>
        </>
        
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;