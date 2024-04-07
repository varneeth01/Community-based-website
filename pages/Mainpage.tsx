import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionForm from '/QuestionForm';
import QuestionList from '/QuestionList';
import { googleLogin } from '/auth/GoogleAuth';

const MainPage = () => {
  const [questions, setQuestions] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch questions from the server
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('/api/questions');
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    // Fetch user data from the server or local storage
    const fetchUser = async () => {
      // Replace with your user fetching logic
      const userData = { /* mock user data */ };
      setUser(userData);
    };

    fetchQuestions();
    fetchUser();
  }, []);

  const handleQuestionSubmit = async (question) => {
    try {
      const response = await axios.post('/api/questions', question);
      setQuestions([...questions, response.data]);
    } catch (error) {
      console.error('Error submitting question:', error);
    }
  };

  const handleAnswerSubmit = async (answer, questionId) => {
    try {
      const response = await axios.post(`/api/questions/${questionId}/answers`, answer);
      const updatedQuestions = questions.map((q) => {
        if (q.id === questionId) {
          return { ...q, answers: [...q.answers, response.data] };
        }
        return q;
      });
      setQuestions(updatedQuestions);
    } catch (error) {
      console.error('Error submitting answer:', error);
    }
  };

  return (
    <div>
      <h1>Question and Answer Forum</h1>
      <button onClick={googleLogin}>Login with Google</button>
      <QuestionForm onSubmit={handleQuestionSubmit} user={user} />
      <QuestionList
        questions={questions}
        onAnswerSubmit={handleAnswerSubmit}
        user={user}
      />
    </div>
  );
};

export default MainPage;


//main page 