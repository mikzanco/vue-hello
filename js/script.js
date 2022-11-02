const { createApp } = Vue;

createApp ({

    data(){
        return{
            messaggio: 'ciao a tutti',
            altroMessaggio: 'con Vue',
            coloreTesto: '',
            path: 'img/cani.jpg',
            

        }
    },
    methods: {
        cambiaColore(){
            this.coloreTesto = "rosso"
        },
    }
}).mount('#app')