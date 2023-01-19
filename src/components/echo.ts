export const echo = <CustomGenericType>(value: CustomGenericType): CustomGenericType => {
    console.log(value);
    return value
}

echo(3)
echo("Tomasz")
echo({})
const result = echo({})
echo<string>("generic with custom type")


// constraining
//  T -> {length: number}
const echoLength = <T extends { length: number }>(value: T): number => {
    console.log(value.length)
    return value.length
}
echoLength("string")
echoLength(["string"])
// echoLength(425)
