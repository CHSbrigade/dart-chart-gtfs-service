# CHSBrigade GTFS Service

Grab public transit data on a nightly basis, digest, and provide a service by which the DASH app can consume JSON.

Public transit data is published in **GTFS** format. More information about the **GTFS** format can be found here: https://developers.google.com/transit/gtfs/reference/

## Available Data

### /routes

Return the DASH routes active today.

- https://chsbrigade--gtfs-service.herokuapp.com/routes

### /routes/:routeId

Return details for a given DASH route.

- https://chsbrigade--gtfs-service.herokuapp.com/routes/1252
