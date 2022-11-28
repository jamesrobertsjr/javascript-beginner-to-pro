const theList = ['Laurence', 'Svekis', true, 35, null, undefined, {test: 'one', score: 55}, ['one', 'two']];
for (let i = 0; i < 4; i++) {
    theList.pop();
}
theList.shift();
theList.splice(0, 0, "FIRST");
theList[2] = "MIDDLE";
theList[3] = "hello World";
theList.push("LAST");
console.log(theList);
