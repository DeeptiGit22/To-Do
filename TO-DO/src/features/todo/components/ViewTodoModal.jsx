import React, { useState } from "react";
import Button from "../../../components/ui/Button";

function ViewTodoModal(props) {
    console.log(props);
	const { modal, task } = props; // Destructure props to access modal function and task details

	return (
		<div>
			<h2>View Task</h2>
				<div>
                    <p>{task.title}</p>
                    <p>{task.description}</p>
				</div>
			<div className='d-flex'>
				<Button
					name={"Cancel"}
					className={"btn btn-danger mx-2"}
					onClick={modal}
				/>
			</div>
		</div>
	);
}

export default ViewTodoModal;
