import { StyleSheet, Text, View,ImageBackground, TouchableOpacity, TextInput, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const spagati = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVuJqFAhzrEz1oLveaqoFDNZIXfI_cPy8FdQ&usqp=CAU"}


export default  function About() {
    return(
        <View style={styles.container}>
            <ImageBackground source={spagati} style={{height:500,}}>

            </ImageBackground>
            <View style={{padding:20, marginTop:-20, backgroundColor:'white',borderTopLeftRadius:20,borderTopRightRadius:20,}}>
                <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center',marginTop:160}}>
                    <View>
                        <Text>Spaghetti Buldak</Text>
                        <Text>4.6</Text>
                    </View>
                    <View style={{color:'green'}}>
                        <Text> $10.2</Text>
                    </View>
                </View>
                <TouchableOpacity style={{backgroundColor:'green',padding:10,color:'white',borderRadius:10,}}>
                    Add to cart
                </TouchableOpacity>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(30, 30, 30 )',
        // alignItems: 'center',
        // justifyContent: 'center',
        // padding: 20,
    },
    self: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 20,
        border: 2,
        borderColor: 'white',
    },
    Image: {
      height: 50,
      width: 50,
      borderRadius:10,
    },
    round1: {
        width:50,
        height: 50,
        margin: 10,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
      },
      round2: {
        width:50,
        height: 50,
        margin: 10,
        borderRadius: 25 ,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
      },
      round3: {
        width:50,
        height: 50,
        margin: 10,
        borderRadius: 25 ,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightskyblue',
      },
      round4: {
        width:50,
        height: 50,
        margin: 10,
        borderRadius: 25 ,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightyellow',
      },
      head: {
        color:'white',
        fontWeight: 'bold',
      },
      text: {
        color: 'white',
      }
  })