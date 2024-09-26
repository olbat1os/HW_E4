function hasProperty(propName, obj) {
    return obj.hasOwnProperty(propName);
}


const userName = {
    name: 'Alexey',
    age: 23,
    job: 'electrician'
};

console.log(hasProperty('job!', exampleObject)); 