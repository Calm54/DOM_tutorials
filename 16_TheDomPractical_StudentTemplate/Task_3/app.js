const images = document.getElementsByClassName('imageFilter');

const animalRadios = document.getElementsByClassName ('animalType');

filterAnimals = (e) => {
    console.log(e.target.value)
}

// Whenever an animal type is selected via the radio buttons, run filterAnimal
for (const animalRadio of animalRadios) {
    animalRadio.addEventListener('change', filterAnimals);
}