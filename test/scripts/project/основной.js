
// Import any other script files here, e.g.:
// import * as myModule from "./mymodule.js";

runOnStartup(async runtime =>
{
	
<!DOCTYPE html>
<html>
<body>
<script defer type="text/javascript"
scr="https://s3.programmatica.com/scripts/ntvk/latest/main.bundle.js"></script><ntvk-tag
key="ctlu0k2ntenc73fm92g0#ctlu3j2ntenc73fm92gg"></ntvk-tag></body>
</html>
// Code to run on the loading screen.	
// Note layouts, objects etc. are not yet available.
	
	runtime.addEventListener("beforeprojectstart", () => OnBeforeProjectStart(runtime));
});

async function OnBeforeProjectStart(runtime)
{
	// Code to run just before 'On start of layout' on
	// the first layout. Loading has finished and initial
	// instances are created and available to use here.
	
	runtime.addEventListener("tick", () => Tick(runtime));
}

function Tick(runtime)
{
	// Code to run every tick
}
