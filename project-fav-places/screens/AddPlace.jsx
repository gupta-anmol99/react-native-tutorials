import React from "react";
import PlaceForm from "../components/PlaceForm";
import { insertPlace } from "../util/database";

const AddPlace = ({ navigation }) => {

  const placeHandler = async (placeData) => {
    await insertPlace(placeData);

    navigation.navigate("AllPlaces");
  };
  return <PlaceForm onCreatePlace={placeHandler} />;
};

export default AddPlace;
