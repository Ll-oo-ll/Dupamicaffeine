const name = [
  // Hip-hop/Rap
  "Lose Yourself - Eminem",
  "Sicko Mode - Travis Scott",
  "God's Plan - Drake",
  "HUMBLE. - Kendrick Lamar",
  "Mo Bamba - Sheck Wes",
  "Juicy - The Notorious B.I.G.",
  "In Da Club - 50 Cent",
  "Bodak Yellow - Cardi B",
  "Old Town Road - Lil Nas X",
  "Hotline Bling - Drake",
  "Rockstar - Post Malone",
  "Savage - Megan Thee Stallion",
  "Alright - Kendrick Lamar",
  "Lucid Dreams - Juice WRLD",
  "Goosebumps - Travis Scott",
  "Suge - DaBaby",

  // Country
  "Jolene - Dolly Parton",
  "Take Me Home, Country Roads - John Denver",
  "Ring of Fire - Johnny Cash",
  "The Gambler - Kenny Rogers",
  "Friends in Low Places - Garth Brooks",
  "Before He Cheats - Carrie Underwood",
  "Achy Breaky Heart - Billy Ray Cyrus",
  "Forever and Ever, Amen - Randy Travis",
  "Tennessee Whiskey - Chris Stapleton",
  "Crazy - Patsy Cline",
  "Die a Happy Man - Thomas Rhett",
  "Girl Crush - Little Big Town",
  "Blue Ain't Your Color - Keith Urban",
  "Chicken Fried - Zac Brown Band",
  "Body Like a Back Road - Sam Hunt",
  "Need You Now - Lady A",

  // Rock
  "Bohemian Rhapsody - Queen",
  "Hotel California - Eagles",
  "Stairway to Heaven - Led Zeppelin",
  "Smells Like Teen Spirit - Nirvana",
  "Sweet Child O' Mine - Guns N' Roses",
  "Paint It Black - The Rolling Stones",
  "Another Brick in the Wall - Pink Floyd",
  "Born to Be Wild - Steppenwolf",
  "Highway to Hell - AC/DC",
  "Livin' on a Prayer - Bon Jovi",
  "Back in Black - AC/DC",
  "Imagine - John Lennon",
  "November Rain - Guns N' Roses",
  "Purple Haze - Jimi Hendrix",
  "Free Bird - Lynyrd Skynyrd",
  "Kashmir - Led Zeppelin",

  // EDM
  "Wake Me Up - Avicii",
  "Scary Monsters and Nice Sprites - Skrillex",
  "Titanium - David Guetta ft. Sia",
  "Animals - Martin Garrix",
  "Lean On - Major Lazer & DJ Snake",
  "Don't You Worry Child - Swedish House Mafia",
  "Spectrum - Zedd",
  "Stay - Zedd & Alessia Cara",
  "Clarity - Zedd ft. Foxes",
  "Levels - Avicii",
  "Turn Down for What - DJ Snake & Lil Jon",
  "Summer - Calvin Harris",
  "Outside - Calvin Harris ft. Ellie Goulding",
  "Get Lucky - Daft Punk ft. Pharrell Williams",
  "Ghosts 'n' Stuff - Deadmau5",
  "The Middle - Zedd, Maren Morris, Grey",

  // Pop
  "Bad Guy - Billie Eilish",
  "Shape of You - Ed Sheeran",
  "Blinding Lights - The Weeknd",
  "Uptown Funk - Mark Ronson ft. Bruno Mars",
  "Rolling in the Deep - Adele",
  "Firework - Katy Perry",
  "Sorry - Justin Bieber",
  "Roar - Katy Perry",
  "Call Me Maybe - Carly Rae Jepsen",
  "Shake It Off - Taylor Swift",
  "Havana - Camila Cabello",
  "Blank Space - Taylor Swift",
  "Hello - Adele",
  "Can't Stop the Feeling! - Justin Timberlake",
  "Someone Like You - Adele",
  "We Found Love - Rihanna ft. Calvin Harris",
];
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
let img = document.getElementsByClassName("img");
let h5 = document.querySelectorAll("h5");

for (let i = 0; i < name.length; i++) {
  h5[i].innerText = name[i];
}

function pic(x, y, type) {
  let i = 0;
  for (let k = x; k < y; k++) {
    i++;
    img[k].style.backgroundImage = `url(../${type}/${i}.jpg) `;
  }
}
pic(0, 16, "rap");
pic(16, 32, "country");
pic(32, 48, "rock");
pic(48, 64, "edm");
pic(64, 80, "pop");

for (let t = 0; t < img.length; t++) {
  img[t].onclick = function () {
    localStorage.picture = img[t].style.backgroundImage;

    location.href = "music.html";
    localStorage.h = title[t];
    localStorage.p = artists[t];
  };
}


localStorage.back = "index";