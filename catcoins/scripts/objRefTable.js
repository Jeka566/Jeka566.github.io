const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Browser,
		C3.Plugins.Eponesh_GameScore,
		C3.Plugins.Sprite,
		C3.Plugins.Touch,
		C3.Plugins.GamePush_Channels,
		C3.Plugins.Text,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Eponesh_GameScore.Acts.GameStart,
		C3.ScriptsInEvents.EventSheet1_Event1_Act2,
		C3.Plugins.Browser.Acts.ConsoleLog,
		C3.Plugins.Browser.Exps.URL,
		C3.Plugins.System.Cnds.EvaluateExpression,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Eponesh_GameScore.Exps.PlayerID,
		C3.Plugins.GamePush_Channels.Acts.SendFeedMessage,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Eponesh_GameScore.Acts.SocialsShare,
		C3.Plugins.GamePush_Channels.Acts.FetchFeedMessages,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.GamePush_Channels.Cnds.OnFeedMessagesFetch,
		C3.Plugins.GamePush_Channels.Cnds.EachMessage,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Eponesh_GameScore.Acts.PlayerAdd,
		C3.Plugins.GamePush_Channels.Exps.CurMessageText,
		C3.Plugins.GamePush_Channels.Acts.DeleteMessage,
		C3.Plugins.GamePush_Channels.Exps.CurMessageID,
		C3.Plugins.Eponesh_GameScore.Acts.PlayerSync
	];
};
self.C3_JsPropNameTable = [
	{Browser: 0},
	{GamePush: 0},
	{Спрайт: 0},
	{Тач: 0},
	{GamePushChannels: 0},
	{Текст: 0},
	{Refid: 0},
	{MessageCount: 0}
];

self.InstanceType = {
	Browser: class extends self.IInstance {},
	GamePush: class extends self.IInstance {},
	Спрайт: class extends self.ISpriteInstance {},
	Тач: class extends self.IInstance {},
	GamePushChannels: class extends C3.Plugins.GamePush_Channels.Instance {},
	Текст: class extends self.ITextInstance {}
}