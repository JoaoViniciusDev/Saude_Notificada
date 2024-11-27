import { View, Text, StyleSheet } from "react-native"; 
export default function Contato() { 
  return ( 
    <View style={styles.container}> 
      <Text style={styles.titulo}>CONTATO</Text> 
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
    fontSize: 30, 
    fontWeight: "bold", 
  }, 
});