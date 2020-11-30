let carName = 'Ford'
let carYear = 2010
let personYear = 1990

function calculateAge(year) {
   let currentYear = 2018
   let result = currentYear - year
   return result
}

function checkAndLogAge(year, name, compareTo) {
   if (calculateAge(year) < compareTo) {
      console.log(`Возраст, ${name} меньше ${compareTo} лет`);
   } else{
      console.log(`Возраст ${name} больше ${compareTo} лет`);
   }
}

checkAndLogAge(carYear, 'машины', 8)
checkAndLogAge(personYear, 'человека', 30) 