import { AnyAction } from 'redux';

export const ADD_PROPERTY = 'ADD_PROPERTY';
export const addProperty = (key: string, value: any): AnyAction => ({
    type: ADD_PROPERTY,
    key: key,
    value: value
});

export const REMOVE_PROPERTY = 'REMOVE_PROPERTY';
export const removeProperty = (key: string): AnyAction => ({
    type: REMOVE_PROPERTY,
    key: key
});