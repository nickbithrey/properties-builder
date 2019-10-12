import React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Button } from 'office-ui-fabric-react/lib/Button';
import { Property } from './AddProperty.container';

type AddPropertyState = {
    key: string | undefined;
    value: string | undefined;
}

const initialState: AddPropertyState = {
    key: undefined,
    value: undefined
}

type AddPropertyProps = {
    add: (property: Property) => void;
}

const AddProperty: React.FC<AddPropertyProps> = ({add}: AddPropertyProps) => {
    const [
        state,
        setState
    ] = React.useState(initialState);
    return (
        <div>
            <TextField label={'Key'} defaultValue={''} onChange={(e: any, newValue: string | undefined) => {setState({key: newValue, value: state.value})}} />
            <TextField label={'Value'} defaultValue={''} onChange={(e: any, newValue: string | undefined) => {setState({key: state.key, value: newValue})}} />
            <Button text={'Add Property'} onClick={() => add(state as Property)} />
        </div>
    );
}

export default AddProperty;