import React, { useState } from 'react';

const QuestionForm = ({ onSubmit, user }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const question = {
      title,
      description,
      author: user.name,
      authorId: user.id,
      answers: [],
    };
    onSubmit(question);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ask a Question</h2>
      <input
        type="text"
        placeholder="Question Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Question Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      ></textarea>
      <button type="submit">Submit Question</button>
    </form>
  );
};

export default QuestionForm;
