import { LatLngTuple } from "leaflet";

export const getHomeHelper = (data: any[]) => {
  

  return data.map((element, index) => {
    // Add null check for lat and long
    const position: LatLngTuple = element.coordinates.lat && element.coordinates.lon ? [element.coordinates.lat, element.coordinates.lon] : [0, 0];


    return {
      cellNumber: element.cellNumber,
      name: element.name,
      position,
    };
  });
};
