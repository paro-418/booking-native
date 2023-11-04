import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {View, Text, Pressable} from 'react-native';

const Header = () => {
  return (
    <View
      style={{
        backgroundColor: '#003580',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 8,
      }}>
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: '#fff',
          borderRadius: 30,
          borderWidth: 1,
          padding: 8,
        }}>
        <Ionicons name="bed-outline" size={24} color="#fff" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: 'bold',
            color: '#fff',
            fontSize: 15,
          }}>
          Stays
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}>
        <Ionicons name="airplane-outline" size={24} color="#fff" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: 'bold',
            color: '#fff',
            fontSize: 15,
          }}>
          Flights
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}>
        <Ionicons name="car-outline" size={24} color="#fff" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: 'bold',
            color: '#fff',
            fontSize: 15,
          }}>
          Car Rental
        </Text>
      </Pressable>
      <Pressable
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 10,
        }}>
        <FontAwesome5 name="uber" size={24} color="#fff" />
        <Text
          style={{
            marginLeft: 8,
            fontWeight: 'bold',
            color: '#fff',
            fontSize: 15,
          }}>
          Taxi
        </Text>
      </Pressable>
    </View>
  );
};

export default Header;
