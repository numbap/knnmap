const mapsDefaultState = {
    count: 1,
    maps: [],
    name: '', 
    id: 22222,
    editMapRow: null,
    editLocationRow: null
}

let x = {}

export default (state = mapsDefaultState, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,
                count: state.count + 1
            };
        case 'SET_MAPS':
            console.log(state)
            return {
                ...state,
                maps: {...action.maps}
            };
        case 'ADD_MAP':
            return {
                ...state,
                maps: {...state.maps, ...action.newMap},
                editMapRow: null
            };
        case 'DELETE_MAP':
            x = {...state.maps}
            delete x[action.id]
            return {
                ...state,
                maps: x
            };
        case 'SET_MAP_ROW':
            console.log(action)
            return {
                ...state,
                editMapRow: action.mapRow
            };
        case 'DELETE_LOCATION':
            x = {...state.maps}
            delete x[action.MapId].locations[action.LocationId]
            return {
                ...state,
                maps: x
        };
        case 'SET_LOCATION_ROW':
            console.log(action)
            return {
                ...state,
                editLocationRow: action.LocationId
        };
        case 'ADD_LOCATION':
                console.log('newmap', action.newLocation)
                return {
                    ...state,
                    maps: {
                        ...state.maps,
                        [action.mapId]: {
                            ...state.maps[action.mapId],
                            locations: {
                                ...state.maps[action.mapId].locations, ...action.newLocation
                            }
                        }
                    },
                    editLocationRow: null
                };
        default:
            return state;
    }
};
