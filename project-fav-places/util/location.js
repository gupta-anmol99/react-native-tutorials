const API_KEY = "AIzaSyDrslJG9WlmKcEzn4ljePU54gvZD-hkGbE";
const getMapPreview = (lat, lang) => {
  const mapPreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lang}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:X%7C${lat},${lang}&key=${API_KEY}`;

  return mapPreviewUrl;
};

export default getMapPreview;

export async function getAddress(lat, lng) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${API_KEY}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch address!');
  }

  const data = await response.json();
  const address = data.results[0].formatted_address;
  return address;
}
