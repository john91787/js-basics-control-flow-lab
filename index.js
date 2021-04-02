function scuberGreetingForFeet(somevalue){
  let result;
  switch(somevalue){
    case 199:
    result =  `This one is on me!`;
    break;
    case 2001:
    result = `I will gladly take your thirty bucks.`;
    break;
    case 2501:
    result = `No can do.`;  
    }
    return result;
}

function ternaryCheckCity(somecity){
  let apple;
  switch(somecity){
    case `NYC`:
    apple = `Ok, sounds good.`;
    break;
    case `Pittsburgh`:
    apple = `No go.`;
  }
  return apple;
}

function switchOnCharmFromTip(string){
  let message;
  switch(string){
    case 'generous':
      message = `Thank you so much.`;
      break;
    case `not as generous`: 
      message =`Thank you.`;
      break;
    default:
      message = `Bye.`;     
  }
  return message;
}