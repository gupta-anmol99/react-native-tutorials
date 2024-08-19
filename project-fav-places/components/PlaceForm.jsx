import React, { useCallback, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { Colors } from "../constants/style";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Button from "./ui/Button";
import { Place } from "../models/place";

const PlaceForm = ({ onCreatePlace }) => {
  const [title, setTitle] = useState("");
  const [takenImage, setTakenImage] = useState();
  const [selectedLocation, setSelectedLocation] = useState();

  const handleTitleChange = (text) => {
    setTitle(text);
  };

  const takeImageHandler = (imageUri) => {
    setTakenImage(imageUri);
  };
  const pickLocationHandler = useCallback((location) => {
    setSelectedLocation(location);
  }, []);

  const submitHandler = () => {
    const placeData = new Place(title, takenImage, selectedLocation);

    onCreatePlace(placeData);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.form}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>TITLE</Text>
          <TextInput
            style={styles.input}
            onChangeText={handleTitleChange}
            value={title}
          />
        </View>
        <ImagePicker onTakeImage={takeImageHandler} />
        <LocationPicker onPickLocation={pickLocationHandler} />
        <Button onPress={submitHandler}>Add Place</Button>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  form: {
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  label: {
    marginBottom: 10,
    fontWeight: "bold",
    color: Colors.primary700,
    fontSize: 24,
  },
  input: {
    marginVertical: 10,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 20,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    borderRadius: 10,
    backgroundColor: Colors.primary100,
    width: "100%",
  },
});

export default PlaceForm;
