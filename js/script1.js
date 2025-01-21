let title = [
  "Lose Yourself",
  "Sicko Mode",
  "God's Plan",
  "HUMBLE.",
  "Mo Bamba",
  "Juicy",
  "In Da Club",
  "Bodak Yellow",
  "Old Town Road",
  "Hotline Bling",
  "Rockstar",
  "Savage",
  "Alright",
  "Lucid Dreams",
  "Goosebumps",
  "Suge",

  "Jolene",
  "Take Me Home, Country Roads",
  "Ring of Fire",
  "The Gambler",
  "Friends in Low Places",
  "Before He Cheats",
  "Achy Breaky Heart",
  "Forever and Ever, Amen",
  "Tennessee Whiskey",
  "Crazy",
  "Die a Happy Man",
  "Girl Crush",
  "Blue Ain't Your Color",
  "Chicken Fried",
  "Body Like a Back Road",
  "Need You Now",

  "Bohemian Rhapsody",
  "Hotel California",
  "Stairway to Heaven",
  "Smells Like Teen Spirit",
  "Sweet Child O' Mine",
  "Paint It Black",
  "Another Brick in the Wall",
  "Born to Be Wild",
  "Highway to Hell",
  "Livin' on a Prayer",
  "Back in Black",
  "Imagine",
  "November Rain",
  "Purple Haze",
  "Free Bird",
  "Kashmir",

  "Wake Me Up",
  "Scary Monsters and Nice Sprites",
  "Titanium",
  "Animals",
  "Lean On",
  "Don't You Worry Child",
  "Spectrum",
  "Stay",
  "Clarity",
  "Levels",
  "Turn Down for What",
  "Summer",
  "Outside",
  "Get Lucky",
  "Ghosts 'n' Stuff",
  "The Middle",

  "Bad Guy",
  "Shape of You",
  "Blinding Lights",
  "Uptown Funk",
  "Rolling in the Deep",
  "Firework",
  "Sorry",
  "Roar",
  "Call Me Maybe",
  "Shake It Off",
  "Havana",
  "Blank Space",
  "Hello",
  "Can't Stop the Feeling!",
  "Someone Like You",
  "We Found Love",
];

let artists = [
  "Eminem",
  "Travis Scott",
  "Drake",
  "Kendrick Lamar",
  "Sheck Wes",
  "The Notorious B.I.G.",
  "50 Cent",
  "Cardi B",
  "Lil Nas X",
  "Drake",
  "Post Malone",
  "Megan Thee Stallion",
  "Kendrick Lamar",
  "Juice WRLD",
  "Travis Scott",
  "DaBaby",

  "Dolly Parton",
  "John Denver",
  "Johnny Cash",
  "Kenny Rogers",
  "Garth Brooks",
  "Carrie Underwood",
  "Billy Ray Cyrus",
  "Randy Travis",
  "Chris Stapleton",
  "Patsy Cline",
  "Thomas Rhett",
  "Little Big Town",
  "Keith Urban",
  "Zac Brown Band",
  "Sam Hunt",
  "Lady A",

  "Queen",
  "Eagles",
  "Led Zeppelin",
  "Nirvana",
  "Guns N' Roses",
  "The Rolling Stones",
  "Pink Floyd",
  "Steppenwolf",
  "AC/DC",
  "Bon Jovi",
  "AC/DC",
  "John Lennon",
  "Guns N' Roses",
  "Jimi Hendrix",
  "Lynyrd Skynyrd",
  "Led Zeppelin",

  "Avicii",
  "Skrillex",
  "David Guetta ft. Sia",
  "Martin Garrix",
  "Major Lazer & DJ Snake",
  "Swedish House Mafia",
  "Zedd",
  "Zedd & Alessia Cara",
  "Zedd ft. Foxes",
  "Avicii",
  "DJ Snake & Lil Jon",
  "Calvin Harris",
  "Calvin Harris ft. Ellie Goulding",
  "Daft Punk ft. Pharrell Williams",
  "Deadmau5",
  "Zedd, Maren Morris, Grey",

  "Billie Eilish",
  "Ed Sheeran",
  "The Weeknd",
  "Mark Ronson ft. Bruno Mars",
  "Adele",
  "Katy Perry",
  "Justin Bieber",
  "Katy Perry",
  "Carly Rae Jepsen",
  "Taylor Swift",
  "Camila Cabello",
  "Taylor Swift",
  "Adele",
  "Justin Timberlake",
  "Adele",
  "Rihanna ft. Calvin Harris",
];
let h2 = document.querySelectorAll("h2");
let p = document.querySelectorAll("p");
let h1 = document.querySelector("h1");
h1.onclick = () => {
  location.href = "index.html";
};
let aaaa ;
function word(a, b) {
  let c = 0;
  aaaa = a;
  for (let i = a; i < b; i++) {
    h2[c].innerText = title[i];
    p[c].innerText = artists[i];
    c++;
  }
}
let img = document.getElementsByClassName("img");
function pic(x, y, type) {
  let i = 0;
  for (let k = x; k < y; k++) {
    i++;
    img[k].style.backgroundImage = `url(../${type}/${i}.jpg) `;
  }
}
let line = document.getElementsByClassName("line");
  for (let t = 0; t < img.length; t++) {
    line[t].onclick = function () {
      localStorage.picture = img[t].style.backgroundImage;
      localStorage.h = title[aaaa+t];
      localStorage.p = artists[t];
      location.href = "music.html";
      
    };
  }
  
  // bazz bach saybto machakil 