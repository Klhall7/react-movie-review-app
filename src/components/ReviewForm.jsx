/* eslint-disable react/prop-types */
import { useState } from 'react';

function ReviewForm({onCompiledStringChange}) {
    const [numberInput, setNumberInput] = useState('');
    const [textInput, setTextInput] = useState('');

    const [showForm, setShowForm] = useState(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (numberInput && textInput) {
            console.log('review import valid')
            const compiled = `Your Rating: ${numberInput}/5 \n Your Review: ${textInput}`;
            onCompiledStringChange(compiled); // Call the function prop w/ compiled string
            setShowForm(false); // hide after review submission
            } else { return }
    };
    
    return (
        <>
        {showForm && ( //only render if form is expanded
            <form onSubmit={handleSubmit}>
            <div>
                <label>
                Your Rating:
                <input
                    type="number"
                    value={numberInput}
                    onChange={(e) => setNumberInput(e.target.value)}
                    min="1"
                    max="5"
                    required
                />
                </label>
            </div>
            <div>
                <label>
                Your Review:
                <textarea
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    required
                />
                </label>
            </div>
            <button  type="submit">Submit Review</button>
            </form>
        )}

            {!showForm && ( //form closed
                console.log('form submitted')
            )}

        </>
    );
}

export default ReviewForm;
