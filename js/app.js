console.log(Vue);

const app = Vue.createApp({
    /*
        template:  `
       
            <h1>Hola mundo</h1>
            <p>Con Vue.JS</p>
            <p>{{1+2}}</p>
            <p>{{[1,2,3,4,5]}}</p>
            <p>{{ {nombre:'Edlith', apellido:'Vinueza'} }}</p>
            <p>{{ false? 'Activo':'Inactivo' }}</p>
            <p> 1 === 1 </p>
            <p>{{ 1 === 1 }}</p>
        `

     */

    //Option API
    methods:{
        cambiarMensaje(){
            this.mensaje = 'Mi nuevo mensaje';
            this.edad = 24;
        }
    },

    data(){
        return{
            mensaje: 'Hola Mundo Pweb',
            edad:35
        }
    },
})

app.mount('#myApp');