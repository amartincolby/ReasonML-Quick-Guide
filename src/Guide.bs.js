'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Random = require("bs-platform/lib/js/random.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var Caml_oo_curry = require("bs-platform/lib/js/caml_oo_curry.js");
var CamlinternalOO = require("bs-platform/lib/js/camlinternalOO.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");

var shared = /* array */["buildTruck"];

function add(a, b) {
  return a + b | 0;
}

function intAdder(x, y) {
  return x + y | 0;
}

console.log("best of times");

console.log("worst of times");

function blockScope(param) {
  return "Return string";
}

console.log("Teacher");

Pervasives.print_int(101);

function add2(a, b) {
  return a + b | 0;
}

var myMutableNumber = {
  contents: 120
};

myMutableNumber.contents = 240;

var copyOfMyMutableNumber = myMutableNumber.contents;

var world = "🌍";

var helloWorld = "hello, " + (String(world) + "");

var emailSubject = "Hi John Wayne, you're a valued customer";

var author1 = {
  name: "Charles Dickens",
  age: 58
};

var author2 = {
  name: "Charles Dickens",
  age: 58
};

var author3 = {
  name: "Victor Hugo",
  age: 83
};

Caml_obj.caml_equal(author1, author2);

Caml_obj.caml_equal(author1, author3);

Caml_obj.caml_notequal(author1, author3);

var bigObj = /* :: */[
  10,
  /* :: */[
    10000000,
    /* :: */[
      10000000,
      /* [] */0
    ]
  ]
];

var smallObj = /* :: */[
  11,
  /* :: */[
    1,
    /* :: */[
      1,
      /* [] */0
    ]
  ]
];

Caml_obj.caml_greaterthan(bigObj, smallObj);

function polishAdder(a, b) {
  return a + b | 0;
}

var $plus = Caml_int32.imul;

function $(a, b) {
  return Caml_int32.imul(a - b | 0, 3);
}

var secondTrainJourney = {
  destination: "London",
  capacity: 45,
  averageSpeed: 120.0
};

var tastyMuesli = {
  name: "Tasty Muesli TM",
  amount: 500
};

tastyMuesli.amount = 200;

var name = "Chex";

var tastyChex = {
  name: name,
  amount: 250
};

var $$class = CamlinternalOO.create_table(/* array */["addNumber"]);

var ids = CamlinternalOO.new_methods_variables($$class, /* array */[
      "increment",
      "addNumber"
    ], /* array */["aNumber"]);

var increment = ids[0];

var addNumber = ids[1];

var aNumber = ids[2];

CamlinternalOO.set_methods($$class, /* array */[
      increment,
      (function (self$1, num) {
          self$1[aNumber].contents = Caml_int32.imul(self$1[aNumber].contents, num);
          return /* () */0;
        }),
      addNumber,
      (function (self$1, inputValue) {
          Curry._2(self$1[0][increment], self$1, inputValue);
          return self$1[aNumber].contents;
        })
    ]);

function obj_init(env) {
  var self = CamlinternalOO.create_object_opt(0, $$class);
  self[aNumber] = {
    contents: 42
  };
  return self;
}

CamlinternalOO.init_class($$class);

var newObject = obj_init(0);

var $$class$1 = CamlinternalOO.create_table(shared);

var ids$1 = CamlinternalOO.new_methods_variables($$class$1, shared, /* array */["drive"]);

var buildTruck = ids$1[0];

var drive = ids$1[1];

CamlinternalOO.set_method($$class$1, buildTruck, (function (self$2, make, model) {
        return "You built a new " + (String(make) + (" " + (String(model) + (" with " + (String(self$2[drive]) + "-wheel drive.")))));
      }));

function obj_init$1(env) {
  var self = CamlinternalOO.create_object_opt(0, $$class$1);
  self[drive] = 4;
  return self;
}

CamlinternalOO.init_class($$class$1);

var newTruck = obj_init$1(0);

var toyotaTundra = Caml_oo_curry.js3(715262353, 1, newTruck, "Toyota", "Tundra");

var $$class$2 = CamlinternalOO.create_table(/* array */[
      "checkSpeed",
      "accelerate",
      "brake"
    ]);

