import React from "react";
import { View, Text, Button, Alert, Image, StyleSheet } from "react-native";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";

import { Colors } from "../constants/style";
import OutlinedButton from "./ui/OutlinedButton";

const ImagePicker = ({ onTakeImage }) => {
  const [permissionInfo, requestPermission] = useCameraPermissions();
  const [imgUri, setImgUri] = React.useState(null);

  // This all verifyPermission function is used for iOS since it has a different permission system. For android, nothing is needed apart form launchCameraAsync

  async function verifyPermission() {
    if (permissionInfo.status === PermissionStatus.UNDETERMINED) {
      const response = await requestPermission();
      return response.granted;
    }

    if (permissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert("Permission Denied", "You need to grant camera permission");
      return false;
    }
    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermission();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    if (image.canceled) {
      return;
    }

    setImgUri(image.assets[0].uri);
    onTakeImage(image.assets[0].uri);
  }

  let imagePreview = <Text>No Image Present Yet!</Text>;

  if (imgUri) {
    imagePreview = <Image source={{ uri: imgUri }} style={styles.image} />;
  }

  return (
    <View>
      <View>
        <View style={styles.imageContainer}>{imagePreview}</View>
      </View>
      <View style={styles.cameraButtonContainer}>
        <OutlinedButton
          icon="camera"
          color={Colors.primary700}
          size={26}
          onPress={takeImageHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 200,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 10,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary700,
  },

  image: {
    width: "100%",
    height: "100%",
  },

  cameraButtonContainer: {
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
  },
});

export default ImagePicker;
