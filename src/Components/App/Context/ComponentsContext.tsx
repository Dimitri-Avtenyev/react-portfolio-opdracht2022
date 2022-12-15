import React from "react";

export interface IComponent {
	readonly type:			JSX.Element,
	readonly name:			string,
	readonly description?:	string
}
export interface IComponentContext {
   readonly components: IComponent[]
}
export let ComponentsContext = React.createContext<IComponentContext>({components:[]});