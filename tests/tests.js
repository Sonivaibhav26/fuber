import 'babel-polyfill';
import { equal } from "assert";
import { list as _list, listPink as _listPink, book, end } from "./../api/modules/cabs/helpers/cabs.helper";

describe('Basic Tests', function () {

    describe('Should List Only Available Cabs', function () {
        var list = _list();
        list.forEach(cab => {
            it('should have active true', function () {
                equal(cab.active, true);
            });
        });
    });

    describe('Should List Only Pink Available Cabs', function () {
        var list = _listPink();
        list.forEach(cab => {
            it('should have active true', function () {
                equal(cab.active, true);
            });
        });
    });

    describe('Should Book a cab', function () {
        it('Should retun a cab with number', function () {
            book(4, 6, false).then(function (cab) {
                if (cab.cab.number) {
                    equal(typeof cab.cab.number, 'number');
                }
                else
                    equal(typeof cab.message, 'string');
            });
        });
    });
});