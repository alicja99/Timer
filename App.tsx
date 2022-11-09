import React, { useMemo, useState } from "react";
import { Keyboard, Pressable, Text, TextInput, View } from "react-native";
import { styles } from "./App.styles";
import { Timer } from "./components/Timer";
import {
  formatTimeToTimeStamp,
  TIME_REGEX,
} from "./utils/formatTimeToTimestamp";

export default function App() {
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);

  const timeStamp = useMemo(() => formatTimeToTimeStamp(input), [input]);

  const onChangeText = (value: string) => {
    setInput(value);
    setIsError(!TIME_REGEX.test(value) && value.length > 0);
  };

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <View style={styles.textInputContainer}>
        {!isError && input.length > 0 && (
          <Timer lastSeen={timeStamp} style={styles.timerText} />
        )}
        <TextInput
          value={input}
          onChangeText={onChangeText}
          style={styles.textInput}
        />
        {isError && <Text style={styles.errorText}>Wrong hour format</Text>}
      </View>
    </Pressable>
  );
}
