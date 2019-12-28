# js-benchmark
Simple suite of javascript performance tests

## Dependencies
Run `npm i` to install js-meter which is required for the main test (jm-test.js).

js-meter is a tool to measure performance of time, CPU, RAM and heap of javascript code: https://github.com/wahengchang/js-meter

The simpler old-test.js can be without any npm dependencies.

## Usage
These tests currently just run a loop x amount of times and measures the time to complete the loop. 

To run the main test use `node jm-test.js` to run the simpler test run ` node old-test.js`.

Change the number of times to loop in either test to make the test longer or shorter.

Results will be displayed by console.log and appended to a results.txt file along with a dated timestamp.

## Upcoming
- Code seperated and organized into further parts to be more modular.
- An interface to choose test, and number of times to iterate the test loops.
- Additional benchmarking tests.
- Seperate test interfaces or implementations for browsers, nw.js, electron, cordova, phonegap, node.js and graalvm.
- js-benchmark may be rewritten in typescript in the future.

## License
[MIT](./LICENSE)
