import { App } from './DataStruct'

export function imgStyle(url: string): { backgroundImage: string } {
    return {
        backgroundImage : 'url(' + url + ')'
    }
}

function matchAny(item: App, keyWord: string): boolean {
    return (item.name + '').toUpperCase().indexOf(keyWord) !== -1
}

export function fliterData(list: App[], keyWord: string): App[] {
    if(!keyWord) {
        return list
    }
    keyWord = keyWord.toUpperCase()
    return list.filter((item: App) => matchAny(item, keyWord))
}

