window.onload = function() {
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    let beginnerLevel = document.getElementById('beginnerLevel').checked;
    let gamer = document.getElementById('gamer').value;
    let skyDiver = document.getElementById('skyDiver').value;
    let sportGame = document.getElementById('sportGame').value;
    let coffeeType = document.getElementById('coffeeType').value;
  
    let programmingLanguage;
  
    if (beginnerLevel && gamer === 'yes' && skyDiver === 'never' && coffeeType === 'none' && sportGame === 'basketball') {
      programmingLanguage = 'Ruby';
    } else if (beginnerLevel && gamer === 'yes' && skyDiver === 'yes' && coffeeType === '1-2' && sportGame === 'soccer') {
      programmingLanguage = 'C#';
    } else if (beginnerLevel && gamer === 'yes' && skyDiver === 'never' && coffeeType === 'over 2' && sportGame === 'soccer') {
      programmingLanguage = 'Javascript';
    } else {
      programmingLanguage = 'Unknown';
    }
  
    displayResult(programmingLanguage);
  });
};

function displayResult(programmingLanguage) {
  let resultElement = document.getElementById('result');
  let sentence;
  
  if (programmingLanguage === 'Unknown') {
    sentence = 'Unknown, please read more about coding languages to find what would work best for you. <a href="https://www.computerscience.org/resources/computer-programming-languages/">Learn more</a>';
  } else {
    sentence = `${programmingLanguage} is the suggested coding language for you.`;
  }
  // Clear the existing result
  resultElement.innerHTML = '';
    
  resultElement.innerHTML = `<h2>Results:</h2><p>${sentence}</p>`;
  resultElement.style.display = 'block';
}
