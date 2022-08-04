import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { FieldSet, stylesFactory, useTheme } from '@grafana/ui';
import { GoogleMap, MarkerClusterer, Marker, useJsApiLoader } from '@react-google-maps/api';



interface Props extends PanelProps<SimpleOptions> {}

const containerStyle = {
  width: '100%',
  height: '550px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const MarkerList = (props) => {
  return(
    <>
    {props.locationList}
    </>
  )
}

const createKey = (location) => {
  return location.lat + location.long
}

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCkWHYr7iuvWaRYIMcqa6kg-BISnDCnfDg"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {

    map.setZoom(1);

    const test = setTimeout(increaseZoom, 1000);

    function increaseZoom() {
        for (let i = 2; i < 6; i++) {
            setTimeout( function() {
            map.setZoom(i);
            }, 1000
            )
        }
    }

    
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  

  const options = {
    imagePath:
      'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
  }

  const locations = [
    { lat: -31.56391, lng: 147.154312 },
    { lat: -33.718234, lng: 150.363181 },
    { lat: -33.727111, lng: 150.371124 },
    { lat: -33.848588, lng: 151.209834 },
    { lat: -33.851702, lng: 151.216968 },
    { lat: -34.671264, lng: 150.863657 },
    { lat: -35.304724, lng: 148.662905 },
    { lat: -36.817685, lng: 175.699196 },
    { lat: -36.828611, lng: 175.790222 },
    { lat: -37.75, lng: 145.116667 },
    { lat: -37.759859, lng: 145.128708 },
    { lat: -37.765015, lng: 145.133858 },
    { lat: -37.770104, lng: 145.143299 },
    { lat: -37.7737, lng: 145.145187 },
    { lat: -37.774785, lng: 145.137978 },
    { lat: -37.819616, lng: 144.968119 },
    { lat: -38.330766, lng: 144.695692 },
    { lat: -39.927193, lng: 175.053218 },
    { lat: -41.330162, lng: 174.865694 },
    { lat: -42.734358, lng: 147.439506 },
    { lat: -42.734358, lng: 147.501315 },
    { lat: -42.735258, lng: 147.438 },
    { lat: -43.999792, lng: 170.463352 },
  ]

  const locationList = locations.map(location => {
    <Marker key={createKey(location)} position={location}></Marker>
  }) 

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{
          lat: -3.745,
          lng: -38.523
        }}
        zoom={7}
        onLoad={onLoad}
        mapTypeId={'hybrid'}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <>
        {/* <MarkerClusterer
        averageCenter
        enableRetinaIcons
        gridSize={80}
        maxZoom={15}
        options={{ imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' }}
        >
        {(clusterer => <Marker key={createKey(locations[0])} position={locations[0]} clusterer={clusterer}></Marker>)}
        </MarkerClusterer>
        <Marker key={createKey(center)} position={center}></Marker> */}
        <MarkerClusterer
        averageCenter
        enableRetinaIcons
        gridSize={80}
        maxZoom={15}
        options={{ imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' }}
        >
        {(clusterer) =>{
          return(
            <>
            {locations.map(location => (
              <Marker key={createKey(location)} position={location} clusterer={clusterer}></Marker>
            ))}
            </>
          )
        }
        }
        </MarkerClusterer>
        </>
      </GoogleMap>
  ) : <></>
}


export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const radii = data.series
    .map(series => series.fields.find(field => field.type === 'number'))
    .map(field => field?.values.get(field.values.length - 1));

  
  
  const latList = data.series
  .map(series => series.fields.find(field => series.fields.indexOf(field) === 1))
  .map(field => field?.values.get(field.values.length - 1));
  const lngList = data.series.find(series => data.series.indexOf(series) === 0)
  const theme = useTheme();
  const styles = getStyles();

  return (
    <div>
      <MyComponent/>
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
});
