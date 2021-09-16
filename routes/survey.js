const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator'); // Good tool

// @route GET  api/v1/survey
// @desc Get the expected response from the server
// @access Public
router.get('/', (req, res) => {
  try {
    const mockRes = {
      data: {
        type: 'surveys',
        id: '2660dd24-e2db-42c1-8093-284b1df2664c',
        attributes: {
          title: 'Film feedback form',
          description:
            'Thank you for participating in the film festival!</p><p>Please fill out this short survey so we can record your feedback.</p>',
          questions: [
            {
              questionId: 'film',
              questionType: 'text',
              label: 'What film did you watch?',
              required: true,
              attributes: null,
            },
            {
              questionId: 'review',
              questionType: 'rating',
              label:
                'How would you rate the film? (1 - Very bad, 5 - Very good)',
              required: true,
              attributes: {
                min: 1,
                max: 5,
              },
            },
          ],
        },
      },
    };

    res.json(mockRes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send({
      title: 'Internal Server Error',
      detail: "Something went wrong. We're working on it!",
    });
  }
});

// @route POST  api/v1/survey/id/answers
// @desc Add new answer
// @access Public
router.post(
  '/:id/answers',
  [
    check('film', 'Entering the film name is required').not().isEmpty(),
    check('review', 'Entering the film review is required').exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { film, review } = req.body;

    const temp = {
      data: {
        type: 'surveyAnswers',
        attributes: {
          answers: [
            {
              questionId: 'film',
              answer: film,
            },
            {
              questionId: 'review',
              answer: review,
            },
          ],
        },
      },
    };

    try {
      res.json(temp);
    } catch (err) {
      console.error(err.message);
      res.status(500).send({
        title: 'Internal Server Error',
        detail: "Something went wrong. We're working on it!",
      });
    }
  }
);

module.exports = router;
