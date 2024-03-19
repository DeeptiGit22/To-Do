import React, { useContext, useState } from "react";
import Button from "./ui/Button";
import NewTodoModal from "../features/todo/components/NewTodoModal";
import { Link } from "react-router-dom";
import { AuthContext } from "../features/authentication/components/LoginForm";
import logo from '../../src/assets/logo-1.jpeg';

function Nav() {
	const [modal, setModal] = useState(false);
    const isLoggedIn = useContext(AuthContext); // Access the isLoggedIn state from the AuthContext


	const toggleModal = () => {
		setModal(!modal);
	};
        const logout =()=>{
        localStorage.removeItem("isLoggedIn");
        window.location.href='/';
    }
	return (
		<div className='d-flex justify-content-between align-items-center navbar navbar-expand-lg navbar-light bg-light'>
			<div>
                <img src={logo} alt="" />
            </div>
			<div>
				<Button
					name={"Add"}
					onClick={toggleModal}
					className={"btn btn-outline-danger mx-2"}></Button>
				{isLoggedIn ? (
					<Link to='/login'>
						<Button
							name={"Login"}
							className={"btn btn-outline-info mx-2"}></Button>
					</Link>
				) : (
					<Button
						name={"Logout"}
						className={"btn btn-outline-info mx-2"}
                        onClick={logout}
                        ></Button>
				)}
			</div>
			{/* Modal component */}
			{modal && (
				<div className={`modal ${modal ? "active-modal" : ""}`}>
					<div onClick={toggleModal} className='overlay'></div>
					<div className='modal-content'>
						<NewTodoModal modal={toggleModal} />
					</div>
				</div>
			)}
		</div>
	);
}

export default Nav;
