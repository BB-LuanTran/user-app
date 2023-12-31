import { StyleSheet } from 'react-native';
import FindDriver from '@/components/FindDriver/FindDriver';
import { Text, View } from '@/components/Themed';

export default function FindDriverTab() {
  return (
    <View style={styles.container}>
      <FindDriver />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
