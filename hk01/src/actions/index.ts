export const KEY_WORD: string = 'keyWord'

export const CONSTANTS = {
    KEY_WORD
}

export  function changeKeyWord(value: string) {
    return { type : KEY_WORD, value }
}
