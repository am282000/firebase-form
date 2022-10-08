import React, { useState } from 'react';
import './ReactContact.css';

const ReactContact = () => {
	const [user, setUser] = useState({
		name: '',
		email: '',
		phone: '',
		address: '',
		message: ''
	});
	let name, value;
	const getUserData = (event) => {
		name = event.target.name;
		value = event.target.value;

		setUser({ ...user, [name]: value });
	};
	const postData = async (e) => {
		e.preventDefault();
		const { name, email, phone, address, message } = user;

		if (name && email && phone && address && message) {
			const res = await fetch(
				'https://contactform-8a068-default-rtdb.firebaseio.com/user-data.json',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },

					body: JSON.stringify({
						name,
						email,
						phone,
						address,
						message
					})
				}
			);
			if (res) {
				setUser({
					name: '',
					email: '',
					phone: '',
					address: '',
					message: ''
				});

				alert('Data Stored Successfully 🤩');
			}
		} else {
			alert('Please fill all the Data 🙄');
		}
	};
	return (
		<>
			<div className="container">
				<div className="wrap-content">
					<form className="contact-form" method="POST">
						<span className="contact-title">CONTACT FORM</span>
						<div className="wrap-input">
							<span className="field-name">Name</span>
							<input
								type="text"
								className="input-field"
								name="name"
								placeholder="Enter Your Name"
								value={user.name}
								onChange={getUserData}
								autocomplete="off"
								required
							/>
						</div>

						<div className="wrap-input">
							<span className="field-name">Email</span>
							<input
								type="text"
								className="input-field"
								name="email"
								placeholder="Enter Your Email"
								value={user.email}
								onChange={getUserData}
								autocomplete="off"
								required
							/>
						</div>

						<div className="wrap-input">
							<span className="field-name">Mobile Number</span>
							<input
								type="text"
								className="input-field"
								name="phone"
								placeholder="Enter Your Phone Number"
								value={user.phone}
								onChange={getUserData}
								autocomplete="off"
								required
							/>
						</div>

						<div className="wrap-input">
							<span className="field-name">Address</span>
							<input
								type="text"
								className="input-field"
								name="address"
								placeholder="Enter Your Address"
								value={user.address}
								onChange={getUserData}
								autocomplete="off"
								required
							/>
						</div>

						<div className="wrap-input">
							<span className="field-name">Message</span>
							<input
								type="text"
								className="input-field"
								name="message"
								placeholder="Enter Your Message"
								value={user.message}
								onChange={getUserData}
								autocomplete="off"
								required
							/>
						</div>

						<div className="container">
							<button className="form-btn" onClick={postData}>
								<span>SUBMIT🏹</span>
							</button>
						</div>

						<span className="footer">
							For any question contact our 24/7 call center:
							<span className="footer-phone">+91 873 XXX X678</span>
						</span>
					</form>
				</div>
			</div>
		</>
	);
};

export default ReactContact;
