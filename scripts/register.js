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
    pets:[
        {
            name:"Scooby",
            age:60,
            gender:"Male",
            breed:"Dane",
            service:"Grooming",
            owner:"Shaggy",
            phone:"555-555-555"
        },
        {
            name:"Scrappy",
            age:50,
            gender:"Male",
            breed:"Mixed",
            service:"Grooming",
            owner:"Shaggy",
            phone:"555-555-555"
        }
    ]
}
console.log(salon.pets);

function displayPetNames(){
    alert(`You have ${salon.pets.length} pets.`);
    for(let i=0;i<salon.pets.length;i++){
        console.log(salon.pets[i]);   
    }
}
displayPetNames();


