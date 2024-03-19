import React, { useState } from "react";
import Button from "../../../components/ui/Button";

function NewTodoModal(props) {
	const { modal } = props;
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault(); // Prevent the default form submission behavior
		if (title && description) {
			const task = { title, description };
			// Retrieve existing todoList from local storage or initialize an empty array
			const existingTodoList =
				JSON.parse(localStorage.getItem("todoList")) || [];
			// Push the new task to the existing list
			existingTodoList.push(task);
			// Save the updated todoList back to local storage
			localStorage.setItem("todoList", JSON.stringify(existingTodoList));
			// Clear the form fields after submission
			setTitle("");
			setDescription("");
            modal();
            window.location.href='/';
		}
	};
	return (
		<div>
			<h2>Add Task</h2>
			<form>
				<div>
					<label htmlFor='title'>Title:</label>
					<input
						type='text'
						id='title'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</div>
				<div>
					<label htmlFor='description'>Description:</label>
					<input
						type='text'
						id='description'
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						required
					/>
				</div>
			</form>
			<div className='d-flex'>
				<Button
					name={"Create"}
					className={"btn btn-info mx-2"}
					onClick={handleSubmit}
				/>
				<Button
					name={"Cancel"}
					className={"btn btn-danger mx-2"}
					onClick={modal}
				/>
			</div>
		</div>
	);
}

export default NewTodoModal;
