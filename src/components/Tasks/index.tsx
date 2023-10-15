import { View, Text, TouchableOpacity } from "react-native";

import { styles } from './styles'

import Trash from "../../../assets/icons/trash";
import Check from "../../../assets/icons/check";

type Props = {
  text: string;
  onRemove: () => void;
}

export function Tasks({text, onRemove}: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Check />
      </TouchableOpacity>
      <Text style={styles.text}>
        {text}
      </Text>
      <TouchableOpacity onPress={onRemove}>
        <Trash />
      </TouchableOpacity>
    </View>
  )
}