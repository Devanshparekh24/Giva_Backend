import { prisma } from "../../db/index.js";
import { asyncHandler } from '../../utils/asyncHandler.js'
import { ApiResponse } from '../../utils/ApiResponse.js'
import { ApiError } from '../../utils/ApiError.js'




const navbarData = asyncHandler(async (req, res) => {
    try {
        const mainMenu = await prisma.navbarMenu.findMany({
            include: {
                subMenus: {
                    include: {
                        submenuItems: true
                    }
                }
            }
        });

        // Custom replacer function to convert BigInt to string
        const replacer = (key, value) =>
            typeof value === 'bigint' ? value.toString() : value;

        res.status(200).json(
            JSON.parse(JSON.stringify(new ApiResponse(200, mainMenu, 'Fetch All NavbarData'), replacer))
        )
    } catch (error) {
        res.status(500).json(new ApiError(500, "Internal Server Error", error)
        )
    }
})


const postNavbarData = asyncHandler(async (req, res) => {
    try {
        const { title } = req.body;

        const newMenu = await prisma.navbarMenu.create({
            data: {
                title
            }
        });

        res.status(201).json(
            new ApiResponse(201, newMenu, 'Navbar Data Created Successfully')
        );
    } catch (error) {
        res.status(500).json(new ApiError(500, "Internal Server Error", error));
    }
});

export {
    navbarData,
    postNavbarData
}
