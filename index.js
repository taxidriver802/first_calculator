document.addEventListener('DOMContentLoaded', function () {
  const display = document.getElementById('calc__display');
  const buttons = document.querySelectorAll('.button');
  const historyButton = document.getElementById('show-history');
  const clearHistoryButton = document.getElementById('clear-history');
  const history = [];

  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      const value = this.value;

      if (value === 'C') {
        display.value = '0';
      } else if (value === '=') {
        try {
          const result = eval(display.value);
          display.value = result;

          history.push(result);
          if (history.length > 5) {
            history.shift();
          }
          console.log('History:', history);
        } catch (e) {
          display.value = 'Error';
        }
      } else {
        display.value = display.value === '0' ? value : display.value + value;
      }
    });
  });

  // Add event listener for input validation
  display.addEventListener('input', function (e) {
    this.value = this.value.replace(/[^0-9+\-*/().]/g, '');
  });

  // Add event listener for history button
  historyButton.addEventListener('click', function () {
    alert('History: ' + history.join(', '));
  });

  clearHistoryButton.addEventListener('click', function () {
    history.length = 0;
    alert('History cleared');
  });
});
