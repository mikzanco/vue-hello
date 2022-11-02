const { createApp } = Vue;

createApp ({

    data(){
        return{
            messaggio: 'ciao a tutti',
            altroMessaggio: 'con Vue'
        }
    }
}).mount('#app')