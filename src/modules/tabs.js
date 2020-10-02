const tabs = () => {
  const features= document.querySelector('.features');
  const tab = document.querySelectorAll('.tab');
  const tabContent = features.querySelectorAll('.tab_content');

  features.addEventListener('click', (event) => {
    let target = event.target;
    target = target.closest('.tab');
    if(target) {
        tab.forEach((item, index) => {
            if(item === target) {
                toggleTabContent(index);
            }
        })
    }
});

const toggleTabContent = (index) => {
    for(let i = 0; i < tabContent.length; i++) {
        if(index === i) {
            tab[i].classList.add('tab_active');
            tabContent[i].classList.add('tab_content-active');
        } else {
            tab[i].classList.remove('tab_active');
            tabContent[i].classList.remove('tab_content-active');
        }
    }
}
};

export default tabs;