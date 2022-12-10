/* Your Code Here */

const byronPoodle = {
    name: "Byron",
    ageInYears: 2,
    warn: function() {
      console.log(`Bark bark bark`);
    }
  };

  byronPoodle.name;
// LOG: Byron
byronPoodle.ageInYears;
// LOG: 2
byronPoodle.warn;
// LOG: ƒ () {
//    console.log(`Bark bark bark`);
// }

const arr = [1,2,3];  // the created array inherits all array methods
arr.pop();            // so we can call those methods using dot notation
// => 3
arr;
// => [1,2]

const byronPoodle = {
    name: "Byron",
    ageInYears: 2,
    warn: function() {
      console.log(`Bark bark bark`);
      console.log(this);
    }
  };

  const blakeDoodle = {
    name: "Blake",
    breed: "Labradoodle",
    sonicAttack: "ear-rupturing atomic bark",
    mostHatedThing: "noises in the apartment hallway",
    warn: function() {
      console.log(`${this.name} the ${this.breed} issues an ${this.sonicAttack} when he hears ${this.mostHatedThing}`);
    }
  };
  
  blakeDoodle.warn();

  const frog = { name: "Kermit" };
const pig = { name: "Miss Piggy" };
const speak = function() { return `It ain't easy being ${this.name}`};

frog.speak = speak;
pig.speak = speak;
frog.speak === pig.speak; //=> true

frog.speak();  //=> "It ain't easy being Kermit"
pig.speak();  //=> "It ain't easy being Miss Piggy"

const contextReturner = function() {
    return this;
  }
  
  contextReturner(); //=> window
  contextReturner() === window; //=> true

  const locationReturner = function() {
    return this.location.host;
  }
  
  locationReturner(); //=> URL host serving the current page e.g. developer.mozilla.org

  function a() {
    return function b() {
      return this;
    }
  }
  
  a()() === window; //=> true

  function looseyGoosey() {
    return this;
  }
  
  function noInferringAllowed() {
    "use strict";
    return this;
  }
  
  looseyGoosey() === window; //=> true
  noInferringAllowed() === undefined; //=> true

  class Poodle{
    constructor(name, pronoun){
      this.name = name;
      this.pronoun = pronoun;
      this.sonicAttack = "ear-rupturing atomic bark";
      this.mostHatedThing = "noises in the apartment hallway";
    }
  
    warn() {
      console.log(`${this.name} issues an ${this.sonicAttack} when ${this.pronoun} hears ${this.mostHatedThing}`);
    }
  }

  const byron = new Poodle("Byron", "he");
byron.warn(); //=> Byron issues an ear-rupturing atomic bark when he hears noises in the apartment hallway


  function createTimeInEvent(employee, dateStamp){ /* */ }
  function createTimeOutEvent(employee, dateStamp){ /* */ }
  function hoursWorkedOnDate(employee, soughtDate){ /* */ }

  function introWithContext(line){
    return `${this.firstName} ${this.familyName} says: ${line}`
  }
  
  introWithContext.call(asgardianBrothers[0], phrase)
  //=> Thor Odinsson says: I like this brown drink very much, bring me another!
  
  introWithContext.apply(asgardianBrothers[0], [phrase])

  intro(asgardianBrothers[0], phrase) === introWithContext.call(asgardianBrothers[0], phrase) //=> true
intro(asgardianBrothers[0], phrase) === introWithContext.apply(asgardianBrothers[0], [phrase]) //=> true

const complaint = "I was falling for thirty minutes!"
intro(asgardianBrothers[1], complaint) === introWithContext.call(asgardianBrothers[1], complaint) //=> true
intro(asgardianBrothers[1], complaint) === introWithContext.apply(asgardianBrothers[1], [complaint]) //=> true

const asgardianBrothers = [
    {
      firstName: "Thor",
      familyName: "Odinsson"
    },
    {
      firstName: "Loki",
      familyName: "Laufeysson-Odinsson"
    }
  ]
  function introWithContext(line){
    return `${this.firstName} ${this.familyName} says: ${line}`
  }
  
  const thorIntro = introWithContext.bind(asgardianBrothers[0])
  thorIntro("Hi, Jane") //=> Thor Odinsson says: Hi, Jane
  thorIntro("I love snakes") //=> Thor Odinsson says: I love snakes

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

