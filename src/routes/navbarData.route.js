import express, { Router } from 'express'
import {navbarData, postNavbarData} from  '../controller/NavbarComponents/index.js'


const router=express.Router();


router.get('/navbarData',navbarData);
router.post('/navbarData',postNavbarData);

export default router;
