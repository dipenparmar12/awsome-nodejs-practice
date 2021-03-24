/// typeof null is null,
//     but in typeof returns object, by mistek

/// NaN === NaN -> false,
//         Object.is(NaN, NaN) -> true, ===

/// Js does not have concept of block level,
//      in let, const have block level concept (ES5)

/// Variable hoisting how, use before it declare
/*
    fooWorks()
    function fooWorks(){
        console.log("FOOO Works")
    }
    fooNotWork() // fooNotWork is not Defined
    let fooNotWork = function(){
        console.log("Sorry FOO")
    }

*/

/*

    /// Not work
    function fooGetVar(){
        console.log(testVar) // var is not defined
    }

    function getVar(){
        var testVar = 10
        fooGetVar()
    }

    fooGetVar()
    
    /// Works
    var testVar2 = 20
    function fooGetVarWorks(){
        var testVar = 10
        function getVar(){
            console.log(testVar) // 10
            console.log(testVar2) // 20
        }
    }

*/

/*  // function closures, function returns function,
    
    function sayHello(name){
        var text = "Hello " + name

        return function(){
            console.log(text) /// parent variables lives in nested function forever (called Closure scope)
        }
    }

    sayHello("Dipen")()

    /// Test Case
    var testArr = []

    for(var i=0; i<4; i++){
        testArr[i] = function(){ return i }
    }

    console.log(testArr[0]()) // 4
    console.log(testArr[1]()) // 4
    console.log(testArr[2]()) // 4


    // correct ans
    var _testArr = []
    for(var i=0; i<4; i++){
        (function(){
            var temp = i
             _testArr[i] = function(){return temp}
        })()

    //     or 
    //     (function(i){
    //          _testArr[i] = function(){return i}
    //     })(i)

    }

    console.log(_testArr[0]()) // 0
    console.log(_testArr[1]()) // 1
    console.log(_testArr[2]()) // 2
*/
