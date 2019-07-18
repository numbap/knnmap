
export const setMaps = (maps = []) => ({
        type: 'SET_MAPS',
        maps
});


export const addMap = (newMap = {}) => ({
        type: 'ADD_MAP',
        newMap
});


export const deleteMap = (_id = null) => ({
        type: 'DELETE_MAP',
        _id
});

export const setMapRow = (mapRow = {}) => ({
        type: 'SET_MAP_ROW',
        mapRow
});

export const deleteLocation = (MapId = null, LocationId = null) => ({
        type: 'DELETE_LOCATION',
        LocationId, 
        MapId
});

export const setLocationRow = (LocationId = {}, MapId = {}) => ({
        type: 'SET_LOCATION_ROW',
        LocationId,
        MapId
});

export const addLocation = (mapId = '', newLocations = {}) => ({
        type: 'ADD_LOCATION',
        mapId,
        newLocations
});