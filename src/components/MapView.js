//MapView.js
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  useMapEvent,
} from 'react-leaflet';
import { SemiCircle } from 'react-leaflet-semicircle';


const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: "center"
}));

const fillYellowOptions = { fillColor: 'yellow', color: 'green' };
const fillOptionsTransparent = { fillColor: 'transparent', color: 'green' }


const MapView = ({ config }) => {
  const [locationName, setLocationName] = useState("");

  const centerPosition = config["map-coords"];
  const centerPos = [centerPosition.lat, centerPosition.long]

  const sector1DegOffset = config.sector1DegOffset;

  useEffect(() => {
    console.log("from inside mapview config: " + JSON.stringify(config))
    setLocationName(config.name);
  }, [])


  const Sections = () => {
    const sectionRange = 90;
    const baseStartAngleDeg = -45 + sector1DegOffset;
    const baseEndAngleDeg = 45 + sector1DegOffset;


    return (
      <>
        <SemiCircle
          position={centerPos}
          radius={78000}
          startAngle={baseStartAngleDeg + (sectionRange * 0)}
          stopAngle={baseEndAngleDeg + (sectionRange * 0)}
          fillColor={"green"}
        >
          <Popup> Sector 1 </Popup>
        </SemiCircle>

        <SemiCircle
          position={centerPos}
          radius={78000}
          startAngle={baseStartAngleDeg + (sectionRange * 1)}
          stopAngle={baseEndAngleDeg + (sectionRange * 1)}
        >
          <Popup> Sector 2 </Popup>
        </SemiCircle>

        <SemiCircle
          position={centerPos}
          radius={78000}
          startAngle={baseStartAngleDeg + (sectionRange * 2)}
          stopAngle={baseEndAngleDeg + (sectionRange * 2)}
        >
          <Popup> Sector 3 </Popup>
        </SemiCircle>


        <SemiCircle
          position={centerPos}
          radius={78000}
          startAngle={baseStartAngleDeg + (sectionRange * 3)}
          stopAngle={baseEndAngleDeg + (sectionRange * 3)}
        >
          <Popup> Sector 4 </Popup>
        </SemiCircle>
      </>
    )

  }


  const MyComponent = (e) => {
    const map = useMapEvent('click', (e) => {
      setClickPos(e.latlng)
    })
    return null
  }

  const [clickPos, setClickPos] = useState(null)

  return (
    <div>
      <Paper elevation={3}>
        <Item style={{ height: 400 }}>
          <MapContainer center={centerPos} zoom={7} style={{ height: 400 }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Circle center={centerPos} pathOptions={fillOptionsTransparent} radius={80000} />

            <Sections />

            <Marker position={centerPos}>
              <Popup>
                {locationName}
              </Popup>
            </Marker>
          </MapContainer>
        </Item>
      </Paper>
    </div>
  );
};

export default MapView;
