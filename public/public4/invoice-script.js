var TV = 57000,
    Refrigerator = 40000,
    Washing_Machine = 33000,
    Computer = 85000;
var TV_q = 0,
    Refrigerator_q = 0,
    Washing_machine_q = 0,
    Computer_q = 0;
var name = "",
    email = "";
var TVBill = "",
    refrigeratorBill = "",
    WashingMachineBill = "",
    computerBill = "";
var total_amount = 0;
document.getElementById("name").addEventListener("keyup", function() {
    document.getElementById("name2").innerHTML = this.value;
});

document.getElementById("email").addEventListener("keyup", function() {
    document.getElementById("email2").innerHTML = this.value;
});

document.getElementById("mobile").addEventListener("keyup", function() {
    document.getElementById("mobile2").innerHTML = this.value;
});

document.getElementById("smosa").addEventListener("keyup", function() {
    if (this.value == "" || this.value == 0) {
        TVBill = "";
        TV_q = 0;
        showBill();
    } else {
        TV_q = this.value;
        TVBill = "<tr><td>TV</td><td>Rs. " + TV + "</td><td>" + TV_q + "</td><td>" + TV + "x" + TV_q + " = " + TV * TV_q + "</td></tr>";
        showBill();
    }
});

document.getElementById("kachori").addEventListener("keyup", function() {
    if (this.value == "" || this.value == 0) {
        refrigeratorBill = "";
        Refrigerator_q = 0;
        showBill();
    } else {
        Refrigerator_q = this.value;
        refrigeratorBill = "<tr><td>Refrigerator</td><td>Rs. " + Refrigerator + "</td><td>" + Refrigerator_q + "</td><td>" + Refrigerator + "x" + Refrigerator_q + " = " + Refrigerator * Refrigerator_q + "</td></tr>";
        showBill();
    }
});

document.getElementById("vadapav").addEventListener("keyup", function() {
    if (this.value == "" || this.value == 0) {
        WashingMachineBill = "";
        Washing_machine_q = 0;
        showBill();
    } else {
        Washing_machine_q = this.value;
        WashingMachineBill = "<tr><td>Washing_Machine</td><td>Rs. " + Washing_Machine + "</td><td>" + Washing_machine_q + "</td><td>" + Washing_Machine + "x" + Washing_machine_q + " = " + Washing_Machine * Washing_machine_q + "</td></tr>";
        showBill();
    }
});

document.getElementById("maggi").addEventListener("keyup", function() {
    if (this.value == "" || this.value == 0) {
        computerBill = "";
        Computer_q = 0;
        showBill();
    } else {
        Computer_q = this.value;
        computerBill = "<tr><td>Computer</td><td>Rs. " + Computer + "</td><td>" + Computer_q + "</td><td>" + Washing_Machine + "x" + Computer_q + " = " + Computer * Computer_q + "</td></tr>";
        showBill();
    }
});

function showBill() {
    document.getElementById("bill").innerHTML = TVBill + refrigeratorBill + WashingMachineBill + computerBill;
    document.getElementById("amount").innerHTML = TV * TV_q + Refrigerator * Refrigerator_q + Washing_Machine * Washing_machine_q + Computer * Computer_q;
}