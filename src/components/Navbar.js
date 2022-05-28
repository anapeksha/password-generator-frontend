import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";

const Navbar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar
				position="absolute"
				className="navbar"
				style={{ backgroundColor: "#262626" }}
			>
				<Toolbar>
					<Box style={{paddingRight: "0.5em"}}>
						<LockOutlinedIcon style={{ color: "#88019F" }} />
					</Box>
					<Typography
						variant="h6"
						component="div"
						sx={{ flexGrow: 1, color: "#88019F" }}
					>
						<strong>Password Generator</strong>
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Navbar;
