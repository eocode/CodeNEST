export const name: string = 'Elias';
export const age:number = 29;
export const isValid: boolean = true;

export const templateString = `Esto es un string
multilinea
que puedes tener
" dobles
' simple
inyectar valores: ${name}
expresiones: ${1+1}
números: ${age}
booleanos: ${isValid}`

console.log(templateString)