const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Browser,
		C3.Plugins.Text,
		C3.Behaviors.Tween,
		C3.Plugins.Button,
		C3.Plugins.Clipboard,
		C3.Plugins.GamePush_Channels,
		C3.Plugins.Eponesh_GameScore,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.ScriptsInEvents.EventSheet1_Event1_Act1,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.EvaluateExpression,
		C3.Plugins.Browser.Acts.ConsoleLog,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.Clipboard.Acts.CopyText,
		C3.Plugins.Eponesh_GameScore.Exps.PlayerID,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Exps.viewportmidx,
		C3.Plugins.Button.Exps.Y,
		C3.Plugins.Button.Exps.Height,
		C3.Behaviors.Tween.Acts.TweenOneProperty
	];
};
self.C3_JsPropNameTable = [
	{Browser: 0},
	{Tween: 0},
	{Text: 0},
	{Button: 0},
	{Clipboard: 0},
	{GamePushChannels: 0},
	{GamePush: 0},
	{Refid: 0},
	{Botname: 0},
	{Selfid: 0}
];

self.InstanceType = {
	Browser: class extends self.IInstance {},
	Text: class extends self.ITextInstance {},
	Button: class extends self.IButtonInstance {},
	Clipboard: class extends self.IInstance {},
	GamePushChannels: class extends C3.Plugins.GamePush_Channels.Instance {},
	GamePush: class extends self.IInstance {}
}