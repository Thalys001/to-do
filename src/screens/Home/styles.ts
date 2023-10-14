import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    padding: 24,
    alignItems: 'center',
    height: 173,
  },
  header: {
    marginTop: 40,
    marginBottom: 40,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 32,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: '#262626',
    borderRadius: 6,
    borderColor:'#5E60CE',
    borderWidth: 1,
    color: '#FFF',
    padding: 16,
    fontSize: 16,
    marginRight: 4,
  },
  button: {
    width: 55,
    height: 55,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  }
})