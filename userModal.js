import React, {useState} from 'react';
import {
  Modal,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';

const UserModal = ({isVisible, onClose, onAddPharmacy}) => {
  const [pharmacyData, setPharmacyData] = useState({
    pharmacyName: '',
    medicineCategory: [{category: '', medicineName: [{name: ''}]}],
  });

  const handleAddCategory = () => {
    setPharmacyData(prevData => ({
      ...prevData,
      medicineCategory: [
        ...prevData.medicineCategory,
        {category: '', medicineName: [{name: ''}]},
      ],
    }));
  };

  const handleAddMedicine = categoryIndex => {
    setPharmacyData(prevData => {
      const updatedCategories = [...prevData.medicineCategory];
      updatedCategories[categoryIndex].medicineName.push({name: ''});
      return {...prevData, medicineCategory: updatedCategories};
    });
  };

  const handleSavePharmacy = () => {
    setPharmacyData({
      pharmacyName: '',
      medicineCategory: [{category: '', medicineName: [{name: ''}]}],
    });
    const updatedCategories = pharmacyData.medicineCategory
      .map(category => ({
        category: category.category.trim(),
        medicineName: category.medicineName.filter(
          medicine => medicine.name.trim() !== '',
        ),
      }))
      .filter(category => category.medicineName.length > 0);

    const newPharmacy = {
      pharmacyName: pharmacyData.pharmacyName.trim(),
      medicineCategory: updatedCategories,
    };

    onAddPharmacy(newPharmacy);
    onClose();
  };

  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.modalHeading}>Add Pharmacy</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Pharmacy Name"
          value={pharmacyData.pharmacyName}
          onChangeText={text =>
            setPharmacyData(prevData => ({...prevData, pharmacyName: text}))
          }
        />

        {pharmacyData.medicineCategory.map((category, index) => (
          <View key={index}>
            <View style={styles.rowContainer}>
              <TextInput
                style={styles.categoryInput}
                placeholder={`Enter Category ${index + 1}`}
                value={category.category}
                onChangeText={text =>
                  setPharmacyData(prevData => {
                    const updatedCategories = [...prevData.medicineCategory];
                    updatedCategories[index].category = text;
                    return {...prevData, medicineCategory: updatedCategories};
                  })
                }
              />
              <TouchableOpacity
                onPress={() => handleAddCategory()}
                style={styles.addButton}>
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>

            {category.medicineName.map((medicine, medicineIndex) => (
              <View style={styles.rowContainer} key={medicineIndex}>
                <TextInput
                  style={styles.medicineinput}
                  placeholder={`Enter Medicine ${medicineIndex + 1}`}
                  value={medicine.name}
                  onChangeText={text =>
                    setPharmacyData(prevData => {
                      const updatedCategories = [...prevData.medicineCategory];
                      updatedCategories[index].medicineName[
                        medicineIndex
                      ].name = text;
                      return {...prevData, medicineCategory: updatedCategories};
                    })
                  }
                />
                <TouchableOpacity
                  onPress={() => handleAddMedicine(index)}
                  style={styles.plusButton}>
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        ))}

        <TouchableOpacity
          onPress={handleSavePharmacy}
          style={styles.saveButton}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    width: 300,
    borderRadius: 15,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(220,220,220)',
  },
  medicineinput: {
    height: 40,
    width: 240,
    borderRadius: 15,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(220,220,220)',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryInput: {
    // flex: 1,
    // height: 40,
    // borderRadius: 15,
    // paddingHorizontal: 10,
    // backgroundColor: 'rgb(220, 220, 220)',
    height: 40,
    width: 270,
    borderRadius: 15,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'rgb(220,220,220)',
  },
  addButton: {
    backgroundColor: 'black',
    borderRadius: 10,
    marginLeft: 10,
    padding: 5,
    marginBottom: 8,
  },
  plusButton: {
    backgroundColor: 'black',
    borderRadius: 20,
    marginLeft: 10,
    padding: 5,
    width: 30,
    marginBottom: 8,
  },
  saveButton: {
    backgroundColor: 'blue',
    borderRadius: 100,
    alignItems: 'center',
    width: 355,
    paddingVertical: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  modalHeading: {
    fontSize: 40,
    marginBottom: 10,
    marginLeft: 80,
  },
});

export default UserModal;



// using object.assign

import React, { useState } from 'react';
// import {
//   Modal,
//   View,
//   TextInput,
//   StyleSheet,
//   TouchableOpacity,
//   Text,
// } from 'react-native';

// const UserModal = ({ isVisible, onClose, onAddPharmacy }) => {
//   const [pharmacyData, setPharmacyData] = useState({
//     pharmacyName: '',
//     medicineCategory: [{ category: '', medicineName: [{ name: '' }] }],
//   });

//   const handleAddCategory = () => {
//     setPharmacyData(prevData =>
//       Object.assign({}, prevData, {
//         medicineCategory: [
//           ...prevData.medicineCategory,
//           { category: '', medicineName: [{ name: '' }] },
//         ],
//       })
//     );
//   };

//   const handleAddMedicine = categoryIndex => {
//     setPharmacyData(prevData => {
//       const updatedCategories = [...prevData.medicineCategory];
//       updatedCategories[categoryIndex].medicineName.push({ name: '' });
//       return Object.assign({}, prevData, { medicineCategory: updatedCategories });
//     });
//   };

//   const handleSavePharmacy = () => {
//     setPharmacyData({
//       pharmacyName: '',
//       medicineCategory: [{ category: '', medicineName: [{ name: '' }] }],
//     });

//     const updatedCategories = pharmacyData.medicineCategory
//       .map(category => ({
//         category: category.category.trim(),
//         medicineName: category.medicineName.filter(
//           medicine => medicine.name.trim() !== ''
//         ),
//       }))
//       .filter(category => category.medicineName.length > 0);

//     const newPharmacy = {
//       pharmacyName: pharmacyData.pharmacyName.trim(),
//       medicineCategory: updatedCategories,
//     };

//     onAddPharmacy(newPharmacy);
//     onClose();
//   };

//   return (
//     <Modal visible={isVisible} animationType="slide">
//       <View style={styles.container}>
//         <Text style={styles.modalHeading}>Add Pharmacy</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Enter Pharmacy Name"
//           value={pharmacyData.pharmacyName}
//           onChangeText={text =>
//             setPharmacyData(prevData =>
//               Object.assign({}, prevData, { pharmacyName: text })
//             )
//           }
//         />

//         {pharmacyData.medicineCategory.map((category, index) => (
//           <View key={index}>
//             <View style={styles.rowContainer}>
//               <TextInput
//                 style={styles.categoryInput}
//                 placeholder={`Enter Category ${index + 1}`}
//                 value={category.category}
//                 onChangeText={text =>
//                   setPharmacyData(prevData =>
//                     Object.assign({}, prevData, {
//                       medicineCategory: prevData.medicineCategory.map(
//                         (cat, catIndex) =>
//                           catIndex === index
//                             ? Object.assign({}, cat, { category: text })
//                             : cat
//                       ),
//                     })
//                   )
//                 }
//               />
//               <TouchableOpacity
//                 onPress={() => handleAddCategory()}
//                 style={styles.addButton}>
//                 <Text style={styles.buttonText}>Add</Text>
//               </TouchableOpacity>
//             </View>

//             {category.medicineName.map((medicine, medicineIndex) => (
//               <View style={styles.rowContainer} key={medicineIndex}>
//                 <TextInput
//                   style={styles.medicineinput}
//                   placeholder={`Enter Medicine ${medicineIndex + 1}`}
//                   value={medicine.name}
//                   onChangeText={text =>
//                     setPharmacyData(prevData =>
//                       Object.assign({}, prevData, {
//                         medicineCategory: prevData.medicineCategory.map(
//                           (cat, ci) =>
//                             ci === index
//                               ? Object.assign({}, cat, {
//                                   medicineName: cat.medicineName.map(
//                                     (med, mi) =>
//                                       mi === medicineIndex
//                                         ? Object.assign({}, med, { name: text })
//                                         : med
//                                   ),
//                                 })
//                               : cat
//                         ),
//                       })
//                     )
//                   }
//                 />
//                 <TouchableOpacity
//                   onPress={() => handleAddMedicine(index)}
//                   style={styles.plusButton}>
//                   <Text style={styles.buttonText}>+</Text>
//                 </TouchableOpacity>
//               </View>
//             ))}
//           </View>
//         ))}

//         <TouchableOpacity onPress={handleSavePharmacy} style={styles.saveButton}>
//           <Text style={styles.buttonText}>Save</Text>
//         </TouchableOpacity>
//       </View>
//     </Modal>
//   );
// };




// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   input: {
//     height: 40,
//     width: 300,
//     borderRadius: 15,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     backgroundColor: 'rgb(220,220,220)',
//   },
//   medicineinput: {
//     height: 40,
//     width: 240,
//     borderRadius: 15,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     backgroundColor: 'rgb(220,220,220)',
//   },
//   rowContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   categoryInput: {
//     // flex: 1,
//     // height: 40,
//     // borderRadius: 15,
//     // paddingHorizontal: 10,
//     // backgroundColor: 'rgb(220, 220, 220)',
//     height: 40,
//     width: 270,
//     borderRadius: 15,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     backgroundColor: 'rgb(220,220,220)',
//   },
//   addButton: {
//     backgroundColor: 'black',
//     borderRadius: 10,
//     marginLeft: 10,
//     padding: 5,
//     marginBottom: 8,
//   },
//   plusButton: {
//     backgroundColor: 'black',
//     borderRadius: 20,
//     marginLeft: 10,
//     padding: 5,
//     width: 30,
//     marginBottom: 8,
//   },
//   saveButton: {
//     backgroundColor: 'blue',
//     borderRadius: 100,
//     alignItems: 'center',
//     width: 355,
//     paddingVertical: 5,
//     marginVertical: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     alignSelf: 'center',
//   },
//   modalHeading: {
//     fontSize: 40,
//     marginBottom: 10,
//     marginLeft: 80,
//   },
// });

// export default UserModal;
