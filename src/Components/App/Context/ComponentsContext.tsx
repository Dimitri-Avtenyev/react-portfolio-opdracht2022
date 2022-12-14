import React from "react";

export interface Component {
	type:			JSX.Element,
	name:			string,
	description?:	string
}
export interface IComponentContext {
   components: Component[]
}
export let ComponentsContext = React.createContext<IComponentContext>({components:[]});