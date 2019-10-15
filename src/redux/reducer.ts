import * as Action from './action';
import * as State from './State';

const initialState = {
    properties: {}
};

export default function reducer(state: State.State = initialState, action: any) {
    switch (action.type) {
        case Action.ADD_PROPERTY:
            const key: string = action.key;
            const keys = key.split('.');
            const value = action.value;
            return {...state, properties: addProperty(state.properties ? state.properties : {}, keys, value)};
        case Action.REMOVE_PROPERTY:
            const newState = {...state};
            if (newState.properties && newState.properties[action.key]) {
                delete newState.properties[action.key];
            }
            return newState;
        default:
            return {...state};
    }
}

const addProperty = (properties: State.Properties, keys: string[], value: any): State.Properties => {
    const currKey = keys.shift() as string;
    if (keys.length === 0) {
        return {
            ...properties,
            [currKey]: value
        };
    }
    if (!properties[currKey]) {
        return {...properties, [currKey]: addProperty({}, keys, value)}
    }
    return {...properties, [currKey]: addProperty(properties[currKey] as State.Properties, keys, value)};
}