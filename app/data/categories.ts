/** IMPORT ICONS */
import { TbBeach } from 'react-icons/tb';
import {
    GiWindmill, GiBrickWall, GiDiamondRing, GiLoveMystery, GiVineFlower, GiGrapes,
    GiWheat, GiArcheryTarget, GiMountainCave, GiFishingBoat, GiShop, GiTreehouse, GiFarmer,
    GiCampfire, GiHighGrass, GiBoatFishing, GiGolfFlag
} from 'react-icons/gi';
import { MdOutlineVilla, MdOutlinePeople, MdPets, MdDownhillSkiing } from 'react-icons/md';
import { FaRegBuilding, FaSwimmingPool, FaCity, FaHome, FaLeaf } from 'react-icons/fa';
import { BiHotel } from 'react-icons/bi';
import { IconType } from 'react-icons';
/** END OF IMPORT ICONS */

interface Category {
    label: string;
    icon: IconType;
    description: string;
}

export const categories: Category[] = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This property is close to the beach'
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This property is close to the windmills'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This property has modern facilities'
    },
    {
        label: 'Mountain View',
        icon: GiMountainCave,
        description: 'This property offers a stunning mountain view'
    },
    {
        label: 'Rustic Charm',
        icon: FaRegBuilding,
        description: 'This property features a rustic charm'
    },
    {
        label: 'Luxury',
        icon: GiDiamondRing,
        description: 'This property is the epitome of luxury'
    },
    {
        label: 'Pet Friendly',
        icon: MdPets,
        description: 'This property welcomes pets'
    },
    {
        label: 'Historic',
        icon: GiArcheryTarget,
        description: 'This property has a rich historical significance'
    },
    {
        label: 'Private Pool',
        icon: FaSwimmingPool,
        description: 'This property features a private pool'
    },
    {
        label: 'City Center',
        icon: FaCity,
        description: 'This property is located in the heart of the city'
    },
    {
        label: 'Golf Course',
        icon: GiGolfFlag,
        description: 'This property is situated on or near a golf course'
    },
    {
        label: 'Ski Resort',
        icon: MdDownhillSkiing,
        description: 'This property is located near a ski resort'
    },
    {
        label: 'Eco',
        icon: FaLeaf,
        description: 'This property is environmentally conscious'
    },
    {
        label: 'Romantic',
        icon: GiLoveMystery,
        description: 'This property is perfect for a romantic getaway'
    },
    {
        label: 'Family',
        icon: MdOutlinePeople,
        description: 'This property is suitable for families'
    },
    {
        label: 'Secluded',
        icon: GiMountainCave,
        description: 'This property offers privacy and seclusion'
    },
    {
        label: 'Waterfront',
        icon: GiFishingBoat,
        description: 'This property is located on the waterfront'
    },
    {
        label: 'Boutique',
        icon: GiShop,
        description: 'This property is a boutique accommodation'
    },
    {
        label: 'Treehouse',
        icon: GiTreehouse,
        description: 'This property is a unique treehouse accommodation'
    },
    {
        label: 'Farmstay',
        icon: GiFarmer,
        description: 'This property offers a farmstay experience'
    },
    {
        label: 'Glamping',
        icon: GiCampfire,
        description: 'This property offers a glamping experience'
    },
    {
        label: 'Rooftop Terrace',
        icon: GiHighGrass,
        description: 'This property features a rooftop terrace'
    },
    {
        label: 'Boat House',
        icon: GiBoatFishing,
        description: 'This property is a unique boat house accommodation'
    },
    {
        label: 'Mansion',
        icon: FaHome,
        description: 'This property is a luxurious mansion'
    },
    {
        label: 'Countryside',
        icon: GiWheat,
        description: 'This property is located in the countryside'
    },
    {
        label: 'Historic Landmark',
        icon: GiBrickWall,
        description: 'This property is a designated historic landmark'
    },
    {
        label: 'Artistic',
        icon: GiVineFlower,
        description: 'This property features artistic design and decor'
    },
    {
        label: 'Vineyard',
        icon: GiGrapes,
        description: 'This property is located on or near a vineyard'
    },
    {
        label: 'Boutique Hotel',
        icon: BiHotel,
        description: 'This property is a boutique hotel'
    }
]