import { Text, View, Image } from "react-native";
import { Link } from 'expo-router'
import {images} from '../constants'
import "../global.css"
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import CustomButton from "../components/CustomButton"

export default function Index() {
  return (  
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle = {{height: '100%'}}>
        <View className = "w-full h-full justify-start items-center px-4">
          <Image 
            source = {images.logo}
            className = "w-[130px] h-[84px]"
            resizeMode = "contain"
          />
          <Image 
            source = {images.cards}
            className = "w-full h-[37%]"
            resizeMode="contain"
          />
          <View className = 'relative mt-5 '>
            <Text className = "text-3xl text-white font-bold text-center rounded">Discover Endless{"\n"}Possibilities with{' '}
            <Text className = "text-secondary-200 text-center">Aora</Text>
            </Text>

            <Image 
            source = {images.path}
            className = "w-[130px] h-[15px] absolute -bottom-2 -right-8"
            resizeMode="contain"
            />

          </View>
          <Text className="text-gray-100 mt-7 text-center">Where creativity meets innovation: Embark on a journey of limitless exploration with Aora</Text>
          <CustomButton
            title = "Continue with Email"
            handlePress = {() => {}}
            containerStyles={"w-full mt-7"}
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
