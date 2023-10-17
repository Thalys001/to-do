import { View, Text, TouchableOpacity } from "react-native";

import { styles } from './styles'

import Trash from "../../../assets/icons/trash";
import Check from "../../../assets/icons/check";

type Props = {
  text: string;
  onRemove: () => void;
  onCheck: () => void;
  completed: boolean;
}

export function Tasks({text, onRemove, onCheck, completed}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onCheck}>
        <Check completed={completed}/>
      </TouchableOpacity>
      <Text style={[styles.text, completed ? { textDecorationLine: 'line-through' } : {}]}>
        {text}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Trash />
      </TouchableOpacity>
    </View>
  )
}