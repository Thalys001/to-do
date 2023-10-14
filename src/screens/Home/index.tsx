import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import ToDo from "../../../assets/icons/todo";
import Plus from "../../../assets/icons/plus";
import { Tasks } from "../../components/Tasks";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ToDo />
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
        />
        <TouchableOpacity style={styles.button}>
          <Plus />
        </TouchableOpacity>
      </View>
      <Tasks/>
      <Tasks/>
      <Tasks/>
      <Tasks/>
      <Tasks/>
    </View>
  )
}