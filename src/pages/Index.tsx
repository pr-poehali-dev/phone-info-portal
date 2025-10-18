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

const Index = () => {
  const [activeTab, setActiveTab] = useState('news');
  const [showAddPhone, setShowAddPhone] = useState(false);
  const [phoneAdded, setPhoneAdded] = useState(false);
  const [phoneData, setPhoneData] = useState<PhoneData>({
    brand: '',
    model: '',
    processor: '',
    ram: '',
    storage: '',
    camera: '',
    battery: '',
    display: '',
    price: '',
    imageUrl: ''
  });

  const handleAddPhone = () => {
    if (phoneData.brand && phoneData.model) {
      setPhoneAdded(true);
      setShowAddPhone(false);
    }
  };

  const handleInputChange = (field: keyof PhoneData, value: string) => {
    setPhoneData(prev => ({ ...prev, [field]: value }));
  };







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
            {!phoneAdded && !showAddPhone && (
              <Card className="overflow-hidden border-2 border-green-200">
                <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500" />
                <CardContent className="pt-12 pb-12 text-center">
                  <Icon name="Smartphone" size={64} className="mx-auto mb-4 text-green-500" />
                  <CardTitle className="text-3xl mb-4">Ваш смартфон</CardTitle>
                  <CardDescription className="text-lg mb-6">
                    Добавьте свой телефон, чтобы увидеть его характеристики, рейтинг и всю важную информацию
                  </CardDescription>
                  <button 
                    onClick={() => setShowAddPhone(true)}
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:shadow-xl transition-all hover:scale-105"
                  >
                    <Icon name="Plus" size={20} className="inline mr-2" />
                    Добавить смартфон
                  </button>
                </CardContent>
              </Card>
            )}

            {showAddPhone && (
              <Card className="overflow-hidden border-2 border-green-200">
                <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500" />
                <CardHeader>
                  <CardTitle className="text-2xl">Добавить смартфон</CardTitle>
                  <CardDescription>Заполните информацию о вашем телефоне</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="brand">Бренд</Label>
                      <Input 
                        id="brand" 
                        placeholder="Apple, Samsung, Xiaomi..." 
                        value={phoneData.brand}
                        onChange={(e) => handleInputChange('brand', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="model">Модель</Label>
                      <Input 
                        id="model" 
                        placeholder="iPhone 15 Pro Max" 
                        value={phoneData.model}
                        onChange={(e) => handleInputChange('model', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="processor">Процессор</Label>
                      <Input 
                        id="processor" 
                        placeholder="A17 Pro" 
                        value={phoneData.processor}
                        onChange={(e) => handleInputChange('processor', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ram">RAM</Label>
                      <Input 
                        id="ram" 
                        placeholder="8 GB" 
                        value={phoneData.ram}
                        onChange={(e) => handleInputChange('ram', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="storage">Память</Label>
                      <Input 
                        id="storage" 
                        placeholder="256 GB" 
                        value={phoneData.storage}
                        onChange={(e) => handleInputChange('storage', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="camera">Камера</Label>
                      <Input 
                        id="camera" 
                        placeholder="48 MP" 
                        value={phoneData.camera}
                        onChange={(e) => handleInputChange('camera', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="battery">Батарея</Label>
                      <Input 
                        id="battery" 
                        placeholder="4422 mAh" 
                        value={phoneData.battery}
                        onChange={(e) => handleInputChange('battery', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="display">Дисплей</Label>
                      <Input 
                        id="display" 
                        placeholder="6.7\" OLED" 
                        value={phoneData.display}
                        onChange={(e) => handleInputChange('display', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">Цена</Label>
                      <Input 
                        id="price" 
                        placeholder="99 990 ₽" 
                        value={phoneData.price}
                        onChange={(e) => handleInputChange('price', e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="image">URL изображения</Label>
                      <Input 
                        id="image" 
                        placeholder="https://example.com/phone.jpg" 
                        value={phoneData.imageUrl}
                        onChange={(e) => handleInputChange('imageUrl', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex gap-3 pt-4">
                    <button 
                      onClick={handleAddPhone}
                      className="flex-1 px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold hover:shadow-xl transition-all hover:scale-105"
                    >
                      <Icon name="Check" size={20} className="inline mr-2" />
                      Сохранить
                    </button>
                    <button 
                      onClick={() => setShowAddPhone(false)}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-gray-500 to-gray-600 text-white font-semibold hover:shadow-lg transition-shadow"
                    >
                      Отмена
                    </button>
                  </div>
                </CardContent>
              </Card>
            )}

            {phoneAdded && (
              <div className="space-y-6">
                <Card className="overflow-hidden border-2 border-green-200">
                  <div className="h-2 bg-gradient-to-r from-green-500 to-emerald-500" />
                  <CardContent className="pt-8">
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-shrink-0">
                        {phoneData.imageUrl ? (
                          <img 
                            src={phoneData.imageUrl} 
                            alt={`${phoneData.brand} ${phoneData.model}`}
                            className="w-full md:w-64 h-auto rounded-lg shadow-lg object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
                            }}
                          />
                        ) : null}
                        <div className={phoneData.imageUrl ? 'hidden' : 'w-full md:w-64 h-80 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg shadow-lg flex items-center justify-center'}>
                          <Icon name="Smartphone" size={80} className="text-white/50" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="mb-6">
                          <p className="text-sm text-muted-foreground mb-1">{phoneData.brand}</p>
                          <h2 className="text-4xl font-bold mb-2">{phoneData.model}</h2>
                          {phoneData.price && (
                            <p className="text-2xl font-semibold text-green-600">{phoneData.price}</p>
                          )}
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          {phoneData.processor && (
                            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                              <Icon name="Cpu" size={24} className="text-purple-500" />
                              <div>
                                <p className="text-xs text-muted-foreground">Процессор</p>
                                <p className="font-semibold">{phoneData.processor}</p>
                              </div>
                            </div>
                          )}
                          {phoneData.ram && (
                            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg">
                              <Icon name="MemoryStick" size={24} className="text-blue-500" />
                              <div>
                                <p className="text-xs text-muted-foreground">RAM</p>
                                <p className="font-semibold">{phoneData.ram}</p>
                              </div>
                            </div>
                          )}
                          {phoneData.storage && (
                            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg">
                              <Icon name="HardDrive" size={24} className="text-cyan-500" />
                              <div>
                                <p className="text-xs text-muted-foreground">Память</p>
                                <p className="font-semibold">{phoneData.storage}</p>
                              </div>
                            </div>
                          )}
                          {phoneData.camera && (
                            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
                              <Icon name="Camera" size={24} className="text-pink-500" />
                              <div>
                                <p className="text-xs text-muted-foreground">Камера</p>
                                <p className="font-semibold">{phoneData.camera}</p>
                              </div>
                            </div>
                          )}
                          {phoneData.battery && (
                            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                              <Icon name="Battery" size={24} className="text-green-500" />
                              <div>
                                <p className="text-xs text-muted-foreground">Батарея</p>
                                <p className="font-semibold">{phoneData.battery}</p>
                              </div>
                            </div>
                          )}
                          {phoneData.display && (
                            <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg">
                              <Icon name="Monitor" size={24} className="text-orange-500" />
                              <div>
                                <p className="text-xs text-muted-foreground">Дисплей</p>
                                <p className="font-semibold">{phoneData.display}</p>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="mt-6 flex gap-3">
                          <button 
                            onClick={() => {
                              setPhoneAdded(false);
                              setShowAddPhone(true);
                            }}
                            className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-lg transition-shadow"
                          >
                            <Icon name="Edit" size={16} className="inline mr-2" />
                            Редактировать
                          </button>
                          <button 
                            onClick={() => {
                              setPhoneAdded(false);
                              setPhoneData({
                                brand: '',
                                model: '',
                                processor: '',
                                ram: '',
                                storage: '',
                                camera: '',
                                battery: '',
                                display: '',
                                price: '',
                                imageUrl: ''
                              });
                            }}
                            className="px-6 py-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold hover:shadow-lg transition-shadow"
                          >
                            <Icon name="Trash2" size={16} className="inline mr-2" />
                            Удалить
                          </button>
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