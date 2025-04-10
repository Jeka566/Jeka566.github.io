

const scriptsInEvents = {

	async EventSheet1_Event1_Act2(runtime, localVars)
	{
		try {
		    const ref = window.Telegram?.WebApp?.initDataUnsafe?.start_param || "";
		    runtime.globalVars.Refid = ref;
		    console.log("RefID получен:", ref);
		} catch (e) {
		    console.warn("Ошибка при получении start_param:", e);
		}
	}
};

self.C3.ScriptsInEvents = scriptsInEvents;
