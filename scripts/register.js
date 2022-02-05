let salon={
    name:"The Fashion Pet",
    address:{
        street:"Av. University",
        ZIPcode:"22414",
        number:"262-K"
    },
    hours:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]
}

function displayPetNames(){
    alert(`You have ${salon.pets.length} pets.`);
    for(let i=0;i<salon.pets.length;i++){
        console.log(salon.pets[i]);   
    }
}
// create the constructor
function Pet(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
}
// create three pets using the constructor
let scooby = new Pet("Scooby",50,"Male");
salon.pets.push(scooby); // push the element into the array

//getting the inputs from the html
let petName = document.getElementById("txtName");
let petAge = document.getElementById("txtAge");
let petGender = document.getElementById("txtGender");

function register(){
    console.log("Register");
    //create an obj
    let thePet = new Pet(petName.value,petAge.value,petGender.value);
    console.log(thePet);
    //push the obj into the array
    salon.pets.push(thePet);
    //display the array
    console.log(salon.pets);
    //alert
}

