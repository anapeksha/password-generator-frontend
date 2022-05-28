import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyles } from "@mui/material";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<GlobalStyles
			styles={{
				body: {
					backgroundColor: "#060606ec",
					WebkitFontSmoothing: "antialiased",
					MozOsxFontSmoothing: "grayscale",
				},
			}}
		/>
		<App />
	</React.StrictMode>
);

serviceWorkerRegistration.register();
