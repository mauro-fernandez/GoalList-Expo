import { StyleSheet, Text, View, Pressable } from 'react-native';

export function GoalItem(props){
    const { onDeleteGoal, id } = props
    return (
        <View style={styles.goalItem}>
                <Pressable
                    onPress={onDeleteGoal.bind(this, id)}
                    android_ripple={{color: 'red'}} // esto solo funciona en android
                    style={({pressed}) => pressed && styles.pressedItem } // esto aplica a las 2
                >
                <Text style={styles.goalItemText}>{props.text}</Text>
        </Pressable>
            </View>
    )
}

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
    },
    goalItemText: {
        color: 'white',
        padding: 8,
    },
    pressedItem: {
        opacity: 5
    }
  });