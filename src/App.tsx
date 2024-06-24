
import React, {useState} from 'react'
import type { PropsWithChildren } from 'react'
import { 
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView, 
  StyleSheet, 
  Text, 
  View, 
} from 'react-native'

import ImageOne from '../assets/One.jpg'
import ImageTwo from '../assets/Two.jpg'
import ImageThree from '../assets/Three.jpg'
import ImageFour from '../assets/Four.jpg'
import ImageFive from '../assets/Five.jpg'
import ImageSix from '../assets/Six.jpg'
import ImageSeven from '../assets/Seven.jpg'
import ImageEight from '../assets/Eight.jpg'
import ImageNine from '../assets/Nine.jpg'
import ImageTen from '../assets/Ten.jpg'
import ImageEleven from '../assets/Eleven.jpg'
import ImageTwelve from '../assets/Twelve.jpg'
import ImageThirteen from '../assets/Thirteen.jpg'

type Diceprops = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>
const Dice = ({imageUrl}: Diceprops ):JSX.Element => {
  return(
    <View>
    <Image style={styles.diceImage} source={imageUrl}/> 
    </View>
)}
function App():JSX.Element{
 const [diceImage, setDiceImage] = useState<ImageSourcePropType>(ImageOne) 
 const rollDiceOnTap = () => {
  let randomNumber = Math.floor(Math.random()* 13 ) + 1;
  switch(
    randomNumber
  ){
      case 1 :
      setDiceImage(ImageOne)
      break;
      case 2 :
      setDiceImage(ImageTwo)
      break;
      case 3 :
      setDiceImage(ImageThree)
      break;
      case 4 :
      setDiceImage(ImageFour)
      break;
      case 5 :
      setDiceImage(ImageFive)
      break;
      case 6 :
      setDiceImage(ImageSix)
      break;
      case 7 :
      setDiceImage(ImageSeven)
      break;
      case 8 :
      setDiceImage(ImageEight)
      break;
      case 9 :
      setDiceImage(ImageNine)
      break;
      case 10 :
      setDiceImage(ImageTen)
      break;
      case 11 :
      setDiceImage(ImageEleven)
      break;
      case 12 :
      setDiceImage(ImageTwelve)
      break;
      case 13 :
      setDiceImage(ImageThirteen)
      break;
      default: setDiceImage(ImageOne)
      break;
  }

 }
  return (
    <SafeAreaView style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <Pressable
      onPress={rollDiceOnTap}
      >
        <Text style={styles.rollImageBtnText}>
        Roll The Image
        </Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
   alignItems:"center",
   justifyContent:"center",
   backgroundColor:'lavender',
  },
  diceContainer:{
    margin:12,
  },
  diceImage:{
    width:320,
    height:400,
    borderRadius:10,
    
    
  },
  rollImageBtnText:{
    paddingVertical:10,
    paddingHorizontal:92.8,
    marginTop:9,
    borderWidth:2,
    borderRadius:10,
    borderColor:'#E5E0FF',
    fontSize:16,
    color:'#8EA7E9',
    fontWeight:'700',
    textTransform:"uppercase",

  },

  });