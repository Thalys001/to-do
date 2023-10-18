import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 340,
    backgroundColor: '#262626',
    borderRadius: 8,
    borderColor: '#333',
    borderWidth: 2,
    // boxShadow: '0 2 8 0 rgba(0, 0, 0, 0.06)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#F2F2F2',
    marginHorizontal: 8
  }
});