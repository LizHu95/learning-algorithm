const user={
    name:"liz",
    hello(){
        setTimeout(()=>{
            console.log("hello",this.name)
        })
    },
    hello1:()=>{
        setTimeout(()=>{
            console.log("hello1",this.name);
        })
    },
    hello2(){
        setTimeout(function(){
            console.log("hello",this.name);
        })
    },
}

user.hello()
user.hello1()
user.hello2()