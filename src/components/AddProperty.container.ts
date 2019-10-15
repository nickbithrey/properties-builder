import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as State from '../redux/State';
import AddProperty from './AddProperty';
import * as Actions from '../redux/action';

export type Property = {
    key: string;
    value: string;
}

const mapStateToProps = (state: State.State) => ({
});

const mapDispatchToProps = (dispatch: Dispatch, state: State.State) => ({
    add: (property: Property) => dispatch(Actions.addProperty(property.key, property.value))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProperty);