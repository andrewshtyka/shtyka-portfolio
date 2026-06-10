export const logCredentials = (): void => {
	const logo = `
           ░██           ░██    
           ░██        ░██░██░██ 
 ░███████  ░████████   ░██████  
░██        ░██    ░██ ░██░██░██ 
 ░███████  ░██    ░██    ░██    
       ░██ ░██    ░██           
░████████  ░██    ░██
`;

	const textStyle =
		"color: #1C60FF; font-family: monospace; font-weight: bold;";
	const brandStyle =
		"color: #ffffff; background: #1C60FF; padding: 4px 8px; border-radius: 4px; font-family: sans-serif;";

	console.log(`%c${logo}`, textStyle);
	console.log(
		"%cDEVELOPMENT%c https://andrewshtyka.pp.ua",
		brandStyle,
		"color: #94a3b8;"
	);
};
