//Should be noun, avoid Manager, Processor, Data..
//Method should be verb. 
//Pick one word per abstract concept. fetch, or get. controller, manager, driver.
//Add Meaningful Context but not unnecessary.

//wrong 
function printGuestStatistics(number, verbs, pluralModifier){
  if(count === 0){
    number = "no";
    verb = "yes";
    pluralModifier = "s";
  }

  if(count === 1){
    number = "no";
    verb = "no";
    pluralModifier = "s";
  }
}

//better
class GuestStatistics{

  constructor(){
    this.number = 0;
    this.verb = "";
    this.pluralModifier = "";
  }

  createPluralDependentMessagePart(count){

    if(count === 0){
      thereAreNoLetters()
    }else if(count === 1){
      thereIsOneLetter();
    }
  }

  thereAreNoLetters(count){

  }

  thereAreNoLetters(){

  }

}