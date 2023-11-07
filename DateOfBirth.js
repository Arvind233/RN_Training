import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DateOfBirth = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState('Select Date Of Birth');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    //console.warn('A date has been picked: ', date);
    const dob = new Date(date);
    const splitTime = dob.toISOString().split('T');
    const splitdate = splitTime[0].split('-');
    //console.log(splitdate[2] + '/' + splitdate[1] + '/' + splitdate[0]);
    setSelectedDate(splitdate[2] + '/' + splitdate[1] + '/' + splitdate[0]);
    hideDatePicker();
  };

  return (
    <View>
      <Text style={styles.dobText}> Select Date Of Birth</Text>
      <TouchableOpacity onPress={showDatePicker} style={styles.dobButton}>
        <Text>{selectedDate}</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dobButton: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(220,220,220)',
  },
  dobText: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 20,
    alignSelf: 'center',
    //textDecorationLine: 'underline',
  },
});

export default DateOfBirth;
