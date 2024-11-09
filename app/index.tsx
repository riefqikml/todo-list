import { useState } from "react";
import { FlatList, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [text, setText] = useState("");
  const [items, setItems] = useState<string[]>([]);

  const handleList = () => {
    setItems([...items, text]);
    setText("");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 10,
        backgroundColor: "white",
      }}
    >
      <TextInput
        style={{
          fontSize: 20,
          borderWidth: 1,
          height: 50,
          paddingHorizontal: 5,
        }}
        onSubmitEditing={handleList}
        returnKeyType="done"
        onChangeText={setText}
        value={text}
        placeholder="Type something..."
        placeholderTextColor="#000"
      />

      <FlatList
        data={items}
        keyExtractor={(index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 20, color: "black" }}>{item}</Text>
        )}
        style={{
          padding: 5,
          borderWidth: 1,
          marginVertical: 10,
        }}
      />
    </SafeAreaView>
  );
}
