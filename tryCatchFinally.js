function error (a,b){
    try{
        if (b===0){
            throw new Error('Cannot divide by zero');   
        }
        return a/b;
    }
    catch (error){
            console.log(error);
    }
    finally{{
        console.log('this will always run');
    }}
}

console.log(error(10,0));
console.log(error(10,2));