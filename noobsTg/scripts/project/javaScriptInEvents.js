
// This is a JavaScript function to add two numbers
// called from the event sheet. See the event sheet
// for how it's used.
// Note this method is defined in the imports for events
// script, so scripts in events can directly call it.
<script>

p = function(){}

    	window.setTimeout('p_adextra(p, p)', 2000)
</script> 

const scriptsInEvents = {

	async EventSheet1_Event3_Act5(runtime, localVars)
	{
		localVars.result = add(localVars.firstNumber, localVars.secondNumber);
	},

	async EventSheet1_Event5_Act1(runtime, localVars)
	{
		runtime.setReturnValue(add(localVars.firstNumber, localVars.secondNumber));
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
