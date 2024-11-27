import { View, Text, StyleSheet } from "react-native"; 
export default function Home() { 
  return ( 
    <View style={styles.container}> 
      <Text style={styles.titulo}>HOME</Text> 
    </View> 
  ); 
} 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
  }, 
  titulo: { 
    textAlign: "center", 
    fontSize: 30, 
    fontWeight: "bold", 
  }, 
});