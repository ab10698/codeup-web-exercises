const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// filters out people so that only people with 3 or more languages get logged
let threeLang = users.filter((user) => {
    return user.languages.length >= 3;
});
console.log(threeLang);

//maps out elements to the console that makes an array of everyone's emails

let emails = users.map((user) =>{
    return user.email;
});
console.log(emails);

//.reduce to get the total years of experience from the list of users

let averageYears = (users) => {
    let totalYearsOfExp = users.reduce((totalYears, user) => {
        return totalYears + user.yearsOfExperience;
    }, 0);
    return totalYearsOfExp / users.length;
};

console.log(averageYears(users));

// Uses .reduce to get the longest email from the list of users

let longEmail = users.reduce((emailLength, user) => {
    if (user.email.length > emailLength) {
        emailLength = user.email.length;
    }
    return emailLength;
}, 0);
console.log(longEmail);

// Uses .reduce to get the list of user's names in a single string.

let names = users.reduce((name, user) => {
    return name + user.name + ", ";
}, "");

console.log(`Your instructors are: ${names}`);
