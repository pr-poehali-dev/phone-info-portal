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
            {!selectedBrand && (
              <div>
                <Card className="overflow-hidden border-2 border-green-200 mb-6">
                  <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500" />
                  <CardContent className="pt-8 pb-8 text-center">
                    <Icon name="Smartphone" size={48} className="mx-auto mb-3 text-green-500" />
                    <CardTitle className="text-2xl mb-2">Выберите бренд</CardTitle>
                    <CardDescription className="text-base">
                      Выберите производителя вашего смартфона
                    </CardDescription>
                  </CardContent>
                </Card>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {brandsData.map((brand) => (
                    <button
                      key={brand.name}
                      onClick={() => handleBrandSelect(brand.name)}
                      className="p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-green-400 hover:shadow-xl transition-all hover:scale-105 group"
                    >
                      <div className="text-5xl mb-3">{brand.logo}</div>
                      <h3 className="text-xl font-bold group-hover:text-green-600 transition-colors">{brand.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{brand.models.length} моделей</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedBrand && !selectedModel && selectedBrandData && (
              <div>
                <button
                  onClick={handleBack}
                  className="mb-4 px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors flex items-center gap-2"
                >
                  <Icon name="ArrowLeft" size={16} />
                  Назад к брендам
                </button>
                <Card className="overflow-hidden border-2 border-green-200 mb-6">
                  <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500" />
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="text-5xl mb-3">{selectedBrandData.logo}</div>
                    <CardTitle className="text-2xl mb-2">{selectedBrand}</CardTitle>
                    <CardDescription className="text-base">
                      Выберите модель телефона
                    </CardDescription>
                  </CardContent>
                </Card>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedBrandData.models.map((model, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleModelSelect(model, selectedBrand)}
                      className="p-4 rounded-2xl bg-white border-2 border-gray-200 hover:border-green-400 hover:shadow-xl transition-all hover:scale-105 text-left group"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon name="Smartphone" size={32} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold group-hover:text-green-600 transition-colors">{model.name}</h3>
                          <p className="text-sm text-muted-foreground">{model.processor}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-semibold text-green-600">{model.price}</p>
                        <Icon name="ChevronRight" size={20} className="text-gray-400 group-hover:text-green-600 transition-colors" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedModel && (
              <div>
                <button
                  onClick={handleBack}
                  className="mb-4 px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors flex items-center gap-2"
                >
                  <Icon name="ArrowLeft" size={16} />
                  Назад к моделям
                </button>
                <Card className="overflow-hidden border-2 border-green-200">
                  <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500" />
                  <CardContent className="pt-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-shrink-0">
                        <img 
                          src={selectedModel.imageUrl} 
                          alt={selectedModel.name}
                          className="w-full md:w-64 h-auto rounded-lg shadow-lg object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <div className="hidden w-full md:w-64 h-80 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg shadow-lg flex items-center justify-center">
                          <Icon name="Smartphone" size={80} className="text-white/50" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="mb-6">
                          <p className="text-sm text-muted-foreground mb-1">{selectedBrand}</p>
                          <h2 className="text-4xl font-bold mb-2">{selectedModel.name}</h2>
                          <p className="text-2xl font-semibold text-green-600">{selectedModel.price}</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                            <Icon name="Cpu" size={24} className="text-purple-500" />
                            <div>
                              <p className="text-xs text-muted-foreground">Процессор</p>
                              <p className="font-semibold">{selectedModel.processor}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
                            <Icon name="MemoryStick" size={24} className="text-blue-500" />
                            <div>
                              <p className="text-xs text-muted-foreground">RAM</p>
                              <p className="font-semibold">{selectedModel.ram}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg">
                            <Icon name="HardDrive" size={24} className="text-cyan-500" />
                            <div>
                              <p className="text-xs text-muted-foreground">Память</p>
                              <p className="font-semibold">{selectedModel.storage}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
                            <Icon name="Camera" size={24} className="text-pink-500" />
                            <div>
                              <p className="text-xs text-muted-foreground">Камера</p>
                              <p className="font-semibold">{selectedModel.camera}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                            <Icon name="Battery" size={24} className="text-green-500" />
                            <div>
                              <p className="text-xs text-muted-foreground">Батарея</p>
                              <p className="font-semibold">{selectedModel.battery}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                            <Icon name="Monitor" size={24} className="text-orange-500" />
                            <div>
                              <p className="text-xs text-muted-foreground">Дисплей</p>
                              <p className="font-semibold">{selectedModel.display}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
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