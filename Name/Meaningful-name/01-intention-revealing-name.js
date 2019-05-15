//wrong
var d = 10;

//use
var elapsedTimeInDays
var daySinceCreation
var daySinceModification
var fileAgeInDays


//wrong

function getThem(){
  var theList = [1,2,4];
  var list1 = [];
  for(var x in theList){
    console.log(x)
    if(x === 4){
      list1.push(x);
    }
  }
}

getThem();

//right
function gerFlaggedCell(){
  var gameBoard = [1,2,4];
  var flaggedCell = [];
  const STATUS_VALUE = 4;

  for(cell in gameBoard){
    if(cell[STATUS_VALUE] === flagged){
      flaggedCell.push(cell);
    }
  }

  return flaggedCell;
  
}

//even better, implements cells object
function gerFlaggedCell(){
  var gameBoard = [1,2,4];
  var flaggedCell = [];
  const STATUS_VALUE = 4;

  for(cell in gameBoard){
    if(cell.isFlagged()){
      flaggedCell.push(cell);
    }
  }

  return flaggedCell;
  
}


