# Grafana Google Map Plugin

[![Build](https://github.com/grafana/grafana-starter-panel/workflows/CI/badge.svg)](https://github.com/grafana/grafana-starter-panel/actions?query=workflow%3A%22CI%22)

This template is a starting point for building Grafana Panel Plugins in Grafana 7.0+

## What is Grafana Panel Plugin?

Panels are the building blocks of Grafana. They allow you to visualize data in different ways. While Grafana has several types of panels already built-in, you can also build your own panel, to add support for other visualizations.

For more information about panels, refer to the documentation on [Panels](https://grafana.com/docs/grafana/latest/features/panels/panels/)

## Getting started

1. Install dependencies

   ```bash
   npm install
   ```

2. Build plugin in development mode or run in watch mode

   ```bash
   npm run dev
   ```

3. Build plugin in production mode

   ```bash
   npm run build
   ```

## Google Maps API Key

1. Fill Google API KEY under 

   ```bash
   useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR API KEY"
      })
   ```
   
2. Check out more about Google Maps API KEY at https://developers.google.com/maps/documentation/javascript/get-api-key


![image](https://user-images.githubusercontent.com/27355460/182798727-b7c9341a-b02f-4294-999f-b57d706038c1.png)

## Learn more

- [Build a panel plugin tutorial](https://grafana.com/tutorials/build-a-panel-plugin)
- [Grafana documentation](https://grafana.com/docs/)
- [Grafana Tutorials](https://grafana.com/tutorials/) - Grafana Tutorials are step-by-step guides that help you make the most of Grafana
- [Grafana UI Library](https://developers.grafana.com/ui) - UI components to help you build interfaces using Grafana Design System
"# Grafana_google_maps_plugin" 
