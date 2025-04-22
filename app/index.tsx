import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';

export default function HomeLayout() {
  const [fontsLoaded] = useFonts({
    Pretendard: require('../assets/fonts/Pretendard-Regular.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-pretendard">Pretendard 적용됨 + Tailwind</Text>
    </View>
  );
}
