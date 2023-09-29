const Community = require('../models/communityModel'); 

exports.createCommunityQuestion = async (req, res) => {
  const { question, answer, thumbnail, crop } = req.body;

  try {
    const communityQuestion = new Community({ question, answer, thumbnail, crop });
    await communityQuestion.save();
    res.status(201).json(communityQuestion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllCommunityQuestions = async (req, res) => {
  try {
    const communityQuestions = await Community.find();
    res.status(200).json(communityQuestions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getCommunityQuestionById = async (req, res) => {
  const questionId = req.params.id;

  try {
    const communityQuestion = await Community.findById(questionId);

    if (!communityQuestion) {
      return res.status(404).json({ error: 'Community question not found' });
    }

    res.status(200).json(communityQuestion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getCommunityQuestionsByCrop = async (req, res) => {
  const { crop } = req.params;

  try {
    const communityQuestions = await Community.find({ crop });

    if (communityQuestions.length === 0) {
      return res.status(404).json({ error: 'No community questions found for the specified crop' });
    }

    res.status(200).json(communityQuestions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.modifyCommunityQuestionById = async (req, res) => {
  const questionId = req.params.id;
  const updateData = req.body;

  try {
    const updatedCommunityQuestion = await Community.findByIdAndUpdate(questionId, updateData, {
      new: true, 
    });

    if (!updatedCommunityQuestion) {
      return res.status(404).json({ error: 'Community question not found' });
    }

    res.status(200).json(updatedCommunityQuestion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteCommunityQuestionById = async (req, res) => {
  const questionId = req.params.id;

  try {
    const deletedCommunityQuestion = await Community.findByIdAndDelete(questionId);

    if (!deletedCommunityQuestion) {
      return res.status(404).json({ error: 'Community question not found' });
    }

    res.status(200).json({ message: 'Community question deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
