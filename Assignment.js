// FIRST PROBLEM -- CONVERTING FEET TO MILE
function feetToMile(feet) {
  if (feet < 0) {
    var mileResult = "Error! Negetive Value is not accepted";
  }
  else {
    var mile = feet / 5280;
    var mileResult= mile.toFixed(2);
  }
  console.log("length in Mile: ", mileResult);
  return mileResult;
}
// function called below--
feetToMile();



// SECOND PROBLEM -- CALCULATING WOOD
function woodCalculator(chair, table, bed) {
  if ((chair < 0) ||(table < 0) ||  (bed < 0)) {
    var totalWood = "Error! Negetive Value is not accepted";
  }
  else {
    var chairWood = chair * 1;
    var tableWood = table * 3;
    var bedWood = bed * 5
    var totalWood = chairWood + tableWood +  bedWood;
  }
  console.log("Required Wood = ", totalWood, " cubic feet");
  return totalWood;
}
// function called below--
woodCalculator();


// THIRD PROBLEM -- BRICK CALCULATION

// NOTES---
// BRICKS REQUIRED PER FEET = 1000
// HEIGHT OF PER FIRST TEN FLOORS = 15FEET
// HEIGHT OF PER NEXT TEN FLOORS = 12FEET
// HEIGHT 0F FINAL FLOORS = 10FEET

function brickCalculation(floor) {
  if (floor < 0) {
    var brickResult = "Error! Negetive Value is not accepted";
  }
  else if (floor > 0 && floor <= 10) {
    var firstTenFloor = 1000 * 15 * floor;
    var brickResult = firstTenFloor;
  }
  else if (floor >= 11 && floor <= 20) {
    var nextTenFloor = (1000 * 15 * 10) + (1000 * 12 * (floor - 10));
    var brickResult = nextTenFloor;
  }
  else {
    var finalFloors = (1000 * 15 * 10) + (1000 * 12 * 10) + (1000 * 10 * (floor - 20));
    var brickResult = finalFloors;
  }
  console.log("Required number of bricks: ", brickResult);
  return brickResult;
}
// function called below--
brickCalculation();



//FOURTH PROBLEM -- FINDING SMALLEST FRIEND NAME
function tinyFriend(friendsName) {
  var min = friendsName.length;
  var shortestname;
  for (var i = 0; i < friendsName.length; i++) {

    if (friendsName[i].length < min && friendsName[i]!=="" ) {
      min = friendsName[i].length;
      shortestname = friendsName[i];
    }
  }
  console.log("The shortest name: ", shortestname, " and the length of the shortest name is: ", shortestname.length);
  return shortestname;

}
// function called below--
tinyFriend();

