import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import PlaceList from "../components/PlaceList";
import { useIsFocused } from "@react-navigation/native";
import { fetchPlace } from "../util/database";

const AllPlaces = ({ route }) => {
  const [placeList, setPlaceList] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {

    const fetchPlaces = async () =>{
      const places = await fetchPlace();
      setPlaceList(places);
    }

    if (isFocused ) {
      fetchPlaces();
      // setPlaceList((currentList) => [...currentList, route.params.place]);
    }
  }, [isFocused]);

  return <PlaceList places={placeList}/>;
};

export default AllPlaces;
