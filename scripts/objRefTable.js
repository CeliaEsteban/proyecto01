const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.DragnDrop,
		C3.Behaviors.Pin,
		C3.Plugins.Text,
		C3.Plugins.TextBox,
		C3.Plugins.Keyboard,
		C3.Plugins.Mouse,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.TextBox.Cnds.CompareText,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Behaviors.DragnDrop.Acts.SetEnabled,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.TextBox.Acts.SetEnabled,
		C3.Plugins.Sprite.Cnds.IsOverlappingOffset,
		C3.Behaviors.Pin.Acts.PinByImagePoint
	];
};
self.C3_JsPropNameTable = [
	{ATX_Case: 0},
	{ArrastrarYSoltar: 0},
	{Pegado: 0},
	{cpu: 0},
	{cpu_cooler: 0},
	{Grafica: 0},
	{Placa_base: 0},
	{psu: 0},
	{ram: 0},
	{Texto: 0},
	{EntradaDeTexto_PlacaBase: 0},
	{EntradaDeTexto_PSU: 0},
	{EntradaDeTexto_RAM: 0},
	{EntradaDeTexto_CoolerCPU: 0},
	{EntradaDeTexto_CPU: 0},
	{EntradaDeTexto_Grafica: 0},
	{Teclado: 0},
	{Mouse: 0},
	{psu2: 0},
	{Texto2: 0},
	{Texto3: 0},
	{Sprite: 0},
	{Aciertos: 0}
];

self.InstanceType = {
	ATX_Case: class extends self.ISpriteInstance {},
	cpu: class extends self.ISpriteInstance {},
	cpu_cooler: class extends self.ISpriteInstance {},
	Grafica: class extends self.ISpriteInstance {},
	Placa_base: class extends self.ISpriteInstance {},
	psu: class extends self.ISpriteInstance {},
	ram: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	EntradaDeTexto_PlacaBase: class extends self.ITextInputInstance {},
	EntradaDeTexto_PSU: class extends self.ITextInputInstance {},
	EntradaDeTexto_RAM: class extends self.ITextInputInstance {},
	EntradaDeTexto_CoolerCPU: class extends self.ITextInputInstance {},
	EntradaDeTexto_CPU: class extends self.ITextInputInstance {},
	EntradaDeTexto_Grafica: class extends self.ITextInputInstance {},
	Teclado: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	psu2: class extends self.ISpriteInstance {},
	Texto2: class extends self.ITextInstance {},
	Texto3: class extends self.ITextInstance {},
	Sprite: class extends self.ISpriteInstance {}
}