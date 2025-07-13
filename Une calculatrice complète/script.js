const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let resetAfterEqual = false;

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    let value = btn.getAttribute('data-value');

    // Remplace les symboles spéciaux par les vrais opérateurs JS
    if (value === '÷') value = '/';
    if (value === '×') value = '*';
    if (value === '−') value = '-';

    if (value === 'C') {
      currentInput = '';
      display.textContent = '0';
      return;
    }

    if (value === '=') {
      try {
        const result = Function('"use strict"; return (' + currentInput + ')')();
        currentInput = result.toString();
        display.textContent = currentInput;
        resetAfterEqual = true;
      } catch (err) {
        display.textContent = 'Erreur';
        currentInput = '';
      }
      return;
    }

    // Si un résultat vient d’être affiché, on efface pour repartir sur un nouveau calcul
    if (resetAfterEqual) {
      currentInput = '';
      resetAfterEqual = false;
    }

    currentInput += value;
    display.textContent = currentInput;
  });
});
