import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity,ImageBackground, TextInput, ScrollView, Image } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { FlatList } from 'react-native-web';
import About from './about';


const image = { uri: "https://img.freepik.com/free-photo/fast-food-dish-blue_155003-27518.jpg?w=2000" };
const spagati = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVuJqFAhzrEz1oLveaqoFDNZIXfI_cPy8FdQ&usqp=CAU"}

export default function Home( {navigation} ) {
  const goto =() => {
    navigation.navigate(About)
  }
  return (
    <View style={styles.container}>
      <View style={styles.self}>
        <View >
          <Ionicons
            name='md-grid-outline'
            color={'black'}
            size={30}
          />
        </View>
        <View style={{textAlign:'center'}}>
          <Text>Location</Text>
          <Text style={{fontSize:15,fontWeight:'bold'}}>Klaten, Indonisia</Text>
        </View>
        <View >
          <MaterialCommunityIcons 
            name='bell-badge-outline'
            color={'black'}
            size={40}
          />
        </View>
      </View>
      
      <View style={{borderRadius:20,}}>
      <ImageBackground source={image} style={styles.name}>
          <Text style={{fontSize:15, fontWeight: 'bold', color: 'white',}}>Hi, Albert</Text>
          <Text style={{color:'white', marginBlock:10,}}>
            you have 20 discount tickets <br/>that have not been claimed
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor:'white',
              color:'green',
              padding:10,
              width:100,
              borderRadius:5,
          }}>
            Claim Now
          </TouchableOpacity>
          </ImageBackground>
        </View>


      <TextInput
        style={{
          backgroundColor: 'white',
          height:50,
          width: '100%',
          borderRadius:10,
          color:'black',
          padding:10,
          marginBlock:30,
          // marginVertical: 10,
          justifySelf: 'center',
        }}
        placeholder='Find your food ...'
        inlineImageLeft='search_icon'
        
      />

      <ScrollView horizontal={'true'} style={{height:10}}>
        <TouchableOpacity style={styles.round1}>
    
          <Text style={{color:'white',fontWeight: 'bold', }}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.round2}>
          <Text style={styles.intext}>Pasta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.round2}>
          <Text style={styles.intext}>Pizza</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.round2}>
          <Text style={styles.intext}>Bugar</Text>
        </TouchableOpacity>
      </ScrollView>
        
      <ScrollView horizontal>
        <TouchableOpacity onPress={goto} style={{borderRadius:20,width:200,height:100, margin:10}}>
          <ImageBackground source={spagati} style={{ borderRadius:20, padding:10}}>
            <Text style={{marginTop:120,fontWeight:'bold',fontSize:20,color:'white'}}>
              Spaghetti Buldak
            </Text>
            <Text style={{fontWeight:'bold',fontSize:20,color:'green'}}>$ 10.2</Text>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity style={{borderRadius:20,width:200,height:100, margin:10}}>
          <ImageBackground source={spagati} style={{ borderRadius:20, padding:10}}>
            <Text style={{marginTop:120,fontWeight:'bold',fontSize:20,color:'white'}}>
              Spaghetti Buldak
            </Text>
            <Text style={{fontWeight:'bold',fontSize:20,color:'green'}}>$ 10.2</Text>
          </ImageBackground>
        </TouchableOpacity>
      </ScrollView>



      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(5,5.5)',
    // alignItems: 'center',
    // justifyContent: 'center',
    padding: 20,
  },
  Image: {
    height: 50,
    width: 50,
    borderRadius:10,
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
  name: {
    padding:20,
    borderRadius:30,
    
  },
  circles: {
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
  },
  round1: {
    width:80,
    height: 40,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  round2: {
    width:80,
    height: 40,
    margin: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  round3: {
    width:150,
    height: 150,
    margin: 10,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightskyblue',
  },
  round4: {
    width:150,
    height: 150,
    margin: 10,
    borderRadius: 75,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightyellow',
  },
  intext: {
    color: 'black',
    // fontSize: 20,
    fontWeight: 'bold',
  },
});
