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

console.log(methods.find(object => object.easyToUse));

