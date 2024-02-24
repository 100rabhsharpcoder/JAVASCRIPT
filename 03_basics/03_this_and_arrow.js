const user = {
    username : "saurabh",
    price : 999,
    welcomeMsg : function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
        console.log("inside");

    } 

}
// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()
console.log(this)

