function calculatePentagonArea() {
    const perimeter = getInputValueById('Pentagon-perimeter');
    // console.log(perimeter);

    const apothem = getInputValueById('Pentagon-apothem');
    console.log(apothem);

    const area = 0.5* perimeter * apothem;

    setInnerTextById('pentagon-area',area);
}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value =parseFloat(inputValueText);
    return value;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}