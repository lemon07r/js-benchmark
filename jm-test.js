const jm = require('js-meter')
const fs = require('fs');

const isPrint = true
const isKb = true       // or Mb
const m = new jm({isPrint, isKb})

const d = new Date().toLocaleString();
console.log("JS CPU benchmark (JS-Meter)\nRunning Test..\n" + d);

for(let i=0; i<100000000; i++){
    Math.random()
}

const meter = m.stop()

const results = "Run: " + d
+ "\nRAM: " + meter.diffRAM
+ "\nHeapTotal: " + meter.diffHeapTotal
+ "\nHeapUsed: " + meter.diffHeapUsed
+ "\nExternal: " + meter.diffExternal
+ "\nCPU: " + meter.diffCPU + " ms"
+ "\nSpend Time: " + meter.diffTime + " ms"

console.log("Saving to results.txt..");

fs.appendFile("./results.txt", "JS-Meter Test\n" + results + "\n\n", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("SUCCESS");
}); 