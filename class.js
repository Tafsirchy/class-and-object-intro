/**
 * class ---> templates
 * properties
 * method (a spetial type of function without using function keyword)
 * 
 * 
 * 
 * object ---> instances
 */

class Player {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.location = "Bangladesh";
        // console.log("calling the constructor method with", name)
        // console.log("calling the player by", name)
        // console.log("player created a chance");
    }
    goal(){
        console.log("goaaal!!! by Tafsir");
    }
    getTeamName(){
        console.log("Barcelona Lead")
    }
}

const player1 = new Player('Tom Brady', 32);
const player2 = new Player('Tafsir', 32);
// player1.goal();
// player1.getTeamName();

console.log(player1);
console.log(player2);

console.log(player1.name);
console.log(player2.name);

console.log(player1 instanceof Player);
console.log(player2 instanceof Player);