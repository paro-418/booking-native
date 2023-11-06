import {View, Text, Pressable, Image, Dimensions} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window');
const PropertyCard = ({
  rooms,
  children,
  adults,
  selectedDates,
  property,
  availableRooms,
}) => {
  return (
    <View style={{height: '33%'}}>
      <Pressable
        style={{
          flexDirection: 'row',
          margin: 15,
          backgroundColor: '#fff',
        }}>
        <View>
          <Image
            source={{uri: property.image}}
            style={{width: width - 260, height: '100%'}}
          />
        </View>
        <View style={{padding: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{flex: 1}}>{property?.name}</Text>
            <AntDesign name="hearto" size={22} color="#f00" />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 6,
              marginTop: 7,
            }}>
            <MaterialIcons name="stars" size={22} color="green" />
            <Text>{property?.rating}</Text>
            <View
              style={{
                backgroundColor: '#6cb4ee',
                borderRadius: 5,
                width: 100,
              }}>
              <Text style={{textAlign: 'center', fontSize: 15, color: '#fff'}}>
                Genius Level
              </Text>
            </View>
          </View>
          <Text
            style={{
              width: 200,
              marginTop: 6,
              color: 'gray',
              fontWeight: 'bold',
            }}>
            {property?.address?.length > 50
              ? property?.address?.substr(0, 50)
              : property?.address}
          </Text>
          <Text style={{marginTop: 4, fontSize: 15, fontWeight: '500'}}>
            Price for 1 Night and {adults} adults
          </Text>
          <View
            style={{
              marginTop: 5,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
            }}>
            <Text
              style={{
                color: 'red',
                fontSize: 18,
                textDecorationLine: 'line-through',
              }}>
              {property?.oldPrice * adults}
            </Text>
            <Text>Rs.{property?.newPrice * adults}</Text>
          </View>
          <View style={{marginTop: 6}}>
            <Text style={{fontSize: 16, color: 'gray'}}>Deluxe Room</Text>
            <Text style={{fontSize: 16, color: 'gray'}}>
              Hotel Room : 1 bed
            </Text>
          </View>
          <View
            style={{
              backgroundColor: '#6082b6',
              borderRadius: 5,
              width: 180,
              paddingHorizontal: 3,
              paddingVertical: 2,
              marginTop: 2,
            }}>
            <Text style={{color: '#fff', textAlign: 'center'}}>
              Limited Time deal
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default PropertyCard;
