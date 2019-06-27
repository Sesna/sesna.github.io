import axios, { AxiosResponse } from 'axios'
import { App, RecommendData, ListData } from '../DataStruct'
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
    console.log('parseTopNData', data.feed.entry.length)
    return data.feed.entry.slice(start, start + limit).map((item: RecommendData, i: number) => ({
        rank     : start + i + 1,
        icon     : item['im:image'][1].label,
        name     : item['im:name'].label,
        category : item.category.attributes.label,
        star     : parseInt(Math.random() * 5 + 1 + '', 10),
        comment  : parseInt(Math.random() * 1000 + 100 + '', 10)
    }))
}

const parseTopGrossNData = (data: any): App[] => {
    console.log('parseTopGrossNData', data.feed.entry.length)
    return data.feed.entry.map((item: ListData) => ({
        icon : item['im:image'][1].label,
        name : item['im:name'].label,
        category : item.category.attributes.label
    }))
}

export async function getTopGrossingN(n: number): Promise<any> {
    try {
        await test()
        let response: AxiosResponse<any> = await axios.get(urlTopGrossN)
        return parseTopGrossNData(response.data)
    } catch(e) {
        console.log('getTopN fail', e)
        return []
    }
}