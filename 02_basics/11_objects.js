// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",   /// declare or refer lie square bracket necessary
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])     // square notation
console.log(JsUser[mySym]) /// Access lie square bracket necessary

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)         // freeze means es aghe wale value execute nhi hovege eg in paper not accept if write below that mhor
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){  // for use of same objects use this 
    console.log(`Hello JS user, ${this.name}`);//name nu reference lie backtick(string interpolation)
}

console.log(JsUser.greeting());     // jai asi greeting nu function ch na likeye ta sanu function da reference milo
console.log(JsUser.greetingTwo());  