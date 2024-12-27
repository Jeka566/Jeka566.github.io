const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Button,
		C3.Plugins.System.Cnds.OnLayoutStart
	];
};
self.C3_JsPropNameTable = [
	{Кнопка: 0}
];

self.InstanceType = {
	Кнопка: class extends self.IButtonInstance {}
}