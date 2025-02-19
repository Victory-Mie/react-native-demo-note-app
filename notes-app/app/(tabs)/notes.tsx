import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
} from "react-native";
import { useStore } from "../../hooks/useStore";

export default function NotesScreen() {
  const { notes, fetchNotes, addNote, deleteNote } = useStore();
  const [text, setText] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={notes}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.note}>
            <Text>{item.text}</Text>
            <Button title="Delete" onPress={() => deleteNote(item._id)} />
          </View>
        )}
      />
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        placeholder="Enter note"
      />
      <Button
        title="Add Note"
        onPress={() => {
          addNote(text);
          setText("");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 50 },
  note: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#f0f0f0",
    marginBottom: 5,
  },
  input: { borderWidth: 1, padding: 10, marginBottom: 10 },
});
