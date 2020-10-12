'use strict';
var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  })

let app4 = new Vue({
    el:'#app-4',
    data:{
        todos:[
            {text:'Learn Javascript'},
            {text:'learn vue'},
            {text:'チンチン'}
        ]
    }
})

let app5 = new Vue({
    el:'#app-5',
    data:{
        message:'うんこ大好きー'
    },
    methods:{
        reverseMessage:function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})

let app6 = new Vue({
    el:"#app-6",
    data:{
        message:'うんこ大好きうんこ大好き'
    }
})



Vue.component('container',{
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
})

var app8 = new Vue ({
    el:'#app-8',
    data:{
        ero:[
            {id:0,text:'おまんこ'},
            {id:1,text:'まんこ'},
            {id:2,text:'gottha'}
        ]
    }
})

