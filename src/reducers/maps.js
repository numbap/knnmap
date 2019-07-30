// Load Dependencies
import {fetchNews} from '../actions/apiCalls'

const mapsDefaultState = {
    count: 0,
    maps: [{
        locations: []
    }],
    name: '', 
    id: 0,
    editMapRow: null,
    editLocationRow: null
}

let x = {}

export default (state = mapsDefaultState, action) => {
    switch(action.type){
        case 'SET_MAPS':
            return {
                ...state,
                maps:[...action.maps]
            };
        case 'ADD_MAP':
            return {
                ...state,
                maps: [...state.maps.filter(x => x._id != action.newMap._id), action.newMap],
                editMapRow: null,
                editLocationRow: null
            };
        case 'DELETE_MAP':
            return {
                ...state,
                maps: state.maps.filter(x => x._id != action._id)
            };
        case 'SET_MAP_ROW':
            return {
                ...state,
                editMapRow: action.mapRow
            };
        case 'DELETE_LOCATION':
            let tmp = state
            tmp.maps.filter(a => a._id == action.MapId)[0].locations = tmp.maps.filter(a => a._id == action.MapId)[0].locations.filter(a => a._id != action.LocationId)
            return {
                ...tmp,
                editMapRow: null
        };
        case 'SET_LOCATION_ROW':
            return {
                ...state,
                editLocationRow: action.LocationId
        };
        case 'ADD_LOCATION':
                return {
                    ...state,
                    maps: {
                        ...state.maps,
                        [action.mapId]: {
                            ...state.maps[action.mapId],
                            locations: [
                                action.newLocations
                            ]
                        }
                    },
                    editLocationRow: null
        };
        default:
            return state;
    }
};