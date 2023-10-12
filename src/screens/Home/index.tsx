import { View, Text, TextInput, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import ToDo from "../../../assets/icons/todo";
import Plus from "../../../assets/icons/plus";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ToDo />
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#F2F2F2"
        />
        <TouchableOpacity style={styles.button}>
            <Plus/>
        </TouchableOpacity>
      </View>
    </View>
  )
}