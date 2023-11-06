import {View, Text, FlatList, Pressable, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const SearchResults = ({data, input, setInput}) => {
  const navigation = useNavigation();

  return (
    <View style={{padding: 10}}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          if (item?.place.toLowerCase().includes(input.toLowerCase())) {
            if (input === '') {
              return null;
            }
            return (
              <Pressable
                onPress={() => {
                  setInput(item.place);
                  navigation.navigate('Home', {
                    input: item.place,
                  });
                }}
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 10,
                }}>
                <View>
                  <Image
                    style={{width: 70, height: 70}}
                    source={{uri: item?.placeImage}}
                  />
                </View>
                <View style={{marginLeft: 10}}>
                  <Text
                    style={{fontSize: 15, fontWeight: '500', color: '#000'}}>
                    {item?.place}
                  </Text>
                  <Text style={{fontWeight: '500', fontSize: 13}}>
                    {item?.shortDescription}
                  </Text>
                  <Text
                    style={{fontSize: 15, fontWeight: '500', color: 'gray'}}>
                    {item?.properties.length} properties
                  </Text>
                </View>
              </Pressable>
            );
          }
        }}
      />
    </View>
  );
};

export default SearchResults;
