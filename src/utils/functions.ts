export default function mod(a: any, b: any) {
    const c = a % b
    return c < 0 ? c + b : c
}

export function processArray(array: any, shift: any) {
    const siphon: any = {}
    array.forEach((element: any, index: any) => {
        siphon[element] = array[mod(index + shift, array.length)]
    });
    return siphon
}

export function mergeArrays(shift: any) {
    return {
        ...processArray([...Array(26)].map((n, i) => `${String.fromCharCode(i + 'A'.charCodeAt(0))}`), shift),
        ...processArray([...Array(26)].map((n, i) => `${String.fromCharCode(i + 'a'.charCodeAt(0))}`), shift)
       }
}

export const processChar = (cipher: any, char: string) => cipher.hasOwnProperty(char) ? cipher[char] : char

export function rot13(options: any) {
    options = options || {}
    options.text = options.text || "Hello, World"
    options.shift = options.shift || 6
    const caesar = mergeArrays(options.shift)
    return [...options.text].map((char) => processChar(caesar, char)).join('')
}

export {
    rot13 as caesarCipher
}
