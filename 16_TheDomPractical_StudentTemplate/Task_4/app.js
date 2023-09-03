const images = document.getElementsByClassName('imageFilter');
const form = document.getElementById('filters')
const animalRadios = document.getElementsByName('animalType');

function filterAnimals() {
  // previously used the event object, now using a query selector to get the value of the selected radio but
  const selectedAnimal = document.querySelector('input[name="animalType"]:checked').value;
  // console.log(selectedAnimal);

  for (const image of images) {
    if (selectedAnimal === 'all' || selectedAnimal === image.getAttribute('animal')) {
      image.classList.remove('hidden');
    }
    else {
      image.classList.add('hidden');
    }
  }  
}

// Whenever an animal type is selected via the radio buttons, run filterAnimals.
for (const animalRadio of animalRadios) {
  animalRadio.addEventListener('change', filterAnimals);
}