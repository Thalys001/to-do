import { useState } from "react";
import { View, TextInput, TouchableOpacity, FlatList } from "react-native";

import { styles } from "./styles";
import ToDo from "../../../assets/icons/todo";
import Plus from "../../../assets/icons/plus";
import { Tasks } from "../../components/Tasks";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [tasksName, setTasksName] = useState('');

  function handleTasksAdd() {
    console.log("adicionar");
    setTasks(prevState => [...prevState, tasksName]);
    setTasksName('')
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ToDo />
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTasksName}
          value={tasksName}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleTasksAdd}
        >
          <Plus />
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Tasks
            key={item}
            text={item}
             />
        )}
      />
    </View>
  )
}