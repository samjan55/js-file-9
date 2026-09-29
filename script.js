// Week 10 - Tip Calculator and Delivery Fee Calculator

function calculateTip(bill, percent) {
    return bill * percent / 100;
}

function getDeliveryFee(total, city) {
    if (city === "Kabul") {
        if (total >= 1000) {
            return 0;
        } else {
            return 100;
        }
    } else if (city === "Herat") {
        if (total >= 1500) {
            return 0;
        } else {
            return 150;
        }
    } else {
        return 200;
    }
}

console.log("Tip 1:", calculateTip(100, 15));
console.log("Tip 2:", calculateTip(250, 10));
console.log("Tip 3:", calculateTip(500, 20));

console.log("Delivery 1:", getDeliveryFee(1200, "Kabul"));
console.log("Delivery 2:", getDeliveryFee(2000, "Herat"));
console.log("Delivery 3:", getDeliveryFee(800, "Kandahar"));