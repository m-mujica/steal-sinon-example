import sinon from "sinon";

let callback = sinon.spy();
let once = fn => () => fn();
let proxy = once(callback);

proxy();

if (callback.called) {
  console.log("Wohoo it works!");
} else {
  throw new Error("callback should have executed");
}
