let btns = document.querySelectorAll('.btn');
let Submit = document.querySelector('.submit');
let ratingNumber = document.querySelector('.number');
let selectedRating;

let displayModal = document.querySelector('.modal');
let displayMain = document.querySelector('.main');

let closeModal = function (e) {
  console.log(e.key);

  if (e.key === 'Escape' || 'Backspace') {
    displayModal.style.display = 'none';
    displayMain.style.display = 'grid';
    btns.forEach((btn) => (btn.style.background = 'hsl(212, 12%, 24%'));
  } else {
    displayModal.style.display = 'grid';
    displayMain.style.display = 'none';
  }
};

btns.forEach((btn) => {
  btn.addEventListener('click', function () {
    btns.forEach((btn) => (btn.style.background = 'hsl(212, 12%, 24%'));
    btn.style.background = 'white';

    selectedRating = btn.textContent;
    console.log(selectedRating);

    ratingNumber.textContent = selectedRating;
  });
});

Submit.addEventListener('click', function () {
  displayModal.style.display = 'grid';
  displayMain.style.display = 'none';

  setTimeout(function () {
    let alertBox = document.getElementById('custom-alert');
    alertBox.classList.remove('hidden');

    // Hide the alert after 4 seconds
    setTimeout(function () {
      alertBox.classList.add('hidden');
    }, 4000);
  }, 500);
});

document.addEventListener('keydown', closeModal);
