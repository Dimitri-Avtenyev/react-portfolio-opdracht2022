import React, { useContext, useEffect, useState } from 'react';
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import Root from 'Components/Root/Root';
import Home from 'Components/Home/Home';
import PageNotFound from 'Components/PageNotFound/PageNotFound';
import PortfolioPage from 'Components/PortfolioPage/PortfolioPage';
import PortfolioDetail from 'Components/PortfolioPage/PortfolioDetail';
import Contact from 'Components/Contact/Contact';

const App = () => {

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
		// <ThemeContext.Provider value={{dark}}>
			<RouterProvider router={router}/>
		// </ThemeContext.Provider> 
  );
}



export default App;
