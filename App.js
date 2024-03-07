import { StyleSheet, View, FlatList, Button } from 'react-native';
import { useState } from 'react';
import { GoalInput } from './components/GoalInput';
import { GoalItem } from './components/GoalItem';
import { StatusBar } from 'expo-status-bar'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  const addGoalHandler = (enteredGoalText) => {
    setCourseGoals((prev) => [
      ...prev,
      { text: enteredGoalText, id: Math.random().toString() }
    ])
    showModalHandler()
  }

  const deleteGoalHandler = (id) => {
    setCourseGoals((currentCourseGoal) => {
      return currentCourseGoal.filter((goal)=> goal.id !== id)
    })
  }

  const showModalHandler = () => {
    setModalIsVisible(prev => !prev)
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appContainer}>
        <Button 
          title='Add New Goal'
          color='#a065ec'
          onPress={showModalHandler}
        />
        <GoalInput modalIsVisible={modalIsVisible} onAddGoal={addGoalHandler} onCancelGoal={showModalHandler} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            alwaysBounceVertical={false}
            renderItem={(itemData) => {
              return <GoalItem
                        id={itemData.item.id}
                        text={itemData.item.text}
                        onDeleteGoal={deleteGoalHandler}
                      />
            }}
            // keyExtractor sirve cuando no tenes una prop llamada 'key' en tu objeto dentro del array
            // entonces le indicas cual es, en este caso 'id' de data={courseGoals}
            keyExtractor={(item,index)=> {
              return item.id
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16, // este padding pisa parcialmente al de arriba
    flex: 1,
  //  backgroundColor: '#1e085a'  //como le agregue al app.json una prop de background con este color
  // lo toma para toda la app por defecto
  },
  goalsContainer: {
    paddingTop: 5,
    flex: 4,
  },
});
