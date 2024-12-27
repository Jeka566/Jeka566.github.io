


const scriptsInEvents = {

	async списоксобытий1_Event1_Act1(runtime, localVars)
	{
		const script = document.createElement('script');
		script.type = 'text/javascript';
		script.defer = true;
		script.src = 'https://s3.programmatica.com/scripts/ntvk/latest/main.bundle.js';
		
		script.onload = () => {
		    const ntvkTag = document.createElement('ntvk-tag');
		    ntvkTag.setAttribute('key', 'ctlu0k2ntenc73fm92g0#ctlu3j2ntenc73fm92gg');
		    document.body.appendChild(ntvkTag);
		};
		
		document.head.appendChild(script);
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

