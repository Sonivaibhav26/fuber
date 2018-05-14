import { list } from './helpers/cabs.helper';

export const getCabsList = (req, res) => {
    const cabs = list();
    res.status(200).json(cabs);
}
