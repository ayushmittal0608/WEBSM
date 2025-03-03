const serverPort = document.getElementById("serverPort");
const saveButton = document.getElementById("saveButton");

        saveButton.addEventListener("click", function () {
            const valueToStore = serverPort.value;
            localStorage.setItem("storedValue", valueToStore);
            alert("Value saved to local storage: " + valueToStore);
        });