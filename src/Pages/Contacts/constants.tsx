import React from 'react';
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FiMapPin } from 'react-icons/fi';

export const CONTACTS = [
  {
    name: 'Phone',
    icon: <BsTelephone />,
    contacts: ['+375 (29) 224-48-84', '+(995) 591-920-551'],
  },
  {
    name: 'Email',
    icon: <HiOutlineMailOpen />,
    contacts: ['lineviktoriya@gmail.com'],
  },
  {
    name: 'Address',
    icon: <FiMapPin />,
    contacts: ['S. Tsintsadse St,', 'Tbilisi, Georgia'],
  },
];
