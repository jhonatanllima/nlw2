import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257e5',
    justifyContent: 'center',
    padding: 40,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    fontFamily: 'Archivo_700Bold',
    color: '#FFF',
    fontSize: 32,
    lineHeight: 37,
    maxWidth: 180,
  }, 

  description: {
    marginTop: 24,
    fontFamily:'Archivo_400Regular',
    color: '#fff',
    maxWidth: 240,
  },

  button: {
    marginTop: 24,
    backgroundColor: '#04d361',
    fontSize: 16,
    lineHeight: 26,
    borderRadius: 8,
    padding: 24,
    alignItems:'center',
    justifyContent: 'center',
  },

  buttonText:{
    alignItems: 'center',
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 18,
  },

});


export default styles;
