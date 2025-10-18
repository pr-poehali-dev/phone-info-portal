import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

interface PhoneData {
  brand: string;
  model: string;
  processor: string;
  ram: string;
  storage: string;
  camera: string;
  battery: string;
  display: string;
  price: string;
  imageUrl: string;
}

interface PhoneModel {
  name: string;
  processor: string;
  ram: string;
  storage: string;
  camera: string;
  battery: string;
  display: string;
  price: string;
  imageUrl: string;
}

interface Brand {
  name: string;
  logo: string;
  models: PhoneModel[];
}

const brandsData: Brand[] = [
  {
    name: 'Apple',
    logo: '🍎',
    models: [
      {
        name: 'iPhone 15 Pro Max',
        processor: 'A17 Pro',
        ram: '8 GB',
        storage: '256 GB',
        camera: '48 MP',
        battery: '4422 mAh',
        display: '6.7" OLED',
        price: '119 990 ₽',
        imageUrl: 'https://images.unsplash.com/photo-1695048064698-9c6a2b1ec03b?w=400'
      },
      {
        name: 'iPhone 15',
        processor: 'A16 Bionic',
        ram: '6 GB',
        storage: '128 GB',
        camera: '48 MP',
        battery: '3349 mAh',
        display: '6.1" OLED',
        price: '79 990 ₽',
        imageUrl: 'https://images.unsplash.com/photo-1695048064698-9c6a2b1ec03b?w=400'
      }
    ]
  },
  {
    name: 'Samsung',
    logo: '📱',
    models: [
      {
        name: 'Galaxy S24 Ultra',
        processor: 'Snapdragon 8 Gen 3',
        ram: '12 GB',
        storage: '256 GB',
        camera: '200 MP',
        battery: '5000 mAh',
        display: '6.8" AMOLED',
        price: '109 990 ₽',
        imageUrl: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400'
      },
      {
        name: 'Galaxy S24',
        processor: 'Exynos 2400',
        ram: '8 GB',
        storage: '128 GB',
        camera: '50 MP',
        battery: '4000 mAh',
        display: '6.2" AMOLED',
        price: '79 990 ₽',
        imageUrl: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400'
      }
    ]
  },
  {
    name: 'Xiaomi',
    logo: '⚡',
    models: [
      {
        name: 'Xiaomi 14 Pro',
        processor: 'Snapdragon 8 Gen 3',
        ram: '12 GB',
        storage: '256 GB',
        camera: '50 MP',
        battery: '4880 mAh',
        display: '6.73" AMOLED',
        price: '69 990 ₽',
        imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400'
      },
      {
        name: 'Redmi Note 13 Pro',
        processor: 'Snapdragon 7s Gen 2',
        ram: '8 GB',
        storage: '256 GB',
        camera: '200 MP',
        battery: '5100 mAh',
        display: '6.67" AMOLED',
        price: '29 990 ₽',
        imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400'
      }
    ]
  },
  {
    name: 'OnePlus',
    logo: '1️⃣',
    models: [
      {
        name: 'OnePlus 12',
        processor: 'Snapdragon 8 Gen 3',
        ram: '16 GB',
        storage: '512 GB',
        camera: '50 MP',
        battery: '5400 mAh',
        display: '6.82" AMOLED',
        price: '64 990 ₽',
        imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400'
      }
    ]
  },
  {
    name: 'Nothing',
    logo: '⭕',
    models: [
      {
        name: 'Nothing Phone (2)',
        processor: 'Snapdragon 8+ Gen 1',
        ram: '12 GB',
        storage: '256 GB',
        camera: '50 MP',
        battery: '4700 mAh',
        display: '6.7" OLED',
        price: '54 990 ₽',
        imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400'
      }
    ]
  },
  {
    name: 'Google',
    logo: '🔍',
    models: [
      {
        name: 'Pixel 8 Pro',
        processor: 'Google Tensor G3',
        ram: '12 GB',
        storage: '128 GB',
        camera: '50 MP',
        battery: '5050 mAh',
        display: '6.7" OLED',
        price: '89 990 ₽',
        imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=400'
      }
    ]
  }
];

