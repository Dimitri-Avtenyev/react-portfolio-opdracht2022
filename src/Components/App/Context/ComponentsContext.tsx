import React from "react";

export interface IComponent {
	type:			JSX.Element,
	name:			string,
	description?:	string
}
export interface IComponentContext {
   components: IComponent[]
}
export let ComponentsContext = React.createContext<IComponentContext>({components:[]});