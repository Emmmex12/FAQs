const Faqitems = document.querySelectorAll('.List');

Faqitems.forEach((item) => {
  const question = item.querySelector('.Question');
  const Answer = item.querySelector('.Answer');
  const icon = item.querySelector('img');

  question.addEventListener('click', () => {
    const isOpen = (Answer.style.display === 'block');
    document.querySelectorAll('.Answer').forEach(ans => ans.style.display = 'none');
    document.querySelectorAll('.Question img').forEach(img => {
        img.src = './assets/images/icon-plus.svg';
    });
    if (!isOpen){
        icon.src = './assets/images/icon-minus.svg'
        Answer.style.display = 'block'
    }
  });
});
