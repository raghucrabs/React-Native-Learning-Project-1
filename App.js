import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList} from "react-native";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]); // state is an array - not a string

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHander() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text: enteredGoalText, key: Math.random().toString()}
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler} //Note: we did not give parenthesis to goalInputHandler function, no commas for object properties,
        />
        <Button
          title="Add Goal"
          onPress={addGoalHander} // Button does not have style object, onPress is the event for button
        />
      </View>
      
      <View style={styles.goalsContainer}>

        <FlatList 
        data ={courseGoals}
        renderItem={itemData => {
          return(
            <Text style={styles.goalItem} >{itemData.item.text}</Text>
          )
        }} 
        alwaysBounceVertical = {false}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    boderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 15,
  },
  goalsContainer: {
    flex: 3,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
});
