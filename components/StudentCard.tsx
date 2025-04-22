import { View, Text, Image } from "react-native";

interface StudentCardProps {
  name: string;
  studentId: string;
  grade: number;
  classNum: number;
  photoUrl: string;
}

export const StudentCard = ({
  name,
  studentId,
  grade,
  classNum,
  photoUrl,
}: StudentCardProps) => {
  return (
    <View className="w-80 h-48 rounded-2xl bg-white shadow-lg flex-row p-4 items-center space-x-4">
      <Image source={{ uri: photoUrl }} className="w-20 h-24 rounded-xl bg-gray-200" resizeMode="cover" />
      <View className="flex-1">
        <Text className="text-lg font-pretendard font-semibold text-gray-900">{name}</Text>
        <Text className="text-base font-pretendard text-gray-600 mt-1">학번: {studentId}</Text>
        <Text className="text-base font-pretendard text-gray-600">{grade}학년 {classNum}반</Text>
      </View>
    </View>
  );
};
