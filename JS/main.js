function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "you are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + "to ride.";

}// this is the function of Ternary Operators in our JavasScript


//Keywords//
function Vehicle(Make, Model, Year, Color){
    this.vehicle_Make = Make;
    this.vehicle_Model = Model;
    this.vehicle_Year =Year;
    this.vehicle_Color = Color;
}


var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "white and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard")
function myFunction () {
    document.getElementById("Keywords_and_Constructors") .innerHTML =
    "Erik drives a" + Erik.Vehicle_Color + "-colored" + Erik.vehicle_Model +"manufactured in" + Erik.Vehicle_Year;
}
//end Keywords//

//object Constructors//
// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  // Create a Person objects
  const myFather = new Person("John", "Doe", 50, "blue");
  
 
  // Display age
  document.getElementById("demo").innerHTML =
  "My father is " + myFather.age + ".";
//End Object Constructors//

//Nested Functions//
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point= 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
//End Nested Functions//
