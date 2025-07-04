const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TextBox,
		C3.Plugins.Text,
		C3.Plugins.Button,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Button.Cnds.OnClicked,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.float,
		C3.Plugins.TextBox.Exps.Text,
		C3.JavaScriptInEvents.EventSheet1_Event3_Act5,
		C3.Plugins.Text.Acts.SetText,
		C3.JavaScriptInEvents.EventSheet1_Event5_Act1
	];
};
self.C3_JsPropNameTable = [
	{FirstInput: 0},
	{Text: 0},
	{SecondInput: 0},
	{AddA: 0},
	{ResultText: 0},
	{AddB: 0},
	{firstNumber: 0},
	{secondNumber: 0},
	{result: 0}
];

self.InstanceType = {
	FirstInput: class extends self.ITextInputInstance {},
	Text: class extends self.ITextInstance {},
	SecondInput: class extends self.ITextInputInstance {},
	AddA: class extends self.IButtonInstance {},
	ResultText: class extends self.ITextInstance {},
	AddB: class extends self.IButtonInstance {}
}