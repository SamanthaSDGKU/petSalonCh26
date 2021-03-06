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
function Pet(name,age,gender,breed,service){
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.breed=breed;
    this.service=service;
}


//getting the inputs from the html
let petName = document.getElementById("txtName");
let petAge = document.getElementById("txtAge");
let petGender = document.getElementById("txtGender");
let petBreed = document.getElementById("txtBreed");
let petService = document.getElementById("selService");

function register(){
    console.log("Register");
    //create an obj
    let thePet = new Pet(petName.value,petAge.value,petGender.value,petBreed.value,petService.value);
    console.log(thePet);
    //push the obj into the array
    salon.pets.push(thePet);
    //display the array
    console.log(salon.pets);
    //alert
    showPetsCards();
    alert("You have register a new pet!");
}

function showPetsCards(){
    //clear the field
    document.getElementById("petList").innerHTML="";
    //travel the array (loop)
    for(let i=0;i<salon.pets.length;i++){
        // create the card and append the tmp into the HTML
        document.getElementById("petList").innerHTML += createCard(salon.pets[i]);
    }
}

function createCard(pet){
    return `
        <div class="pet-card">
            <h3>${pet.name}</h3>
            <p>Age: ${pet.age}</p>
            <p>Gender: ${pet.gender}</p>
            <p>Service: ${pet.service}</p>
        </div>
    `;
    // display the rest of the properties
}

function init(){
    // create three pets using the constructor
    let scooby = new Pet("Scooby",50,"Male","Dane","Grooming");
    let scrappy = new Pet("Scrappy",30, "Male","Mixed", "GRooming");
    salon.pets.push(scooby,scrappy); // push the element into the array
    showPetsCards();
}
window.onload=init;
