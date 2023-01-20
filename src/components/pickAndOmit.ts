export type Vowels = {
    a: 'a',
    e: 'e',
    i: 'i',
    o: 'o',
    u: 'u',
    m: 'm'
}

type VowelInTomaszObject = Pick<Vowels, 'o' | 'm' | 'e'>

type VowelsNotInTomaszObject = Omit<Vowels, 'z' | 'x'>


// type VowelsInTomasz = 'o' | 'm' | 'e'
type VowelsInTomasz = keyof Vowels


const favouriteVowels: VowelsInTomasz = 'o'