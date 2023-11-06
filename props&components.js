import React, {useRef, forwardRef, useImperativeHandle} from 'react';
import {View, Text, Button} from 'react-native';

// Child functional component
const ChildComponent = props => {
  return (
    <View>
      <Text style={{fontSize: 20}}>This is the ChildComponent</Text>
      <Text style={{fontSize: 25}}>
        Value from Parent: {props.valueFromParent}
      </Text>
      <Button title="Click me" onPress={props.onButtonPress} />
    </View>
  );
};

// Child functional component
const Child2Component = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    showAlert() {
      alert('Hello from Child Component called from parent');
    },
  }));

  showAlert1 = () => {
    alert('Hello from Child Component called from parent');
  };
  return (
    <View>
      <Text>This is the Child2Component</Text>
      <Text>Value from Parent: {props.valueFromParent}</Text>
      <Button title="Click me" onPress={props.onButtonPress} />
    </View>
  );
});

// Parent functional component
const App = () => {
  const childRef = useRef();
  console.log(childRef, 'childRef..');

  const handleButtonPress = () => {
    alert('Button in ChildComponent was clicked!');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>This is the ParentComponent</Text>
      {/* <ChildComponent
        valueFromParent="Hello from Test"
        onButtonPress={handleButtonPress}
      /> */}

      <Child2Component
        ref={childRef}
        valueFromParent="Hello from Parent1"
        onButtonPress={handleButtonPress}
      />
      <Button
        title="Click me"
        onPress={() => {
          childRef.current.showAlert();
        }}
      />
    </View>
  );
};

export default App;
