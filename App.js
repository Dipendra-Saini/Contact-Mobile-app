import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const contacts = [
  { name: 'John Doe', phone: '123-456-7890' },
  { name: 'Jane Smith', phone: '987-654-3210' },
  { name: 'Michael Johnson', phone: '555-123-4567' },
  { name: 'Emily Davis', phone: '444-555-6666' },
  { name: 'David Brown', phone: '777-888-9999' },
  { name: 'Sarah Wilson', phone: '111-222-3333' },
  { name: 'Robert Anderson', phone: '222-333-4444' },
  { name: 'Olivia Thomas', phone: '666-777-8888' },
  { name: 'William Martinez', phone: '333-444-5555' },
  { name: 'Nkame Lee', phone: '888-999-0000' },
  { name: 'Kamer Doe', phone: '123-456-7890' },
  { name: 'Sohan Smith', phone: '987-654-3210' },
  { name: 'Jordan Johnson', phone: '555-123-4567' },
  { name: 'Micy Davis', phone: '444-555-6666' },
  { name: 'Lilly Brown', phone: '777-888-9999' },
  { name: 'Capiter Wilson', phone: '111-222-3333' },
  { name: 'Nosoern Anderson', phone: '222-333-4444' },
  { name: 'Volvae Thomas', phone: '666-777-8888' },
  { name: 'komena Martinez', phone: '333-444-5555' },
  { name: 'Sakrira Lee', phone: '888-999-0000' },
];

const ContactApp = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = text => {
    setSearchQuery(text);
  };

  const handleBoxClick = (name, phone) => {
    Alert.alert(
      'Contact Details',
      `Name: ${name}\nPhone: ${phone}`,
      [{ text: 'Dismiss', onPress: () => console.log('Alert dismissed') }],
      { cancelable: false }
    );
  };
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Contact App</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search contact by name"
        onChangeText={handleSearch}
        value={searchQuery}
      />
      {filteredContacts.map((contact, index) => (
        <View style={styles.box} key={index} onPress={()=>handleBoxClick(contact.name,contact.phone)}>
          <Text style={styles.name}>{contact.name}</Text>
          <Text style={styles.phone}>{contact.phone}</Text>
        </View>
        
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  box: {
    width: 320,
    padding: 20,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  phone: {
    fontSize: 14,
    color: 'gray',
  },
});
export default ContactApp;