import React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Button } from 'office-ui-fabric-react/lib/Button';
import { Property } from './AddProperty.container';
import { Modal } from 'office-ui-fabric-react/lib/Modal';

type AddPropertyState = {
    properties: {
        key: string | undefined;
        value: string | undefined;
    };
    showModal: boolean;
}

const initialState: AddPropertyState = {
    properties: {key: '', value: ''},
    showModal: false
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
        <>
            <Button text={'Add Property'} onClick={() => setState({...state, showModal: !state.showModal})} />
            <Modal
            titleAriaId={'Add Property'}
            subtitleAriaId={'Add Property'}
            isOpen={state.showModal}
            onDismiss={() => setState({...state, showModal: !state.showModal})}
            isBlocking={false}
            >
                <TextField label={'Key'} defaultValue={''} onChange={(e: any, newValue: string | undefined) => {setState({...state, properties: {key: newValue, value: state.properties.value}})}} />
                <TextField label={'Value'} defaultValue={''} onChange={(e: any, newValue: string | undefined) => {setState({...state, properties: {key: state.properties.key, value: newValue}})}} />
                <Button text={'Add'} onClick={() => add(state.properties as Property)} />
            </Modal>
        </>
    );
}

export default AddProperty;