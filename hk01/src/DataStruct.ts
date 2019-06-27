
export interface App {
    rank     : number,
    icon     : string,
    name     : string,
    category : string,
    star?    : number,
    comment? : number
}

export interface RecommendData {
    'im:name' : { label : string },
    'im:image' : {label : string}[],
    category : {
        attributes : { label : string }
    }
}[]

export interface ListData {
    'im:name' : { label : string },
    'im:image' : {label : string}[],
    category : {
        attributes : { label : string }
    }
}[]