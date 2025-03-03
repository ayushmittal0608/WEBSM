var Shirt = 1200,
    Pant = 800,
    Shoes = 6000,
    Glasses = 500;
var Shirt_q = 0,
    Pant_q = 0,
    Shoes_q = 0,
    Glasses_q = 0;
var name = "",
    email = "";
var shirtBill = "",
    pantBill = "",
    shoesBill = "",
    glassesBill = "";
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
        shirtBill = "";
        Shirt_q = 0;
        showBill();
    } else {
        Shirt_q = this.value;
        shirtBill = "<tr><td>Shirt</td><td>Rs. " + Shirt + "</td><td>" + Shirt_q + "</td><td>" + Shirt + "x" + Shirt_q + " = " + Shirt * Shirt_q + "</td></tr>";
        showBill();
    }
});

document.getElementById("kachori").addEventListener("keyup", function() {
    if (this.value == "" || this.value == 0) {
        pantBill = "";
        Pant_q = 0;
        showBill();
    } else {
        Pant_q = this.value;
        pantBill = "<tr><td>Pant</td><td>Rs. " + Pant + "</td><td>" + Pant_q + "</td><td>" + Pant + "x" + Pant_q + " = " + Pant * Pant_q + "</td></tr>";
        showBill();
    }
});

document.getElementById("vadapav").addEventListener("keyup", function() {
    if (this.value == "" || this.value == 0) {
        shoesBill = "";
        Shoes_q = 0;
        showBill();
    } else {
        Shoes_q = this.value;
        shoesBill = "<tr><td>Shoes</td><td>Rs. " + Shoes + "</td><td>" + Shoes_q + "</td><td>" + Shoes + "x" + Shoes_q + " = " + Shoes * Shoes_q + "</td></tr>";
        showBill();
    }
});

document.getElementById("maggi").addEventListener("keyup", function() {
    if (this.value == "" || this.value == 0) {
        glassesBill = "";
        Glasses_q = 0;
        showBill();
    } else {
        Glasses_q = this.value;
        glassesBill = "<tr><td>Glasses</td><td>Rs. " + Glasses + "</td><td>" + Glasses_q + "</td><td>" + Shoes + "x" + Glasses_q + " = " + Glasses * Glasses_q + "</td></tr>";
        showBill();
    }
});

function showBill() {
    document.getElementById("bill").innerHTML = shirtBill + pantBill + shoesBill + glassesBill;
    document.getElementById("amount").innerHTML = Shirt * Shirt_q + Pant * Pant_q + Shoes * Shoes_q + Glasses * Glasses_q;
}