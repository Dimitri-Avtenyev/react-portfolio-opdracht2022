import React from "react";

interface Component {
	type:	React.ReactNode,
	name:	string
}
interface IComponentContext {
   components: Component[]
}
export let ComponentsContext = React.createContext<IComponentContext>({components:[]});