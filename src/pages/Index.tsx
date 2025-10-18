import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

interface PhoneModel {
  name: string;
  year: number;
  processor: string;
  ram: string;
  storage: string;
  camera: string;
  battery: string;
  display: string;
  price: string;
  imageUrl: string;
  releaseDate: string;
}

const iPhones: PhoneModel[] = [
  {
    name: 'iPhone 17 Pro Max',
    year: 2025,
    processor: 'A19 Pro',
    ram: '12 GB',
    storage: '256/512 GB/1 TB',
    camera: '48 MP + 48 MP + 12 MP',
    battery: '4685 mAh',
    display: '6.9" OLED 120Hz',
    price: '139 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1695048133083-1cbe0c8e744c?w=400',
    releaseDate: 'Сентябрь 2025'
  },
  {
    name: 'iPhone 17 Pro',
    year: 2025,
    processor: 'A19 Pro',
    ram: '12 GB',
    storage: '128/256/512 GB',
    camera: '48 MP + 48 MP + 12 MP',
    battery: '4422 mAh',
    display: '6.3" OLED 120Hz',
    price: '119 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1695048133083-1cbe0c8e744c?w=400',
    releaseDate: 'Сентябрь 2025'
  },
  {
    name: 'iPhone 16 Pro Max',
    year: 2024,
    processor: 'A18 Pro',
    ram: '8 GB',
    storage: '256/512 GB/1 TB',
    camera: '48 MP + 48 MP + 12 MP',
    battery: '4685 mAh',
    display: '6.9" OLED 120Hz',
    price: '129 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1695048064698-9c6a2b1ec03b?w=400',
    releaseDate: 'Сентябрь 2024'
  },
  {
    name: 'iPhone 16 Pro',
    year: 2024,
    processor: 'A18 Pro',
    ram: '8 GB',
    storage: '128/256/512 GB',
    camera: '48 MP + 48 MP + 12 MP',
    battery: '3582 mAh',
    display: '6.3" OLED 120Hz',
    price: '109 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1695048064698-9c6a2b1ec03b?w=400',
    releaseDate: 'Сентябрь 2024'
  },
  {
    name: 'iPhone 16 Plus',
    year: 2024,
    processor: 'A18',
    ram: '8 GB',
    storage: '128/256/512 GB',
    camera: '48 MP + 12 MP',
    battery: '4674 mAh',
    display: '6.7" OLED 60Hz',
    price: '94 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1695048064698-9c6a2b1ec03b?w=400',
    releaseDate: 'Сентябрь 2024'
  },
  {
    name: 'iPhone 16',
    year: 2024,
    processor: 'A18',
    ram: '8 GB',
    storage: '128/256/512 GB',
    camera: '48 MP + 12 MP',
    battery: '3561 mAh',
    display: '6.1" OLED 60Hz',
    price: '79 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1695048064698-9c6a2b1ec03b?w=400',
    releaseDate: 'Сентябрь 2024'
  },
  {
    name: 'iPhone 15 Pro Max',
    year: 2023,
    processor: 'A17 Pro',
    ram: '8 GB',
    storage: '256/512 GB/1 TB',
    camera: '48 MP + 12 MP + 12 MP',
    battery: '4422 mAh',
    display: '6.7" OLED 120Hz',
    price: '119 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1695048064698-9c6a2b1ec03b?w=400',
    releaseDate: 'Сентябрь 2023'
  },
  {
    name: 'iPhone 15 Pro',
    year: 2023,
    processor: 'A17 Pro',
    ram: '8 GB',
    storage: '128/256/512 GB/1 TB',
    camera: '48 MP + 12 MP + 12 MP',
    battery: '3274 mAh',
    display: '6.1" OLED 120Hz',
    price: '99 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1695048064698-9c6a2b1ec03b?w=400',
    releaseDate: 'Сентябрь 2023'
  },
  {
    name: 'iPhone 15 Plus',
    year: 2023,
    processor: 'A16 Bionic',
    ram: '6 GB',
    storage: '128/256/512 GB',
    camera: '48 MP + 12 MP',
    battery: '4383 mAh',
    display: '6.7" OLED 60Hz',
    price: '84 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1695048064698-9c6a2b1ec03b?w=400',
    releaseDate: 'Сентябрь 2023'
  },
  {
    name: 'iPhone 15',
    year: 2023,
    processor: 'A16 Bionic',
    ram: '6 GB',
    storage: '128/256/512 GB',
    camera: '48 MP + 12 MP',
    battery: '3349 mAh',
    display: '6.1" OLED 60Hz',
    price: '69 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1695048064698-9c6a2b1ec03b?w=400',
    releaseDate: 'Сентябрь 2023'
  },
  {
    name: 'iPhone 14 Pro Max',
    year: 2022,
    processor: 'A16 Bionic',
    ram: '6 GB',
    storage: '128/256/512 GB/1 TB',
    camera: '48 MP + 12 MP + 12 MP',
    battery: '4323 mAh',
    display: '6.7" OLED 120Hz',
    price: '109 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=400',
    releaseDate: 'Сентябрь 2022'
  },
  {
    name: 'iPhone 14 Pro',
    year: 2022,
    processor: 'A16 Bionic',
    ram: '6 GB',
    storage: '128/256/512 GB/1 TB',
    camera: '48 MP + 12 MP + 12 MP',
    battery: '3200 mAh',
    display: '6.1" OLED 120Hz',
    price: '89 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=400',
    releaseDate: 'Сентябрь 2022'
  },
  {
    name: 'iPhone 14 Plus',
    year: 2022,
    processor: 'A15 Bionic',
    ram: '6 GB',
    storage: '128/256/512 GB',
    camera: '12 MP + 12 MP',
    battery: '4325 mAh',
    display: '6.7" OLED 60Hz',
    price: '79 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=400',
    releaseDate: 'Сентябрь 2022'
  },
  {
    name: 'iPhone 14',
    year: 2022,
    processor: 'A15 Bionic',
    ram: '6 GB',
    storage: '128/256/512 GB',
    camera: '12 MP + 12 MP',
    battery: '3279 mAh',
    display: '6.1" OLED 60Hz',
    price: '64 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=400',
    releaseDate: 'Сентябрь 2022'
  },
  {
    name: 'iPhone 13 Pro Max',
    year: 2021,
    processor: 'A15 Bionic',
    ram: '6 GB',
    storage: '128/256/512 GB/1 TB',
    camera: '12 MP + 12 MP + 12 MP',
    battery: '4352 mAh',
    display: '6.7" OLED 120Hz',
    price: '99 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400',
    releaseDate: 'Сентябрь 2021'
  },
  {
    name: 'iPhone 13 Pro',
    year: 2021,
    processor: 'A15 Bionic',
    ram: '6 GB',
    storage: '128/256/512 GB/1 TB',
    camera: '12 MP + 12 MP + 12 MP',
    battery: '3095 mAh',
    display: '6.1" OLED 120Hz',
    price: '79 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400',
    releaseDate: 'Сентябрь 2021'
  },
  {
    name: 'iPhone 13',
    year: 2021,
    processor: 'A15 Bionic',
    ram: '4 GB',
    storage: '128/256/512 GB',
    camera: '12 MP + 12 MP',
    battery: '3240 mAh',
    display: '6.1" OLED 60Hz',
    price: '59 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400',
    releaseDate: 'Сентябрь 2021'
  },
  {
    name: 'iPhone 13 mini',
    year: 2021,
    processor: 'A15 Bionic',
    ram: '4 GB',
    storage: '128/256/512 GB',
    camera: '12 MP + 12 MP',
    battery: '2438 mAh',
    display: '5.4" OLED 60Hz',
    price: '49 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=400',
    releaseDate: 'Сентябрь 2021'
  },
  {
    name: 'iPhone 12 Pro Max',
    year: 2020,
    processor: 'A14 Bionic',
    ram: '6 GB',
    storage: '128/256/512 GB',
    camera: '12 MP + 12 MP + 12 MP',
    battery: '3687 mAh',
    display: '6.7" OLED 60Hz',
    price: '89 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?w=400',
    releaseDate: 'Октябрь 2020'
  },
  {
    name: 'iPhone 12 Pro',
    year: 2020,
    processor: 'A14 Bionic',
    ram: '6 GB',
    storage: '128/256/512 GB',
    camera: '12 MP + 12 MP + 12 MP',
    battery: '2815 mAh',
    display: '6.1" OLED 60Hz',
    price: '69 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?w=400',
    releaseDate: 'Октябрь 2020'
  },
  {
    name: 'iPhone 12',
    year: 2020,
    processor: 'A14 Bionic',
    ram: '4 GB',
    storage: '64/128/256 GB',
    camera: '12 MP + 12 MP',
    battery: '2815 mAh',
    display: '6.1" OLED 60Hz',
    price: '54 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?w=400',
    releaseDate: 'Октябрь 2020'
  },
  {
    name: 'iPhone 12 mini',
    year: 2020,
    processor: 'A14 Bionic',
    ram: '4 GB',
    storage: '64/128/256 GB',
    camera: '12 MP + 12 MP',
    battery: '2227 mAh',
    display: '5.4" OLED 60Hz',
    price: '44 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?w=400',
    releaseDate: 'Ноябрь 2020'
  },
  {
    name: 'iPhone SE (2020)',
    year: 2020,
    processor: 'A13 Bionic',
    ram: '3 GB',
    storage: '64/128/256 GB',
    camera: '12 MP',
    battery: '1821 mAh',
    display: '4.7" LCD',
    price: '39 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400',
    releaseDate: 'Апрель 2020'
  },
  {
    name: 'iPhone 11 Pro Max',
    year: 2019,
    processor: 'A13 Bionic',
    ram: '4 GB',
    storage: '64/256/512 GB',
    camera: '12 MP + 12 MP + 12 MP',
    battery: '3969 mAh',
    display: '6.5" OLED 60Hz',
    price: '79 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1574755393849-623942496936?w=400',
    releaseDate: 'Сентябрь 2019'
  },
  {
    name: 'iPhone 11 Pro',
    year: 2019,
    processor: 'A13 Bionic',
    ram: '4 GB',
    storage: '64/256/512 GB',
    camera: '12 MP + 12 MP + 12 MP',
    battery: '3046 mAh',
    display: '5.8" OLED 60Hz',
    price: '64 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1574755393849-623942496936?w=400',
    releaseDate: 'Сентябрь 2019'
  },
  {
    name: 'iPhone 11',
    year: 2019,
    processor: 'A13 Bionic',
    ram: '4 GB',
    storage: '64/128/256 GB',
    camera: '12 MP + 12 MP',
    battery: '3110 mAh',
    display: '6.1" LCD',
    price: '49 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1574755393849-623942496936?w=400',
    releaseDate: 'Сентябрь 2019'
  },
  {
    name: 'iPhone XS Max',
    year: 2018,
    processor: 'A12 Bionic',
    ram: '4 GB',
    storage: '64/256/512 GB',
    camera: '12 MP + 12 MP',
    battery: '3174 mAh',
    display: '6.5" OLED 60Hz',
    price: '69 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
    releaseDate: 'Сентябрь 2018'
  },
  {
    name: 'iPhone XS',
    year: 2018,
    processor: 'A12 Bionic',
    ram: '4 GB',
    storage: '64/256/512 GB',
    camera: '12 MP + 12 MP',
    battery: '2658 mAh',
    display: '5.8" OLED 60Hz',
    price: '54 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
    releaseDate: 'Сентябрь 2018'
  },
  {
    name: 'iPhone XR',
    year: 2018,
    processor: 'A12 Bionic',
    ram: '3 GB',
    storage: '64/128/256 GB',
    camera: '12 MP',
    battery: '2942 mAh',
    display: '6.1" LCD',
    price: '44 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400',
    releaseDate: 'Октябрь 2018'
  },
  {
    name: 'iPhone X',
    year: 2017,
    processor: 'A11 Bionic',
    ram: '3 GB',
    storage: '64/256 GB',
    camera: '12 MP + 12 MP',
    battery: '2716 mAh',
    display: '5.8" OLED 60Hz',
    price: '64 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400',
    releaseDate: 'Ноябрь 2017'
  },
  {
    name: 'iPhone 8 Plus',
    year: 2017,
    processor: 'A11 Bionic',
    ram: '3 GB',
    storage: '64/256 GB',
    camera: '12 MP + 12 MP',
    battery: '2691 mAh',
    display: '5.5" LCD',
    price: '49 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400',
    releaseDate: 'Сентябрь 2017'
  },
  {
    name: 'iPhone 8',
    year: 2017,
    processor: 'A11 Bionic',
    ram: '2 GB',
    storage: '64/256 GB',
    camera: '12 MP',
    battery: '1821 mAh',
    display: '4.7" LCD',
    price: '39 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400',
    releaseDate: 'Сентябрь 2017'
  },
  {
    name: 'iPhone 7 Plus',
    year: 2016,
    processor: 'A10 Fusion',
    ram: '3 GB',
    storage: '32/128/256 GB',
    camera: '12 MP + 12 MP',
    battery: '2900 mAh',
    display: '5.5" LCD',
    price: '44 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400',
    releaseDate: 'Сентябрь 2016'
  },
  {
    name: 'iPhone 7',
    year: 2016,
    processor: 'A10 Fusion',
    ram: '2 GB',
    storage: '32/128/256 GB',
    camera: '12 MP',
    battery: '1960 mAh',
    display: '4.7" LCD',
    price: '34 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400',
    releaseDate: 'Сентябрь 2016'
  },
  {
    name: 'iPhone SE (2016)',
    year: 2016,
    processor: 'A9',
    ram: '2 GB',
    storage: '16/64 GB',
    camera: '12 MP',
    battery: '1624 mAh',
    display: '4" LCD',
    price: '29 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400',
    releaseDate: 'Март 2016'
  },
  {
    name: 'iPhone 6s Plus',
    year: 2015,
    processor: 'A9',
    ram: '2 GB',
    storage: '16/64/128 GB',
    camera: '12 MP',
    battery: '2750 mAh',
    display: '5.5" LCD',
    price: '39 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400',
    releaseDate: 'Сентябрь 2015'
  },
  {
    name: 'iPhone 6s',
    year: 2015,
    processor: 'A9',
    ram: '2 GB',
    storage: '16/64/128 GB',
    camera: '12 MP',
    battery: '1715 mAh',
    display: '4.7" LCD',
    price: '29 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=400',
    releaseDate: 'Сентябрь 2015'
  },
  {
    name: 'iPhone 6 Plus',
    year: 2014,
    processor: 'A8',
    ram: '1 GB',
    storage: '16/64/128 GB',
    camera: '8 MP',
    battery: '2915 mAh',
    display: '5.5" LCD',
    price: '34 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400',
    releaseDate: 'Сентябрь 2014'
  },
  {
    name: 'iPhone 6',
    year: 2014,
    processor: 'A8',
    ram: '1 GB',
    storage: '16/64/128 GB',
    camera: '8 MP',
    battery: '1810 mAh',
    display: '4.7" LCD',
    price: '24 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400',
    releaseDate: 'Сентябрь 2014'
  },
  {
    name: 'iPhone 5s',
    year: 2013,
    processor: 'A7',
    ram: '1 GB',
    storage: '16/32/64 GB',
    camera: '8 MP',
    battery: '1560 mAh',
    display: '4" LCD',
    price: '19 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400',
    releaseDate: 'Сентябрь 2013'
  },
  {
    name: 'iPhone 5c',
    year: 2013,
    processor: 'A6',
    ram: '1 GB',
    storage: '8/16/32 GB',
    camera: '8 MP',
    battery: '1510 mAh',
    display: '4" LCD',
    price: '16 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400',
    releaseDate: 'Сентябрь 2013'
  },
  {
    name: 'iPhone 5',
    year: 2012,
    processor: 'A6',
    ram: '1 GB',
    storage: '16/32/64 GB',
    camera: '8 MP',
    battery: '1440 mAh',
    display: '4" LCD',
    price: '19 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400',
    releaseDate: 'Сентябрь 2012'
  },
  {
    name: 'iPhone 4S',
    year: 2011,
    processor: 'A5',
    ram: '512 MB',
    storage: '8/16/32/64 GB',
    camera: '8 MP',
    battery: '1432 mAh',
    display: '3.5" LCD',
    price: '14 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400',
    releaseDate: 'Октябрь 2011'
  },
  {
    name: 'iPhone 4',
    year: 2010,
    processor: 'A4',
    ram: '512 MB',
    storage: '8/16/32 GB',
    camera: '5 MP',
    battery: '1420 mAh',
    display: '3.5" LCD',
    price: '12 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400',
    releaseDate: 'Июнь 2010'
  },
  {
    name: 'iPhone 3GS',
    year: 2009,
    processor: 'ARM Cortex-A8',
    ram: '256 MB',
    storage: '8/16/32 GB',
    camera: '3 MP',
    battery: '1219 mAh',
    display: '3.5" LCD',
    price: '9 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400',
    releaseDate: 'Июнь 2009'
  },
  {
    name: 'iPhone 3G',
    year: 2008,
    processor: 'ARM 1176JZ(F)-S',
    ram: '128 MB',
    storage: '8/16 GB',
    camera: '2 MP',
    battery: '1150 mAh',
    display: '3.5" LCD',
    price: '7 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400',
    releaseDate: 'Июль 2008'
  },
  {
    name: 'iPhone 2G',
    year: 2007,
    processor: 'ARM 1176JZ(F)-S',
    ram: '128 MB',
    storage: '4/8/16 GB',
    camera: '2 MP',
    battery: '1400 mAh',
    display: '3.5" LCD',
    price: '19 990 ₽',
    imageUrl: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400',
    releaseDate: 'Июнь 2007'
  }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('specs');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhone, setSelectedPhone] = useState<PhoneModel | null>(null);
  const [filterYear, setFilterYear] = useState<number | null>(null);

  const years = Array.from(new Set(iPhones.map(p => p.year))).sort((a, b) => b - a);

  const filteredPhones = iPhones.filter(phone => {
    const matchesSearch = phone.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         phone.processor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesYear = filterYear === null || phone.year === filterYear;
    return matchesSearch && matchesYear;
  });

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 pointer-events-none"></div>
      <div className="fixed inset-0 opacity-20 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(139, 92, 246, 0.3) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <header className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border-b border-purple-500/30 sticky top-0 z-50 relative">
        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex items-center justify-center gap-3">
            <Icon name="Smartphone" size={40} className="text-purple-400" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent font-orbitron tracking-wider">
              FOLLOW TECH
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            База знаний iPhone
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Полная история iPhone от 2G до 17 Pro Max — все модели с характеристиками
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8 bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-lg border border-purple-500/30">
            <TabsTrigger value="news" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white">
              <Icon name="Newspaper" size={16} className="mr-2" />
              Новости
            </TabsTrigger>
            <TabsTrigger value="specs" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-cyan-600 data-[state=active]:text-white">
              <Icon name="Cpu" size={16} className="mr-2" />
              База iPhone
            </TabsTrigger>
            <TabsTrigger value="ratings" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-600 data-[state=active]:to-red-600 data-[state=active]:text-white">
              <Icon name="Trophy" size={16} className="mr-2" />
              Рейтинги
            </TabsTrigger>
            <TabsTrigger value="myphone" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-emerald-600 data-[state=active]:text-white">
              <Icon name="Smartphone" size={16} className="mr-2" />
              Ваш смартфон
            </TabsTrigger>
          </TabsList>

          <TabsContent value="news">
            <Card className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-2 border-purple-500/30 backdrop-blur-xl">
              <CardContent className="pt-12 pb-12 text-center">
                <Icon name="Construction" size={64} className="mx-auto mb-4 text-purple-400" />
                <CardTitle className="text-3xl mb-2 text-white">Раздел новостей в разработке</CardTitle>
                <CardDescription className="text-lg text-gray-400">Скоро здесь появятся последние новости о мобильных технологиях</CardDescription>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specs">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="🔍 Поиск по названию или процессору..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 border-purple-500/30 text-white placeholder:text-gray-500 backdrop-blur-xl h-12 text-lg"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  <button
                    onClick={() => setFilterYear(null)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      filterYear === null
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                        : 'bg-purple-900/30 text-gray-400 hover:bg-purple-800/50 border border-purple-500/30'
                    }`}
                  >
                    Все годы
                  </button>
                  {years.slice(0, 5).map(year => (
                    <button
                      key={year}
                      onClick={() => setFilterYear(year)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                        filterYear === year
                          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                          : 'bg-purple-900/30 text-gray-400 hover:bg-purple-800/50 border border-purple-500/30'
                      }`}
                    >
                      {year}
                    </button>
                  ))}
                </div>
              </div>

              {!selectedPhone ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredPhones.map((phone, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedPhone(phone)}
                      className="p-4 rounded-xl bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-2 border-purple-500/30 backdrop-blur-xl hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 text-left group"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="Smartphone" size={24} className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors truncate">{phone.name}</h3>
                          <p className="text-xs text-gray-400">{phone.releaseDate}</p>
                        </div>
                        <Badge className="bg-purple-600/50 text-white border-purple-400/50">{phone.year}</Badge>
                      </div>
                      <div className="space-y-1 text-xs text-gray-400">
                        <p>💻 {phone.processor}</p>
                        <p>📸 {phone.camera}</p>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <p className="text-lg font-semibold text-purple-400">{phone.price}</p>
                        <Icon name="ChevronRight" size={20} className="text-gray-500 group-hover:text-purple-400 transition-colors" />
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div>
                  <button
                    onClick={() => setSelectedPhone(null)}
                    className="mb-4 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-900/50 to-blue-900/50 border border-purple-500/30 hover:border-purple-400 transition-colors flex items-center gap-2 text-white backdrop-blur-xl"
                  >
                    <Icon name="ArrowLeft" size={16} />
                    Назад к списку
                  </button>
                  <Card className="bg-gradient-to-br from-purple-900/40 to-blue-900/40 border-2 border-purple-500/30 backdrop-blur-xl">
                    <CardContent className="pt-8">
                      <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-shrink-0">
                          <img
                            src={selectedPhone.imageUrl}
                            alt={selectedPhone.name}
                            className="w-full md:w-72 h-auto rounded-lg shadow-2xl shadow-purple-500/50 object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="mb-6">
                            <div className="flex items-center gap-3 mb-2">
                              <Badge className="bg-purple-600/50 text-white border-purple-400/50">{selectedPhone.year}</Badge>
                              <p className="text-sm text-gray-400">{selectedPhone.releaseDate}</p>
                            </div>
                            <h2 className="text-4xl font-bold mb-2 text-white">{selectedPhone.name}</h2>
                            <p className="text-3xl font-semibold text-purple-400">{selectedPhone.price}</p>
                          </div>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-900/60 to-pink-900/60 rounded-lg border border-purple-500/30">
                              <Icon name="Cpu" size={28} className="text-purple-400" />
                              <div>
                                <p className="text-xs text-gray-400">Процессор</p>
                                <p className="font-semibold text-white">{selectedPhone.processor}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-900/60 to-cyan-900/60 rounded-lg border border-blue-500/30">
                              <Icon name="MemoryStick" size={28} className="text-blue-400" />
                              <div>
                                <p className="text-xs text-gray-400">RAM</p>
                                <p className="font-semibold text-white">{selectedPhone.ram}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-cyan-900/60 to-blue-900/60 rounded-lg border border-cyan-500/30">
                              <Icon name="HardDrive" size={28} className="text-cyan-400" />
                              <div>
                                <p className="text-xs text-gray-400">Память</p>
                                <p className="font-semibold text-white">{selectedPhone.storage}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-pink-900/60 to-purple-900/60 rounded-lg border border-pink-500/30">
                              <Icon name="Camera" size={28} className="text-pink-400" />
                              <div>
                                <p className="text-xs text-gray-400">Камера</p>
                                <p className="font-semibold text-white">{selectedPhone.camera}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-green-900/60 to-emerald-900/60 rounded-lg border border-green-500/30">
                              <Icon name="Battery" size={28} className="text-green-400" />
                              <div>
                                <p className="text-xs text-gray-400">Батарея</p>
                                <p className="font-semibold text-white">{selectedPhone.battery}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 p-4 bg-gradient-to-r from-orange-900/60 to-red-900/60 rounded-lg border border-orange-500/30">
                              <Icon name="Monitor" size={28} className="text-orange-400" />
                              <div>
                                <p className="text-xs text-gray-400">Дисплей</p>
                                <p className="font-semibold text-white">{selectedPhone.display}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="ratings">
            <Card className="bg-gradient-to-br from-orange-900/40 to-red-900/40 border-2 border-orange-500/30 backdrop-blur-xl">
              <CardContent className="pt-12 pb-12 text-center">
                <Icon name="Award" size={64} className="mx-auto mb-4 text-orange-400" />
                <CardTitle className="text-3xl mb-2 text-white">Раздел рейтингов в разработке</CardTitle>
                <CardDescription className="text-lg text-gray-400">Скоро здесь появятся рейтинги и обзоры лучших смартфонов</CardDescription>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="myphone">
            <Card className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 border-2 border-green-500/30 backdrop-blur-xl">
              <CardContent className="pt-12 pb-12 text-center">
                <Icon name="Wrench" size={64} className="mx-auto mb-4 text-green-400" />
                <CardTitle className="text-3xl mb-2 text-white">Раздел в разработке</CardTitle>
                <CardDescription className="text-lg text-gray-400">Скоро здесь вы сможете добавить свой смартфон и узнать его характеристики</CardDescription>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-xl border-t border-purple-500/30 py-8 relative mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 FOLLOW TECH. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
