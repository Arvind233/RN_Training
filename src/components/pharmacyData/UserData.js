import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import UserModal from '../pharmacyModal/UserModal';
const UserData = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [allPharmacy, setAllPharmacy] = useState([]);

  const renderMedicineName = ({item}) => (
    <View style={{marginLeft: 30}}>
      <Text style={{fontSize: 18}}> Medicines - {item.name}</Text>
    </View>
  );

  const renderMedicineCategory = ({item}) => (
    <View style={styles.container}>
      <Text style={styles.category}>Category - {item.category}</Text>
      <FlatList
        data={item.medicineName}
        keyExtractor={(medicine, index) => String(index)}
        renderItem={renderMedicineName}
      />
    </View>
  );

  const renderPharmacy = ({item}) => (
    <View style={styles.container}>
      <Text style={styles.pharmacyName}>{item.pharmacyName}</Text>
      <FlatList
        data={item.medicineCategory}
        keyExtractor={(category, index) => String(index)}
        renderItem={renderMedicineCategory}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.mainHeading}>Pharmacy Information</Text>
      <FlatList
        data={allPharmacy}
        keyExtractor={(pharmacy, index) => String(index)}
        renderItem={renderPharmacy}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>Pharmacy Data Not Available</Text>
        }
      />
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.userButton}>
        <Text style={styles.buttonText}>Add Pharmacy</Text>
      </TouchableOpacity>
      <UserModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddPharmacy={newPharmacy => {
          setAllPharmacy([...allPharmacy, newPharmacy]);
          setModalVisible(false);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    paddingHorizontal: 20,
    borderBlockColor: 'green',
    borderEndWidth: 3,
    borderStartWidth: 3,
    borderRadius: 10,
  },
  mainHeading: {
    fontSize: 40,
    alignSelf: 'center',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  userButton: {
    backgroundColor: 'blue',
    borderRadius: 100,
    alignItems: 'center',

    paddingVertical: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pharmacyName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  category: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  emptyMessage: {
    fontSize: 25,
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default UserData;
