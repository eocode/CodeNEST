const Deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
      // console.log({target})
      return {
        get() {
          const wrapperFn = (...args: any[]) => {
            console.warn(`Method ${ memberName } is deprecated with reason: ${ deprecationReason }`);
            //! Llamar la función propiamente con sus argumentos
            propertyDescriptor.value.apply(this, args); 
          }
          return wrapperFn;
        }
      }
    }   
}

export class Pokemon{
    constructor(
        public readonly id: number,
        public name: string,
    ){
        console.log('Pokemon creado');
    }

    scream(): void{
        console.log(`My name is ${this.name.toUpperCase()}`);
    }

    @Deprecated('Use speak2() instead')
    speak(): void{
        console.log(`${this.name} ${this.name}`);
    }

    speak2(): void{
        console.log(`${this.name} ${this.name}`);
    }
}

export const charmander2 = new Pokemon(4, 'Charmander');
charmander2.scream();
charmander2.speak();