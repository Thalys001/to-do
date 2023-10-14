import { View, Text, TouchableOpacity } from "react-native";

import { styles } from './styles'

import Trash from "../../../assets/icons/trash";
import Check from "../../../assets/icons/check";

export function Tasks() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Check />
      </TouchableOpacity>
      <Text style={styles.name}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>
      <TouchableOpacity>
        <Trash />
      </TouchableOpacity>
    </View>
  )
}