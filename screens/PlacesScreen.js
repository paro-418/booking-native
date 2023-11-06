import {View, Text, Pressable, ScrollView} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {DATA} from '../data/data';
import PropertyCard from '../components/PropertyCard';
import {
  BottomModal,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from 'react-native-modals';
const FILTERS = [
  {
    id: 0,
    filter: 'cost:low to high',
  },
  {
    id: 1,
    filter: 'cost:high to low',
  },
];

const PlacesScreen = () => {
  const route = useRoute();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [sortedData, setSortedData] = useState(DATA);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Popular Places',
      headerTitleStyle: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 20,
      },
      headerStyle: {
        backgroundColor: '#003580',
        borderBottomColor: 'transparent',
        shadowColor: 'transparent',
      },
      headerTitleAlign: 'center',
    });
  }, []);

  const compare = (a, b) => {
    if (a.newPrice > b.newPrice) return -1;
    if (a.newPrice < b.newPrice) return 1;
    return 0;
  };
  const comparison = (a, b) => {
    if (a.newPrice < b.newPrice) return -1;
    if (a.newPrice > b.newPrice) return 1;
    return 0;
  };
  const searchedPlaces = DATA.filter(item => item.place === route.params.place);
  const applyFilter = filter => {
    setModalVisible(false);
    switch (filter) {
      case 'cost:high to low':
        searchedPlaces.map(val => val.properties.sort(compare));
        setSortedData(searchedPlaces);
        break;

      case 'cost:low to high':
        searchedPlaces.map(val => val.properties.sort(comparison));
        setSortedData(searchedPlaces);
        break;
    }
  };
  return (
    <View style={{paddingBottom: 50}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          padding: 12,
          backgroundColor: '#fff',
        }}>
        <Pressable
          onPress={() => setModalVisible(!modalVisible)}
          style={{flexDirection: 'row', alignItems: 'center'}}>
          <Octicons name="arrow-switch" size={22} color="#000" />
          <Text style={{fontSize: 15, fontWeight: '500', marginLeft: 8}}>
            Sort
          </Text>
        </Pressable>
        <Pressable
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Ionicons name="filter" size={22} color="#000" />
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              marginLeft: 8,
            }}>
            Filter
          </Text>
        </Pressable>
        <Pressable style={{flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesome5 name="map-marker-alt" size={22} color="#000" />
          <Text style={{fontSize: 15, fontWeight: '500', marginLeft: 8}}>
            Map
          </Text>
        </Pressable>
      </View>
      <ScrollView style={{backgroundColor: '#f5f5f5'}}>
        {sortedData
          ?.filter(item => item.place === route.params.place)
          .map(item =>
            item.properties.map((property, index) => (
              <PropertyCard
                key={index}
                rooms={route.params.rooms}
                children={route.params.children}
                adults={route.params.adults}
                selectedDates={route.params.selectedDates}
                property={property}
                availableRooms={property.rooms}
              />
            )),
          )}
      </ScrollView>
      <BottomModal
        modalAnimation={
          new SlideAnimation({
            slideFrom: 'bottom',
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
        modalTitle={<ModalTitle title="Select rooms and guests" />}
        swipeThreshold={200}
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={['up', 'down']}
        footer={
          <ModalFooter>
            <Pressable
              onPress={() => applyFilter(selectedFilter)}
              style={{
                padding: 10,
                marginLeft: 'auto',
                marginVertical: 10,
                marginRight: 'auto',
              }}>
              <Text>Apply</Text>
            </Pressable>
          </ModalFooter>
        }>
        <ModalContent style={{width: '100%', height: 'fit,'}}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                marginVertical: 10,
                flex: 2,
                height: 'fit',
                borderRightWidth: 1,
                borderColor: '#e0e0e0',
              }}>
              <Text style={{textAlign: 'center'}}>Sort</Text>
            </View>
            <View style={{flex: 3, margin: 10}}>
              {FILTERS.map((filter, index) => (
                <Pressable
                  onPress={() => setSelectedFilter(filter.filter)}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 10,
                  }}
                  key={index}>
                  {selectedFilter?.includes(filter.filter) ? (
                    <FontAwesome name="circle" size={18} color="green" />
                  ) : (
                    <Entypo name="circle" size={18} color="#000" />
                  )}

                  <Text
                    style={{fontSize: 16, fontWeight: '500', marginLeft: 6}}>
                    {filter.filter}
                  </Text>
                </Pressable>
              ))}
            </View>
            <View></View>
          </View>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

export default PlacesScreen;
