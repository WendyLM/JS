const methods = [
    {
    method: 'filte', 
     easyToUse: 'easy'
    },
    {method: 'map', easyToUse: 'easy'},
    {method: 'reduce', easyToUse: 'hard'},
    {method: 'find', easyToUse: 'easy'},
    {method: 'every', easyToUse: 'easy'},
];
let palabra;
console.log(methods.every(method => method.easyToUse));
console.log(methods.find(method => method.easyToUse));
