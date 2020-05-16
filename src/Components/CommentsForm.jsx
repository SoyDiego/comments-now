import React from "react";
import { useForm } from "react-hook-form";

const CommentsForm = ({ addComment}) => {
	const { register, errors, handleSubmit } = useForm();

	const onSubmit = (data, e) => {
		addComment(data)
		e.target.reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="mt-5">
			<div className="form-group">
				<label htmlFor="">Name</label>
				<input
					type="text"
					className="form-control"
					name="name"
					placeholder="Your name"
					ref={register({
						required: { value: true, message: "Name is required" },
					})}
				/>
				{errors && (
					<small className="text-danger mt-0">
						{errors.name && errors.name.message}
					</small>
				)}
			</div>
			<div className="form-group">
				<label htmlFor="">Description</label>
				<textarea
					className="form-control"
					name="description"
					placeholder="Add a description"
					ref={register({
						required: { value: true, message: "Description is required" },
						minLength: { value: 10, message: "Min 10 characters" },
					})}
				/>
				{errors && (
					<small className="text-danger">
						{errors.description && errors.description.message}
					</small>
				)}
			</div>
			<div className="d-flex justify-content-center">
				<button className="btn btn-primary" type="submit">
					Add comment
				</button>
			</div>
		</form>
	);
};

export default CommentsForm;
