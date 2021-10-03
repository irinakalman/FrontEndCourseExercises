let findTheOldest = function(people) {
    let max = 0;
    let currentYear = new Date().getFullYear();
    let OldestPerson = {}
    people.reduce((prev, curr) => {
        const yearOfDeath = curr.yearOfDeath || currentYear;
      if ((yearOfDeath - curr.yearOfBirth) > max) {
        max = (yearOfDeath - curr.yearOfBirth);
        OldestPerson = curr
      }
      return prev;

    }, people[0])
    return OldestPerson
  }

module.exports = findTheOldest

