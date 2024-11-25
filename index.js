/*// Import our outputted wasm ES6 module
// Which, export default's, an initialization function
import init from "./pkg/hello_world.js";

const runWasm = async () => {
  // Instantiate our wasm module
  const helloWorld = await init("./pkg/hello_world_bg.wasm");

  // Call the Add function export from wasm, save the result
  const addResult = helloWorld.add(24, 24);

  // Set the result onto the body
  document.body.textContent = `Hello World! addResult: ${addResult}`;
};
runWasm();
*/


import wasmInit from "./pkg/exports.js";

const runWasm = async () => {
  // Instantiate our wasm module
  const rustWasm = await wasmInit("./pkg/exports_bg.wasm");

  // Call the Add function export from wasm, save the result
  const result = rustWasm.call_me_from_javascript(24, 24);


  console.log(result); // Should output '72'
  console.log(rustWasm.ADD_CONSTANT); // Should output 'undefined'
  console.log(rustWasm.add_integer_with_constant); // Should output 'undefined'
  document.body.textContent = "My WASM website";
  document.body.textContent = "My WASM website. It is good.";
  var x = document.createElement("HEADER");
  var z = document.createElement("BUTTON");
  x.setAttribute("color", "green");
  x.setAttribute("id", "myHeader");
  z.setAttribute("id", "myButton");
  document.body.appendChild(x);
  document.body.appendChild(z);
  document.getElementById("myHeader").style.color = "light grey";
  document.getElementById("myButton").style.color = "blue";
  document.getElementById("myButton").body = "Wow";
  document.getElementById("myButton").innerHTML = "This is a button";
  var button = document.getElementById("myButton");
  button.style.width = "200px";  // Set the width
  button.style.height = "100px"; // Set the height
  button.style.fontSize = "20px"; // Increase font size
  button.style.borderRadius = "40px";
  button.style.font = "Helvetica";
  button.style.backgroundColor = "lightBlue";
  let isBig = 0;
  button.onclick = function(){
    if (isBig === 0){
      button.style.height = "200px"
      button.style.width = "400px";
      isBig ++;
    }
    else if (isBig === 1){
      button.style.width = "400px";
      button.style.height = "400px";
      isBig ++;
    }
    else if (isBig === 2){
      button.style.height = "400px";
      button.style.width = "200px";
      isBig ++;
    }
    else{
      button.style.width = "200px";
      isBig = 0;
    }
  };
  var y = document.createElement("H1"); 
  var t = document.createTextNode("This is a website");
  y.appendChild(t);
  document.getElementById("myHeader").appendChild(y);

};
runWasm();