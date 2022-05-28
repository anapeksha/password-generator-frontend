import CheckBoxRoundedIcon from "@mui/icons-material/CheckBoxRounded";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import {
	Alert,
	Box,
	Button,
	FormGroup,
	IconButton,
	InputAdornment,
	Snackbar,
	TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getData } from "../controller/getData";
import Wrapper from "../styles/Wrapper.style";

const Form = () => {
	const [inputs, setInputs] = useState({
		characters: "",
		length: 0,
	});
	const [createPassword, isPasswordCreated] = useState(false);
	const [copyPassword, hasCopied] = useState(false);
	const [output, setOutput] = useState("");
	const [error, setError] = useState(false);

	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	const handleCopy = () => {
		hasCopied(true);
		navigator.clipboard.writeText(output);
		setTimeout(() => {
			hasCopied(false);
		}, 3000);
	};

	const handleErrorClose = () => {
		setError(false);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		getData(inputs.length, inputs.characters, setError).then((data) => {
			if (data === undefined) {
				setError(true);
				isPasswordCreated(false);
			} else {
				isPasswordCreated(true);
				setOutput(data.password);
			}
		});
	};

	useEffect(() => {
		if (createPassword === true) {
			setTimeout(() => {
				isPasswordCreated(false);
			}, 10000);
		}
	}, [createPassword]);

	return (
		<div>
			<Wrapper>
				<form onSubmit={handleSubmit}>
					<FormGroup
						style={{
							borderStyle: "solid",
							borderColor: "#88019F",
							padding: "10px",
							borderRadius: "7.5px",
						}}
					>
						<TextField
							value={inputs.characters}
							name="characters"
							required
							label="Enter character string"
							color="secondary"
							variant="filled"
							focused
							onChange={handleChange}
							size="small"
							sx={{
								input: {
									color: "whitesmoke",
								},
							}}
							style={{
								marginTop: "0.5em",
								marginRight: "0.5em",
								marginLeft: "0.5em",
							}}
						></TextField>
						<TextField
							value={inputs.length}
							name="length"
							required
							label="Enter length"
							color="secondary"
							variant="filled"
							onChange={handleChange}
							size="small"
							focused
							sx={{
								input: {
									color: "whitesmoke",
								},
							}}
							style={{
								marginTop: "0.5em",
								marginRight: "0.5em",
								marginLeft: "0.5em",
							}}
							inputProps={{
								inputMode: "numeric",
								pattern: "[0-9]*",
							}}
						></TextField>
						<Button
							variant="contained"
							name="submit-button"
							type="submit"
							color="secondary"
							style={{
								marginTop: "0.5em",
								marginRight: "0.5em",
								marginLeft: "0.5em",
							}}
						>
							Generate
						</Button>
					</FormGroup>
				</form>
				{createPassword && (
					<Box>
						<TextField
							value={output}
							color="secondary"
							variant="outlined"
							label="Password"
							focused
							size="medium"
							sx={{
								input: {
									color: "whitesmoke",
								},
							}}
							style={{
								marginTop: "1.5em",
							}}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<IconButton onClick={handleCopy}>
											{copyPassword ? (
												<CheckBoxRoundedIcon style={{ color: "#88019F" }} />
											) : (
												<ContentCopyRoundedIcon
													style={{ color: "whitesmoke" }}
												/>
											)}
										</IconButton>
									</InputAdornment>
								),
							}}
						></TextField>
					</Box>
				)}
			</Wrapper>
			<Snackbar
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				open={error}
				autoHideDuration={3000}
				onClose={handleErrorClose}
			>
				<Alert severity="error">Password generation failed</Alert>
			</Snackbar>
		</div>
	);
};

export default Form;
