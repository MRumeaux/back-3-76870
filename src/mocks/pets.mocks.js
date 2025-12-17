import { fakerES } from "@faker-js/faker";

const generatePetsMocks = (cant) =>{
    const pets = []
    for(let i = 0; i < cant; i++){
        const pet = createPet()
        pets.push(pet)
    }
    return pets
}

const createPet = ()=>{
    const pet = {
        name: fakerES.animal.petName(),
        specie: fakerES.helpers.arrayElement(["Mono","Perro","Elefante","Gato","Cabra"]),
        birthDate: fakerES.date.birthdate()
    }
    return pet
}

export default generatePetsMocks