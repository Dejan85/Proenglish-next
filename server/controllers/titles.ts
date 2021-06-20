import TitlesModel from "../models/titlesModel";

export const getTitles = async (req: any, res: any) => {
  try {
    const titles = await TitlesModel.find();

    res.status(200).json(titles);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
