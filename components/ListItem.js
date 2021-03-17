import React from 'react'
import { View, Text, StyleSheet, Touchable, TouchableOpacity, TouchableHighlight } from 'react-native'
const ListItem = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={props.onDelete.bind(this,props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#CCC',
        borderColor: 'black',
        borderWidth: 1,
        margin: 10
    }
})
export default ListItem
