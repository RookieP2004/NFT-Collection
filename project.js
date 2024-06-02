/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your rapp records
let rappCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (title, artist, year, genre) {
    const rappRecord = {
        title: title,
        artist: artist,
        year: year,
        genre: genre
    };
    rappCollection.push(rappRecord);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < rappCollection.length; i++) {
        const record = rappCollection[i];
        console.log("Title: " + record.title);
        console.log("Artist: " + record.artist);
        console.log("Year: " + record.year);
        console.log("Genre: " + record.genre);
        console.log("--------------------------");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total Rapp Records Minted: " + rappCollection.length);
}

// call your functions below this line
mintNFT("Lose Yourself", "Eminem", 2002, "Hip-Hop");
mintNFT("Juice", "Lil Uzi Vert", 2017, "Trap");
mintNFT("God's Plan", "Drake", 2018, "Hip-Hop");
mintNFT("Old Town Road", "Lil Nas X", 2018, "Country-Rap");
mintNFT("Humble", "Kendrick Lamar", 2017, "Hip-Hop");
mintNFT("Flex", "Polo G", 2020, "Drill");
mintNFT("Rockstar", "DaBaby", 2020, "Trap");
mintNFT("Laugh Now Cry Later", "Drake", 2020, "Hip-Hop");
mintNFT("WAP", "Cardi B", 2020, "Hip-Hop");
listNFTs();
getTotalSupply();
