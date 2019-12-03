(function() {
    let userText;
    let leftTextArea = document.querySelector("#leftTextArea");
    let rightTextArea = document.querySelector("#rightTextArea");;
    let delimitBtn = document.querySelector("#delimitBtn");
    let explodeBtn = document.querySelector("#explodeBtn");
    let clearBtn = document.querySelector("#clearBtn");
    let settingsBtn = document.querySelector("#settingsBtn");
    let settings = document.querySelector("#settingsSection");
    
    
    
    function delimitText() {
        userText = leftTextArea.value;
        delimiter = document.querySelector("#delimitingChar").value;
        
        userText = userText.split(new RegExp(/\n/, 'g'));
        
        replaceDelimeter();
        removeDuplicates();
        addQuotes();
        addTags();
        addInterval();
        removeNewLine();
        
        rightTextArea.value = userText;
        
    }
    
    function removeDuplicates() {
        let removeDuplicatesChkbx = document.querySelector("#removeDuplicatesChkbx");
        if (removeDuplicatesChkbx) {
            userText = Array.from(new Set(userText));
        } 
    }
    
    function removeNewLine() {
        let removeNewLineChkbx = document.querySelector("#removeNewLineChkbx");
        if (removeNewLineChkbx.checked) {
            userText = userText.join(delimiter.toString());
        } else {
            userText = userText.join(delimiter.toString() + '\n');
        }
    }

    function replaceDelimeter() {
        let customDelimeter = document.getElementById("customDelimiter");
        if (customDelimeter.value !== "") {
            delimiter = customDelimiter.value;
        }
    }
    
    function explodeText() {
        userText = leftTextArea.value;
        delimiter = document.querySelector("#delimitingChar").value;
        userText = userText.split(new RegExp(/\W/, 'g'));

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

    function addQuotes() {
        let quotesRdo = document.querySelector("input[name=quotes]:checked");

        if (quotesRdo.value === 'single') {
            userText = userText.map((elem) => {
                return "'" + elem + "'";
            });
        } else if (quotesRdo.value === 'double') {
            userText = userText.map((elem) => {
                return '"' + elem + '"';
            });
        }
    }

    function addTags() {
        let startTag = document.getElementById("startTag");
        let endTag = document.getElementById("endTag");
        if (startTag.value !== "") {
            userText = userText.map(elem => {
                return startTag.value + elem;
            });
        }
        
        if (endTag.value !== "") {
            userText = userText.map(elem => {
                return elem + endTag.value;
            });
        }
    }
    
    function addInterval() {
        let intervalCount = document.getElementById("intervalNum");
        let intervalStart = document.getElementById("intStartTag");
        let intervalEnd = document.getElementById("intEndTag");

        let intArray = [];

        let string;
        let counter = 1;
        while (userText.length > 0 ) {
            if (counter === 1) {
                string = intervalStart.value + userText.shift();
                intArray.push(string); 
                counter += 1;
                console.log("counter = 1");
            } 
            if (counter !== 1 && counter !== intervalCount.value) {
                string = userText.shift();
                intArray.push(string); 
                counter += 1;
                console.log(counter);
            }
            
            if (counter === intervalCount.value || userText.length === 1) {
                debugger;
                string = userText.shift() + intervalEnd.value + "\n";
                intArray.push(string); 
                counter = 1;
                console.log("counter = " + intervalCount.value);
            } 
        }
        console.log(intArray);
    }


    delimitBtn.addEventListener("click", delimitText);
    explodeBtn.addEventListener("click", explodeText);
    clearBtn.addEventListener("click", clearTextAreas);
    settingsBtn.addEventListener("click", function() {
        settings.classList.toggle("hide");
    })
})();