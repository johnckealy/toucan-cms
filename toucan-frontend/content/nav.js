import { GrUserPolice } from 'react-icons/gr';
import { FaUserTie } from 'react-icons/fa';
import { ImLibrary } from 'react-icons/im';
import { GiEuropeanFlag } from 'react-icons/gi';


export const navItems = [
  {
    "href": "/",
    "heading": "About John",
    "icon": <GrUserPolice />,
    "subheading": "Some background",
    "childItems": [
      {
        "heading": "hello"
      }
    ]
  },
  {
    "href": "/",
    "heading": "Technical Skills",
    "subheading": "What I can do",
    "icon": <ImLibrary />
  },
  {
    "href": "/",
    "heading": "Personal Projects",
    "subheading": "What I've done",
    "icon": <FaUserTie />
  },
  {
    "href": "/",
    "heading": "Testimonial",
    "subheading": "What others say",
    "icon": <GiEuropeanFlag />
  }
]
