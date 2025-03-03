const clientName = document.getElementById("client-name");
const saveButton = document.getElementById("saveButton");

        saveButton.addEventListener("click", function () {
            const valueToStore = clientName.value;
            localStorage.setItem("clientValue", valueToStore);
            alert("Value saved to local storage: " + valueToStore);
        });