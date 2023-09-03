const images = document.getElementsByClassName('imageFilter');
const form = document.getElementById('filters')
const animalRadios = document.getElementsByName('animalType');
const search = document.getElementById('search')
let selectedAnimal = 'all';


shouldShowImage = (image) => {
  // If 'Show All' isn't selected, and the currently selected animal doesn't
  // match the current image's 'animal' attribute, then it shouldn't be visible.
  if (selectedAnimal !== 'all' && selectedAnimal !== image.getAttribute('animal')) {
    return false;
  }
  // At this point we know the animal isn't filtered out by the radio buttons.
  // So if there's nothing in the search text field, it should be visible.
  if (!search.value) {
    return true;
  }
  // At this point we know there's something in the search text field. If the
  // image's alt attribute includes the search value, then the image should be
  // visible; otherwise it shouldn't.
  // For a case insensitive match, convert both the alt text and the search query
  // to lower case.
  return image.alt.toLowerCase().includes(search.value.toLowerCase());
}

filterAnimals = () => {
  for (const image of images) {
    if (shouldShowImage(image)) {
      image.classList.remove('hidden');
    }
    else {
      image.classList.add('hidden');
    }
  }  
}

update = () => {
  selectedAnimal = document.querySelector('input[name="animalType"]:checked').value;
  filterAnimals();
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
});

for (const animalRadio of animalRadios) {
  animalRadio.addEventListener('change', update);
}

search.addEventListener('keyup', update);