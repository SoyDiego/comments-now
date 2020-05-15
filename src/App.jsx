import React from "react";
import "./App.css";
import Comments from './Components/Comments'
import CommentsForm from "./Components/CommentsForm";

function App() {
	return (
		<>
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-4 pr-5">
						<h2 className="text-center">Add comments</h2>
						<CommentsForm />
					</div>
					<div className="col-md-8 pl-5">
						<h2 className="text-center">Comments</h2>
						<Comments />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
