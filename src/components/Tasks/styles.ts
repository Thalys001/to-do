import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 'auto',
    width: '100%',
    backgroundColor: '#262626',
    borderRadius: 8,
    borderColor: '#333',
    // boxShadow: '0 2 8 0 rgba(0, 0, 0, 0.06)',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  name: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#F2F2F2',
    marginHorizontal: 8
  }
});