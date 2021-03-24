/*
// this keyword

///// Ex.1
// console.log(this) // window
// this.person = "Dipen"

// console.log(this.person)  // dipen 
// console.log(window.person) // dipen 
// console.log(person) // dipen

///// Ex.2
// function checkThis(){
//     console.log(this)
// }
// checkThis() // this -> window

/// Ex.3
var person = {
    ///// Ex.3.1
    name: "dipen",
    checkThis: function(){
        console.log("checkThis",this)

        function checkNested(){
            this.checkNestedVar = 10
            console.log("checkThis->nestedFun",this) // window
        }
        
        console.log(this.checkNestedVar) // undefined
        checkNested()
    },
    
    ///// Ex.3.2
    // make this undefined from window object in nested function
//     checkThisStrict: function(){
//         "use strict"
//         console.log("checkThis",this) // undefined
//         function checkNested(){
//             this.checkNestedVar = 10 // checkNestedVar' of undefined
//             console.log("checkThis->nestedFun",this) // window
//         }
//         checkNested()
//     },

    ///// Ex.3.3
    // stablize this keyword
    checkThisStable: function(){
        var self = this

        console.log("checkThis",self) // person object
        function checkNested(){
            self.checkNestedVar = 10  // works as expected
            console.log("checkThis->nestedFun",self)
        }
        checkNested()
    }

    ///// Ex.3.4
    // stablize this keyword with bind
    checkThisStable: function(){
        var checkNested = function(){
            console.log("checkThis->nestedFun",this) // person object
        }.bind(this) // bind this to person object
        
        checkNested()
    }
}


// person.checkThis() // person Object

/// this changed 
// var objectFun = person.checkThis
// objectFun() // this -> window 

/// throws error, with 'use strict'
// person.checkThisStrict()

// stablize this keyword
// person.checkThisStable()
*/

/* 
//// bind, apply, call what do,
/// stablize this inside function,object 
//// Ex.1
// function simpleFun(){
//  console.log(this)
// }
// simpleFun.prop1 = "Prop.Person" // property assined to simpleFun.

// console.log(simpleFun.prop1)
// simpleFun() // this-> window

//// Ex.2
// var animal = {
//     name: "Dog",
//     checkThis: function(){

//         console.log(this) // animal object
//         //// or parameter passed with animal.checkThis.call(param)

//         function checkNested(){
//             console.log(this)
//         }

//         checkNested.call(this) // default val is window
//     },
// }
// animal.checkThis()
// animal.checkThis.call({})

//// Ex.3 // call, apply
// function calling(a,b){
//     console.log(this)
//     console.log(a)
//     console.log(b)
// }

// calling()

// calling.call(1,2,3) // fixed defined params , demo- calling(2,3)

// calling.apply(1, [11,22,33]) // dynamic params, demo- calling(11,22,33)

//// Ex.4 // bind
var simpleFun1 = function () {
  console.log(this)
}

var simpleFun1Bined = simpleFun1.bind({ controlled: true })

simpleFun1() // this-> window
simpleFun1Bined() // this-> defined object {controlled:true}

*/
null
