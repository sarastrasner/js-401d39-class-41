import React from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, Button, Linking, TouchableOpacity} from 'react-native';
import { sendEmail } from './send-email';
import ClipboardComponent from './clipboard'

const Form = () => {
  const [items, updateItems] = React.useState([]);
  const [input, handleInput] = React.useState('');

   const handleChange = (text) => {
    handleInput(text);
   }

   const handleSubmit = () => {
     const newItem = {name: input}
      updateItems([...items, newItem]);
   }

  const sendEmailMessage = () => {
    sendEmail(
        'test@gmail.com',
        'Look at this awesome list!',
        `Here is a list I thought you'd enjoy: ${items.map(item =>item.name)}`
    ).then(() => {
        console.log('Your message was successfully sent!');
    });
  }

  return (
    <>
         <View>
            <TextInput
               placeholder = "add an item"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
              onChangeText = {(text) => handleChange(text)}          
            />          
         </View>
             <Button
              onPress={handleSubmit}
              title="Add this item to the list"
              color="#841584"
              accessibilityLabel="Learn more about this purple button"
              />
      <FlatList
        data={items}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={(item, index) => String(index)}
      />
    <Button
  onPress={sendEmailMessage}
  title="Email this to a friend"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
  />
  <ClipboardComponent
    itemsToCopy={items}
  />
  </>
  );
}

export default Form;