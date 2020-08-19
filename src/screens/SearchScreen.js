import React, { useState } from 'react'
import { Text, View } from 'react-native'

import SearchBar from '../Components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../Components/ResultsList'

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errMessage] = useResults();

    const filterResultByPrice = (minprice,maxprice) => {
        
        return results.filter(result =>
         { 
            return result.restaurant.average_cost_for_two < maxprice && result.restaurant.average_cost_for_two > minprice
        });
    };
    
    return <View>
        <SearchBar
            term={term}
            onTermChange={(newTerm) => { setTerm(newTerm) }}
            onTermSubmit={() => { searchApi(term) }}
        />
                { errMessage ? <Text>{errMessage}</Text> : null}
        <Text>We have found {results.length} results</Text>
        <ResultsList title = "Budget"  results = {filterResultByPrice(100,1000)}   />
        <ResultsList title = "Casual" results = {filterResultByPrice(1000,2000)}   />
        <ResultsList title = "Fine Dine" results = {filterResultByPrice(2000, 99999)} />
    </View>
};

export default SearchScreen;