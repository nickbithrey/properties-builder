import React from 'react';
import { DetailsList, IColumn } from 'office-ui-fabric-react/lib/DetailsList';

const columns: IColumn[] = [
    {key: 'key', name: 'Key', fieldName: 'key', minWidth: 100},
    {key: 'value', name: 'Value', fieldName: 'value', minWidth: 100}
];

export type Property = {
    key: string;
    value: string | number | boolean;
}

type PropertiesListProps = {
    properties: Property[];
}

const PropertyList: React.FC<PropertiesListProps> = ({properties}: PropertiesListProps) => {
    return (
        <div>
            <DetailsList
                items={properties}
                columns={columns}
            />
        </div>
    );
}

export default PropertyList;