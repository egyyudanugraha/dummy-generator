import './style.css';
import Alpine from 'alpinejs';
import Clipboard from "@ryangjchandler/alpine-clipboard";
import { loremIpsum } from 'lorem-ipsum';

Alpine.plugin(Clipboard)
Alpine.data('lorem', () => ({
  count: 1,
  units: 'sentences',
  result: 'Hasil akan muncul disini!',
  generate() {
    const result = loremIpsum({
      count: Number(this.count),
      format: 'plain',
      units: this.units
    });

    this.result = result;
  }
}))

window.Alpine = Alpine;

Alpine.start();


// import { loremIpsum } from 'lorem-ipsum';

// const getCount = document.querySelector('#howMany');
// const getAllRadioButton = document.querySelectorAll('input[type=radio]');

// const generateLorem = (units) => {
//   const lorem = loremIpsum({
//     count: Number(getCount.value),
//     format: 'plain',
//     units
//   });

//   return lorem;
// }

// getAllRadioButton.forEach(radio => {
//   radio.addEventListener('change', function() {
//     console.log(generateLorem(this.id))
//   });
// })

// ['change', 'keypress'].forEach(evt => {
//   getCount.addEventListener(evt, function() {
//     const unit = document.querySelector('input[type=radio]:checked').id;
//     console.log(generateLorem(unit));
//   })
// })
