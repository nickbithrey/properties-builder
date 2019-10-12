import React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

type ConvertedPropertyProps = {
    properties: string;
}

const ConvertedProperty: React.FC<ConvertedPropertyProps> = ({properties}: ConvertedPropertyProps) => {
    return (
        <div>
            <TextField multiline value={properties} />
        </div>
    );
}

export default ConvertedProperty;