import { list, book, listPink, end } from './helpers/cabs.helper';

export const getCabsList = (req, res) => {
    const cabs = list();
    res.status(200).json(cabs);
}

export const bookCab = async (req, res) => {
    const cab = await book(parseInt(req.body.locationX), parseInt(req.body.locationY), req.body.pink);
    if (cab === null) {
        return res.status(200).json({ message: "No Cab Found" });
    }
    res.status(200).json(cab);
}

export const getPinkCabsList = (req, res) => {
    const cabs = listPink();
    res.status(200).json(cabs);
}

export const endTrip = async (req, res) => {
    const cab = await end(parseInt(req.body.locationX), parseInt(req.body.locationY), parseInt(req.body.number));
    if (cab === null) {
        return res.status(200).json({ message: "No Cab Found with that number" });
    }
    res.status(200).json(cab);
}