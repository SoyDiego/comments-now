import React from "react";

const CommentsForm = () => {
	return (
		<form className="mt-5">
			<div className="form-group">
				<label htmlFor="">Title</label>
				<input
					type="text"
					className="form-control"
					name="title"
					placeholder="Add a title"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="">Description</label>
				<textarea
					className="form-control"
					name="description"
					placeholder="Add a description"
				/>
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
