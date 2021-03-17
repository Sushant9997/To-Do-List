import React, {useState} from 'react'
import { View, TextInput,Modal, StyleSheet,Button } from 'react-native';

const ListInput = (props) => {
    const [list, setList] = useState("");


    const listInputHandler=(enteredList)=>{
        setList(enteredList)
      }
      const addListHandler=()=>{
        props.onListItem(list);
        setList('');
      };
          return (
        <Modal visible={props.visible} animationType="slide">
        <View style={styles.input}>
            <TextInput
                placeholder="Enter List"
                style={styles.inputContainer}
                onChangeText={listInputHandler}
                value={list}
            />
            <View style={styles.buttonContainer}>
           <View style={styles.button}><Button title="Cancel" color="red" onPress={props.onCancel}/></View>
           <View style={styles.button}><Button title="ADD" onPress={addListHandler} /></View>
        </View>
        </View>
        </Modal>
    )
}

const styles=StyleSheet.create({
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'60%'
    },
    input: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      button:{
          width:'45%'
      },
      inputContainer: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 15,
        marginBottom:15
      }
})

export default ListInput
