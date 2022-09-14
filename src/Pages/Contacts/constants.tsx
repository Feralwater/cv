import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FiMapPin } from 'react-icons/fi';

export const CONTACTS = [
  {
    name: 'Phone',
    icon: <BsTelephone />,
    contacts: ['+(48) 500 468 249', '+(995) 591-920-551'],
  },
  {
    name: 'Email',
    icon: <HiOutlineMailOpen />,
    contacts: ['victoria.buyakova@gmail.com'],
  },
  {
    name: 'Address',
    icon: <FiMapPin />,
    contacts: ['Marszałkowska St,', 'Warsaw, Poland'],
  },
];
