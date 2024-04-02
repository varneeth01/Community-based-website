import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const questions = await prisma.question.findMany({
        include: {
          answers: true,
        },
      });
      res.status(200).json(questions);
    } catch (error) {
      console.error('Error fetching questions:', error);
      res.status(500).json({ error: 'Failed to fetch questions' });
    }
  } else if (req.method === 'POST') {
    try {
      const { title, description, author, authorId } = req.body;
      const newQuestion = await prisma.question.create({
        data: {
          title,
          description,
          author,
          authorId,
        },
      });
      res.status(201).json(newQuestion);
    } catch (error) {
      console.error('Error creating question:', error);
      res.status(500).json({ error: 'Failed to create question' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
