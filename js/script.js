const { createApp } = Vue;

createApp ({

    data(){
        return{
            messaggio: 'ciao a tutti',
            altroMessaggio: 'con Vue',
            coloreTesto: '',
            path: 'img/',
            imgName: 'cani.jpg',
            isTestoShow: true,
        }
    },
    methods: {
        cambiaColore(){
            this.coloreTesto = "rosso"
        },
        changeImg(newImgName){
            this.imgName = newImgName
        },
        changeImg(none){
            this.path
        },
        toggleTesto(){
            this.isTestoShow = !this.isTestoShow
        }
    }
}).mount('#app')