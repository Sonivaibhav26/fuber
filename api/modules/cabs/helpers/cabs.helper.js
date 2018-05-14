import config from '../../../../config/cabs.json';
import fs from "fs";

const diffrence = (x, y) => (x > y) ? x - y : y - x;

const calculateDistance = (locX, locY, cabX, cabY) => {
    const length = diffrence(locY, cabY);
    const breadth = diffrence(locX, cabX);
    return Math.sqrt(length * length + breadth * breadth);
};

const updateList = async (idealcab, active, locationX, locationY) => {
    const cabs = JSON.parse(fs.readFileSync(__dirname + '/../../../../config/cabs.json', 'utf8')).cabsList
        .map(cab => {
            if (cab.number === idealcab.cab.number) {
                if (active === false) {
                    cab.active = false;
                } else {
                    cab.active = true;
                    cab.locationX = locationX;
                    cab.locationY = locationY;
                }

                return cab;
            }
            return cab;
        });

    const newList = {
        "cabsList": cabs
    };

    try {
        fs.writeFileSync(__dirname + '/../../../../config/cabs.json', JSON.stringify(newList), 'utf8');
    } catch (e) {
        throw new Error(e);
    }

};

export const list = () => {
    const cabs = JSON.parse(fs.readFileSync(__dirname + '/../../../../config/cabs.json', 'utf8')).cabsList;
    return cabs.filter(cab => cab.active === true);
};

export const listPink = () => {
    const cabs = JSON.parse(fs.readFileSync(__dirname + '/../../../../config/cabs.json', 'utf8')).cabsList;
    return cabs.filter(cab => (cab.active === true) && (cab.pink === true));
};

export const book = async (x, y, pink) => {
    let cabs = JSON.parse(fs.readFileSync(__dirname + '/../../../../config/cabs.json', 'utf8')).cabsList
        .filter(cab => cab.active === true);

    if (pink) {
        cabs = cabs.filter(cab => cab.pink === true);
    }

    if (cabs.length === 0) {
        return null;
    }

    let idealcab = { cab: null, distance: null };

    cabs.forEach(cab => {
        let currentCabDistance = calculateDistance(x, y, cab.locationX, cab.locationY);
        if (idealcab.cab === null) {
            idealcab.cab = cab;
            idealcab.distance = currentCabDistance;
        }

        if (idealcab.distance > currentCabDistance) {
            idealcab.cab = cab;
            idealcab.distance = currentCabDistance;
        }
    });

    await updateList(idealcab, false, null, null);

    return idealcab;
};

export const end = async (x, y, number) => {
    let idealcab = { cab: null, distance: null };
    let cab = JSON.parse(fs.readFileSync(__dirname + '/../../../../config/cabs.json', 'utf8')).cabsList
        .filter(cab => cab.number === number);

    if (cab.length === 0) {
        return null;
    }

    idealcab.cab = cab[0];

    await updateList(idealcab, true, x, y);

    return { message: "trip completed" };
};