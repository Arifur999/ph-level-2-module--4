// problem statement 1

//implement a simple in-memory cache for an 'expensive' function (like a database query or API call)
//the goal is to story the results of a function call so that if the same call is made again,
//the result is returned from the cache instead of running the expensive function.

const dataCache=new Map();

const expensiveTask=(id)=>{
    console.log('ran the expensive task for:',id);


return{
    id:id,
    data:`some data for id:,${id}`,
    timestamp:new Date().getTime(),

};
}

const getDate=(id)=>{
    if (dataCache.has(id)) {
        console.log('cache HIT for id:',id);
        return dataCache.get(id);
    }


console.log('cache MISS for id',id);
const data=expensiveTask(id);
dataCache.set(id,data);
return data;
}

console.log(dataCache);
console.log(getDate(123));
console.log(getDate(123));
console.log(dataCache);