import React, { useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Clipboard, StyleSheet, Button } from 'react-native'

const ClipboardComponent = (props) => {
  const [copiedText, setCopiedText] = useState('')

  const copyToClipboard = () => {
    props.itemsToCopy.map(item => item.name);
    console.log('Mapped props', props.itemsToCopy);
    Clipboard.setString(props.itemsToCopy)
  }

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString()
    setCopiedText(text)
  }

  return (
    <>
      <Text>{props.items}</Text>
        <Button
          onPress={() => copyToClipboard()}
          title="Copy List to Clipboard"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
          />
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  copiedText: {
    marginTop: 10,
    color: 'red'
  }
})

export default ClipboardComponent;