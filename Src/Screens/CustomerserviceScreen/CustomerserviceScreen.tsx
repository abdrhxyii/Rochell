import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
  } from 'react-native';
import React, {useState} from 'react';
import Header from '../../Components/HeaderComponent/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';

const initialMessages = [
    {
      id: '4',
      text: 'Hello, good morning.\nI am a Customer Service, is there anything I can help you with?',
      createdAt: new Date(),
      user: 'Customer Service',
    },
    {
      id: '3',
      text: 'Hi, I\'m having problems with my order & payment.\nCan you help me?',
      createdAt: new Date(),
      user: 'User',
    },
    {
      id: '2',
      text: 'Of course...',
      createdAt: new Date(),
      user: 'Customer Service',
    },
    {
      id: '1',
      text: 'Can you tell me the problem you are having? so I can help solve it',
      createdAt: new Date(),
      user: 'Customer Service',
    },
  ];

const CustomerserviceScreen = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage = {
        id: `${messages.length + 1}`,
        text: inputText,
        createdAt: new Date(),
        user: 'User',
      };
      setMessages([newMessage, ...messages]);
      setInputText('');
    }
  };

  const renderItem = ({ item }: any) => {
    const isUser = item.user === 'User';
    return (
      <View style={[styles.messageContainer, isUser ? styles.userMessage : styles.customerMessage]}>
        <Text style={isUser ? styles.userText : styles.customerText}>{item.text}</Text>
      </View>
    );
  };


  return (
    <SafeAreaView style={styles.container}>
    <Header loggedIn="true" leftIcon="arrow-left" rightIcon="bell" centerText="Customer Service"/>
    <FlatList
      data={messages}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      inverted
      contentContainerStyle={styles.messagesContainer}
      showsVerticalScrollIndicator={false}
    />
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        value={inputText}
        onChangeText={setInputText}
        placeholder="Write your message..."
      />
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
      <Icon name="paper-plane" color={'white'} size={20} solid={false}/>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  )
}

export default CustomerserviceScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    padding: 16,
    backgroundColor: 'white',
  },
  messagesContainer: {
    paddingVertical: 1,
  },
  messageContainer: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
    maxWidth: '80%',
  },
  userMessage: {
    backgroundColor: '#000',
    alignSelf: 'flex-end',
  },
  customerMessage: {
    backgroundColor: '#f0f0f0',
    alignSelf: 'flex-start',
  },
  userText: {
    color: '#fff',
  },
  customerText: {
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    alignItems: 'center',
    paddingTop: 20
  },
  textInput: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#000',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  sendButtonText: {
    color: '#fff',
  },
});