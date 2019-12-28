const fs = require('fs');

const _speedconstant = 1.15600e-8; //if speed=(c*a)/t, then constant=(s*t)/a and time=(a*c)/s
const d = new Date();
const amount = 1000000000;

console.log("JS CPU benchmark (Legacy)\nRunning Test..");
for (let i = amount; i > 0; i--) {}

const newd = new Date();
const accnewd = Number(String(newd.getSeconds()) + "." + String(newd.getMilliseconds()));
const accd = Number(String(d.getSeconds()) + "." + String(d.getMilliseconds()));
const di = accnewd - accd;

if (d.getMinutes() != newd.getMinutes()) {
  di = (60 * (newd.getMinutes() - d.getMinutes())) + di
}
spd = ((_speedconstant * amount) / di);

const result = d.toLocaleString() + "\n" + amount + " loops in " + Math.round(di * 1000) / 1000 + "s"
console.log(result + "\nSaving to results.txt..");

fs.appendFile("./results.txt", "Legacy Test\n" + result + "\n\n", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("SUCCESS");
}); 

