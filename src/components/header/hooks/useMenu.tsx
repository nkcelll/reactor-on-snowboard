import { useEffect, useState } from 'react';

interface SubCategory {
  id: string;
  subCat: string;
  url: string;
};

interface TopCategory {
  id: string;
  topCat: string;
  subCategory: SubCategory[];
};

interface MenuItem {
  label: string;
  data: TopCategory[];
};

export default function useMenu(): [MenuItem[], string] {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [err, setErr] = useState('');

  useEffect(() => {
    const fetchNavMenu = async () => {
      try {
        const [menRes, womenRes, kidRes, saleRes] = await Promise.all([
          fetch(
            'https://reactor-on-snowboard-server.onrender.com/api/home/menu/men',
          ),
          fetch(
            'https://reactor-on-snowboard-server.onrender.com/api/home/menu/women',
          ),
          fetch(
            'https://reactor-on-snowboard-server.onrender.com/api/home/menu/kids',
          ),
          fetch(
            'https://reactor-on-snowboard-server.onrender.com/api/home/menu/sale',
          ),
        ]);

        const [men, women, kids, sale] = await Promise.all([
          menRes.json(),
          womenRes.json(),
          kidRes.json(),
          saleRes.json(),
        ]);

        setMenuItems([
          { label: 'Men', data: men },
          { label: 'Women', data: women },
          { label: 'Kids', data: kids },
          { label: 'Sale', data: sale },
        ]);
      } catch (error) {
        if (error instanceof Error) {
          setErr(error.message);
        } else {
          setErr('Something went wrong');
        }
      }
    };
    fetchNavMenu();
  }, []);
  return [menuItems, err];
}
