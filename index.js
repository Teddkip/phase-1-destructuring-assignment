const farmAnimals = 'cow horse sheep pig chicken';

// Strings
const { cow, horse, sheep, pig, chicken } = farmAnimals.split(' '); // 1. Destructure sounds of animals
const bessie = cow; // 2. Assign four animals
const dolly = sheep;
const babe = pig;
const little = chicken;

const blackAndWhite = cow; // 3. Assign three animals to color variables
const black = horse;
const pink = pig;

// Arrays
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [r, o, y, g, b, v] = colors; // 4. Destructure color names
const indg = colors[5]; // 6. Assign indigo to variable

// Objects
const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const { muppetName, color, song, job, partner } = muppet; // 7. Destructure muppet object

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const { song2, song4 } = nestedMuppet.album.theMuppetMovie; // 8. Destructure songs
const { nestedJob, nestedPartner } = nestedMuppet; // Destructure Kermit's job and partner
