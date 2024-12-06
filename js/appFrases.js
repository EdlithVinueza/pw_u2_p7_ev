//Declaramos un array de objetos Frase

const frases = [
    { frase: 'La vida es un viaje, no un destino.', autor: 'Ralph Waldo Emerson' },
    { frase: 'La vida es lo que pasa mientras estas ocupado haciendo otros planes.', autor: 'John Lennon' },
    { frase: 'La vida es un 10% lo que me pasa y un 90% cómo reacciono a ello.', autor: 'Charles Swindoll' },
    { frase: 'La vida es un misterio que hay que vivir, no un problema que hay que resolver.', autor: 'Buda' },
    { frase: 'La vida es un constante proceso de cambio y evolución.', autor: 'Buda' },
]

const app = Vue.createApp({

    //Option API
    methods: {
        agregarFrase() {
            console.log(this.frase);
            console.log(this.autor);
            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            }
            this.listaFrases.unshift(nuevaFrase); //agregar al inicio la nueva frase 
        },
        agregarFraseFinal() {
            console.log(this.frase);
            console.log(this.autor);
            const nuevaFrase = {
                frase: this.frase,
                autor: this.autor
            }
            this.listaFrases.push(nuevaFrase); //agregar al inicio la nueva frase 
        },

        eventoKeyPress({ charCode, cancelable, key, keyCode, target }) {

            if (key === 'Enter') {
                console.log('Evento KeyPress');
                console.log(charCode);
                console.log(cancelable);
                console.log(key);
                console.log(keyCode);
                console.log(target.baseURI);
                this.agregarFraseFinal();
            }
        },

        eventoKeyPressModificador() {
            console.log('Evento KeyPress');
            this.agregarFraseFinal();
        }
    },



    data() {
        //Vamos a signar el arreglo a un apropiedad reactiva
        return {
            listaFrases: frases,
            frase: null, //propiedad rectiva para v-model
            // autor:'Sin autor', //podemos inicializar con un valor por defecto
            autor: null
        }
    },
})

app.mount('#myApp');