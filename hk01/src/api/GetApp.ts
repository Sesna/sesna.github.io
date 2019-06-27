import axios, { AxiosResponse } from 'axios'
import { App, AppData } from '../DataStruct'
const urlTopN: string = '/mockdata/appListData.json'
const urlTopGrossN: string = '/mockdata/recomendData.json'

function test() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, parseInt(Math.random() * 1000 + '', 10))
    })
}

export async function getTopN(start: number, limit: number): Promise<any> {
    try {
        await test()
        let response: AxiosResponse<any> = await axios.get(urlTopN)
        return parseTopNData(response.data, start, limit)
    } catch(e) {
        console.log('getTopN fail', e)
        return []
    }
}

const parseTopNData = (data: any, start: number, limit: number): App[] => {
    // console.log('parseTopNData', data.feed.entry.length)
    let targetData: AppData[] = data.feed.entry.slice(start, start + limit)
    return targetData.map((item: AppData, i: number) => convertOne(item, start + i + 1))
}

const parseTopGrossNData = (data: any): App[] => {
    // console.log('parseTopGrossNData', data.feed.entry.length)
    return data.feed.entry.map((item: AppData) => convertOne(item))
}

const convertOne = (item: AppData, rank?: number): App => {
    let t: App = {
        icon     : item['im:image'][1].label,
        name     : item['im:name'].label,
        category : item.category.attributes.label,
        summary  : item.summary.label,
        author   : item['im:artist'].label
    }
    if(rank) {
        t.rank     = rank
        t.star     = parseInt(Math.random() * 5 + 1 + '', 10)
        t.comment  = parseInt(Math.random() * 1000 + 100 + '', 10)
    }
    return t
}

export async function getTopGrossingN(n: number): Promise<any> {
    try {
        await test()
        let response: AxiosResponse<any> = await axios.get(urlTopGrossN)
        return parseTopGrossNData(response.data)
    } catch(e) {
        console.log('getTopGrossingN fail', e)
        return []
    }
}