var ids$2 = CamlinternalOO.new_methods_variables($$class$2, /* array */[
      "checkSpeed",
      "brake",
      "accelerate"
    ], /* array */["speed"]);

var checkSpeed = ids$2[0];

var brake = ids$2[1];

var accelerate = ids$2[2];

var speed = ids$2[3];

CamlinternalOO.set_methods($$class$2, /* array */[
      accelerate,
      (function (self$3, param) {
          if (self$3[speed].contents < 155) {
            self$3[speed].contents = (self$3[speed].contents << 0);
            return /* () */0;
          } else {
            return 0;
          }
        }),
      brake,
      (function (self$3, param) {
          if (self$3[speed].contents > 0) {
            self$3[speed].contents = self$3[speed].contents - 1 | 0;
            return /* () */0;
          } else {
            return 0;
          }
        }),
      checkSpeed,
      (function (self$3) {
          return self$3[speed].contents;
        })
    ]);

function obj_init$2(env) {
  var self = CamlinternalOO.create_object_opt(0, $$class$2);
  self[speed] = {
    contents: 0
  };
  return self;
}

CamlinternalOO.init_class($$class$2);

var toyotaSupra = obj_init$2(0);

Random.self_init(/* () */0);

var thingIsHere = Random.bool(/* () */0);

var isThingHere = thingIsHere ? "Thank you, Thing." : undefined;

var userIds = /* :: */[
  1,
  /* :: */[
    4,
    /* :: */[
      8,
      /* [] */0
    ]
  ]
];

var newUserIds_001 = /* :: */[
  102,
  userIds
];

var newUserIds = /* :: */[
  101,
  newUserIds_001
];

var languages = /* array */[
  "Reason",
  "JavaScript",
  "OCaml"
];

Caml_array.caml_array_get(languages, 1);

function signUpToNewsletter(email) {
  return "Thanks for signing up " + email;
}

function getEmailPrefs(email) {
  var message = "Update settings for " + email;
  return /* tuple */[
          message,
          /* :: */[
            "Weekly News",
            /* :: */[
              "Daily Notifications",
              /* [] */0
            ]
          ]
        ];
}

function noArgument(param) {
  return "I've got nothing";
}

function noReturn(input) {
  console.log("I just print " + input);
  return /* () */0;
}

function moveTo(x, y) {
  return {
          posx: x,
          posy: y
        };
}

function getMessage(msg) {
  return "Message for you, sir... " + msg;
}

function logMessage(message) {
  console.log(message);
  return /* () */0;
}

function logAnotherMessage(msg) {
  console.log(msg);
  return /* () */0;
}

function subtract(x, y) {
  return x - y | 0;
}

function subtractTwo(__x) {
  return __x - 2 | 0;
}

function subtractFromThree(param) {
  return 3 - param | 0;
}

function subtractFive(param) {
  return 5 - param | 0;
}

function addOne(a) {
  return (a << 0);
}

function divByTwo(a) {
  return a / 2 | 0;
}

function multByThree(a) {
  return Caml_int32.imul(a, 3);
}

function divide(denom, numr) {
  return Caml_int32.div(numr, denom);
}

function divideBySix(param) {
  return param / 6 | 0;
}

function divideByTwo(param) {
  return param / 2 | 0;
}

function divSixBy(__x) {
  return Caml_int32.div(6, __x);
}

function divTenBy(__x) {
  return Caml_int32.div(10, __x);
}

function labeledDiv(denom, numr) {
  return Caml_int32.div(numr, denom);
}

function labeledDivBySix(param) {
  return param / 6 | 0;
}

function labeledDivByTwo(param) {
  return param / 2 | 0;
}

function greetPerson(name, greeting, param) {
  if (greeting !== undefined) {
    return greeting + (" " + name);
  } else {
    return "Hi " + name;
  }
}

greetPerson("Kate", undefined, /* () */0);

var newGreeting = "Good morning!";

console.log("Logged!");

for(var x = 1; x <= 42; ++x){
  Pervasives.print_int(x);
  Pervasives.print_string(" ");
}

for(var x$1 = 42; x$1 >= 1; --x$1){
  Pervasives.print_int(x$1);
  Pervasives.print_string(" ");
}

