import { App } from './DataStruct'

export function imgStyle(url: string): { backgroundImage: string } {
    return {
        backgroundImage : 'url(' + url + ')'
    }
}

const matchKeys = ['name', 'summary', 'category', 'author']
function matchAny(item: App, keyWord: string): boolean {
    return matchKeys.some((key) => {
        return (item[key] + '').toUpperCase().indexOf(keyWord) !== -1
    })
}

export function fliterData(list: App[], keyWord: string): App[] {
    if(!keyWord) {
        return list
    }
    keyWord = keyWord.toUpperCase()
    return list.filter((item: App) => matchAny(item, keyWord))
}

