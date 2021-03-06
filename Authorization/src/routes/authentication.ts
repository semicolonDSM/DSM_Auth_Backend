import express from "express";
import * as dsmAuthentication from "../controller/dsmAuthentication";;
import { errorHandler } from "../middleware/errorHandler/errorHandler";
import { BusinessLogic } from "../middleware/businessLogicInterface";

import { verifyRefreshToken } from "../middleware/verifyRefreshToken";
import { validationRequest } from "../middleware/validationRequest";
import { DsmAuthenticationSchema } from "../dto/dsmAuthentication.dto";

const router: express.Router = express.Router();

const dsmLoginRouter: BusinessLogic = errorHandler(dsmAuthentication.dsmLogin);
const provideTokenRouter: BusinessLogic = errorHandler(dsmAuthentication.provideToken);
const refreshTokenRouter: BusinessLogic = errorHandler(dsmAuthentication.refreshToken);

router.post("/login", validationRequest(DsmAuthenticationSchema), dsmLoginRouter);
router.post("/token", provideTokenRouter);
router.get("/refresh", verifyRefreshToken, refreshTokenRouter);

export default router;