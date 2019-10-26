(function() {
    let leftTextArea = document.querySelector("#leftTextArea");
    let rightTextArea = document.querySelector("#rightTextArea");;
    let delimitBtn = document.querySelector("#delimitBtn");
    let rightToLeftBtn;

    function delimitText() {
        let userText = leftTextArea.value.trim();
        console.log(userText);
        let delimiter = document.querySelector("#delimitingChar").value;

        userText = userText.split(new RegExp(/\s/, 'g'));
        console.log(userText);
        rightTextArea.value = userText;
    }

    delimitBtn.addEventListener("click", delimitText);
})();