

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
