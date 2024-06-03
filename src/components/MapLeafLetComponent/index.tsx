import React, { useEffect, useRef, useState } from 'react';
import {  PopupContainerStyled, StyledPop, KeyWrapperStyled, ValuesWrapperStyled, KeyTextPopup, ValueTextPopup, RemoveOptionIconStyled, ClosePopUpWrapperStyled ,RemoveOptionButtonStyled, GreenCircleStyled, RedCircleStyled, DarkModeButtonWrapperStyled, FullScreenButtonWrapperStyled} from './styled';
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvent, useMapEvents  } from 'react-leaflet';
import { Icon, LatLngLiteral, LatLngTuple } from 'leaflet';
import SmallButtonCommon from '../../commons/SmallButtonCommon';
import LoadingSpinnerCommon from '../../commons/LoadingSpinnerCommon';

interface LocationData {
  name: string;
  cellNumber: string;
  position: LatLngTuple; 
}

interface IProps {
  children?: React.ReactNode;
  handleFullScreen?: () => void;
  fullScreenButton?: boolean;
  position?: LatLngTuple;
  zoom?: number;
  locationsData?: LocationData[];
  variant?: string;
  onCoordinatesSelected?: (coordinates: LatLngTuple | null) => void;
  selectCameraIdsSend?: number[];
  externalCoords?: number[] | null | undefined;
}


const MapLeafLetComponent: React.FC<IProps> = ({ 
  children, 
  handleFullScreen,
  fullScreenButton = false, 
  position  = [-3.747580, -38.394045],
  zoom = 12,
  locationsData = [],
  variant,
  onCoordinatesSelected,
  selectCameraIdsSend,
  externalCoords,
}) => { 
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCoords, setSelectedCoords] = useState<LatLngTuple | null>(null);
  const [initialValueFlag, setInitialValueFlag] = useState(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [mapIsClicked, setMapIsClicked] = useState(false)


  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    if (initialValueFlag && externalCoords && externalCoords.length >= 2) {
      const [lat, lng] = externalCoords;
      setSelectedCoords([lat, lng]);
      setInitialValueFlag(false)
    }
  }, [externalCoords]);

  useEffect(() => {
    // Call the callback function when selectedCoords changes
    if(mapIsClicked) {
      onCoordinatesSelected && onCoordinatesSelected(selectedCoords);
      setMapIsClicked(false)
    }
  }, [selectedCoords, onCoordinatesSelected]);


  useEffect(() => {

  }, [locationsData])

  /* const MarkerIcon = (isActive?: boolean) => {
    let iconUrl;
  
    switch (isActive) {
      case true:
        iconUrl = MarkerCamActive;
        break;
      case false:
        iconUrl = MarkerCamInactive;
        break;
      default:
        iconUrl = MarkerCamPinDefault;
        break;
    }
  
    const icon = new Icon({
      iconUrl,
    });
  
    return icon;
  }; */

  /* useMapEvents({
    click: (e) => {
      setSelectedCoords([e.latlng.lat, e.latlng.lng]);
    }
  });  */

  useEffect(() => {console.log('locationsData', locationsData)}, [locationsData])

  return (
    <>
        <MapContainer center={position} zoom={zoom} style={{height: '100%', width: '100%', cursor: variant === 'pickerPoint' ? 'pointer' : 'auto'}} >
          {/* <ChangeView center={convertToLatLngLiteral(center) as LatLngLiteral}/* zoom={12}   /> */}
          {darkMode ? (<TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" // Dark mode tile layer
          />) : (<TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />)}
          {locationsData.map((el) => {
            return (<Marker 
            key={Math.random()} // change this - this is just temporary
            position={[...el.position]}
          >
            <StyledPop
              closeButton={false}  
            >
              <PopupContainerStyled>
                <KeyWrapperStyled $darkMode={darkMode}>
                  <KeyTextPopup $darkMode={darkMode}>Nome:</KeyTextPopup>
                  <KeyTextPopup $darkMode={darkMode}>Telefone:</KeyTextPopup>
                </KeyWrapperStyled>
                <ValuesWrapperStyled $darkMode={darkMode}>
                  <ValueTextPopup $darkMode={darkMode}>{el.name}</ValueTextPopup>
                  <ValueTextPopup $darkMode={darkMode}>{el.cellNumber}</ValueTextPopup>
                </ValuesWrapperStyled> 
                {/* <ClosePopUpWrapperStyled>          
                  <RemoveOptionButtonStyled onClick={handleClosePopup}><RemoveOptionIconStyled/></RemoveOptionButtonStyled>
                </ClosePopUpWrapperStyled> */}
              </PopupContainerStyled>
            </StyledPop>
          </Marker>)
          })}
          {selectedCoords && (
            <Marker
              key={Math.random()}
              position={selectedCoords}
              /* icon={MarkerIcon()} */
            />
          )}  
        </MapContainer>      
        {loading && <LoadingSpinnerCommon />}
    </>
  );
}

export default MapLeafLetComponent;