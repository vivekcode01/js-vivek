//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE)


(function chai(){                         //named iife
    console.log(`DB  connected`);
})();

//(whole function)()          //iife syntax

    ( (name) => { 
        console.log(`BD connected ${name}`);
    }) ("vivek");
