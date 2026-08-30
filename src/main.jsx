import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Globe2,
  Handshake,
  MapPin,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Building2,
  X,
  Mail,
  Phone,
  Clock3,
  SlidersHorizontal,
} from 'lucide-react';
import './styles.css';

const members = [
  {
    id: 1,
    name: 'Aayan Kidwai',
    role: 'Retail > UPS/Inverter > UPS/Inverter',
    company: 'SUNRISE ENTERPRISES',
    category: 'Retail',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'AK',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=687f27e9e4b0a08baf4183de',
    website: 'https://www.sunriseenterprises.in',
  },
  {
    id: 2,
    name: 'Abhishek Ray',
    role: 'Construction > Elevators > Elevators',
    company: 'VERTICA Elevators',
    category: 'Construction',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'AR',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=66af6102e4b0470bacc09868',
    website: 'https://www.linkedin.com/in/abhishek-ray-theoptimist/',
  },
  {
    id: 3,
    name: 'Akhilesh Jain',
    role: 'Finance & Insurance > Finance & Insurance (Other) > General Insurance',
    company: 'Risk Marshall',
    category: 'Finance & Insurance',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'AJ',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=627b5ffbcc2e2c0001e1148f',
    website: 'https://www.linkedin.com/in/akhilesh-jain-09a4b310/',
  },
  {
    id: 4,
    name: 'Alka Sharma',
    role: 'Manufacturing > Manufacturing (Other) > Organic & Gluten Free Food',
    company: 'Khadyot Naturals Pvt Ltd',
    category: 'Manufacturing',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'AS',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=668d6f7b283c7a0001c33f3b',
    website: 'https://www.khadyotnaturals.com',
  },
  {
    id: 5,
    name: 'Amit Upadhyay',
    role: 'Computer & Programming > IT & Networks > IT & Networks',
    company: 'Winux Communication Pvt ltd',
    category: 'Computer & Programming',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'AU',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=661140cfe4b0eda59f4f5b26',
    website: 'https://www.winuxcommunication.com',
  },
  {
    id: 6,
    name: 'Anil Nema',
    role: 'Real Estate Services > Real Estate Services (Other) > Real Estate Consultant',
    company: 'Bluetick Realty',
    category: 'Real Estate Services',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'AN',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=6a09d41ce4b0198bb830bdd3',
    website: 'https://www.bluetickrealty.com',
  },
  {
    id: 7,
    name: 'Ankit Gupta',
    role: 'Health & Wellness > Health & Wellness Services > Health & Wellness Services',
    company: 'Brain Waves Tech (P) LTD.',
    category: 'Health & Wellness',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'AG',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=637dc4a5e4b0f21939521557',
    website: 'https://www.brainwavestech.com',
  },
  {
    id: 8,
    name: 'Anuj Ranjan Shrivastava',
    role: 'Manufacturing > uPVC Windows & Doors > Thermal Break System and UPVC Doors and Windows',
    company: 'SunMaX',
    category: 'Manufacturing',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'AS',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=658560988256a60001718de7',
    website: 'https://www.sunmax.in',
  },
  {
    id: 9,
    name: 'Anurag Maheshwari',
    role: 'Security & Investigation > Security Systems > Security Systems',
    company: 'Rainbow Associates',
    category: 'Security & Investigation',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'AM',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=5e970a730cf27f0fec86a96f',
    website: 'https://www.rainbowassociates.in',
  },
  {
    id: 10,
    name: 'Arushi Maheshwari',
    role: 'Advertising & Marketing > Digital Marketing > Digital Marketing',
    company: 'Freaking Minds',
    category: 'Advertising & Marketing',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'AM',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=5ef08c8f0cf22b377362cf6c',
    website: 'https://www.freakingminds.in',
  },
  {
    id: 11,
    name: 'Ayush Modi',
    role: 'Retail > Wood Merchants > Wood Merchants',
    company: 'Modi Plywood',
    category: 'Retail',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'AM',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=63be315eca96420001040331',
    website: 'https://modiplywood.com',
  },
  {
    id: 12,
    name: 'Dhruv Verma',
    role: 'Legal & Accounting > Civil Law > Civil Law',
    company: 'S K Verma & Associates',
    category: 'Legal & Accounting',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'DV',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=681070b9e4b00e572a769e42',
    website: 'https://www.skvermaandassociates.com',
  },
  {
    id: 13,
    name: 'Dr Nishita Agrawal',
    role: 'Health & Wellness > Dentist > Dentist',
    company: 'Dr Nishita’s Dental clinic',
    category: 'Health & Wellness',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'NA',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=695bbd7c79d6f60001aa5209',
    website: 'https://drnishitasdentalclinic.com',
  },
  {
    id: 14,
    name: 'Gurtej Singh Matharu',
    role: 'Event & Business Service > Hotel > Hotel',
    company: 'ZUPER HOTEL SOLUTIONS',
    category: 'Event & Business Service',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'GM',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=64c243c2e4b0507d2bf3dff0',
    website: 'https://zuperhotel.com',
  },
  {
    id: 15,
    name: 'Gurwin Singh Sahni',
    role: 'Retail > Appliances > Appliances',
    company: 'Globe Audio',
    category: 'Retail',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'GS',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=69970857e4b0df21dfc1cce3',
    website: 'https://globeaudio.in',
  },
  {
    id: 16,
    name: 'Harish Chadda',
    role: 'Retail > Appliances > Appliances',
    company: 'Cool Care HVAC Solution',
    category: 'Retail',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'HC',
    photo: '',
    website: 'https://coolcarehvacsolution.com',
  },
  {
    id: 17,
    name: 'Harsh Surana',
    role: 'Retail > Gifts > Gifts',
    company: 'Bazarville',
    category: 'Retail',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'HS',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=63abb01f8ab7490001b44875',
    website: 'https://www.bazarville.in',
  },
  {
    id: 18,
    name: 'Hoshang Bajaj',
    role: 'Retail > Fine Jewelry > Fine Jewelry',
    company: 'The Silver Collection',
    category: 'Retail',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'HB',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=6798ccb2b359160001c1701a',
    website: 'https://www.thesilvercollection.in',
  },
  {
    id: 19,
    name: 'Isha Joshi',
    role: 'Health & Wellness > Health & Wellness Services > Health & Wellness Services',
    company: 'Physionize',
    category: 'Health & Wellness',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'IJ',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=689239cfd426c80001d44745',
    website: 'https://www.physionize.in',
  },
  {
    id: 20,
    name: 'Jay Singh',
    role: 'Advertising & Marketing > Photographer > Photographer',
    company: 'Rudra Divine',
    category: 'Advertising & Marketing',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'JS',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=6a19027c7464d80001394e7b',
    website: 'https://rudradevine.com',
  },
  {
    id: 21,
    name: 'Kartik Chawla',
    role: 'Legal & Accounting > Tax Advisor > Tax Advisor',
    company: 'A C K and Associates',
    category: 'Legal & Accounting',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'KC',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=6a05bbcb46d2310001f1803b',
    website: 'https://ackandassociates.com',
  },
  {
    id: 22,
    name: 'Kartik Sahai',
    role: 'Retail > Gifts > Gifts',
    company: 'Etout & Co.',
    category: 'Retail',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'KS',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=6a7b44ef6b8b360001162798',
    website: 'https://www.etoutco.com',
  },
  {
    id: 23,
    name: 'Khushi Mohabe',
    role: 'Health & Wellness > Counselor/Psychotherapist > Counselor/Psychotherapist',
    company: 'Kōna Therapy Space',
    category: 'Health & Wellness',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'KM',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=6a6c7cc1b14ac800018479b5',
    website: 'https://konatherapyspace.com',
  },
  {
    id: 24,
    name: 'Lakshya Chawla',
    role: 'Construction > Windows & Doors > Windows & Doors',
    company: 'Devashish Enterprises',
    category: 'Construction',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'LC',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=699706cee4b0df21dfc1ccd5',
    website: 'https://devashishenterprises.in',
  },
  {
    id: 25,
    name: 'Lalit Jain',
    role: 'Computer & Programming > Computer Retailer > Computer Retailer',
    company: 'Syscom Digital India',
    category: 'Computer & Programming',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'LJ',
    photo: '',
    website: 'https://www.syscomdigitalindia.com',
  },
  {
    id: 26,
    name: 'Leena Agarwal',
    role: 'Food & Beverage > Baker > HomeBaker',
    company: 'CAKE O BAKE',
    category: 'Food & Beverage',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'LA',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=69771418c53eb60001cf9a90',
    website: 'https://cakeobake.com',
  },
  {
    id: 27,
    name: 'Mahesh Sahu',
    role: 'Legal & Accounting > Lawyer > Lawyer',
    company: 'Sahu Law Chamber',
    category: 'Legal & Accounting',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'MS',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=695926530329aa0001d052d8',
    website: 'https://www.sahulawchamber.in',
  },
  {
    id: 28,
    name: 'Manish Joshi',
    role: 'Telecommunications > Telecommunications Products/Services > Telecommunications Products/Services',
    company: 'AR Solutions',
    category: 'Telecommunications',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'MJ',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=6932d10c7526600001d8615d',
    website: 'https://ar-solutions.in',
  },
  {
    id: 29,
    name: 'Mayur Shrivastava',
    role: 'Construction > Construction (Other) > A Class Electric Contractor',
    company: 'Maya Enterprises',
    category: 'Construction',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'MS',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=686d33d769fb7f00013046e7',
    website: 'https://mayaenterprises.in',
  },
  {
    id: 30,
    name: 'Meena Kothari',
    role: 'Finance & Insurance > Life and Disability Insurance > Life and Disability Insurance',
    company: 'Kesariya Fin Compass',
    category: 'Finance & Insurance',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'MK',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=64a4e0663732090001ce791a',
    website: 'https://www.meenakothari.com/',
  },
  {
    id: 31,
    name: 'Naveen Vishwakarma',
    role: 'Construction > Kitchen Construction > Kitchen Construction',
    company: 'SSK Interio',
    category: 'Construction',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'NV',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=661639b44ff657000199a97d',
    website: 'https://sskinterio.com',
  },
  {
    id: 32,
    name: 'Nikhil Acharya',
    role: 'Consulting > Consulting (Other) > Govt. Project Consultant ( Environmental Services, Urban Planning)',
    company: 'Sattav Consulatnts Pvt. Ltd.',
    category: 'Consulting',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'NA',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=61f4c798e4b085d279a2dfc9',
    website: 'https://sattavconsultants.com',
  },
  {
    id: 33,
    name: 'Omprakash Rajak',
    role: 'Advertising & Marketing > Podcasts > Podcasts',
    company: 'Alex Mediatech',
    category: 'Advertising & Marketing',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'OR',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=69f641ddc3f2e40001ee3b09',
    website: 'https://alexmediatech.com',
  },
  {
    id: 34,
    name: 'Piyush Shivhare',
    role: 'Finance & Insurance > Stock Broker > Stock Broker',
    company: 'Avyaan Enterprises',
    category: 'Finance & Insurance',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'PS',
    photo: '',
    website: 'https://avyaanenterprises.com',
  },
  {
    id: 35,
    name: 'PRAMOD MAHESHWARY',
    role: 'Construction > Power Generator > Power Generator',
    company: 'KSHITIJ INFORMATICS',
    category: 'Construction',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'PM',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=682072f615c2ac00012c4734',
    website: 'https://kshitijinformatics.com',
  },
  {
    id: 36,
    name: 'Rabin Jain Rabsa',
    role: 'Retail > Home Furnishings > Home Furnishings',
    company: 'Rabsa Home Decor',
    category: 'Retail',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'RJ',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=663dff466f778c000128ee0a',
    website: 'https://rabsahomedecor.com',
  },
  {
    id: 37,
    name: 'Ragini Uplopwar',
    role: 'Health & Wellness > Health & Wellness (Other) > HEALING',
    company: 'Early Morning Peace',
    category: 'Health & Wellness',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'RU',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=68ef5d9fe4b09dfcceb5153e',
    website: 'https://earlymorningpeace.com',
  },
  {
    id: 38,
    name: 'Rahul Khandelwal',
    role: 'Retail > Diamonds > Diamonds',
    company: 'R M Diamonds',
    category: 'Retail',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'RK',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=5d6f7a0af5ae70000179bf70',
    website: 'https://www.rmdiamonds.in',
  },
  {
    id: 39,
    name: 'Samip Mohan',
    role: 'Training & Coaching > Training & Coaching (Other) > Coaching',
    company: 'Vidhigya- School of Skills Edutrainment Solutions Private Limited',
    category: 'Training & Coaching',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'SM',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=653a476072b08d000105b65f',
    website: 'https://vidhigya.com',
  },
  {
    id: 40,
    name: 'Sanyam Indurkhya',
    role: 'Construction > Solar > Solar',
    company: 'SAITECH ENERGY SPACE SYSTEMS PRIVATE LIMITED',
    category: 'Construction',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'SI',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=5d3993d46948af0001fc95a2',
    website: 'https://saitech.in',
  },
  {
    id: 41,
    name: 'Siddharth Pal',
    role: 'Consulting > Business Consultant > Business Consultant',
    company: 'Unofinn Ventures Private Limited',
    category: 'Consulting',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'SP',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=68cc4517e4b0a1696312e7c2',
    website: 'https://unofinn.com',
  },
  {
    id: 42,
    name: 'Smita Nahar',
    role: 'Personal Services > Personal Services (Other) > PLAYZONE',
    company: 'Ecoprav Industries Private Limited',
    category: 'Personal Services',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'SN',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=6996ba6b596c2200013d134f',
    website: 'https://ecoprav.com',
  },
  {
    id: 43,
    name: 'SUDEEP HARINARAYAN JAISWAL',
    role: 'Construction > Construction (Other) > GOVERNMENT CIVIL CONTRACTOR',
    company: 'HIMALAYAN EARTHMOVERS PRIVATE LIMITED',
    category: 'Construction',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'SJ',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=6848240f5b65d6000173f88d',
    website: 'https://himalayanearthmovers.com',
  },
  {
    id: 44,
    name: 'Sumit Agarwal',
    role: 'Manufacturing > Food Products > Food Products',
    company: 'Bio Nutrients P. Ltd.',
    category: 'Manufacturing',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'SA',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=62a9a1dae4b0cdecd3d1458d',
    website: 'https://www.bionutrients.in',
  },
  {
    id: 45,
    name: 'Suyash Pratap singh',
    role: 'Retail > Building Materials > Building Materials',
    company: 'Ochira Infra Pvt Ltd',
    category: 'Retail',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'SS',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=69ba72b4e4b02a02e9b784cf',
    website: 'https://ochirainfra.com',
  },
  {
    id: 46,
    name: 'Swapnil Maheshwari',
    role: 'Personal Services > Wedding Planner > Wedding Planner',
    company: 'SOBHAGYA',
    category: 'Personal Services',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'SM',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=6349613fe4b0a2de8bd784f8',
    website: 'https://sobhagya.in',
  },
  {
    id: 47,
    name: 'Utkarsh Rana',
    role: 'Construction > Construction (Other) > Civil Construction',
    company: 'O M Enterprises',
    category: 'Construction',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'UR',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=67601678b7473600018e5e90',
    website: 'https://omenterprises.in',
  },
  {
    id: 48,
    name: 'Vikas Jain',
    role: 'Construction > Interior Design - Commercial > Interior Design - Commercial',
    company: 'Adinath Infra Solutions',
    category: 'Construction',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'VJ',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=6a181b6f9bfd6a0001035bb5',
    website: 'https://adinathinfrasolutions.com',
  },
  {
    id: 49,
    name: 'Viny Raj Modi',
    role: 'Travel > Travel (Other) > Holiday Packaging',
    company: 'SUPER TRIP',
    category: 'Travel',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'VM',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=674fc778de4a3a0001dc7c50',
    website: 'https://supertripholidays.com',
  },
  {
    id: 50,
    name: 'Vishal Shrivastava',
    role: 'Architecture & Engineering > Architect > Architect',
    company: 'One - One Design Studio',
    category: 'Architecture & Engineering',
    chapter: 'Bhopal BNI Vision',
    city: 'Bhopal',
    initials: 'VS',
    photo: 'https://bni-bhopal.in/web/open/appsCmsImageDownload?imageObjectId=5d3d1fc00cf21d2c8d14a448',
    website: 'https://oneonedesignstudio.com',
  },
];

