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

    },

    data() {
        //Vamos a signar el arreglo a un apropiedad reactiva
        return{
            listaFrases : frases,
        }
    },
})

app.mount('#myApp');