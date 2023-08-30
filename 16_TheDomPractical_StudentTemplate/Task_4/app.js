const images = document.getElementsByClassName('imageFilter');

const animmalRadios = document.getElementsByClassName('animalType');

console.log('images')

filterAnimals = (e) => {
const selectAnimal = e.target.value;

 for (const image of images) {
    if (selectedAimal === 'all' || selectedAnimal === image.getAttribute('animal')) {
        image.classList.remove('hidden');
    } else {
        image.classList.add('hidden');
    }
 }
}

// Whenever an animal type is selected via the radio buttons, run filterAnimal
for (const animalRadio of animalRadios) {
    animalRadio.addEventListener('change', filterAnimals);
}

