import { Router } from "express";
import { getCabsList, bookCab, getPinkCabsList } from "./../modules/cabs";

const router = Router();

router
    .route('/cabs/list')
    .get(getCabsList);

router
    .route('/cabs/list/pink')
    .get(getPinkCabsList);

router
    .route('/cabs/book')
    .post(bookCab);

export default router;