import { Router } from "express";
import { getCabsList } from "./../modules/cabs";

const router = Router();

router
    .route('/cabs/list')
    .get(getCabsList);

export default router;