import * as React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import PropertyList from './PropertiesList.container';
import { Dropdown, IDropdownStyles, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { Stack } from 'office-ui-fabric-react/lib/Stack';

type ConvertedPropertyState = {
    type: string | undefined;
}

const initialState: ConvertedPropertyState = {
    type: 'list'
}

type ConvertedPropertyProps = {
    properties: string;
}

const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 300 }
};

const options: IDropdownOption[] = [
    { key: 'list', text: 'Properties List' },
    { key: 'yaml', text: 'YAML' }
];

const ConvertedProperty: React.FC<ConvertedPropertyProps> = ({properties}: ConvertedPropertyProps) => {
    const [
       state,
       setState
   ] = React.useState(initialState);
    
    let result;
    switch (state.type) {
    case 'list':
        result = <PropertyList />;
        break;
    case 'yaml':
        result = <TextField multiline value={properties} rows={25} />;
        break;
    default:
        break;
    }
    return (
        <div>
            <Stack>
                <Stack.Item
                    shrink={true} 
                    align={'auto'} 
                    disableShrink={false} 
                    verticalFill={true}
                    styles={{root: {padding: 30}}}>
                    <Dropdown 
                        placeholder="Select an option" 
                        options={options} 
                        styles={dropdownStyles}
                        selectedKey={state.type ? state.type : undefined}
                        onChange={(event: React.FormEvent<HTMLDivElement>, item: IDropdownOption | undefined) => {onChange(setState, event, item)}}
                    />
                </Stack.Item>
                <Stack.Item
                    shrink={true} 
                    align={'auto'} 
                    disableShrink={false} 
                    verticalFill={true}
                    styles={{root: {padding: 30}}}>
                    {result}
                </Stack.Item>
            </Stack>
        </div>
    );
}

const onChange = (setState: (state: ConvertedPropertyState) => void, event: React.FormEvent<HTMLDivElement>, item: IDropdownOption | undefined): void => {
    item ? setState({ type: item.key as string }) : setState({type: undefined});
};

export default ConvertedProperty;