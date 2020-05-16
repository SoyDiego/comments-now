import React, { useState } from "react";
import "./App.css";
import Comments from "./Components/Comments";
import CommentsForm from "./Components/CommentsForm";

function App() {
	const [comments, setComments] = useState([
		{
			id: 1,
			name: "Juan Perez",
			description:
				"Molestias nobis dolor iusto, veniam ratione error labore quis incidunt asperiores iste. Laborum labore voluptate nulla quo reprehenderit officiis illum dignissimos.",
		},
		{
			id: 2,
			name: "John Crew",
			description:
				"Molestias nobis dolor iusto, veniam ratione error labore quis incidunt asperiores iste. Laborum labore voluptate nulla quo reprehenderit officiis illum dignissimos.",
		},
		{
			id: 3,
			name: "Ayrton Fox",
			description:
				"Molestias nobis dolor iusto, veniam ratione error labore quis incidunt asperiores iste. Laborum labore voluptate nulla quo reprehenderit officiis illum dignissimos.",
		},
	]);

	//AddComment
	const addComment = (newComment) => {
    newComment.id = comments.length + 1;
		setComments([...comments, newComment]);
  };
  
  //Delete comment
  const deleteComment = (id) => {
    let Confirm = window.confirm('Do you want delete the comment?')
    if (Confirm) {
      setComments(comments.filter((comment) => comment.id !== id));
    }
    
  }

	return (
		<>
			<div className="container mt-5">
				<div className="row">
					<div className="col-md-4 pr-5">
						<h2 className="text-center">Add comments</h2>
						<CommentsForm addComment={addComment} />
					</div>
					<div className="col-md-8 pl-5">
						<h2 className="text-center">Comments</h2>
						<Comments comments={comments} deleteComment={deleteComment} />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
