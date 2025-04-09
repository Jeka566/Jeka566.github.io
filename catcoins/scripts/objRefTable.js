const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Browser,
		C3.Plugins.Eponesh_GameScore,
		C3.Plugins.Sprite,
		C3.Plugins.Touch,
		C3.Plugins.Share,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.Browser.Exps.URL,
		C3.Plugins.Browser.Acts.ConsoleLog,
		C3.Plugins.System.Cnds.EvaluateExpression,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.Eponesh_GameScore.Acts.SocialsShare,
		C3.Plugins.Eponesh_GameScore.Exps.PlayerID
	];
};
self.C3_JsPropNameTable = [
	{Browser: 0},
	{GamePush: 0},
	{Спрайт: 0},
	{Тач: 0},
	{Поделиться: 0},
	{Refid: 0}
];

self.InstanceType = {
	Browser: class extends self.IInstance {},
	GamePush: class extends self.IInstance {},
	Спрайт: class extends self.ISpriteInstance {},
	Тач: class extends self.IInstance {},
	Поделиться: class extends self.IInstance {}
}