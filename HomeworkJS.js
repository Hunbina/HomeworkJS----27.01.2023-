fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {return response.json()})
.then(myArray => {
for (let i = 0; i < 9; i++) {
    const newArray = myArray[i].name
    console.log(newArray)
}
})


  