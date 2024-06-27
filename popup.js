document.getElementById('checkButton').addEventListener('click', () => {
    const text = document.getElementById('textInput').value;
    checkGrammar(text);
  });
  
  function checkGrammar(text) {
    //const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const url = `https://api.languagetool.org/v2/check?text=${encodeURIComponent(text)}&language=en-US`;
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => response.json())
      .then(data => {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = '';
  
        if (data.matches.length > 0) {
          data.matches.forEach(match => {
            const message = document.createElement('p');
            message.textContent = match.message;
            resultDiv.appendChild(message);
          });
        } else {
          resultDiv.textContent = 'No grammar issues found.';
        }
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').textContent = 'Error checking grammar.';
      });
  }
  
