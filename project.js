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

// this function will take in some values as parameters, create a
// rapp record object using the parameters passed to it for its metadata,
// and store it in the variable above.
function mintRappRecord(title, artist, year, genre) {
    const rappRecord = {
        title: title,
        artist: artist,
        year: year,
        genre: genre
    };
    rappCollection.push(rappRecord);
}

// create a "loop" that will go through an "array" of rapp records
// and print their metadata with console.log()
function listRappRecords() {
    for (let i = 0; i < rappCollection.length; i++) {
        const record = rappCollection[i];
        console.log("Title: " + record.title);
        console.log("Artist: " + record.artist);
        console.log("Year: " + record.year);
        console.log("Genre: " + record.genre);
        console.log("--------------------------");
    }
}

// print the total number of rapp records we have minted to the console
function getTotalSupply() {
    console.log("Total Rapp Records Minted: " + rappCollection.length);
}

// call your functions below this line
mintRappRecord("Lose Yourself", "Eminem", 2002, "Hip-Hop");
mintRappRecord("Juice", "Lil Uzi Vert", 2017, "Trap");
mintRappRecord("God's Plan", "Drake", 2018, "Hip-Hop");
mintRappRecord("Old Town Road", "Lil Nas X", 2018, "Country-Rap");
mintRappRecord("Humble", "Kendrick Lamar", 2017, "Hip-Hop");
mintRappRecord("Flex", "Polo G", 2020, "Drill");
mintRappRecord("Rockstar", "DaBaby", 2020, "Trap");
mintRappRecord("Laugh Now Cry Later", "Drake", 2020, "Hip-Hop");
mintRappRecord("WAP", "Cardi B", 2020, "Hip-Hop");
listRappRecords();
getTotalSupply();
