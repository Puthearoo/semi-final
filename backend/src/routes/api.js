import express from 'express';

const router = express.Router();

router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from backend API!' });
});

router.post('/echo', (req, res) => {
  res.json({ received: req.body });
});

export default router;