const Index = () => {
  const [activeTab, setActiveTab] = useState('news');
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState<PhoneModel | null>(null);

  const handleBrandSelect = (brandName: string) => {
    setSelectedBrand(brandName);
    setSelectedModel(null);
  };

  const handleModelSelect = (model: PhoneModel, brandName: string) => {
    setSelectedModel(model);
  };

  const handleBack = () => {
    if (selectedModel) {
      setSelectedModel(null);
    } else if (selectedBrand) {
      setSelectedBrand(null);
    }
  };

  const selectedBrandData = brandsData.find(b => b.name === selectedBrand);







  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 relative">
      <div className="fixed left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-transparent pointer-events-none z-40"></div>
      <div className="fixed right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-orange-500/20 via-pink-500/20 to-transparent pointer-events-none z-40"></div>
      
      <header className="bg-white/80 backdrop-blur-lg border-b border-purple-100 sticky top-0 z-50 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-purple-500 via-pink-500 to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-orange-500 via-pink-500 to-transparent"></div>
        <div className="container mx-auto px-4 py-6 relative z-10">
          <div className="flex items-center justify-center">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent font-orbitron tracking-wider">
              FOLLOW TECH
            </h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Мир мобильных технологий
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Новости, характеристики и рейтинги лучших смартфонов 2025 года
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-8 bg-white/80 backdrop-blur-lg">
            <TabsTrigger value="news" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white">
              <Icon name="Newspaper" size={16} className="mr-2" />
              Новости
            </TabsTrigger>
            <TabsTrigger value="specs" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white">
              <Icon name="Cpu" size={16} className="mr-2" />
              Характеристики
            </TabsTrigger>
            <TabsTrigger value="ratings" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-orange-500 data-[state=active]:to-red-500 data-[state=active]:text-white">
              <Icon name="Trophy" size={16} className="mr-2" />
              Рейтинги
            </TabsTrigger>
            <TabsTrigger value="myphone" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-emerald-500 data-[state=active]:text-white">
              <Icon name="Smartphone" size={16} className="mr-2" />
              Ваш смартфон
            </TabsTrigger>
          </TabsList>

          <TabsContent value="news" className="animate-slide-up">
            <Card className="overflow-hidden border-2 border-purple-200">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500" />
              <CardContent className="pt-12 pb-12 text-center">
                <Icon name="Construction" size={64} className="mx-auto mb-4 text-purple-500" />
                <CardTitle className="text-3xl mb-2">Раздел новостей в разработке</CardTitle>
                <CardDescription className="text-lg">Скоро здесь появятся последние новости о мобильных технологиях</CardDescription>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="specs" className="animate-slide-up">
            <Card className="overflow-hidden border-2 border-blue-200">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500" />
              <CardContent className="pt-12 pb-12 text-center">
                <Icon name="Settings" size={64} className="mx-auto mb-4 text-blue-500" />
                <CardTitle className="text-3xl mb-2">Раздел характеристик в разработке</CardTitle>
                <CardDescription className="text-lg">Скоро здесь появится подробное сравнение характеристик смартфонов</CardDescription>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ratings" className="animate-slide-up">
            <Card className="overflow-hidden border-2 border-orange-200">
              <div className="h-2 bg-gradient-to-r from-orange-500 to-red-500" />
              <CardContent className="pt-12 pb-12 text-center">
                <Icon name="Award" size={64} className="mx-auto mb-4 text-orange-500" />
                <CardTitle className="text-3xl mb-2">Раздел рейтингов в разработке</CardTitle>
                <CardDescription className="text-lg">Скоро здесь появятся рейтинги и обзоры лучших смартфонов</CardDescription>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="myphone" className="animate-slide-up">
            <Card className="overflow-hidden border-2 border-green-200">
              <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500" />
              <CardContent className="pt-12 pb-12 text-center">
                <Icon name="Wrench" size={64} className="mx-auto mb-4 text-green-500" />
                <CardTitle className="text-3xl mb-2">Раздел в разработке</CardTitle>
                <CardDescription className="text-lg">Скоро здесь вы сможете добавить свой смартфон и узнать его характеристики</CardDescription>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 mt-20 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="text-center">
            <p className="text-white text-sm font-orbitron tracking-wide">
              ВЕРСИЯ 0.0678
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;