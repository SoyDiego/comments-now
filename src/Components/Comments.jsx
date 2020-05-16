import React from "react";

const Comments = ({ comments, deleteComment }) => {
	return (
		<>
			{comments.length > 0 ? (
				comments.reverse().map((comment) => {
					return (
						<div className="media mt-5" key={comment.id}>
							<img
								className="mr-3"
								src="https://via.placeholder.com/64"
								alt="Generic placeholder"
							/>
							<div className="media-body">
								<h5 className="mt-0">{comment.name}</h5>
								{comment.description}
							</div>
							<div>
                                <button 
                                    className="btn btn-danger"
                                    onClick={() => deleteComment(comment.id)}
                                    >
									Delete
								</button>
							</div>
						</div>
					);
				})
			) : (
				<h5 className="text-center mt-5">No comments, add one :)</h5>
			)}
		</>
	);
};

export default Comments;
