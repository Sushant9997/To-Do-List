import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, FlatList, TextInput } from 'react-native';
import ListItem from './components/ListItem'
import ListInput from './components/ListInput';

export default function App() {

  const [addItem, setAddItem] = useState([]);
  const[addMode, setAddMode]=useState(false);


  const addListHandler = (listTitle) => {
    setAddItem(currentList => [
      ...addItem,
      { id: Math.random().toString(), value: listTitle }]);
      setAddMode(false);
    }

  const removeListHandler = listId =>{
      setAddItem(currentList=>{
        return currentList.filter((list)=>list.id!==listId);
      })
  }

  const cancelListItem = ()=>{
    setAddMode(false); 
  }
  return (
    <View style={styles.screen}>
    <Button title="Add List" onPress={()=>setAddMode(true)}/>
      {/* View for add Items */}
      <ListInput visible={addMode} onListItem={addListHandler} onCancel={cancelListItem}/>

      {/* View for showing the listed ITems */}
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={addItem} renderItem={itemData => <ListItem id={itemData.item.id} onDelete={removeListHandler} title={itemData.item.value} />} />



    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },



});
