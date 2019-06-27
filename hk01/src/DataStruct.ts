
export interface App {
    rank?    : number,
    icon     : string,
    name     : string,
    category : string,
    summary  : string,
    author   : string,
    star?    : number,
    comment? : number
}

export interface AppData {
    'im:name' : { label : string },
    'im:image' : {label : string}[],
    category : {
        attributes : { label : string }
    },
    summary : {
        label : string
    },
    'im:artist' : {
        label : string
    }
}