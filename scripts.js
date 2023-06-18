document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    hideResultsAndError();
  
    let personIdentification = document.getElementById('personIdentification').checked;
    let gamer = document.getElementById('gamer').value;
    let skyDiver = document.getElementById('skyDiver').value;
    let sportGame = document.getElementById('sportGame').value;
    let coffeeType = document.getElementById('coffeeType').value;
  
    let programmingLanguage;
  
    if (personIdentification && gamer === 'yes' && skyDiver === 'never' && coffeeType === 'none' && sportGame === 'basketball') {
      programmingLanguage = 'Ruby';
    } else if (personIdentification && gamer === 'no' && skyDiver === 'yes' && coffeeType === '1-2' && sportGame === 'soccer') {
      programmingLanguage = 'C#';
    } else if (personIdentification && gamer === 'no' && skyDiver === 'never' && coffeeType === 'over 2' && sportGame === 'soccer') {
      programmingLanguage = 'Javascript';
    } else if (personIdentification && gamer === 'yes' && skyDiver === 'yes' && coffeeType === 'none' && sportGame === 'basketball') {
      programmingLanguage = 'Ruby';
    } else if (personIdentification === true && gamer === 'no' && skyDiver === 'never' && coffeeType === '1-2' && sportGame === 'soccer') {
      programmingLanguage = 'Javascript';
    } else {
      programmingLanguage = 'C#';
    }
  
   function displayResult (programmingLanguage) {
      // Get the result element
  let resultElement = document.getElementById('result');
  resultElement.innerHTML = '<h2>Results:</h2><p>' + programmingLanguage + '</p>';

   }
  });
  