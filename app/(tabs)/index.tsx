import { StyleSheet, View, Text, useColorScheme } from 'react-native';

export default function HelloWave() {
  const colorScheme = useColorScheme() ?? "dark";
  console.log(colorScheme);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👋 Hello Wave!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
