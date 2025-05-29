// This is the class constructor of the characters! It takes a js object as input. 
// See /characters/rocky.js for example of how one character might look!
class Character {
  constructor(char_obj){
    this.fullname=char_obj.fullname;
    this.sprites = char_obj.sprites;
    this.stats = char_obj.stats;
  }  
}