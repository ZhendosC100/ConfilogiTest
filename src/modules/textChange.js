const textChange = () => {

  const textToChange = document.querySelector('.contact_dynamic');
  const startValue = +textToChange.textContent.replace(/[^0-9]/ig, '');
  const step = 35;
  
  function stepNumber(start, stop, step){
    setInterval(function(){
        if(start > stop){
            start -= step;
            textToChange.textContent = start; 
        }
    }, 20);
}

  stepNumber(startValue, 0, step);
  
};

export default textChange;