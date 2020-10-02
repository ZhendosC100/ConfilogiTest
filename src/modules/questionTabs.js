const questionTabs = () => {
  const questions = document.querySelector('.questions');
  const questionsItem = questions.querySelectorAll('.questions_item');

  questions.addEventListener('click', (event) => {
    let target = event.target;
    target = target.closest('.questions_item');
    if(target) {
      questionsItem.forEach((item, index) => {
            if(item === target) {
                toggleTabContent(index);
            }
        })
    }
});

const toggleTabContent = (index) => {
    for(let i = 0; i < questionsItem.length; i++) {
        if(index === i) {
          questionsItem[i].classList.add('questions_item-active');
        } else {
          questionsItem[i].classList.remove('questions_item-active');
        }
    }
}

};

export default questionTabs;