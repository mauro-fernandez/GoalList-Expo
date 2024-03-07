import { useState } from 'react';
import { StyleSheet, Button, TextInput, View, Modal, Image } from 'react-native';

export function GoalInput(props){
    const { modalIsVisible, onAddGoal, onCancelGoal } = props
    const [enteredGoalText, setEnteredGoalText] = useState('')
    const imageTargetGoal = require('../assets/goal.png')

    const goalInputHandler = (enteredText) => {
        setEnteredGoalText(enteredText)
    }

    const addGoalHandlerInternal = () => {
        if(!enteredGoalText) return
        onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <Modal visible={modalIsVisible} animationType='slide' >
        <View style={styles.inputContainer}>
            <Image source={imageTargetGoal} style={styles.image}/>
            <TextInput 
                style={styles.textInput}
                placeholder='Your course goals!'
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='Cancel' onPress={onCancelGoal} color={'#f31282'} />
                </View>
                <View style={styles.button}>
                    <Button title='Add Goal' onPress={addGoalHandlerInternal} color={'#b180f0'} />
                </View>
            </View>
        </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
      },
      textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
      },
      buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
      },
      button: {
        width: '40',
        marginHorizontal: 8
      },
      image: {
        width: 100,
        height: 100,
        margin: 20,
      }
})