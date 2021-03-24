import React, { useState } from 'react';

const Quiz = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleQuizSubmit = (e) => {
		e.preventDefault();

		setIsSubmitted(true);
	};

	return (
		<div className='container'>
			{/* Quiz info - start */}
			<div className='quiz-info'>
				<h2 className='quiz-title'>title</h2>
				<p className='quiz-description'>decs</p>
				<div className='quiz-video'>
					<iframe width='560' height='315' src='https://www.youtube.com/embed/e6EGQFJLl04' title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>
				</div>
			</div>
			{/* Quiz info - end */}

			<form className='quiz-questions' onSubmit={handleQuizSubmit}>
				{/* Quiz questions - start */}
				<div className='quiz-questions-list'>
					<div>
						<h5>text</h5>
						<ul>
							<li>
								<label>
									<input type='radio' name='155' />
									<span>answer 1</span>
								</label>
							</li>
							<li>
								<label>
									<input type='radio' name='155' />
									<span>answer 1</span>
								</label>
							</li>
							<li>
								<label>
									<input type='radio' name='155' />
									<span>answer 1</span>
								</label>
							</li>
						</ul>
						<p className='feedback'>feedback</p>
					</div>

					<div>
						<h5>text</h5>
						<ul>
							<li>
								<label>
									<input type='radio' name='156' />
									<span>answer 1</span>
								</label>
							</li>
							<li>
								<label>
									<input type='radio' name='156' />
									<span>answer 1</span>
								</label>
							</li>
							<li>
								<label>
									<input type='radio' name='156' />
									<span>answer 1</span>
								</label>
							</li>
						</ul>
					</div>
				</div>
				{/* Quiz questions - end */}

				<button type='submit' className='submit-btn'>
					Submit
				</button>
			</form>

			{/* Quiz results - start */}
			{isSubmitted && <p className='quiz-results'>Score: 165</p>}

			{/* Quiz results - end */}
		</div>
	);
};

export default Quiz;
