import React, { createContext, useState } from "react";
import Button from "../../../components/ui/Button";

// Create a context
const AuthContext = createContext();

function LoginForm() {
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage logged-in status

	const handleSubmit = (e) => {
		e.preventDefault(); // Prevent the default form submission behavior
		if (username && password) {
			setIsLoggedIn(true);
            localStorage.setItem("isLoggedIn",true)
			window.location.href = "/";
		}
	};
	return (
    <AuthContext.Provider value={isLoggedIn}>
			<div className='container'>
				<div className='card card-body'>
					<form>
						<div>
							<label htmlFor='username'>UserName</label>
							<input
								type='text'
								id='username'
								value={username}
								onChange={(e) => setUserName(e.target.value)}
								required
							/>
						</div>
						<div>
							<label htmlFor='password'>Password</label>
							<input
								type='password'
								id='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
					</form>
					<Button
						name={"Login"}
						onClick={handleSubmit}
						className={"btn btn-info"}
					/>
				</div>
			</div>
		</AuthContext.Provider>
	);
}

export default LoginForm;
export { AuthContext };
