import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as State from '../redux/State';
import ConvertedProperties from './ConvertedProperties';
import YAML from 'yaml';

const mapStateToProps = (state: State.State) => ({
    properties: YAML.stringify(state.properties)
});

const mapDispatchToProps = (dispatch: Dispatch, state: State.State) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ConvertedProperties);