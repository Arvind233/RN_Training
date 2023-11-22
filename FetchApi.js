import {View, Text, FlatList, length} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function FetchApi() {
  const [data, setData] = useState([]);

  // const getApiData = async () => {
  //   let result = await fetch('https://jsonplaceholder.typicode.com/posts');
  //   result = await result.json();

  //   setData(result);
  // };

  // useEffect(() => {
  //   getApiData();
  // }, []);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log('Error in Fetching the data:', err);
      });

    // axios.post(
    //   'https://jsonplaceholder.typicode.com/posts',
    //   {
    //     id: 'value1',
    //     title: 'value2',
    //     //other data key value pairs
    //   },
    //   {
    //     headers: {
    //       'api-token': 'xyz',
    //     },
    //   },
    // );
  }, []);

  return (
    <View>
      <Text style={{fontSize: 40, alignSelf: 'center'}}>API CALLING</Text>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View
              style={{
                padding: 10,
                borderBottomColor: '#2ccc',
                borderBottomWidth: 2,
              }}>
              <Text style={{fontSize: 30}}>{item.id}</Text>
              <Text style={{fontSize: 18}}>{item.title}</Text>
              <Text style={{fontSize: 15}}>{item.body}</Text>
            </View>
          )}
        />
      ) : null}
    </View>
  );
}
