# ReasonML Quick Guide

ReasonML is a fantastic language. It is, in my eyes, a refinment of OCaml that eliminates many of the syntactic peculiarities of that language that are the result, I assume, of being French.

Sadly, the online documentation for both OCaml and Reason is poor. The community is passionate but small. I started this document as part of a contribution to [Learn X in Y](https://learnxinyminutes.com/), but as I dug deeper into the language and discovered bits that I didn't fully understand, and could not find sufficient explanation of, my work stalled. I did not want to contribute half-finished work, but at the same time, wanted my work to be public in the hope of furthering the ReasonML gospel and helping others. Basically, wisdom is useless if it can't be scraped by Google.

My motivation is also partly that of self edification. As Richard Feynman discussed, the best way to learn is to try to teach. By writing this, I become better at the language. And since I subscribe, in as un-self-important a way as possible, to the idea of "Junior Developer For Life," this repo will forever be a work in progress as I better learn the language. Even now, there are some parts that are incomplete.

As such, I present to you my guide to ReasonML. My general goal is to be as terse as possible, where I clearly communicate what is happening but avoid any unnecessary blather. Below is the Markdown version of the main Reason file at the repo's root. I would be happy to provide further information and also accept criticism and pull requests to this repo. The more content, and the deeper the content, on the web, the better. Let's bring ReasonML to the masses!

# Shout-outs

This guide started as an extension of a more lightweight guide written by ["Seth Corker"](https://sethcorker.com). I was working on my own version at the time and integrated his initial work.

I also want to bring note to the small but dedicated group over at the [ReasonML forums](https://reasonml.chat/). Go there. Just say HI for Pete's sake. Engage! Life springs from activity, and we need more activity, because the technology itself is solid.

# Further Information
- [Reason Package Index, aka Redex](https://redex.github.io/)
- [Official Reason Docs](https://reasonml.github.io/docs/en/what-and-why)
- [ReasonReact Docs](https://reasonml.github.io/reason-react)
- [Official BuckleScript Docs](https://bucklescript.github.io/docs/en/what-why)
- [Exploring ReasonML](http://reasonmlhub.com/exploring-reasonml/toc.html) *Perhaps the best docs currently available*
- [Try Reason](https://reasonml.github.io/en/try)
- [Real World OCaml](http://dev.realworldocaml.org/toc.html)

# The Guide

Reason is a syntax layer over OCaml. Under the covers, Reason *is* OCaml. It is broadly similar to OCaml but makes changes that bring its syntax better in alignment with C and thus JavaScript, which is a primary compile target. During compilation, Reason is translated into an OCaml abstract syntax tree. The BuckleScript compiler is then used to turn that AST into easy-to-read JavaScript.

Reason's *raison d'être* is to give JavaScript developers a language that is familiar, but cleaner, does not require explicit type declarations, and provides algebraically guaranteed type safety. Further, as a syntax layer, code written in Reason can be readily compiled to OCaml and run as a native executable, paving the way for easy Web Assembly and cross-platform development.

The below text is valid ReasonML code.

``` reason
/* Comment blocks start with slash-star,
   and end with star-slash. */
// Line comments begin with a double slash.
// Expressions do not need to be terminated with a semicolon, but it is best practice;

/*** A note on types ***/

/* ReasonML makes little distinction between primitive types and what could be called
    user-defined types or structs. They are simply values represented by symbols. */

/* The below type is an abstract type, meaning that the symbol has no structure attached
    to it. Any program using this type does not need to know its structure just so long
    as references to the type are consistent. Basically, programs can use symbols without
    knowing what they mean. */

type kwyjibo;

/* The below type is a concrete type with a defined structure. These will appear frequently
    since any record must have an associated type. */

type thing = {
    value1: string,
    value2: int,
};

/*----------------------------------------------
 * Variables, functions, and bindings
 *----------------------------------------------
 */
 
/*
    - Variables and functions both use the `let` keyword.
    - Variable names must begin with a lowercase letter or underscore.
    - `let` declarations are bindings, not assignments, and are thus immutable.
    - Types are static and inferred via Hindley-Milner classification.
*/

// The compiler will infer that x is an int.
let x = 5;

// Functions will likewise infer argument and return types.
let add = (a, b) => a + b;

// Types can be functions
type intFunction = (int, int) => int;
let intAdder : intFunction = (x, y) => x + y;

// Let bindings are block scoped with `{}`.
if (true) {
    let val1 = "best of times";
    print_endline(val1)
};

let myBlock = {
    let val1 = "worst of times";
    print_endline(val1)
};

/* The list of reserved words is broadly similar to OCaml, the list for which is
    available here http://caml.inria.fr/pub/docs/manual-ocaml-312/manual044.html.
    The Reason-specific list is under development. */

/* Prefixing a variable name with an underscore creates a casual variable.
    These variables, if unused, will not trigger a compiler warning.
    Unused variable warnings only apply to block scopes and will not be
    raised on variables declared at the global or module level. 
    
    There are two kinds of unused variable. A suspicious unused variable is one
    that has been bound with `let` or `as`. An innocuous variable is one that has
    not been been bound with one of the primary binding verbs. */

let blockScope = () => {
    let variable = 42; // This triggers a warning.
    let _casualVariable = 2001; // This does not trigger a warning.
    "Return string"
}

/*** as ***/

/* `as` is a somewhat messy word in Reason. Broadly, it defines a binding. Where a
    `let` binding binds a right-hand value to a left-hand identifier, `as` binds left
    to right. Further, `as` does not actually bind values. It binds patterns. */

// Example here

/* `as` is also used in object assignment in a somewhat similar fashion. See the below
    section on objects to see an explanation. */

/*** Destructuring ***/

// Data structures can be "destructured" for assignment to individual variables.
let aTuple = ("Teacher", 101);
let (name, classNumber) = aTuple;

print_endline(name);
print_int(classNumber);

type person = {
  firstName: string,
  age: int,
};

// Variable extractions from records must match field names.
let bjorn = {firstName: "Bjorn", age: 28};
let {firstName, age} = bjorn;

// Extractions can be re-named before being bound.
let {firstName: bName, age: bAge} = bjorn;

// Fields can be ignored either through omission or the anonymous variable `_`.
let {firstName: cName} = bjorn;
let {firstName: dName, age: _} = bjorn;


/*** Type annotation ***/

// Type annotations can be added when inference does not suffice.
let y: int = 5;

// Function arguments and returns can be annotated.
let add2 = (a: int, b: int): int => a + b;

// A type can be aliased using the `type` keyword.
type companyId = int;
let myId: companyId = 101;

// Mutation, while discouraged, is possible with a `ref()` wrapper.
let myMutableNumber = ref(120);

// To assign a new value, use the `:=` operator.
myMutableNumber := 240;

// To access the value in a `ref()`, use the `^` suffix.
let copyOfMyMutableNumber = myMutableNumber^;


/*----------------------------------------------
 * Basic types and operators
 *----------------------------------------------
 */

/*** > String ***/

// Use double quotes for strings.
let greeting = "Hello world!";

// A string can span multiple lines.
// When compiled, new line characters are generated.
let aLongerGreeting = "Look at me,
I'm a
multi-line string";

/* Quoted Strings */

// The `{||}` syntax provides functionality akin to backtick strings in JavaScript.
let quotedString = {|It was the best of times, it was the worst of times.|};

let multiLineQuotedString = {|To love another person
is to see
the face of God.|}

// No character escaping is necessary.
let specialCharacters = {|This is fine. !@#'"`$%^&*()|}

// The `js` marker enables unicode.
let world = {js|🌍|js};

// The `j` marker enables variable interpolation.
// The parenthesis are optional but required if characters directly follow the variable
let helloWorld = {j|hello, $(world)|j};

// The `$` is reserved to prefix variables and can be escaped with `\`.
let accountBalance = {j|You have \$500.00|j};

// Concatenate strings with `++`.
let name = "John " ++ "Wayne";
let emailSubject = "Hi " ++ name ++ ", you're a valued customer";


/*** > Char ***/

/* Use single quotes for a char. Chars compile to an integer between 0 and 255
    and thus do not support Unicode or UTF-8. */

let lastLetter = 'z';


/*** > Boolean ***/

// A boolean can be either true or false.
let isLearning = true;

true && false;   // - : bool = false;  Logical and
true || false;   // - : bool = true;   Logical or
!true;           // - : bool = false;  Logical not

'a' > 'b'; // - bool : false
5 < 42;    // - bool : true


/* Equality */
/* Although Reason has `==` and `===`, they are different from JavaScript.
    Structural Equality Does a deep comparison of each entity's structure.
    Use this judiciously since comparing large structures is expensive. */

type author = {
    name: string,
    age: int
};

let author1 = {
    name: "Charles Dickens",
    age: 58
};

let author2 = {
    name: "Charles Dickens",
    age: 58
};

let author3 = {
    name: "Victor Hugo",
    age: 83
};

author1 == author2; // - : bool = true
author1 == author3; // - : bool = false
author1 != author3; // - : bool = true

/* Any attempt at using greater-than or less-than vis-à-vis structures will
    trigger a structural comparison. The comparison will return a boolean as 
    soon as a difference is discovered and will not continue to do a complete
    comparison. */

let bigObj = [10, 10000000, 10000000];
let smallObj = [11, 1, 1];

bigObj > smallObj; // - : bool = false

/* Because 10 and 11 are different, and 10 is smaller than 11, false is returned
    even though the next two values are much larger. */

/* Referential, or physical, equality compares the identity of each entity. */

author1 === author2; // - : bool = false
author1 === author1; // - : bool = true


/* Comparing Values */

// The equality operators work differently for values instead of structures.
// Both `==` and `===` will become strict equality `===` when compiled to JavaScript.
// Attempting to compare two different types will cause a compile error.

let myString1 = "A world without string is chaos.";
let myString2 = "A world without string is chaos.";

"A string" === "A string"; // - : bool = true
"A string" == "A string";  // - : bool = true
42 === 42;                 // - : bool = true
42 == 42;                  // - : bool = true
// 42 === "A string" // Error


/*** > Integer ***/

1 + 1;          // - : int = 2
25 - 11;        // - : int = 11
5 * 2 * 3;      // - : int = 30
8 / 2;          // - : int = 4

// Integer division will round results
8 / 3           // - : int = 2
8 / 5           // - : int = 1


/*** > Float ***/
// Floating point operators have a `.` suffix.

1.1 +. 1.5;     // - : float = 2.6
18.0 -. 24.5;   // - : float = -6.5
2.5 *. 2.0;     // - : float = 5.0
16.0 /. 4.0;    // - : float = 4.0


/*** Operator Assignment ***/

/* Reason is a descendant of Lisp, which means that operations in the language are
    conceptually similar to lists of operations and data. As such, while standard
    infix operator notation is acceptable, so is prefix, or Polish, notation. */

let polishAdder = (a, b) => (+) (a, b);

// Operators are just functions that can be reassigned.
let (+) = (a, b) => a * b;

// Custom operators can use any of the reserved characters.
let ($) = (a, b) => a - b + 3;
4 $ 3   // - : int = 4


/*** > Tuple ***/
/*
    - contained in parentheses
    - two or more values
    - immutable
    - ordered
    - fixed-sized at creation time
    - heterogeneous (can contain different types of values)
 */

let teamMember = ("John", 25);

// Type annotation matches the values
let position2d: (float, float) = (9.0, 12.0);

// An individual value in a tuple cannot be used independently.
// To extract a value from a 2-tuple, use the standard library functions `fst()` and `snd()`.
let memberName = fst(teamMember) /* - : string = "John"  */
let memberAge  = snd(teamMember) /* - : int = 25  */

// Values can also be ignored or extracted via destructuring and the anonymous variable `_`.
let threeTuple = (42, 2001, "A113");
let (theAnswer, _, _) = threeTuple; // theAnswer = 42


/*** > Record ***/
/*
    - Similar to JavaScript object literals
    - A structure of key:value pairs
    - Immutable by default
    - Fixed names and types
*/

// A record must have an explicit type.
type trainJourney = {
    destination: string,
    capacity: int,
    averageSpeed: float,
};

// Once declared, types can be inferred by the compiler.
let firstTrainJourney = {
    destination: "London",
    capacity: 45,
    averageSpeed: 120.0
};

// Access a property using dot notation.
let maxPassengers = firstTrainJourney.capacity;

// New records can be created from previous records via the spread operator `...`
let secondTrainJourney = {...firstTrainJourney, averageSpeed: 120.0};

// A record property can be made mutable with the `mutable` keyword.
type breakfastCereal = {
  name: string,
  mutable amount: int,
};

let tastyMuesli = {
    name: "Tasty Muesli TM",
    amount: 500
};

tastyMuesli.amount = 200;

// Punning can reduce redundant typing.
// Match a variable's name & type to a record's key.

let name = "Chex";
let amount = 250;
let tastyChex = {
    name,
    amount
};


/*** Object ***/

/* Objects are similar to records but are more class-like in their semantics.
    Notably, they are more like the original conception of objects in that they
    are defined by their behaviors, to wit they only expose methods; all values
    are private.
    
    Like classes, objects have private and public methods, identified with the
    `pub` and `pri` keywords. All values are labeled with the `val` keyword.
    Objects have `this` implicitly attached as a binding to all instances of objects.
    
    While objects in Reason are superficially similar to JavaScript objects, they
    do not directly transpile to them. */

// Objects are accessed with hash notation #.
let newObject = {
    val aNumber = ref(42);
    pri increment = (num: int) => aNumber := aNumber^ + num;
    pub addNumber = (inputValue: int) => {
        this#increment(inputValue);
        aNumber^
    };
};

/* Objects do not need types but can have them. There are two categories of type,
    open and closed, and are identified with either one or two dots as the leading
    token of the type's structure. The single dot in the type indicates that this
    is a closed type, meaning that all instances of this type must have a public
    interface of exactly this shape. */

type truck = {
    .
    buildTruck: (~make:string, ~model:string) => string
};

let newTruck: truck = {
    val drive = 4;
    pub buildTruck = (~make, ~model) => {j|You built a new $make $model with $drive-wheel drive.|j};
    // pub intruder = "I'm not supposed to be here!"; // This will cause a shape error.
};

let toyotaTundra = newTruck#buildTruck(~make="Toyota", ~model="Tundra");

/* The double dot, called an elision, indicates that the below is an open type.
    This means that instances of this type do not need to have this exact shape.
    This flexibility means that object types, unlike records, are NOT inferred.
    They must be explicitly declared. */

type car('a) = {
    ..
    accelerate: unit => unit,
    brake: unit => unit
} as 'a;

/* Since open types do not mandate a shape, they are necessarily polymorphic,
    meaning that a fixed object type must be provided. The returned type is
    then classified as the supplied type with the `as` keyword.
    
    The undetermined type is represented by the `'a`, commonly referred to as
    "alpha." Alpha's sibling is `'b`, known as "beta." Alpha commonly represents
    a function's input type while beta represents its return type. This is only
    convention, as the ' simply identifies a type label and the succeeding string
    can be anything. 'steve is equally valid to 'a. */

let toyotaSupra: car({. accelerate: unit => unit, brake: unit => unit, checkSpeed: int}) = {
    val speed = ref(0);
    pub accelerate = () => {
        if (speed^ < 155) {speed := speed^ + 1};
    };
    pub brake = () => {
        if (speed^ > 0) {speed := speed^ - 1};
    };
    pub checkSpeed = speed^;
};

/* The above example is illustrative of the earlier point about `as` vis-a-vis objects.
    A warning underlines the speed val because objects implicitly contain `this`.
    `this` represents the object itself and not simply its behaviors or values. The
    warning will go away either through the use of a private method requiring `this`,
    such as `this#privateMethod`, or through assigning `this` as a casual variable.
    The latter can be achieved with the `as` keyword.
    
    Append `as _this;` after toyotaSupra's opening bracket to clear the warning. */


/*** > Variant ***/
/*
    - A variant is a sort of plural type.
    - The possible states of a variant are called "constructors".
    - Constructors are not types themselves; they are state identifiers.
    - Constructors are symbols, meaning they are unique within the current scope.
*/

type authType =
    | GitHub
    | Facebook
    | Google
    | Password;

let userPreferredAuth = GitHub;

/* The compiler now knows that `userPreferredAuth` is of type `authType`. and
    that it must necessarily be in one of four states. */

// Constructors are called constructors because they accept types as arguments.
// The types can themselves be variants.

type userRegion =
    | Asia
    | Europe
    | South_america
    | North_america;
    
type userType =
    | Admin(authType)
    | Guest
    | Moderator(authType, userRegion);
    
let newUser = Moderator(GitHub, Europe);


/*** > Option ***/

/* At the root of Reason's safety is the concept of possible existence. This is
    not like `null` or `undefined` but an explicit state of nothing. Possible
    existence is handled with the `Option` type. Options are like a variant with
    two states, Some() and None. */

Random.self_init();
let thingIsHere = Random.bool();

let isThingHere =
    if (thingIsHere) {
        Some("Thank you, Thing.");
    } else {
        None;
    };
    
/* isThingHere is of type `option` and possibly contains a string.
    Later, the compiler will require code that references `isThingHere`
    to account for both states. */


/*** > List ***/
/*
    - Singly linked lists
    - Immutable
    - Ordered
    - Homogenous
    - Fast at prepending and splitting
    - Slow at random access & updates
*/

// A list is declared with `[ ]` with comma-separated values.
let userIds = [1, 4, 8];

// The type can be explicitly set with list('a) where 'a is the type
type idList = list(int);
type attendanceList = list(string);

/* Just like records, lists are immutable but the contents of a list
    can be copied using the spread operator. */
let newUserIds = [101, 102, ...userIds];

/*** > Array ***/
/* Arrays are like lists except they are
    - Mutable
    - Slow at prepending and splitting
    - Fast at random access & updates
    - Fixed size when targeting native
    - Variable size when targeting JavaScript
*/

// An array is declared with `[| |]` with comma-separated values.
let languages = [|"Reason", "JavaScript", "OCaml"|];

// Access indices with the `[i]` syntax. 
languages[1] // "JavaScript"


/*----------------------------------------------
 * Function
 *----------------------------------------------
 */

/*
    - Functions use implicit return, i.e. there is no `return` command.
    - The final expression in a function block is returned.
    - There is no early return. The final expression *must* be the return.
*/

// Fat arrow syntax declares a function.
let signUpToNewsletter = email => "Thanks for signing up " ++ email;

let getEmailPrefs = email => {
  let message = "Update settings for " ++ email;
  let prefs = ["Weekly News", "Daily Notifications"];

  (message, prefs); // Implicitly returned
};

// Call a function with the standard syntax.
signUpToNewsletter("hello@reason.org");


/*** Unit ***/

/* Reason has a special type called `unit`. It is the concept of a "thing"
    that is "nothing." It is different from `None` in that `None` is the state
    of nothing being where `Some()` could also have been. `Unit` is the state of
    expected nothing. It is similar to `void` in other languages. Unit can be
    declared with the `unit` type keyword or the `()` syntax. */
    
// Unit's first use is in declaring functions that take no arguments.
let noArgument = () => { "I've got nothing" };

/* All functions necessarily return something, so if there is no expression
    intended for return, such as in functions that only handle side-effects, then
    that function will return `unit`. Functions that return `unit` can be
    explicitly typed. */
    
let noReturn = (input) : unit => { print_endline("I just print " ++ input) };

/* The above function expects to return nothing and will throw a compile error
    if anything is returned. */


/*** > Labeled Arguments ***/

type position = {
    posx: float,
    posy: float
}

// Arguments can be labeled with the `~` symbol.
let moveTo = (~x, ~y) => {posx: x, posy: y};

// Any order of labeled arguments is acceptable.
moveTo(~x=7.0, ~y=3.5);
moveTo(~y=3.5, ~x=7.0);

// Labeled arguments can also have an alias used within the function.
let getMessage = (~message as msg) => "Message for you, sir... " ++ msg;

// Labeled arguments support explicit typing.
let logMessage = (~message: string) => {
  print_endline(message);
};

let logAnotherMessage = (~message as msg: string) => {
  print_endline(msg);
};


/*** > Pipe ***/

// Functions can be called with the pipeline operator.

// Pipe syntax is the opposite of traditional function calls.
// `myFunction(myValue)` says "perform myFunction with myValue."
// myValue -> myFunction says "send myValue to myFunction."
// This facilitates sending of one function's output to another's input.

let subtract = (x, y) => { x - y };
let subtractTwo = subtract(_, 2);

3 -> subtractTwo; // - : int = 1

/* The thin arrow syntax is called "pipe-first" since the value passed in
    is used as the first argument in the receiving function. */
    
let subtractFromThree = 3 -> subtract;

/* The `|>` operator is called pipe-last, or confusingly, the
    reverse-application operator, which passes in the final argument. */
let subtractFive = 5 |> subtract;

// If a function accepts a single argument, the pipe operators are identical.

/* Pipes make it easier to chain code together */
let addOne = a => a + 1;
let divByTwo = a => a / 2;
let multByThree = a => a * 3;

let pipedValue = 3 -> addOne -> divByTwo -> multByThree; // - : int = 6


/*** > Currying ***/

/* Curring is the act of decomposing a function that takes multiple
    arguments into a series of functions that each take one argument. */
    
// Functions are automatically curried and can be partially called
let divide = (denom, numr) => numr / denom;
let divideBySix = divide(6);
let divideByTwo = divide(2);

divide(3, 24);     /* - : int = 8  */
divideBySix(128);  /* - : int = 21 */
divideByTwo(10);   /* - : int = 5  */

// To partially call with deeper arguments, the anonymous variable `_` is used.

let divSixBy = divide(_, 6);
let divTenBy = divide(_, 10);

divSixBy(2); /* - : int = 3  */
divTenBy(2); /* - : int = 5  */

// Labeled arguments allow currying without the need for the anonymous variable.

let labeledDiv = (~denom, ~numr) => numr / denom;
let labeledDivBySix = labeledDiv(~denom=6);
let labeledDivByTwo = labeledDiv(~denom=2);

labeledDivBySix(~numr=36);  /* - : int = 6 */
labeledDivByTwo(~numr=4);   /* - : int = 2  */


/*** > Optional Labeled Arguments ***/

// Using the `=?` qualifier makes an argument optional.
// The final argument of a function with optional arguments must be unit `()`.
// When called, the unit argument prevents auto-currying.

let greetPerson = (~name, ~greeting=?, ()) => {
  switch (greeting) {
  | Some(greet) => greet ++ " " ++ name
  | None => "Hi " ++ name
  };
};

// Call greetPerson without the optional labeled argument.
greetPerson(~name="Kate", ());

// Call greetPerson with all arguments.
greetPerson(~name="Marco", ~greeting="How are you today,");


/*----------------------------------------------
 * Control Flow & Pattern Matching
 *----------------------------------------------
 */

/*** > If-else ***/

/* Like functions, `if` and `else` are evaluation blocks that will
    return the final expression within the block. Just as with functions,
    there is no early return. */

let isMorning = true;
let newGreeting = if (isMorning) {
    let goodMorning = "Good morning!";
    goodMorning;
} else {
    let genericGreeting = "Hello!";
    genericGreeting;
};

/* For blocks that do not return anything, such as side effects, `unit`
    is implicitly returned even if there is nothing to accept it. */
    
let logSomething = true;
if (logSomething) {
    print_endline("Logged!");
    // `unit` is returned.
}

/* 'if` does not exist independently. It is always paired with `else`,
    either implicitly or explicitly. */
    
// let isItTrue = if (false) {
//   "It's not true!"
// };

/* The above code will produce a compile error. The `else` block is
    unwritten, and thus implicitly returns `unit`, where the if block
    returns a string. Both branches must return the same type. The
    below illustrates the correct form.
*/

let isItReallyTrue = if (false) {
    "It's really not true!";
} else {
    "It's actually true!";
};


/*** > Loops ***/

// Loops are similar to other languages except that Reason has no `break` or `continue`.

/* For Loop */

let loopStart = 1;
let loopEnd = 42;

for (x in loopStart to loopEnd) {
  print_int(x);
  print_string(" ");
};

// Reason allows slightly easier decrementing in loops with the `downto` statement.

let dLoopStart = 42;
let dLoopEnd = 1;

for (x in dLoopStart downto dLoopEnd) {
  print_int(x);
  print_string(" ")
};

/* While loop */

let testVariable = ref(false);
while (testVariable^) {
    print_endline("It's true.")
}


/*** > Pattern Matching ***/

/* Pattern matching is Reason's crown jewel. It helps prevent all manner
    of errors and unintended behaviors and offers a profound competitive
    advantage in comparison to other languages and tools.
    
Pattern matching uses decomposition of input to analyze the relationship
    of tokens to find set patterns. This stands in contrast to a direct
    comparison of two values sitting in memory. That sounds fighteningly
    complex but it is actually rather straightforward. A complete discussion
    of pattern matching on a theoretical level is beyond the scope of this
    tour, but it is encouraged to read the Wikipedia page on the subject.
    
In Reason, as with many functional languages, pattern matching is used
    for all comparisons. Sometimes this acts like common value comparisons in
    other languages, like `x === y` in JavaScript. But unlike simple comparisons,
    a pattern has a finite number of states, meaning that the compiler can warn
    the programmer if all possible patterns are not accounted for. This power
    becomes apparent with `switch` statements. */

/*** > Switch ***/

/* The `switch` statement is similar to JavaScript's `switch` but enhanced by
    the power of pattern matching. Indeed, in OCaml, it is called `Match`. In
    this example, the previous `authType` variant is used. */
   
let loginMessage =
    switch (userPreferredAuth) {
    | GitHub   => "Login with your GitHub credentials."
    | Facebook => "Login with your Facebook account."
    | Google   => "Login with your Google account"
    | Password => "Login with your email and password."
};

/* All four possible states of the authType type must be accounted for. If the
    switch case for `Password` were deleted, the error "this pattern-matching
    is not exhaustive." would be raised by the compiler. Similarly, whenever
    an `option` is used, any `switch` statement must take into account both
    possible states, `some()` and `none`. */

let userId = Some(23);
let alertMessage =
    switch (userId) {
    | Some(id) => "Welcome, your ID is" ++ string_of_int(id)
    | None => "You don't have an account!"
};

/* As stated, pattern matching is not simply a comparison of values. Complex
    structures can be tested and matched. In this case, the possible analysis
    space is infinite, as opposed to a finite variant, so the final case is the
    anonymous variable, indicating a catch-all that captures everything not
    caught by the previous cases. Just as with `authType`, if the catch-all is
    deleted, a non-exhaustive pattern match error will be raised by the compiler. */

let firstNames = ["James", "Jean", "Geoff"];
switch (firstNames) {
    | [] => "No names"
    | [first] => "Only " ++ first
    | [first, second] => "A couple of names " ++ first ++ "," ++ second
    | [first, second, third] => "Three names, " ++ first ++ ", " ++ second ++ ", " ++ third
    | _ => "Lots of names" // This cannot be deleted.
};

let event = 5;
switch (event) {
    | 1 => "Green"
    | 0 | 5 => "Red"
    | 2 | 3 | 4 => "Black"
    | _ => "Gray";
};

let importantNumbers = [42, 2001, 31459];
// let [answer, yearWeMakeContact, pi] = importantNumbers;

/** The above code triggers a non-exhaustive error because lists and arrays
 * are of potentially variable size. In this example, the list is a known fixed size,
 * so the error is unfounded. Compilation will still fail. This is another example
 * of enforced protection against null and undefined errors.
 * 
 * The idiomatically correct way to destructure entities of unknown size is through
 * pattern matching into a fixed-size tuple. While this may seem like unecessary
 * boilerplate, it is another example of Reason's rigid enforcement of type security.
 * */

let (answer, yearWeMakeContact, pi) = switch (importantNumbers) {
    | [a, b, c] => (a, b, c)
    | _ => (0, 0, 0)
};

/*** > When clause ***/

let isJohn = a => a == "John";
let maybeName = Some("John");

/* When can add more complex logic to a simple switch */
let aGreeting =
    switch (maybeName) {
    | Some(name) when isJohn(name) => "Hi John! How's it going?"
    | Some(name) => "Hi " ++ name ++ ", welcome."
    | None => "No one to greet."
};


/*** > Exception ***/

/* Unlike many other languages, exceptions in Reason and OCaml are truly intended
    to represent exceptional circumstances in your code. Exceptions are a special
    variant, just as `option` is. But unlike `option`, exception can be extended
    with custom constructors. */

// Define custom exceptions with the `exception` statement.
exception Under_Age;

type driver = {
    name: string,
    age: int,
    height: int
}

// Trigger an exception with the `raise` call.
let driveToTown = (driver: driver) =>
  if (driver.age > 16) {
    "We're in town";
  } else {
    raise(Under_Age);
  };

let evan = {name: "Evan", age: 14, height: 175};

// Pattern match on the exception Under_Age.
switch (driveToTown(evan)) {
    | status => print_endline(status)
    | exception Under_Age =>
        print_endline(evan.name ++ " is too young to drive!")
};

/* Try */

/* Try blocks are a special switch specifically intended to handle exceptions.
    As such, they do not need the exception label. */
    
let messageToEvan =
    try (driveToTown(evan)) {
    | Under_Age => evan.name ++ " is too young to drive!"
};

/* It should be noted that in the above examples, exceptions were not needed.
    Ordinary variants and options would have been sufficient. Exceptions exist
    primarily for performance reasons in OCaml, where an exception is much
    faster than the more usual forms of control flow and handling. In JavaScript,
    this is not the case. As such, if you are targeting JavaScript, there is
    genuinely no reason to use exceptions. */


/*----------------------------------------------
 * Modules & Interfaces
 *----------------------------------------------
 */
 
/* A module is essentially a namespace. A reasonable analog from other languages
    is the concept of a class. */

// Create a new module with the `module` statement.
module Staff = {
  type role =
    | Delivery
    | Sales
    | Other;

  type staffMember = {
    employeeName: string,
    role
  };

  let defaultRole = Other;

  let getRoleDirectionMessage = staff =>
    switch (staff.role) {
    | Delivery => "Deliver it like you mean it!"
    | Sales => "Sell it like only you can!"
    | Other => "You're an important part of the team!"
    };
};

// A module can be accessed with dot notation.
let employee: Staff.staffMember = {employeeName: "Laura", role: Staff.Delivery};

/* As stated, modules provide namespacing, meaning that what is within the scope
     of a module is not within the current working scope. To bring a module's
     contents into the working scope, use the `open` command. This process is not
     a copy, but a reference. The contents of a module is made visible to
     another. */

module NewStaff = {
    open Staff;
    let newRole = Delivery;
    let newEmployee: staffMember = {employeeName: "Fred", role: Other};
}

/* The above code will trigger a compiler warning for a shadowed module. That is
    because when a module is in the same file as the working scope, there is no
    need to explicitly open the module for type references. */

/* Continuing the analogy of a module as a class, a module can be extended using
    the `include` command. Using `include` brings the contents of one module into
    the scope of another module. While this may superficially seem similar to
    `open`, `include` actually copies the content of one module into another while
    still allowing for value overrides. */
   
module SpecializedStaff = {
  include Staff;

  let ceo: staffMember = {employeeName: "Reggie", role: Other};
  
  let defaultRole = Delivery; 

  let getMeetingTime = staff =>
    switch (staff) {
    | Other => 11_15 /* - : int = 1115; Underscores are for formatting only  */
    | _ => 9_30
    };
};

/* The power of include comes from levels beyond two. Since include copies the
    contents, when a third module opens or includes the second, it still has
    access to the contents of the first module. */

module Module1 = {
    type musician =
        | Classical
        | Jazz
        | Rock
        | Hiphop
        | Electronic;
}

module Module2 = {
    open Module1;
    let newMusician = Classical;
}

module Module3 = {
    include Module1;
    let newMusician = Classical;
}

/* In both Module2 and Module3, the type of `newMusician` does not need to be
    explicitly stated. But since Module2 only opened Module1, while Module3
    included it, later modules must treat them differently. */

module Module4 {
    open Module2;
    let externalRef = newMusician;
    // let newMusician2 = Classical; // Error : Unbound constructor Classical
}

module Module5 {
    include Module2;
    let externalRef = newMusician;
    // let newMusician2 = Classical; // Error : Unbound constructor Classical
}

/* In Module4 and Module5, both will produce errors regardless of whether `open`
    or `include` is used since module2 only opened Module1. It is important to
    note that the log of `newMusician` remains valid since the static value is
    still passed even though the constructor is not. */

module Module6 {
    open Module3;
    let externalRef = newMusician;
    let newMusician2 = Classical;
}

module Module7 {
    include Module3;
    let externalRef = newMusician;
    let newMusician2 = Classical;
}

/* Both Module6 and Module7 will compile correctly since they reference Module3,
    which included Module1. Thus, `include` allows module chaining, whereas `open`
    only allows a parent-child relationship. */

/*** Records, Variants, and Other Files ***/

/* As stated, all files are by default modules. Because of this, unlike in other
    languages, Reason does not require explicit imports of files. Instead, a
    module name need simply be referenced in the code itself. The compiler will
    recursively search the file tree for definitions, using the current file as
    the root. */

// Since module names must be capitalized, so must filenames.

module Module_in_external_file = { // From Module_in_external_file.re
    type externalVariant = 
        | Thing1
        | Thing2;
        
    type externalType = {
        key1: string,
        key2: int
    };
}

/* The above module was explicitly declared only for the sake of allowing this
    tutorial to compile. Since all files are modules by default, the `externalVariant`
    and `externalType` would usually be the only thing in the file. */

module Current_working_file = {
    let newThing: Module_in_external_file.externalVariant = Thing1;
}

/* All files intended for import must have unique names to ensure that the recursive
    search does not suffer from conflicts. This encourages semantic file naming instead
    of semantic directory structuring and thus a flat file structure. This flies in
    the face of conventions in many other languages but provides some security. A file
    named `card.js`, when removed from its semantic directory, is meaningless. As such,
    the information is fragile. But a filename such as `Left_hand_menu_account_card.js`,
    while long, is robustly semantic. This file can sit anywhere and still communicate
    its nature. */


/*** Interfaces ***/

/* By default, everything in a module is exported and made available to code that
    references it. To customize what pieces of a module are made visible, an interface must
    be created. This is also called a signature because every module has and projects a
    signature, but is by default implicit. */

// If an interface is contained within the same file as the module, the `type` statement is used.

module type Module8Interface = {
    let visibleThing: int;
    let visibleFunction: (int, int) => int;
};

/* Interfaces are like a contract. They dictate what a module must provide to be of a type.
    As such, module types must be explicitly declared om modules that fulfill all requirements
    of that type. If Module8 did not provide `visibleThing` and `visibleFunction`, and error
    would be produced. */

module Module8: Module8Interface = {
    let visibleThing = 2001;
    // let invisibleThing = 42;
    let visibleFunction = (x,y) => {
        x * y
    };
    // let invisibleFunction = (a,b) => {
    //     a ++ b
    // };
};

module Module9 = {
    include Module8;
    print_int(visibleFunction(2,3));
    // print_endline(invisibleFunction("Hello,", "Goodbye")); // Unbound value error.
}

// Module interfaces can be in-lined. 

module Module10: {
    let func1: (int,int) => int;
    let func2: (string,string) => string;
} = {
    let func1 = (x,y) => {
        x + y
    };
    let func2 = (a,b) => {
        a ++ b
    };
};

type myVariant =
  | State1
  | State2
  | State3(string);

let aThing = State2;

if (aThing == State2) {
    print_endline("Thing!")
}

/* if an interface is contained in a separate file, it must be inside an interface file
    with an identical name as the module file but with the extension `.rei`. In this
    scenario, the type of the module does not need to be explicitly declared. The
    compiler knows to bind the signature to the module because of the matching file names. */

/*----------------------------------------------
 * JavaScript Interoperation
 *----------------------------------------------
 */

/* Even though Reason is a language unto itself, for the time being, its primary compile
    target is JavaScript. As such, a great many JavaScript-specific tools are available
    to developers. This section is not intended to be exhaustive. For greater information,
    see the Bucklescript docs at https://bucklescript.github.io/. */

// Most abilities are attached to the `Js` module.
Js.log("This will log to the console.");
Js.logMany([|"Log", "an", "array"|]);

/* Promises are currently supported with expected behaviors. Resolve and reject are
    uncurried callbacks. This is a feature of Bucklescript and requires the leading `.` in
    the list of arguments. The pipe-last operator is used for chaining. */

let getAccountID = Js.Promise.make( (~resolve, ~reject) => resolve(. 1337));

getAccountID
    |> Js.Promise.then_(result => {
        Js.Promise.resolve(result);
    })
    |> Js.Promise.catch(err => {
        Js.log2("Failure!!", err);
        Js.Promise.resolve(-1);
    });

// Async/Await support is under development.

/* Beyond the direct integration of certain features, the Bucklescript transpiler allows
    for direct injection of JavaScript into Reason. */

let jsCalculate: (array(int), int) => int = [%bs.raw
    {|
        function (numbers, scaleFactor) {
            var result = 0;
            numbers.forEach(number => {
                result += number;
            });
            return result * scaleFactor;
        }
    |}
];

let calculate = (numbers, scaleFactor) => jsCalculate(Array.of_list(numbers), scaleFactor);

Js.log("calculating")
Js.log(calculate([1, 2, 3], 10));

/* Along with the Js module, there are Bucklescript-specific tools that are necessary for writing JavScript bindings. Bindings are code that take external JavaScript and represent it in ReasonML's symbolic system. When transpiled to JavaScript, Bucklescript will create functions that check the consistency of the JavaScript according to the provided bindings. This means that, unlike in TypeScript, transpiled ReasonML code is type safe. It will perform run-time checks, injecting stability and debuggability into the application in case of unexpected external input, as from the response from an API.


*/

/*----------------------------------------------
 * ReasonReact
 *----------------------------------------------
 */


/* ReasonML was created by the same person, Jordan Walke, that created React. It could be seen
    as a language created specifically to enable faster, more reliable production of React apps.
    React and ReasonML have walked hand-in-hand because of this, meaning that much of the
    discussion surrounding the language has focused on React. ReasonReact's home page is even
    hosted on the same domain as ReasonML. As such, it is sensible to include an overview of the
    React library's bindings. */

// ReasonReact offers decorators that abstract away Bucklescript implementations.

[@react.component]
let make = (~food) => {
    let (amount, eat) = React.useState( () => 0 );
    let eatMore = () => { eat( (_e) => { amount + 1 } ) };
    <div>
        <p> { React.string( {j| $food monster has eaten $amount $(food)s |j} ) }</p>
        <button onClick={ (_ev) => eatMore() }>{ React.string( {j| Eat $food |j} ) }</button>
    </div>
};

/* The above abstracts away much of React's boilerplate. All that must be written are the
    decorator and the render function, which is called `make`. The example is a variation
    on the standard React Hooks example available on React's website, and the ReasonML version
    available on the ReasonReact site.

    The labeled arguments constitute the component's props. The next line is the state Hook.
    `useState` returns a 2-tuple, with the first element being the value to store and the second
    being the function that can change that value. With destructuring, the names `amount`
    and `eat` are bound to the values. `useState` takes a single argument, a function that
    initializes the state value. In the above case, an inital value of `int : 0` is bound to
    `amount`.

    The returned function, `eat`, is a wrapper that adds a signature to, and then returns, a 
    provided function. In this example, the anonymous function passed into `eat` is signed as 
    accepting an integer and returning a unit. Any function passed into `eat` must follow the 
    same signature.
    
    `eatMore` is a wrapper function that calls `eat`. `eat` cannot be directly called because 
    the function must accept a React Event, while functions that can change the state will only
    accept the same type that they return, in this case an integer. `eatMore` is a single-use
    function with no special signature. The function passed into `eat` must accept an integer,
    but there is no integer to provide. An anonymous variable is provided since it fulfills any
    type requirement.

    The final piece of JSX is the implicitly returned value. All strings must be placed in the
    typed wrapper React.string(). The `onClick` event automatically captures the React event and
    passes it into the provided function. In this example, an underscore is used to create a
    casual variable. Since the event is not being used, a warning would otherwise be displayed.

    The above steps and nested functions may seem overly complex, but it is the nature of
    functional programming that steps are not broken down by passing arguments or mutating values.
    Instead, steps are taken with the progressive application of signed and typed functions.

    ReasonReact is built around Hooks and supports all of them. The older API is deprecated.
*/

/*----------------------------------------------
 * Belt
 *----------------------------------------------
 */

/* Belt is an implementation of OCaml's standard library that provides additional tools
    specifically to facilitate transpilation to JavaScript. */

```
