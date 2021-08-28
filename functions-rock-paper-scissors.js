const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'cissors' || userInput === 'bomb'){
    //console.log(userInput);
    return userInput;
  }else{
    console.log(userInput + ' is not a valid choice. Please enter either paper or rock or cissors.');
  }
}

const getComputerChoice = () => {
  const value = Math.floor(Math.random()*3);
  if(value===0){
return 'rock';
  }else if(value === 1){
return 'paper';
  }else{
return 'cissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
    return 'The game is a tie.';
  }else if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'The computer won !';
    }else{return 'You won !!!'}
  }else if(userChoice === 'paper'){
          if(computerChoice === 'cissors'){
                  return 'The computer won !';
          }else{
            return 'You won !!!'
          }
  }else if(userChoice === 'cissors'){
          if(computerChoice === 'rock'){
                  return 'The computer won !';
          }else{
            return 'You won !!!'
          }
        }
  else if(userChoice === 'bomb'){
            return 'You won !!!'
          }
}
// console.log(determineWinner('rock', getComputerChoice()));
const playGame = (var1) => {
  const userChoice = getUserChoice(var1);
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}
playGame('paper');