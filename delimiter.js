(function() {
    let leftTextArea = document.querySelector("#leftTextArea");
    let rightTextArea = document.querySelector("#rightTextArea");;
    let delimitBtn = document.querySelector("#delimitBtn");
    let clearBtn = document.querySelector("#clearBtn");
    let removeNewLineChkbx = document.querySelector("#removeNewLineChkbx");



    function delimitText() {
        let userText = leftTextArea.value;
        let delimiter = document.querySelector("#delimitingChar").value;
        userText = userText.split(new RegExp(/\n/, 'g'));

        console.log(removeNewLineChkbx.checked);
        if (removeNewLineChkbx.checked) {
            rightTextArea.value = userText.join(delimiter.toString());
        } else {
            rightTextArea.value = userText.join(delimiter.toString() + '\n');
        }


    }

    
    function clearTextAreas() {
        leftTextArea.value = "";
        leftTextArea.innerHTML = "";
        rightTextArea.value = "";
        rightTextArea.innerHTML = "";
    }

    delimitBtn.addEventListener("click", delimitText);
    clearBtn.addEventListener("click", clearTextAreas);
})();