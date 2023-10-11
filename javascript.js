function task(callback){



callback()
}


function sum(a,b){
    console.log(a+b);
}


task(()=>sum(44,44))





array1 = [1,1,2,2,1,2,3,5,6,43]
array2 = []
array3=[]

for(let i=0;i<array1.length;i++){
    if(array2.indexOf(array1[i])===-1){
        array2.push(array1[i])
        console.log(array1[i]);
    }else{
        array3.push(array1[i])
        console.log(array1[i]);
    }
}

console.log(array2);
console.log(array3);