import { list, book, listPink } from './helpers/cabs.helper';

export const getCabsList = (req, res) => {
    const cabs = list();
    res.status(200).json(cabs);
}

export const bookCab = async (req, res) => {
    const cab = await book(parseInt(req.body.locationX), parseInt(req.body.locationY), req.body.pink);
    res.status(200).json(cab);
}

export const getPinkCabsList = (req, res) => {
    const cabs = listPink();
    res.status(200).json(cabs);
}