// const chapters = [
//   {
//     id: 1,
//     name: 'Bhopal Central Chapter',
//     short: 'Bhopal Central',
//     members: 32,
//     year: 2021,
//     city: 'Bhopal',
//     state: 'Madhya Pradesh',
//     region: 'Central India',
//     day: 'Saturday',
//     time: '7:00 AM',
//     x: 39,
//     y: 61,
//   },
//   {
//     id: 2,
//     name: 'Indore Elite Chapter',
//     short: 'Indore Elite',
//     members: 35,
//     year: 2022,
//     city: 'Indore',
//     state: 'Madhya Pradesh',
//     region: 'Central India',
//     day: 'Saturday',
//     time: '7:00 AM',
//     x: 35,
//     y: 57,
//   },
//   {
//     id: 3,
//     name: 'Mumbai Business Connect',
//     short: 'Mumbai Business',
//     members: 42,
//     year: 2019,
//     city: 'Mumbai',
//     state: 'Maharashtra',
//     region: 'West India',
//     day: 'Friday',
//     time: '7:30 AM',
//     x: 27,
//     y: 69,
//   },
//   {
//     id: 4,
//     name: 'Pune Business Connect',
//     short: 'Pune Connect',
//     members: 28,
//     year: 2020,
//     city: 'Pune',
//     state: 'Maharashtra',
//     region: 'West India',
//     day: 'Wednesday',
//     time: '7:30 AM',
//     x: 31,
//     y: 63,
//   },
//   {
//     id: 5,
//     name: 'Ahmedabad Growth Chapter',
//     short: 'Ahmedabad Growth',
//     members: 30,
//     year: 2021,
//     city: 'Ahmedabad',
//     state: 'Gujarat',
//     region: 'West India',
//     day: 'Thursday',
//     time: '7:00 AM',
//     x: 20,
//     y: 50,
//   },
//   {
//     id: 6,
//     name: 'Delhi Leaders Chapter',
//     short: 'Delhi Leaders',
//     members: 40,
//     year: 2018,
//     city: 'New Delhi',
//     state: 'Delhi',
//     region: 'North India',
//     day: 'Tuesday',
//     time: '7:00 AM',
//     x: 42,
//     y: 25,
//   },
//   {
//     id: 7,
//     name: 'Jaipur Connect Chapter',
//     short: 'Jaipur Connect',
//     members: 27,
//     year: 2022,
//     city: 'Jaipur',
//     state: 'Rajasthan',
//     region: 'North India',
//     day: 'Thursday',
//     time: '7:30 AM',
//     x: 31,
//     y: 34,
//   },
//   {
//     id: 8,
//     name: 'Bengaluru Prime Chapter',
//     short: 'Bengaluru Prime',
//     members: 38,
//     year: 2020,
//     city: 'Bengaluru',
//     state: 'Karnataka',
//     region: 'South India',
//     day: 'Friday',
//     time: '7:00 AM',
//     x: 45,
//     y: 79,
//   },
//   {
//     id: 9,
//     name: 'Kochi Growth Chapter',
//     short: 'Kochi Growth',
//     members: 25,
//     year: 2023,
//     city: 'Kochi',
//     state: 'Kerala',
//     region: 'South India',
//     day: 'Wednesday',
//     time: '7:00 AM',
//     x: 47,
//     y: 91,
//   },
// ];

