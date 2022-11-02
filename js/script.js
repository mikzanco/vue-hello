const { createApp } = Vue;

createApp ({

    data(){
        return{
            messaggio: 'ciao a tutti',
            altroMessaggio: 'con Vue',
            coloreTesto: '',
            path: 'img/',
            imgName: 'cani.jpg',

        }
    },
    methods: {
        cambiaColore(){
            this.coloreTesto = "rosso"
        },
        changeImg(newImgName){
            this.imgName = newImgName
        }
    }
}).mount('#app')