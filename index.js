const farmAnimals = 'cow sheep pig chicken'; // Only four animals

// Strings
const [bessie, dolly, babe, little] = farmAnimals.split(' '); // 1. Destructure sounds of animals

const blackAndWhite = bessie; // 2. Assign three traditional animal colors
const black = dolly; // Assign black color
const pink = babe; // Assign pink color

// Arrays
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [r, o, y, g, b] = colors; // 4. Destructure color names to declare six rainbow color variables using initials
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
