(function() {
    let leftTextArea = document.querySelector("#leftTextArea");
    let rightTextArea = document.querySelector("#rightTextArea");;
    let delimitBtn = document.querySelector("#delimitBtn");
    let explodeBtn = document.querySelector("#explodeBtn");
    let clearBtn = document.querySelector("#clearBtn");
    let removeNewLineChkbx = document.querySelector("#removeNewLineChkbx");
    let removeDuplicatesChkbx = document.querySelector("#removeDuplicatesChkbx");
    let settingsBtn = document.querySelector("#settingsBtn");
    let settings = document.querySelector("#settingsSection");
    
    
    function delimitText() {
        let userText = leftTextArea.value;
        let delimiter = document.querySelector("#delimitingChar").value;
        userText = userText.split(new RegExp(/\n/, 'g'));

        if (removeDuplicatesChkbx) {
            userText = Array.from(new Set(userText));
        } 

        if (removeNewLineChkbx.checked) {
            userText = userText.join(delimiter.toString());
        } else {
            userText = userText.join(delimiter.toString() + '\n');
        }

        rightTextArea.value = userText;

    }
    
    function explodeText() {
        
        let userText = leftTextArea.value;
        let delimiter = document.querySelector("#delimitingChar").value;
        userText = userText.split(new RegExp(/\W/, 'g'));

        console.log(userText);
        if (delimiter === "new line") {
            userText = userText.join('\n');
        } else if (delimiter === " ") {

            userText = userText.join(" ");
        }

        rightTextArea.value = userText;
    }

    function clearTextAreas() {
        leftTextArea.value = "";
        leftTextArea.innerHTML = "";
        rightTextArea.value = "";
        rightTextArea.innerHTML = "";
    }


    delimitBtn.addEventListener("click", delimitText);
    explodeBtn.addEventListener("click", explodeText);
    clearBtn.addEventListener("click", clearTextAreas);
    settingsBtn.addEventListener("click", function() {
        settings.classList.toggle("hide");
    })
})();