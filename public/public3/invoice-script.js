var Sofa = 57000,
    Table = 23000,
    Bed = 37000,
    Shelf = 9000;
var Sofa_q = 0,
    Table_q = 0,
    Bed_q = 0,
    Shelf_q = 0;
var name = "",
    email = "";
var sofaBill = "",
    tableBill = "",
    bedBill = "",
    shelfBill = "";
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
        sofaBill = "";
        Sofa_q = 0;
        showBill();
    } else {
        Sofa_q = this.value;
        sofaBill = "<tr><td>Sofa</td><td>Rs. " + Sofa + "</td><td>" + Sofa_q + "</td><td>" + Sofa + "x" + Sofa_q + " = " + Sofa * Sofa_q + "</td></tr>";
        showBill();
    }
});

document.getElementById("kachori").addEventListener("keyup", function() {
    if (this.value == "" || this.value == 0) {
        tableBill = "";
        Table_q = 0;
        showBill();
    } else {
        Table_q = this.value;
        tableBill = "<tr><td>Table</td><td>Rs. " + Table + "</td><td>" + Table_q + "</td><td>" + Table + "x" + Table_q + " = " + Table * Table_q + "</td></tr>";
        showBill();
    }
});

document.getElementById("vadapav").addEventListener("keyup", function() {
    if (this.value == "" || this.value == 0) {
        bedBill = "";
        Bed_q = 0;
        showBill();
    } else {
        Bed_q = this.value;
        bedBill = "<tr><td>Bed</td><td>Rs. " + Bed + "</td><td>" + Bed_q + "</td><td>" + Bed + "x" + Bed_q + " = " + Bed * Bed_q + "</td></tr>";
        showBill();
    }
});

document.getElementById("maggi").addEventListener("keyup", function() {
    if (this.value == "" || this.value == 0) {
        shelfBill = "";
        Shelf_q = 0;
        showBill();
    } else {
        Shelf_q = this.value;
        shelfBill = "<tr><td>Shelf</td><td>Rs. " + Shelf + "</td><td>" + Shelf_q + "</td><td>" + Bed + "x" + Shelf_q + " = " + Shelf * Shelf_q + "</td></tr>";
        showBill();
    }
});

function showBill() {
    var netAmount = Sofa * Sofa_q + Table * Table_q + Bed * Bed_q + Shelf * Shelf_q;
    document.getElementById("bill").innerHTML = sofaBill + tableBill + bedBill + shelfBill;
    document.getElementById("amount").innerHTML = netAmount;
    return netAmount; // Return the calculated total amount
}
const saveButton = document.getElementById("btn-secondary");
saveButton.addEventListener("click", function () {
    const net=showBill();
    localStorage.setItem('netAmount', net);
    alert("Value saved to local storage: " + net);
});