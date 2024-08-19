import React, { useEffect } from "react";
import { StyleSheet, Text, Alert, View, Image } from "react-native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";

import OutlinedButton from "./ui/OutlinedButton";
import { Colors } from "../constants/style";
import getMapPreview, { getAddress } from "../util/location";
import {
  useNavigation,
  useRoute,
  useIsFocused,
} from "@react-navigation/native";

const LocationPicker = ({ onPickLocation }) => {
  const [permissionInfo, requestPermission] = useForegroundPermissions();
  const [pickedLocation, setPickedLocation] = React.useState();
  const navigation = useNavigation();
  const route = useRoute();
  const isFocused = useIsFocused();

  useEffect(() => {
    const mapPickedLoc = route.params
      ? {
          lat: route.params.pickedLat,
          lng: route.params.pickedLng,
        }
      : null;
    if (mapPickedLoc) {
      setPickedLocation(mapPickedLoc);
    }
  }, [route, isFocused]);

  const verifyPermission = async () => {
    if (permissionInfo.status === PermissionStatus.UNDETERMINED) {
      const response = await requestPermission();
      return response.granted;
    }

    if (permissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert("Permission Denied", "You need to grant location permission");
      return false;
    }
    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermission();

    if (!hasPermission) {
      return;
    }
    const currLoc = await getCurrentPositionAsync({});

    setPickedLocation({
      lat: currLoc.coords.latitude,
      lng: currLoc.coords.longitude,
    });
  };

  useEffect(() => {
    async function handleLocation() {
      if (pickedLocation) {
        const address = await getAddress(
          pickedLocation.lat,
          pickedLocation.lng
        );
        onPickLocation({ ...pickedLocation, address: address });
      }
    }

    handleLocation();
  }, [pickedLocation, onPickLocation]);

  const pickOnMapHandler = () => {
    navigation.navigate("Map");
  };

  let imagePreview = <Text>No Location Present Yet!</Text>;

  if (pickedLocation) {
    imagePreview = (
      <Image
        source={{ uri: getMapPreview(pickedLocation.lat, pickedLocation.lng) }}
        style={styles.image}
      />
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{imagePreview}</View>
      <View style={styles.buttonContainer}>
        <OutlinedButton
          size={26}
          color={Colors.primary700}
          icon="location"
          onPress={getLocationHandler}
        />
        <OutlinedButton
          size={26}
          color={Colors.primary700}
          icon="map"
          onPress={pickOnMapHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mapPreview: {
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default LocationPicker;
