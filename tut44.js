console.log("This is tutorial 44");
// Error Handling & Try Catch in Javascript
// Pretend this is coming from a server as response
let a = "Harry bhai";
a = undefined;
if (a !=undefined){
    throw new Error('This is not undefined');
}
else{
    console.log('This is undefined');
}


try {
    null.console
    console.log("We are inside try block");
    
    functionHarry();
    
} catch(error) {
    console.log(error)
    console.log("Are you okay?");
    console.log(error.name);
    console.log(error.message);
    
} finally {
    console.log("Finally we will run this")
}



try{
    console.log("This statement works")
    throw new Error('This statement throws an error')
  }
  catch(error){
    console.log("Error has been handled")
  }
  finally{
    console.log("Everything has been handled")
  }