var testVariable = {
  contents: false
};

while(testVariable.contents) {
  console.log("It's true.");
};

var loginMessage = "Login with your GitHub credentials.";

var userId = 23;

var alertMessage = userId !== undefined ? "Welcome, your ID is" + String(userId) : "You don't have an account!";

var firstNames = /* :: */[
  "James",
  /* :: */[
    "Jean",
    /* :: */[
      "Geoff",
      /* [] */0
    ]
  ]
];

var importantNumbers = /* :: */[
  42,
  /* :: */[
    2001,
    /* :: */[
      31459,
      /* [] */0
    ]
  ]
];

var match = importantNumbers ? /* tuple */[
    42,
    2001,
    31459
  ] : /* tuple */[
    0,
    0,
    0
  ];

function isJohn(a) {
  return a === "John";
}

var maybeName = "John";

var aGreeting;

if (maybeName !== undefined) {
  var name$1 = maybeName;
  aGreeting = name$1 === "John" ? "Hi John! How's it going?" : "Hi " + (name$1 + ", welcome.");
} else {
  aGreeting = "No one to greet.";
}

var Under_Age = Caml_exceptions.create("Guide-ReasonMLQuickGuide.Under_Age");

function driveToTown(driver) {
  if (driver.age > 16) {
    return "We're in town";
  } else {
    throw Under_Age;
  }
}

var evan = {
  name: "Evan",
  age: 14,
  height: 175
};

var exit = 0;

var status;

try {
  status = driveToTown(evan);
  exit = 1;
}
catch (exn){
  if (exn === Under_Age) {
    console.log("Evan is too young to drive!");
  } else {
    throw exn;
  }
}

if (exit === 1) {
  console.log(status);
}

var messageToEvan;

try {
  messageToEvan = driveToTown(evan);
}
catch (exn$1){
  if (exn$1 === Under_Age) {
    messageToEvan = "Evan is too young to drive!";
  } else {
    throw exn$1;
  }
}

function getRoleDirectionMessage(staff) {
  var match = staff.role;
  switch (match) {
    case /* Delivery */0 :
        return "Deliver it like you mean it!";
    case /* Sales */1 :
        return "Sell it like only you can!";
    case /* Other */2 :
        return "You're an important part of the team!";
    
  }
}

var Staff = {
  defaultRole: /* Other */2,
  getRoleDirectionMessage: getRoleDirectionMessage
};

var NewStaff_newEmployee = {
  employeeName: "Fred",
  role: /* Other */2
};

var NewStaff = {
  newRole: /* Delivery */0,
  newEmployee: NewStaff_newEmployee
};

function getMeetingTime(staff) {
  if (staff >= 2) {
    return 1115;
  } else {
    return 930;
  }
}

var SpecializedStaff_ceo = {
  employeeName: "Reggie",
  role: /* Other */2
};

var SpecializedStaff = {
  getRoleDirectionMessage: getRoleDirectionMessage,
  ceo: SpecializedStaff_ceo,
  defaultRole: /* Delivery */0,
  getMeetingTime: getMeetingTime
};

var Module1 = { };

var Module2 = {
  newMusician: /* Classical */0
};

var Module3 = {
  newMusician: /* Classical */0
};

var Module4 = {
  externalRef: /* Classical */0
};

var Module5 = {
  newMusician: /* Classical */0,
  externalRef: /* Classical */0
};

var Module6 = {
  externalRef: /* Classical */0,
  newMusician2: /* Classical */0
};

var Module7 = {
  newMusician: /* Classical */0,
  externalRef: /* Classical */0,
  newMusician2: /* Classical */0
};

var Module_in_external_file = { };

var Current_working_file = {
  newThing: /* Thing1 */0
};

var visibleFunction = Caml_int32.imul;

var Module8 = {
  visibleThing: 2001,
  visibleFunction: visibleFunction
};

Pervasives.print_int(6);

var Module9 = {
  visibleThing: 2001,
  visibleFunction: visibleFunction
};

var func1 = Caml_int32.imul;

function func2(a, b) {
  return a + b;
}

var Module10 = {
  func1: func1,
  func2: func2
};

