import React from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { FieldSet, stylesFactory, useTheme } from '@grafana/ui';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';



interface Props extends PanelProps<SimpleOptions> {}

const containerStyle = {
  width: '100%',
  height: '400px'
};



const MyComponent = () => {



  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCkWHYr7iuvWaRYIMcqa6kg-BISnDCnfDg"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const center = {
    lat: -3.745,
    lng: -38.523
  };

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const createKey = (location) => {
    return location.lat + location.long
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}

    >
      { /* Child components, such as markers, info windows, etc. */ }
      <>
        <Marker key={createKey(center)} position={center}></Marker>
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
      hi {radii}
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
