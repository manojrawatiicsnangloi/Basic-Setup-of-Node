
const generateInitialValue = (formFields)=>{

    const initialValue = {};

    formFields.forEach((element, index)=>{
        if (element.value != '' || element.value){
            initialValue[element.name] = element.value;
        }
        initialValue[element.name] = "";
    });
    return initialValue;
}

export default generateInitialValue;