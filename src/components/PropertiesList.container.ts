import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import {State, Properties} from '../redux/State';
import PropertyList, { Property } from './PropertyList';

const mapStateToProps = (state: State) => ({
    properties: Object.entries(state.properties as Properties).flatMap(([key, value]) => mapProperties(key, value))
});

const mapProperties = (key: string, value: string | number | boolean | Properties): Property[] => {
    if (typeof value === 'object') {
        const valObj: Properties = (value as Properties);
        return Object.entries(valObj).flatMap(([k, value]) => mapProperties(key + '.' + k, value));
    } else {
        return [{ key: key, value: value} as Property]
    }
}

const mapDispatchToProps = (dispatch: Dispatch, state: State) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PropertyList);