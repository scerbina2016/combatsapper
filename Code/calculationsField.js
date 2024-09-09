console.log("A'm here");
const calcField = document.createElement('div');
    calcField.id = 'calc-field-id';
    calcField.className = "calc-field";
    //document.body.append(head);
    document.body.insertAdjacentElement('afterbegin', calcField);