const events = [
  {
    id: 1,
    title: 'BNI Power Breakfast',
    date: '30 Aug 2026',
    time: '7:00 AM',
    city: 'Bhopal',
    type: 'Networking',
    desc: 'Build relationships and exchange qualified referrals over breakfast.',
  },
  {
    id: 2,
    title: 'Business Growth Workshop',
    date: '06 Sep 2026',
    time: '11:00 AM',
    city: 'Indore',
    type: 'Workshop',
    desc: 'Practical strategies to turn trusted connections into predictable growth.',
  },
  {
    id: 3,
    title: 'BNI Networking Meet',
    date: '20 Sep 2026',
    time: '7:30 AM',
    city: 'Mumbai',
    type: 'Networking',
    desc: 'Meet business professionals across categories and expand your network.',
  },
  {
    id: 4,
    title: 'Leadership Seminar',
    date: '04 Oct 2026',
    time: '10:00 AM',
    city: 'Bhopal',
    type: 'Leadership',
    desc: 'Learn leadership practices from experienced BNI chapter leaders.',
  },
  {
    id: 5,
    title: 'Visitors Day',
    date: '18 Oct 2026',
    time: '8:00 AM',
    city: 'Pune',
    type: 'Visitors Day',
    desc: 'See how a BNI chapter works and meet local business owners.',
  },
  {
    id: 6,
    title: 'Referral Masterclass',
    date: '01 Nov 2026',
    time: '9:00 AM',
    city: 'Delhi',
    type: 'Workshop',
    desc: 'Improve your referral conversations and create stronger introductions.',
  },
];

