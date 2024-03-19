import React, { useContext, useEffect, useState } from "react";
import Button from "../../../components/ui/Button";
import { AuthContext } from "../../authentication/components/LoginForm";
import EditTodoModal from "./EditTodoModal";
import ViewTodoModal from "./ViewTodoModal";

function TodoList() {
	const isLoggedIn = localStorage.getItem("isLoggedIn");
	const [tasks, setTasks] = useState([]);
	const existingTodoList = JSON.parse(localStorage.getItem("todoList")) || [];
	const [editTask, setEditTask] = useState(null); 
    const [viewTask, setViewTask] = useState(null); 
	const [editModal, setEditModal] = useState(false); // Separate modal state for editing
    const [viewModal, setViewModal] = useState(false); // Separate modal state for viewing

	const toggleEditModal = () => {
		setEditModal(!editModal);
	};

    const toggleViewModal = () => {
		setViewModal(!viewModal);
	};

	useEffect(() => {
		if (existingTodoList.length > 0) {
			setTasks(existingTodoList);
		}
	}, []);

	// Function to handle edit action
	const handleEdit = (task) => {
		setEditTask(task);
		toggleEditModal(); // Open edit modal
	};

    // Function to handle view action
	const handleView = (task) => {
		setViewTask(task);
		toggleViewModal(); // Open view modal
	};


    // Function to handle delete action
	const handleDelete = (taskToDelete) => {
		const updatedTasks = tasks.filter(task => task !== taskToDelete); // Filter out the task to delete
		setTasks(updatedTasks); // Update tasks state
		localStorage.setItem("todoList", JSON.stringify(updatedTasks)); // Update localStorage
	};

	return (
		<div className='container mt-4'>
			{tasks.length > 0 ? (
				<ul className='list-group'>
					{tasks.map((task, index) => (
						<li
							key={index}
							className='list-group-item list-group-item d-flex justify-content-between align-items-center'>
							<span> {task.title}</span>
							<div className='d-flex'>
								<Button name='View' className='btn btn-warning mx-2' onClick={()=>handleView(task)} />
								{isLoggedIn && (
									<div>
										<Button
											name='Edit'
											className='btn btn-warning mx-2'
											onClick={() => handleEdit(task)}
										/>
										<Button name='Delete' className='btn btn-warning mx-2' onClick={() => handleDelete(task)} />
									</div>
								)}
							</div>
						</li>
					))}
				</ul>
			) : (
				<div>
					<h1>You have no tasks. Add New</h1>
				</div>
			)}

			{/* Render EditTodoModal if editTask is not null */}
			{editModal && (
				<div className={`modal ${editModal ? "active-modal" : ""}`}>
					<div onClick={toggleEditModal} className='overlay'></div>
					<div className='modal-content'>
						{editTask && <EditTodoModal task={editTask} modal={toggleEditModal} />}{" "}
					</div>
				</div>
			)}
        	{viewModal && (
				<div className={`modal ${viewModal ? "active-modal" : ""}`}>
					<div onClick={toggleViewModal} className='overlay'></div>
					<div className='modal-content'>
					{viewTask && <ViewTodoModal task={viewTask} modal={toggleViewModal}/>}
					</div>
				</div>
			)}
		</div>
	);
}

export default TodoList;
