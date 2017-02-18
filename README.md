# DART Chart GTFS Service

Grab public transit data on a nightly basis, digest, and provide a service by which the DART Chart can consume JSON.

Public transit data is published in **GTFS** format. More information about the **GTFS** format can be found here: https://developers.google.com/transit/gtfs/reference/

## Available Data

### Routes

- /routes

Return the DART routes active today.

- /routes/:route_id

Return all relavent details for a given DART route.
