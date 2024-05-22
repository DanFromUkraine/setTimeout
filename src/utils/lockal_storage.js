console.log(localStorage);
const myObj = {
    name: "Anna",
    syrname: "Helunets",
    age: 25
}
//setItem запис 
localStorage.setItem("my-data", JSON.stringify(myObj))
localStorage.setItem("new-data", JSON.stringify(myObj))


//getItem отримати дані
console.log(localStorage.getItem("my-data"));

const parseData = JSON.parse(localStorage.getItem("my-data"))
console.log(parseData);

//removeItem видалення
localStorage.removeItem("new-data")

//clear очищення
// localStorage.clear()

console.log( "session", sessionStorage);

sessionStorage.setItem("new-data", JSON.stringify({name: "SessionStorage"}))