console.log("Thing!");

console.log("This will log to the console.");

console.log("Log", "an", "array");

var getAccountID = new Promise((function (resolve, reject) {
        return resolve(1337);
      }));

getAccountID.then((function (result) {
          return Promise.resolve(result);
        })).catch((function (err) {
        console.log("Failure!!", err);
        return Promise.resolve(-1);
      }));

var jsReduce = (
        function (numbers, scaleFactor) {
            var result = 0;
            numbers.forEach( (number) => {
                result += number;
            });
            return result;
        }
    );

function calculate(numbers) {
  return Curry._1(jsReduce, $$Array.of_list(numbers));
}

function Guide(Props) {
  var food = Props.food;
  var match = React.useState((function () {
          return 0;
        }));
  var eat = match[1];
  var amount = match[0];
  return React.createElement("div", undefined, React.createElement("p", undefined, " " + (String(food) + (" monster has eaten " + (String(amount) + (" " + (String(food) + "s ")))))), React.createElement("button", {
                  onClick: (function (_ev) {
                      return Curry._1(eat, (function (param) {
                                    return (amount << 0);
                                  }));
                    })
                }, " Eat " + (String(food) + " ")));
}

var x$2 = 5;

var myBlock = /* () */0;

var aTuple = /* tuple */[
  "Teacher",
  101
];

var classNumber = 101;

var bjorn = {
  firstName: "Bjorn",
  age: 28
};

var firstName = "Bjorn";

var age = 28;

var bName = "Bjorn";

var bAge = 28;

var cName = "Bjorn";

var dName = "Bjorn";

var y = 5;

var myId = 101;

var greeting = "Hello world!";

var aLongerGreeting = "Look at me,\nI'm a\nmulti-line string";

var quotedString = "It was the best of times, it was the worst of times.";

var multiLineQuotedString = "To love another person\nis to see\nthe face of God.";

var specialCharacters = "This is fine. !@#'\"`$%^&*()";

var accountBalance = "You have \$500.00";

var lastLetter = /* "z" */122;

var isLearning = true;

var myString1 = "A world without string is chaos.";

var myString2 = "A world without string is chaos.";

var teamMember = /* tuple */[
  "John",
  25
];

var position2d = /* tuple */[
  9.0,
  12.0
];

var memberName = "John";

var memberAge = 25;

var threeTuple = /* tuple */[
  42,
  2001,
  "A113"
];

var theAnswer = 42;

var firstTrainJourney = {
  destination: "London",
  capacity: 45,
  averageSpeed: 120.0
};

var maxPassengers = 45;

var amount = 250;

var userPreferredAuth = /* GitHub */0;

var newUser = /* Moderator */Block.__(1, [
    /* GitHub */0,
    /* Europe */1
  ]);

var pipedValue = 3;

var isMorning = true;

var logSomething = true;

var isItReallyTrue = "It's actually true!";

var loopStart = 1;

var loopEnd = 42;

var dLoopStart = 42;

var dLoopEnd = 1;

var $$event = 5;

var answer = match[0];

var yearWeMakeContact = match[1];

var pi = match[2];

var employee = {
  employeeName: "Laura",
  role: /* Delivery */0
};

var aThing = /* State2 */1;

var make = Guide;

