//create an object of key-value pairs
let contacts = {
    bff: 1234567,
    mom: 5555555,
    bro: 9876543
}

//log all
console.log(contacts);

//access a specific entry by its key
console.log(contacts.bff);

//can't access if the key doesn't exist
console.log(contacts.myself);

//add a new entry
contacts.sis = 3456677;
console.log(contacts);

//update an entry
contacts.bff = 1111111;
console.log(contacts);

//delete and entry
delete contacts.mom;
console.log(contacts);

//is there a key called __ in there?
console.log('bff' in contacts);
console.log('myself' in contacts);

//objects are like arrays - pass by reference not by value
//notice the following
let a = {
    value: 20
};
let b = a;
let c = {
    value: 20
};

console.log(a == b);
console.log(a == c);
console.log(b == c);

console.log(a.value == c.value);

let dog = {
    dogName: 'Zelda',
    breed: 'Terrier',
    age: 9,
    size: 'Medium',
    barks: true
}
console.log(dog);
let phone = {
    brandname: 'Samsung',
    works: true,
    DownloadedApps: 8,
    Biggerthanmypalm: true,
    age: '2 weeks old'
}
let cousinpets = {
    pets: 6,
    cats: 3,
    dogs: 3,
    CatageCombined: 12,
    DogAgeCombined: 16
}
let PersonalLaptop = {
    YearGotten: 2016,
    SlowlyDying: true,
    MemoriesCreated: true,
    GreatFriendsMade: true,
    NumberofFriendsMade: 9999999999999999999999999
}
let hamster = {
    howmany: 342184571325781,
    ageofhamsters: 564325432,
    DiedaNormalDeath: false,
    PlayedDeepwoken: true,
    size: 'gigantic'
}
let tacos = {
    howmanyIate: 321517,
    Masterpiece: true,
    WidelyLiked: true,
    EasytoMake: true,
    PlayedDeepwoken: true
}
console.log(phone, cousinpets, PersonalLaptop, hamster, tacos);