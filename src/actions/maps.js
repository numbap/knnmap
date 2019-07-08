
export const setMaps = (maps = []) => ({
        type: 'SET_MAPS',
        maps
});


export const addMap = (newMap = {}) => ({
        type: 'ADD_MAP',
        newMap
});


export const deleteMap = (id = 0) => ({
        type: 'DELETE_MAP',
        id
});

export const setMapRow = (mapRow = {}) => ({
        type: 'SET_MAP_ROW',
        mapRow
});

export const deleteLocation = (LocationId = {}, MapId = {}) => ({
        type: 'DELETE_LOCATION',
        LocationId, 
        MapId
});

export const setLocationRow = (LocationId = {}, MapId = {}) => ({
        type: 'SET_LOCATION_ROW',
        LocationId,
        MapId
});

export const addLocation = (mapId = '', newLocation = {}) => ({
        type: 'ADD_LOCATION',
        mapId,
        newLocation
});