exports.x = x$2;
exports.add = add;
exports.intAdder = intAdder;
exports.myBlock = myBlock;
exports.blockScope = blockScope;
exports.aTuple = aTuple;
exports.classNumber = classNumber;
exports.bjorn = bjorn;
exports.firstName = firstName;
exports.age = age;
exports.bName = bName;
exports.bAge = bAge;
exports.cName = cName;
exports.dName = dName;
exports.y = y;
exports.add2 = add2;
exports.myId = myId;
exports.myMutableNumber = myMutableNumber;
exports.copyOfMyMutableNumber = copyOfMyMutableNumber;
exports.greeting = greeting;
exports.aLongerGreeting = aLongerGreeting;
exports.quotedString = quotedString;
exports.multiLineQuotedString = multiLineQuotedString;
exports.specialCharacters = specialCharacters;
exports.world = world;
exports.helloWorld = helloWorld;
exports.accountBalance = accountBalance;
exports.emailSubject = emailSubject;
exports.lastLetter = lastLetter;
exports.isLearning = isLearning;
exports.author1 = author1;
exports.author2 = author2;
exports.author3 = author3;
exports.bigObj = bigObj;
exports.smallObj = smallObj;
exports.myString1 = myString1;
exports.myString2 = myString2;
exports.polishAdder = polishAdder;
exports.$plus = $plus;
exports.$ = $;
exports.teamMember = teamMember;
exports.position2d = position2d;
exports.memberName = memberName;
exports.memberAge = memberAge;
exports.threeTuple = threeTuple;
exports.theAnswer = theAnswer;
exports.firstTrainJourney = firstTrainJourney;
exports.maxPassengers = maxPassengers;
exports.secondTrainJourney = secondTrainJourney;
exports.tastyMuesli = tastyMuesli;
exports.name = name;
exports.amount = amount;
exports.tastyChex = tastyChex;
exports.newObject = newObject;
exports.newTruck = newTruck;
exports.toyotaTundra = toyotaTundra;
exports.toyotaSupra = toyotaSupra;
exports.userPreferredAuth = userPreferredAuth;
exports.newUser = newUser;
exports.thingIsHere = thingIsHere;
exports.isThingHere = isThingHere;
exports.userIds = userIds;
exports.newUserIds = newUserIds;
exports.languages = languages;
exports.signUpToNewsletter = signUpToNewsletter;
exports.getEmailPrefs = getEmailPrefs;
exports.noArgument = noArgument;
exports.noReturn = noReturn;
exports.moveTo = moveTo;
exports.getMessage = getMessage;
exports.logMessage = logMessage;
exports.logAnotherMessage = logAnotherMessage;
exports.subtract = subtract;
exports.subtractTwo = subtractTwo;
exports.subtractFromThree = subtractFromThree;
exports.subtractFive = subtractFive;
exports.addOne = addOne;
exports.divByTwo = divByTwo;
exports.multByThree = multByThree;
exports.pipedValue = pipedValue;
exports.divide = divide;
exports.divideBySix = divideBySix;
exports.divideByTwo = divideByTwo;
exports.divSixBy = divSixBy;
exports.divTenBy = divTenBy;
exports.labeledDiv = labeledDiv;
exports.labeledDivBySix = labeledDivBySix;
exports.labeledDivByTwo = labeledDivByTwo;
exports.greetPerson = greetPerson;
exports.isMorning = isMorning;
exports.newGreeting = newGreeting;
exports.logSomething = logSomething;
exports.isItReallyTrue = isItReallyTrue;
exports.loopStart = loopStart;
exports.loopEnd = loopEnd;
exports.dLoopStart = dLoopStart;
exports.dLoopEnd = dLoopEnd;
exports.testVariable = testVariable;
exports.loginMessage = loginMessage;
exports.userId = userId;
exports.alertMessage = alertMessage;
exports.firstNames = firstNames;
exports.$$event = $$event;
exports.importantNumbers = importantNumbers;
exports.answer = answer;
exports.yearWeMakeContact = yearWeMakeContact;
exports.pi = pi;
exports.isJohn = isJohn;
exports.maybeName = maybeName;
exports.aGreeting = aGreeting;
exports.Under_Age = Under_Age;
exports.driveToTown = driveToTown;
exports.evan = evan;
exports.messageToEvan = messageToEvan;
exports.Staff = Staff;
exports.employee = employee;
exports.NewStaff = NewStaff;
exports.SpecializedStaff = SpecializedStaff;
exports.Module1 = Module1;
exports.Module2 = Module2;
exports.Module3 = Module3;
exports.Module4 = Module4;
exports.Module5 = Module5;
exports.Module6 = Module6;
exports.Module7 = Module7;
exports.Module_in_external_file = Module_in_external_file;
exports.Current_working_file = Current_working_file;
exports.Module8 = Module8;
exports.Module9 = Module9;
exports.Module10 = Module10;
exports.aThing = aThing;
exports.getAccountID = getAccountID;
exports.jsReduce = jsReduce;
exports.calculate = calculate;
exports.make = make;
/*  Not a pure module */
