
import {TiThListOutline } from 'react-icons/ti';
import { BsImages } from 'react-icons/bs';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { MdHomeWork } from 'react-icons/md';


export const navItems = [
  {
    "href": "/dashboard/menu",
    "heading": "Menú",
    "icon": <MdOutlineRestaurantMenu />,
    "subheading": "Diseño de menú comidas",
  },
  {
    "href": "/dashboard/graphics",
    "heading": "Imágines Gráficas",
    "subheading": "Deseño de Imágines gráficas",
    "icon": <BsImages />
  },
  {
    "href": "/dashboard/local",
    "heading": "Local",
    "subheading": "Diseño de local",
    "icon": <MdHomeWork />
  }
]
