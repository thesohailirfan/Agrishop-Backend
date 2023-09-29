const Disease = require('../models/diseaseModel'); 

exports.createDisease = async (req, res) => {
  const {
    name,
    imageUrls,
    type,
    crop,
    stage,
    symptoms,
    more_information,
    preventive_measures,
    recommendations,
    organic_control,
    causes,
    products,
  } = req.body;

  try {
    const disease = new Disease({
      name,
      imageUrls,
      type,
      crop,
      stage,
      symptoms,
      more_information,
      preventive_measures,
      recommendations,
      organic_control,
      causes,
      products,
    });

    await disease.save();
    res.status(201).json(disease);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllDiseases = async (req, res) => {
  try {
    const diseases = await Disease.find();
    res.status(200).json(diseases);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getDiseaseById = async (req, res) => {
  const diseaseId = req.params.id;

  try {
    const disease = await Disease.findById(diseaseId);

    if (!disease) {
      return res.status(404).json({ error: 'Disease not found' });
    }

    res.status(200).json(disease);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getDiseasesByCrop = async (req, res) => {
  const { crop } = req.params;

  try {
    const diseases = await Disease.find({ crop });

    if (diseases.length === 0) {
      return res.status(404).json({ error: 'No diseases found for the specified crop' });
    }

    res.status(200).json(diseases);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getDiseasesByCropAndStage = async (req, res) => {
  const { crop, stage } = req.params;

  try {
    const diseases = await Disease.find({ crop, stage });

    if (diseases.length === 0) {
      return res.status(404).json({ error: 'No diseases found for the specified crop and stage' });
    }

    res.status(200).json(diseases);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.modifyDiseaseById = async (req, res) => {
  const diseaseId = req.params.id;
  const updateData = req.body;

  try {
    const updatedDisease = await Disease.findByIdAndUpdate(diseaseId, updateData, {
      new: true,
    });

    if (!updatedDisease) {
      return res.status(404).json({ error: 'Disease not found' });
    }

    res.status(200).json(updatedDisease);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deleteDiseaseById = async (req, res) => {
  const diseaseId = req.params.id;

  try {
    const deletedDisease = await Disease.findByIdAndDelete(diseaseId);

    if (!deletedDisease) {
      return res.status(404).json({ error: 'Disease not found' });
    }

    res.status(200).json({ message: 'Disease deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
