const input = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const results = document.getElementById('result');

const checkPalindrome = inputPalindrome => {
  const originInput = inputPalindrome;

  if (inputPalindrome === '') {
    alert('Please input a value');
    return;
  }

  results.replaceChildren();

  const strCase = inputPalindrome.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
  let msgResults = `<strong>${originInput}</strong> ${strCase === [...strCase].reverse().join('') ? 'is' : 'is not'} a palindrome.`;

  const tag = document.createElement('p');
  tag.className = 'input-value';
  tag.innerHTML = msgResults;
  results.appendChild(tag);

  results.classList.remove('hidden');
};


checkBtn.addEventListener("click", () => {
  checkPalindrome(input.value);
  input.value = '';
});

input.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkPalindrome(input.value);
    input.value = '';
  }
});