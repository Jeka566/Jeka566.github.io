

const scriptsInEvents = {

	async EventSheet1_Event1_Act2(runtime, localVars)
	{
		try {
		    const ref1 = window.Telegram?.WebApp?.initDataUnsafe?.start_param || "";
		    const params = new URLSearchParams(window.location.search);
		    const ref2 = params.get("tgWebAppStartParam") || params.get("startapp") || "";
		    const match = decodeURIComponent(location.hash).match(/start_param=([^&]+)/);
		    const ref3 = match ? match[1] : "";
		
		    const ref = ref1 || ref2 || ref3 || "";
		    runtime.globalVars.Refid = ref;
		} catch (e) {
		    console.warn("Ошибка при получении Refid:", e.message);
		}
		
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
