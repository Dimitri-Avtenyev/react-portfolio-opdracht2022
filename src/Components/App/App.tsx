import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from 'Components/Root/Root';
import Home from 'Components/Home/Home';
import PageNotFound from 'Components/PageNotFound/PageNotFound';
import PortfolioPage from 'Components/Portfolio/PortfolioPage';
import PortfolioDetail from 'Components/Portfolio/PortfolioDetail';
import Contact from 'Components/Contact/Contact';
import { ComponentsContext, IComponent } from './Context/ComponentsContext';
import { ThemeContext } from './Context/ThemeContext';
import { useEffect, useState } from "react";

import ComponentList from "Components/Portfolio/ComponentList/ComponentList";

const App = () => {
	const [theme, setTheme] = useState<string>("dark");
	let components:IComponent[] = ComponentList();

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root/>,
			children: [
				{
					path: "",
					element: <Home/>
				},
				{
					path: "portfolio",
					element: <PortfolioPage/>,
				}, 
				{
					path: "portfolio/:component",
					element: <PortfolioDetail/>
				},
				{
					path: "contact",
					element: <Contact/>
				},
			]
		},
		{
			path: "*",
			element: <PageNotFound/>
		}
	]);
	return ( 
		<ThemeContext.Provider value={{theme: theme, setTheme: setTheme}}>
			<ComponentsContext.Provider value={{components: components}}>
				<RouterProvider router={router}/>
			</ComponentsContext.Provider>
		</ThemeContext.Provider> 
  );
}

export default App;
