// function calculateParallelogramArea(){
   
//     const base = getParallelogramBase();
//     console.log(base);
    
//     }
    

//     function getParallelogramBase() {
//     //     const baseInput = document.getElementById('parallelogram-base');
//     //   const baseText = baseInput.value;
//     //   const base = parseFloat(baseText);
//     //   return base;
//     }

function calculateParallelogramArea(){
  const base = getInputValuById('parallelogram-base');
//   console.log('base value', base);

  const hight = getInputValuById('parallelogram-hight');
//   console.log('hight value',hight)

const area = base * hight;
console.log('area value', area);

setInnerTextID('parallelogram-area', area);
}

function getInputValuById(inputFieldId){
      const inputField = document.getElementById(inputFieldId);
      const inputValueText = inputField.value;
      const inputValue = parseFloat(inputValueText);
    //   console.log(inputValue);
    return inputValue;
}

function setInnerTextID(elementId, area) {
    const element = document.getElementById('parallelogram-area');
    element.innerText = area;
}