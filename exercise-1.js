// Solution 1:

let personName = "Paul ";


function canPlay()
{
  if (true)
  {
    personName += "plays football";
  }

  /* personName += ' plays football'; */ // Argh! personName is not defined

  console.log(personName);
}

canPlay();
//---------------------------------------------------------------------



//Solution 2:


let playerName = "Paul";


function getPLayerName()
{
  if (playerName)
  {
    playerName += " plays football";
  } else
  {
    playerName += "He doesn't";
  }
}

getPLayerName()
console.log(playerName);
//------------------------------------------------------


//Solution 3:

let action = "plays football";

function whoIsPlaying(name) {

  if (name === String("Paul"))
  {
    name += action;
  } else {
    name += " doesn't";
  }

}

whoIsPlaying("Paul");
console.log(playerName);

//----------------------------------------------------