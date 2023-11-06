import {
  View,
  Text,
  Pressable,
  StatusBar,
  ScrollView,
  TextInput,
  Button,
  Image,
  Alert,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import Header from '../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import DatePicker from 'react-native-date-ranges';
import {
  BottomModal,
  ModalButton,
  ModalContent,
  ModalFooter,
  ModalTitle,
  SlideAnimation,
} from 'react-native-modals';

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedDate, setSelectedDate] = useState('');
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  console.log(route.params);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Booking.com',
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
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="#fff"
          style={{marginRight: 12}}
        />
      ),
    });
  }, []);

  const customButton = onConfirm => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: {width: '80%', marginHorizontal: '3%'},
          text: {fontSize: 20},
        }}
        primary
        title="Submit"
      />
    );
  };

  const searchPlaces = place => {
    if (!route.params || !selectedDate) {
      Alert.alert(
        'Invalid details',
        'Please select all the details',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Ok',
            onPress: () => console.log('Ok Pressed'),
          },
        ],
        {
          cancelable: false,
        },
      );
    }

    if (route.params && selectedDate) {
      navigation.navigate('Places', {
        rooms,
        adults,
        children,
        selectedDate,
        place,
      });
    }
  };
  return (
    <>
      <StatusBar backgroundColor="#003580" barStyle="light" />
      <Header />
      <ScrollView>
        <View
          style={{
            margin: 20,
            borderColor: '#0047ab',
            borderWidth: 1,
            borderRadius: 6,
            overflow: 'hidden',
          }}>
          {/* Destination */}
          <Pressable
            onPress={() => navigation.navigate('Search')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              paddingHorizontal: 10,
              borderColor: '#003580',
              borderWidth: 1,
              paddingVertical: 10,
            }}>
            <Feather name="search" size={24} color="#000" />
            <TextInput
              placeholder={
                route.params?.input
                  ? route.params?.input
                  : 'Enter your Destination'
              }
              placeholderTextColor="#000"
            />
          </Pressable>
          {/* selected dates */}
          <Pressable
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              paddingHorizontal: 10,
              borderColor: '#0047ab',
              borderWidth: 1,
              paddingVertical: 10,
            }}>
            <Feather name="calendar" size={24} color="#000" />
            <DatePicker
              style={{height: 45, width: 'fit', borderWidth: 0}}
              customStyles={{
                placeholderText: {
                  fontSize: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 'auto',
                },
                headerStyle: {
                  backgroundColor: '#003580',
                },
                contentText: {
                  fontSize: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 'auto',
                },
              }} // optional
              centerAlign // optional text will align center or not
              allowFontScaling={false} // optional
              placeholder="Select your dates"
              mode={'range'}
              selectedBgColor="#0047ab"
              customButton={onConfirm => customButton(onConfirm)}
              onConfirm={(startDate, endDate) =>
                setSelectedDate(startDate, endDate)
              }
            />
          </Pressable>
          {/* room and guests */}
          <Pressable
            onPress={() => setModalVisible(true)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              paddingHorizontal: 10,
              borderColor: '#0047ab',
              borderWidth: 1,
              paddingVertical: 18,
            }}>
            <Ionicons name="person-outline" size={24} color="#000" />
            <Text
              style={{
                color: '#f00',
              }}>{`${rooms} room . ${adults} adults . ${children} children`}</Text>
          </Pressable>
          {/* search button */}
          <Pressable
            onPress={() => searchPlaces(route.params?.input)}
            style={{
              paddingHorizontal: 10,
              borderColor: '#0047ab',
              borderWidth: 1,
              paddingVertical: 10,
              backgroundColor: '#2a52be',
            }}>
            <Text
              style={{
                color: '#fff',
                textAlign: 'center',
                fontSize: 15,
                fontWeight: '500',
              }}>
              Search
            </Text>
          </Pressable>
        </View>
        <Text style={{marginHorizontal: 20, fontWeight: '500', fontSize: 17}}>
          Travel More spend less
        </Text>
        <ScrollView
          horizontal
          showsVerticalScrollIndicator={false}
          style={{
            marginHorizontal: 20,
          }}>
          <Pressable
            style={{
              width: 200,
              height: 150,
              marginTop: 10,
              backgroundColor: '#003580',
              borderRadius: 10,
              padding: 20,
              marginRight: 15,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 15,
                fontWeight: 'bold',
                marginVertical: 7,
              }}>
              Genius
            </Text>
            <Text style={{color: '#fff', fontSize: 15, fontWeight: '500'}}>
              You are at genius level one in our loyalty program
            </Text>
          </Pressable>
          <Pressable
            style={{
              width: 200,
              marginRight: 15,
              height: 150,
              marginTop: 10,
              borderRadius: 10,
              padding: 20,
              borderColor: '#e0e0e0',
              borderWidth: 2,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                marginVertical: 7,
              }}>
              15% Discount
            </Text>
            <Text style={{fontSize: 15, fontWeight: '500'}}>
              Complete 5 stays to unlock level 2
            </Text>
          </Pressable>
          <Pressable
            style={{
              width: 200,
              height: 150,
              marginTop: 10,
              borderColor: '#e0e0e0',
              borderWidth: 2,
              borderRadius: 10,
              padding: 20,
            }}>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                marginVertical: 7,
              }}>
              10% Discount
            </Text>
            <Text style={{fontSize: 15, fontWeight: '500'}}>
              Enjoy Discounts at participating at properties worldwide
            </Text>
          </Pressable>
        </ScrollView>
        <Pressable
          style={{
            marginTop: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{width: 200, height: 50, resizeMode: 'cover'}}
            source={{
              uri: 'https://assets.stickpng.com/thumbs/5a32a821cb9a85480a628f8f.png',
            }}
          />
        </Pressable>
      </ScrollView>
      <BottomModal
        onBackdropPress={() => setModalVisible(!modalVisible)}
        swipeDirection={['up', 'down']}
        swipeThreshold={200}
        modalAnimation={
          new SlideAnimation({
            slideFrom: 'bottom',
          })
        }
        onHardwareBackPress={() => setModalVisible(!modalVisible)}
        visible={modalVisible}
        onTouchOutside={() => setModalVisible(!modalVisible)}
        modalTitle={<ModalTitle title="Select rooms and guests" />}
        footer={
          <ModalFooter>
            <ModalButton
              onPress={() => setModalVisible(false)}
              text="Apply"
              style={{
                // marginBottom: 20,
                color: '#fff',
                backgroundColor: '#003580',
              }}
            />
          </ModalFooter>
        }>
        <ModalContent style={{width: '100%', height: 'fit', gap: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginTop: 20,
            }}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>Rooms</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}>
              <Pressable
                onPress={() => setRooms(r => Math.max(1, r - 1))}
                style={{
                  borderRadius: 30,
                  borderColor: '#bebebe',
                  backgroundColor: '#e0e0e0',
                  width: 30,
                  height: 30,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Entypo name="minus" size={15} color="black" />
              </Pressable>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>{rooms}</Text>
              <Pressable
                onPress={() => setRooms(r => ++r)}
                style={{
                  borderRadius: 30,
                  borderColor: '#bebebe',
                  backgroundColor: '#e0e0e0',
                  width: 30,
                  height: 30,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Entypo name="plus" size={15} color="black" />
              </Pressable>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>Adults</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <Pressable
                onPress={() => setAdults(a => Math.max(1, a - 1))}
                style={{
                  borderRadius: 30,
                  borderColor: '#bebebe',
                  backgroundColor: '#e0e0e0',
                  width: 30,
                  height: 30,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Entypo name="minus" size={15} color="black" />
              </Pressable>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>{adults}</Text>
              <Pressable
                onPress={() => setAdults(a => ++a)}
                style={{
                  borderRadius: 30,
                  borderColor: '#bebebe',
                  backgroundColor: '#e0e0e0',
                  width: 30,
                  height: 30,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Entypo name="plus" size={15} color="black" />
              </Pressable>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 16, fontWeight: '500'}}>Children</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
              <Pressable
                onPress={() => setChildren(c => Math.max(0, c - 1))}
                style={{
                  borderRadius: 30,
                  borderColor: '#bebebe',
                  backgroundColor: '#e0e0e0',
                  width: 30,
                  height: 30,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Entypo name="minus" size={15} color="black" />
              </Pressable>
              <Text style={{fontWeight: 'bold', fontSize: 15}}>{children}</Text>
              <Pressable
                onPress={() => setChildren(c => ++c)}
                style={{
                  borderRadius: 30,
                  borderColor: '#bebebe',
                  backgroundColor: '#e0e0e0',
                  width: 30,
                  height: 30,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Entypo name="plus" size={15} color="black" />
              </Pressable>
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;
