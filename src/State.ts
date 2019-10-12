
export type State = {
    properties?: Properties;
}

export type Properties = {
    [key: string]: string | number | boolean | Properties;
}