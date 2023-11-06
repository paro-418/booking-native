import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {DATA} from '../data/data';
import SearchResults from '../components/SearchResults';

const SearchScreen = () => {
  const [input, setInput] = useState('');
  const data = DATA;
  return (
    <View>
      <View
        style={{
          paddingVertical: 6,
          paddingHorizontal: 10,
          margin: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderColor: '#0047ab',
          borderWidth: 2,
          borderRadius: 10,
        }}>
        <TextInput
          value={input}
          style={{fontSize: 15}}
          onChangeText={text => setInput(text)}
          placeholder="Enter your destination"
        />
        <Feather name="search" size={22} color="#000" />
      </View>
      <SearchResults data={data} input={input} setInput={setInput} />
    </View>
  );
};

export default SearchScreen;
