import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../components/Form";

test("Check if Password is defined and if it has correct length", async () => {
	const length = "12",
		characters = "abcdABCD1234";
	render(<Form />);
	const user = userEvent.setup();

	await user.type(
		screen.getByRole("textbox", { name: /Enter character string/i }),
		characters
	);
	//input character string
	await user.type(
		screen.getByRole("textbox", { name: /Enter length/i }),
		length
	);
	//input length
	await user.click(screen.getByRole("button", { name: /Generate/i }));
	//submit
	const password = await screen.findByRole(
		"textbox",
		{ name: /Password/i },
		{ timeout: 30000 }
	);
	//find Password textbox

	expect(password).toBeInTheDocument; //is Password in the document?

	// @ts-ignore
	expect(password.value.length).toEqual(Number(length)); //does it have correct length?
}, 30000);