const categories = ['All Categories', ...new Set(members.map((m) => m.category))];
// const regions = ['All Regions', ...new Set(chapters.map((c) => c.region))];

function getMetricTarget(value) {
  const cleaned = value.replace(/[₹,\s]/g, '');
  const match = cleaned.match(/(\d+(?:\.\d+)?)([A-Za-z]*)/);

  if (!match) return 0;

  const [, number, suffix] = match;
  let numeric = Number(number);

  if (/M/i.test(suffix)) numeric *= 1000000;
  if (/K/i.test(suffix)) numeric *= 1000;
  if (/Cr/i.test(suffix)) numeric *= 10000000;

  return numeric;
}

function formatMetricValue(value, original) {
  const target = getMetricTarget(original);

  if (!target) return original;

  const progress = value / target;

  if (original.includes('M')) {
    const current = value / 1000000;
    return `${current >= 1 ? current.toFixed(current < 10 ? 1 : 0) : '<1'}M+`;
  }

  if (original.includes('Cr')) {
    const current = value / 10000000;
    return `₹${current >= 1 ? current.toFixed(current < 10 ? 1 : 0) : '<1'}Cr+`;
  }

  return `${Math.round(value)}+`;
}

function scrollToWhySection(event, navigate, currentPath) {
  if (event) {
    event.preventDefault();
  }

  const scroll = () => {
    const target = document.getElementById('why');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (currentPath === '/') {
    scroll();
    return;
  }

  navigate('/');
  setTimeout(scroll, 80);
}

function Header() {
  const [open, setOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');
  const location = useLocation();
  const navigate = useNavigate();
  const nav = [
    ['Home', '/'],
    ['Members', '/members'],
    // ['Chapters', '/chapters'],
    ['Events', '/events'],
    ['Why BNI', 'scroll'],
    ['About', '/about'],
    ['My BNI Stories', 'scroll'],
    ['FAQ', '/faq'],
  ];

  const handleHomeClick = (event) => {
    event.preventDefault();
    setOpen(false);
    setActiveNav('Home');

    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigate('/');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 80);
  };

  React.useEffect(() => {
    if (location.pathname !== '/') {
      const match = nav.find(([, path]) => path === location.pathname);
      if (match) {
        setActiveNav(match[0]);
      }
    }
  }, [location.pathname]);

  return (
    <header className="header">
      <Link to="/" className="brand" aria-label="BNI Vision home" onClick={handleHomeClick}>
        <span className="brand-icon" aria-hidden="true" />
        <span className="brand-text">
          <span className="brand-name">BNI Vision</span>
        </span>
      </Link>

      <nav className={open ? 'open' : ''}>
        {nav.map(([n, p]) => {
          if (p === 'scroll') {
            return (
              <button
                key={n}
                type="button"
                className={`nav-link ${activeNav === 'Why BNI' ? 'active' : ''}`}
                onClick={(event) => {
                  setOpen(false);
                  setActiveNav('Why BNI');
                  scrollToWhySection(event, navigate, location.pathname);
                }}
              >
                {n}
              </button>
            );
          }

          return (
            <Link
              key={p}
              className={activeNav === n ? 'active' : ''}
              onClick={(event) => {
                setOpen(false);
                setActiveNav(n);

                if (n === 'Home') {
                  handleHomeClick(event);
                }
              }}
              to={p}
            >
              {n}
            </Link>
          );
        })}
      </nav>

      <a
        className="join-btn desktop"
        href="https://bni-bhopal.in/en-IN/howtojoin"
        target="_blank"
        rel="noreferrer"
      >
        Join BNI <ArrowRight size={17} />
      </a>

      <button className="menu" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function Network() {
  const navigate = useNavigate();
  const cards = [
    { title: 'Members', value: '50+', detail: 'Trusted professionals', accent: '#ed1b2f', path: '/members' },
    { title: 'Referrals', value: '1M+', detail: 'Business opportunities', accent: '#ff8b20', path: '/membership' },
    { title: 'Events', value: '24+', detail: 'Power networking meetups', accent: '#2c80ff', path: '/events' },
  ];

  return (
    <div className="network">
      {/* <div className="orbit-ring r1" />
      <div className="orbit-ring r2" />
      <div className="orbit-ring r3" />

      <button className="core" onClick={() => navigate('/')}>
        <span className="ico-068"></span>
        <span className="texts">
          <span className="name">BNI Vision</span>
        </span>
      </button> */}

      {/* <div className="stacked-cards" aria-label="BNI highlights">
        {cards.map(({ title, value, detail, accent, path }, idx) => (
          <button
            key={title}
            className={`feature-card card-${idx + 1}`}
            style={{ '--card-accent': accent }}
            onClick={() => navigate(path)}
          >
            <div className="card-head">
              <span className="mini-dot" />
              <small>{title}</small>
            </div>
            <strong>{value}</strong>
            <p>{detail}</p>
          </button>
        ))}
      </div> */}
    </div>
  );
}

function Spotlight() {
  return (
    <aside className="showcase-panel">
      <div className="showcase-grid dashboard-grid">
        <div className="showcase-card calendar-card card-animate">
          <div className="card-kicker">Upcoming Event</div>
          <div className="calendar-row">
            <div className="calendar-date">
              <span>SEP</span>
              <strong>14</strong>
            </div>
            <div className="calendar-copy">
              <h3>BNI Power Breakfast</h3>
              <p>Saturday • 7:00 AM</p>
            </div>
          </div>
          <ul className="calendar-list">
            <li><span className="tiny-dot" /> Bhopal Chapter</li>
            <li><span className="tiny-dot muted" /> 50+ members</li>
          </ul>
        </div>

        <div className="showcase-card chart-card referral-card card-animate">
          <div className="card-kicker">Referrals</div>
          <div className="bars-wrap" aria-label="Referral trend">
            <span className="referral-bar" style={{ '--bar-height': '40%' }} />
            <span className="referral-bar" style={{ '--bar-height': '58%' }} />
            <span className="referral-bar" style={{ '--bar-height': '74%' }} />
            <span className="referral-bar" style={{ '--bar-height': '92%' }} />
            <span className="referral-bar" style={{ '--bar-height': '100%' }} />
          </div>
          <div className="chart-meta">
            <strong>1.4x</strong>
            <small>This month</small>
          </div>
        </div>

        <div className="showcase-card meeting-card card-animate">
          <div className="meeting-photo">
            <div className="photo-person">
              <span className="head" />
              <span className="body" />
            </div>
          </div>
          <div className="meeting-tag">Networking Day</div>
        </div>

        <div className="showcase-card chart-card revenue-card card-animate">
          <div className="card-kicker">Business Generated</div>
          <svg viewBox="0 0 220 120" className="line-chart" aria-label="Business graph">
            <defs>
              <linearGradient id="lineFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="rgba(237,27,47,0.25)" />
                <stop offset="100%" stopColor="rgba(237,27,47,0.02)" />
              </linearGradient>
            </defs>
            <path className="graph-fill" d="M 0 86 L 35 72 L 70 78 L 105 42 L 140 52 L 175 24 L 220 12 L 220 120 L 0 120 Z" fill="url(#lineFill)" />
            <path className="graph-line" d="M 0 86 L 35 72 L 70 78 L 105 42 L 140 52 L 175 24 L 220 12" fill="none" stroke="#ed1b2f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="chart-meta">
            <strong>₹42L</strong>
            <small>Avg. monthly</small>
          </div>
        </div>
      </div>
    </aside>
  );
}

function Avatar({ member, size = 'md' }) {
  return (
    <div className={'avatar ' + size}>
      {member.photo ? <img src={member.photo} alt={member.name} /> : member.initials}
    </div>
  );
}

function Metrics() {
  const metrics = [
    ['500+', 'Chapters', '/chapters'],
    ['50+', 'Members', '/members'],
    ['1M+', 'Referrals', '/membership'],
    ['₹1000Cr+', 'Business Generated', '/membership'],
    ['200+', 'Cities', '/chapters'],
  ];

  const [counts, setCounts] = useState(metrics.map(() => 0));

  React.useEffect(() => {
    const duration = 1600;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts(
        metrics.map((metric) => {
          const target = getMetricTarget(metric[0]);
          return target * eased;
        }),
      );

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, []);

  return (
    <div className="metrics">
      {metrics.map(([v, l, p], i) => (
        <Link to={p} key={l}>
          <span>
            {i === 0 ? (
              <Building2 />
            ) : i === 1 ? (
              <Users />
            ) : i === 2 ? (
              <Handshake />
            ) : i === 3 ? (
              <TrendingUp />
            ) : (
              <MapPin />
            )}
          </span>
          <div>
            <strong>{formatMetricValue(counts[i], v)}</strong>
            <small>{l}</small>
          </div>
        </Link>
      ))}
    </div>
  );
}

function Why() {
//   const items = [
//     ['Build Relationships', 'Connect with trusted business professionals in your community.', Users],
//     ['Give & Receive Referrals', 'Our proven system helps you grow your business consistently.', Handshake],
//     ['Trusted Network', 'Only one business category per chapter ensures quality connections.', ShieldCheck],
//     ['Business Growth', 'More connections lead to more opportunities and more growth.', TrendingUp],
//     ['Global Community', 'Local support with global reach. You’re never alone in BNI.', Globe2],
//     ['Lifelong Learning', 'Learn from industry leaders and grow personally & professionally.', Sparkles],
//   ];

  return (
    <section className="why" id="why">
      <div className="eyebrow">WHY BNI?</div>
      <h2>
        More Than Networking. It’s <span>Business Growth.</span>
      </h2>
      <div className="simple-grid">
        {['Build Relationships', 'Give & Receive Referrals', 'Trusted Network', 'Business Growth', 'Global Community', 'Lifelong Learning'].map((x, i) => (
          <div key={x}>
            {/* <span>{i + 1}</span> */}
            <h3>{x}</h3>
            <p>
              Meaningful connections, consistent support and opportunities that help your business
              grow.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <h1>
            Business
            <br />
            Grows Better
            <br />
            <span>Together</span>
          </h1>
          <p>
            BNI is the world’s largest business networking organization. We help you build
            meaningful relationships that lead to long-term business growth.
          </p>
          <div className="actions">
            <Link className="primary" to="/members">
              Meet Our Members <ArrowRight />
            </Link>
            {/* <a
              className="secondary"
              href="https://bni-bhopal.in/en-IN/howtojoin"
              target="_blank"
              rel="noreferrer"
            >
              Join BNI
            </a> */}
          </div>

          <div className="social-proof">
            <div className="faces">
              {members.slice(0, 4).map((m) => (
                <Avatar key={m.id} member={m} size="sm" />
              ))}
              <b>50+</b>
            </div>
            <div>
              <strong>
                50+ <small>Members</small>
              </strong>
              <span>Growing together across India</span>
            </div>
          </div>
        </div>

        <Spotlight />
      </section>

      <Metrics />
      <MembersPreview />
      {/* <ChaptersPreview /> */}
      <EventsPreview />
      <Why />
      {/* <CTA /> */}
    </>
  );
}

function MembersPreview() {
  const navigate = useNavigate();

  return (
    <section className="section preview">
      <div className="section-head">
        <div>
          <div className="eyebrow">OUR MEMBERS</div>
          <h2>
            Find Trusted Professionals
          </h2>
        </div>
        <br/>
        <button className="outline" onClick={() => navigate('/members')}>
          View All Members <ArrowRight />
        </button>
      </div>

      {/* <div className="filter-row compact">
        <Search />
        <input placeholder="Search by name, company or profession..." />
        <select defaultValue="All Categories">
          <option>All Categories</option>
        </select>
        <select defaultValue="All Chapters">
          <option>All Chapters</option>
        </select>
        <button className="more-filter">
          <SlidersHorizontal /> More Filters
        </button>
      </div> */}

      <div className="member-grid">
        {members.slice(0, 4).map((m) => (
          <MemberCard key={m.id} member={m} />
        ))}
      </div>

      {/* <div className="center">
        <Link className="outline" to="/members">
          View All Members <ArrowRight />
        </Link>
      </div> */}
    </section>
  );
}

function MemberCard({ member }) {
  return (
    <Link to={'/members/' + member.id} className="member-card">
      <Avatar member={member} />
      <h3>{member.name}</h3>
      <p>{member.role}</p>
      <small>{member.chapter}</small>
      <span>{member.category}</span>
      <b>
        View Profile <ArrowUpRight size={14} />
      </b>
    </Link>
  );
}

// function ChaptersPreview() {
//   return (
//     <section className="section chapters-preview">
//       <div className="section-head">
//         <div>
//           <div className="eyebrow">OUR CHAPTERS</div>
//           <h2>
//             Chapters Across
//             <br />
//             India
//           </h2>
//           <p>Search chapters by name or city and explore on the map.</p>
//         </div>
//         <Link className="outline" to="/chapters">
//           View All Chapters <ArrowRight />
//         </Link>
//       </div>

//       <div className="chapter-layout">
//         <div className="chapter-list">
//           {chapters.slice(0, 3).map((c) => (
//             <Link to={'/chapters/' + c.id} key={c.id} className="chapter-item">
//               <span>
//                 <Building2 />
//               </span>
//               <div>
//                 <b>{c.name}</b>
//                 <small>
//                   {c.members} Members • Est. {c.year}
//                   <br />
//                   {c.city}, {c.state}
//                 </small>
//               </div>
//               <ChevronRight />
//             </Link>
//           ))}

//           <Link className="text-link" to="/chapters">
//             Browse all chapters <ArrowRight />
//           </Link>
//         </div>

//         <IndiaMap active={null} />
//       </div>
//     </section>
//   );
// }

function IndiaMap({ active, onSelect }) {
  return (
    <div className="map">
      <div className="map-grid"></div>
      <svg viewBox="0 0 500 520" aria-label="India map">
        <path
          d="M185 34 C230 15 302 42 330 78 C351 104 381 117 395 154 C408 186 384 211 397 247 C413 291 394 330 371 354 C351 376 361 413 340 442 C322 466 306 492 278 505 C263 491 262 465 246 447 C229 426 202 410 195 384 C186 353 162 333 151 306 C139 276 121 251 111 221 C101 190 109 161 123 136 C139 108 151 76 185 34 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          d="M130 138 C178 160 210 145 249 169 C285 191 325 187 365 204 M115 220 C172 226 210 250 251 244 C295 238 337 263 389 287 M153 305 C207 294 245 315 288 330 C324 342 350 335 379 355"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity=".35"
        />
      </svg>

      {/* {chapters.map((c) => (
        <button
          key={c.id}
          className={'map-pin ' + (active === c.id ? 'selected' : '')}
          style={{ left: c.x + '%', top: c.y + '%' }}
          onClick={() => onSelect?.(c)}
        >
          <MapPin size={18} />
          <span>{c.members}</span>
        </button>
      ))} */}
    </div>
  );
}

function EventsPreview() {
  return (
    <section className="section events">
      <div className="section-head">
        <div>
          <div className="eyebrow">UPCOMING EVENTS</div>
          <h2>Connect, Learn & Grow</h2>
          <p>Join our upcoming events and expand your network.</p>
        </div>
        <Link className="outline" to="/events">
          View All Events <ArrowRight />
        </Link>
      </div>

      <div className="event-grid">
        {events.slice(0, 4).map((e) => (
          <EventCard key={e.id} event={e} />
        ))}
      </div>
    </section>
  );
}

function EventCard({ event }) {
  return (
    <Link to={'/events/' + event.id} className="event-card">
      <div className="event-visual">
        <span>
          {event.date.split(' ')[0]}
          <b>{event.date.split(' ')[1]}</b>
        </span>
        <div>BNI EVENT</div>
      </div>

      <div className="event-content">
        <small>{event.type}</small>
        <h3>{event.title}</h3>
        <p>
          {event.date} • {event.time}
          <br />
          {event.city}
        </p>
        <b>
          View Details <ArrowRight />
        </b>
      </div>
    </Link>
  );
}

// function CTA() {
//   return (
//     <section className="cta">
//       <div>
//         <h2>Ready to Grow Your Business?</h2>
//         <p>Join thousands of professionals who are growing together with BNI.</p>
//       </div>
//       <a
//         className="light-btn"
//         href="https://bni-bhopal.in/en-IN/howtojoin"
//         target="_blank"
//         rel="noreferrer"
//       >
//         Join BNI Today <ArrowRight />
//       </a>
//     </section>
//   );
// }

function DirectoryHeader({ title, desc, crumb }) {
  return (
    <div className="page-hero">
      <div>
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          {crumb}
        </div>
        <div className="eyebrow">{crumb.toUpperCase()}</div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}

function Members() {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('All Categories');
  const [city, setCity] = useState('All Cities');
  const [page, setPage] = useState(1);
  const per = 8;

  const filtered = useMemo(
    () =>
      members.filter(
        (m) =>
          (!q ||
            [m.name, m.role, m.company, m.city].join(' ').toLowerCase().includes(q.toLowerCase())) &&
          (cat === 'All Categories' || m.category === cat) &&
          (city === 'All Cities' || m.city === city),
      ),
    [q, cat, city],
  );

  const shown = filtered.slice((page - 1) * per, page * per);
  const pages = Math.max(1, Math.ceil(filtered.length / per));

  return (
    <>
      <DirectoryHeader
        crumb="Members"
        title="Find Your BNI Community"
        desc="Explore professionals, discover trusted connections and build relationships that create business growth."
      />

      <main className="directory">
        <div className="directory-toolbar">
          <div className="searchbox">
            <Search />
            <input
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setPage(1);
              }}
              placeholder="Search by name, company or profession..."
            />
          </div>

          <select
            value={cat}
            onChange={(e) => {
              setCat(e.target.value);
              setPage(1);
            }}
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <select
            value="All Chapters"
            disabled
            aria-label="Chapter filter"
          >
            <option>All Chapters</option>
          </select>

          <select
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
              setPage(1);
            }}
          >
            <option>All Cities</option>
            {[...new Set(members.map((m) => m.city))].map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>

          <button className="filter-button">
            <SlidersHorizontal /> Filters
          </button>
        </div>

        <div className="results-head">
          <span>{filtered.length} members found</span>
          <small>
            Showing {filtered.length ? (page - 1) * per + 1 : 0}–
            {Math.min(page * per, filtered.length)} of {filtered.length}
          </small>
        </div>

        <div className="member-directory-grid">
          {shown.map((m) => (
            <MemberCard key={m.id} member={m} />
          ))}
        </div>

        {!shown.length && <Empty text="No members match your search and filters." />}

        <Pagination page={page} pages={pages} setPage={setPage} />
      </main>
    </>
  );
}

function Pagination({ page, pages, setPage }) {
  if (pages <= 1) return null;

  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        <ChevronLeft />
      </button>

      {Array.from({ length: pages }, (_, i) => (
        <button className={page === i + 1 ? 'current' : ''} onClick={() => setPage(i + 1)} key={i}>
          {i + 1}
        </button>
      ))}

      <button disabled={page === pages} onClick={() => setPage(page + 1)}>
        <ChevronRight />
      </button>
    </div>
  );
}

// function Chapters() {
//   const [q, setQ] = useState('');
//   const [region, setRegion] = useState('All Regions');
//   const [selected, setSelected] = useState(null);

//   const filtered = chapters.filter(
//     (c) =>
//       (!q || [c.name, c.city, c.state].join(' ').toLowerCase().includes(q.toLowerCase())) &&
//       (region === 'All Regions' || c.region === region),
//   );

//   return (
//     <>
//       <DirectoryHeader
//         crumb="Chapters"
//         title="Find a Chapter Near You"
//         desc="Search chapters by name or city, explore the India map and connect with a local BNI community."
//       />

//       <main className="directory">
//         <div className="chapter-searchbar">
//           <div className="searchbox">
//             <Search />
//             <input
//               value={q}
//               onChange={(e) => setQ(e.target.value)}
//               placeholder="Search by chapter name or city..."
//             />
//           </div>

//           <select value={region} onChange={(e) => setRegion(e.target.value)}>
//             {regions.map((r) => (
//               <option key={r}>{r}</option>
//             ))}
//           </select>

//           <button className="filter-button">
//             <SlidersHorizontal /> More Filters
//           </button>
//         </div>

//         <div className="chapter-directory">
//           <div className="chapter-results">
//             <div className="results-head">
//               <span>{filtered.length} chapters</span>
//               <small>Explore chapters across India</small>
//             </div>

//             {filtered.map((c) => (
//               <Link
//                 key={c.id}
//                 to={'/chapters/' + c.id}
//                 className={'chapter-row ' + (selected?.id === c.id ? 'selected' : '')}
//                 onMouseEnter={() => setSelected(c)}
//               >
//                 <span>
//                   <Building2 />
//                 </span>
//                 <div>
//                   <h3>{c.name}</h3>
//                   <p>
//                     {c.members} Members • Est. {c.year}
//                   </p>
//                   <small>
//                     {c.city}, {c.state} • Meets {c.day}, {c.time}
//                   </small>
//                 </div>
//                 <ChevronRight />
//               </Link>
//             ))}

//             {!filtered.length && <Empty text="No chapters match your search." />}
//           </div>

//           <div className="map-panel">
//             <IndiaMap active={selected?.id} onSelect={setSelected} />

//             {selected && (
//               <Link className="map-card" to={'/chapters/' + selected.id}>
//                 <div>
//                   <b>{selected.name}</b>
//                   <small>
//                     {selected.members} Members • {selected.city}
//                   </small>
//                 </div>
//                 <ArrowRight />
//               </Link>
//             )}
//           </div>
//         </div>
//       </main>
//     </>
//   );
// }

function Events() {
  const [q, setQ] = useState('');
  const [type, setType] = useState('All Types');

  const filtered = events.filter(
    (e) =>
      (!q || [e.title, e.city, e.type].join(' ').toLowerCase().includes(q.toLowerCase())) &&
      (type === 'All Types' || e.type === type),
  );

  return (
    <>
      <DirectoryHeader
        crumb="Events"
        title="Connect, Learn & Grow"
        desc="Discover upcoming BNI events, workshops, networking meets and leadership sessions."
      />

      <main className="directory">
        <div className="directory-toolbar">
          <div className="searchbox">
            <Search />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search events or cities..."
            />
          </div>

          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option>All Types</option>
            {[...new Set(events.map((e) => e.type))].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>

        <div className="event-directory-grid">
          {filtered.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>

        {!filtered.length && <Empty text="No events match your search." />}
      </main>
    </>
  );
}

function Empty({ text }) {
  return (
    <div className="empty">
      <Search />
      <h3>{text}</h3>
    </div>
  );
}

function Detail({ kind }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const item =
    kind === 'member'
      ? members.find((x) => x.id === Number(id))
        : events.find((x) => x.id === Number(id));

  if (!item) {
    return (
      <main className="detail">
        <h1>Not found</h1>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </main>
    );
  }

  return (
    <main className="detail">
      <button className="back" onClick={() => navigate(-1)}>
        <ChevronLeft /> Back
      </button>

      {kind === 'member' ? (
        <div className="profile-card">
          <Avatar member={item} size="lg" />
          <div>
            <div className="eyebrow">BNI MEMBER</div>
            <h1>{item.name}</h1>
            <h2>{item.role}</h2>
            <p>
              {item.company} • {item.category}
            </p>
            <p>
              <Building2 /> {item.chapter}
              <br />
              <MapPin /> {item.city}
            </p>
            {item.website ? (
              <a
                className="primary"
                href={item.website}
                target="_blank"
                rel="noreferrer"
                aria-label={`More about ${item.name}`}
              >
                More about {item.name.split(' ')[0]} <ArrowRight />
              </a>
            ) : (
              <button className="primary" type="button" disabled>
                More about {item.name.split(' ')[0]} <ArrowRight />
              </button>
            )}
          </div>
        </div>
      ) : kind === 'chapter' ? (
        <div className="chapter-detail">
          <div className="detail-map">
            <IndiaMap active={item.id} />
          </div>
          <div>
            <div className="eyebrow">BNI CHAPTER</div>
            <h1>{item.name}</h1>
            <p>
              {item.members} members • Established {item.year}
            </p>
            <p>
              <MapPin /> {item.city}, {item.state}
            </p>
            <p>
              <CalendarDays /> Meets every {item.day} at {item.time}
            </p>
            <Link className="primary" to="/membership">
              Visit / Join Chapter <ArrowRight />
            </Link>
          </div>
        </div>
      ) : (
        <div className="event-detail">
          <div className="event-big">BNI EVENT</div>
          <div>
            <div className="eyebrow">{item.type.toUpperCase()}</div>
            <h1>{item.title}</h1>
            <p>
              <CalendarDays /> {item.date} • {item.time}
            </p>
            <p>
              <MapPin /> {item.city}
            </p>
            <p>{item.desc}</p>
            <button className="primary">
              Register for Event <ArrowRight />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

function SimplePage({ type }) {
  const content = {
    membership: [
      'Why BNI',
      'More Than Networking. It’s Business Growth.',
      'Build relationships, exchange qualified referrals and grow with a trusted business community.',
    ],
    about: [
      'About BNI',
      'Changing the Way the World Does Business®',
      'BNI helps professionals build referral-based relationships through structured weekly networking.',
    ],
    contact: [
      'Contact',
      'Let’s Grow Together',
      'Have a question about membership, chapters or events? Connect with the BNI team.',
    ],
  }[type];

  return (
    <main className="simple">
      <DirectoryHeader crumb={content[0]} title={content[1]} desc={content[2]} />

      <div className="simple-grid">
        {['Build Relationships', 'Give & Receive Referrals', 'Trusted Network', 'Business Growth', 'Global Community', 'Lifelong Learning'].map((x, i) => (
          <div key={x}>
            <span>{i + 1}</span>
            <h3>{x}</h3>
            <p>
              Meaningful connections, consistent support and opportunities that help your business
              grow.
            </p>
          </div>
        ))}
      </div>

      {/* <CTA /> */}
    </main>
  );
}

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <footer>
      <div className="footer-grid">
        <div>
          <Link className="brand footer-brand" to="/" aria-label="BNI Vision home">
            <span className="brand-icon" aria-hidden="true" />
            <span className="brand-text">
              <span className="brand-name">BNI Vision</span>
            </span>
          </Link>
          
        </div>

        {/* <div>
          <h4>Quick Links</h4>
          <Link to="/members">Members</Link>
          <Link to="/chapters">Chapters</Link>
          <Link to="/events">Events</Link>
          <button
            type="button"
            className="nav-link"
            onClick={(event) => {
              scrollToWhySection(event, navigate, location.pathname);
            }}
          >
            Why BNI
          </button>
        </div> */}

        {/* <div>
          <h4>Resources</h4>
          <Link to="/about">About BNI</Link>
          <Link to="/membership">Membership</Link>
          <Link to="/events">Events</Link>
          <Link to="/contact">Contact</Link>
        </div> */}

        {/* <div>
          <h4>Contact Us</h4>
          <p>
            <Mail /> info@bni-india.in
          </p>
          <p>
            <Phone /> 1800-123-4567
          </p>
          <p>
            <Clock3 /> Mon–Sat, 9 AM–6 PM
          </p>
        </div> */}
      </div>

      <div className="copyright">
        © 2026 BNI India. All rights reserved.
        <span>Privacy Policy • Terms of Service</span>
      </div>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/members/:id" element={<Detail kind="member" />} />
        {/* <Route path="/chapters" element={<Chapters />} /> */}
        {/* <Route path="/chapters/:id" element={<Detail kind="chapter" />} /> */}
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<Detail kind="event" />} />
        <Route path="/membership" element={<SimplePage type="membership" />} />
        <Route path="/about" element={<SimplePage type="about" />} />
        <Route path="/contact" element={<SimplePage type="contact" />} />
      </Routes>
      <Footer />
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);

