//**********SERVER********** */
//Data movement between the server and the client is takes place in the form of Jason form

const jasonstring='{"name":"john","age":30}';
const jasonObjects=JSON.parse(jasonstring);
console.log(jasonObjects.name);
var b =JSON.stringify(jasonObjects);
console.log(b);

// ************


