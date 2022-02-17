var favoriteColor = prompt("What is your favorite color?");
console.log(`Your favorite color is ${favoriteColor}.`);

var name = prompt("What is your name?");
var birthday = prompt("What is your birthday?");
console.log(`${name}'s birthday is ${birthday}`);

var hourlyWage = Number(prompt("How much do you make per hour?"));
var weeklyHours = Number(prompt("How many hours did you work this week?"));
console.log(
  `You worked ${weeklyHours} hours this week at $${hourlyWage} per hour, so you made $${
    weeklyHours * hourlyWage
  } this week!`
);
