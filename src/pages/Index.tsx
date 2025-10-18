import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('news');

  const news = [
    {
      id: 1,
      title: 'iPhone 15 Pro Max: революция в мобильной фотографии',
      date: '15 октября 2025',
      category: 'Обзоры',
      image: '📱',
      excerpt: 'Новый флагман Apple получил титановый корпус и невероятную камеру с 5x зумом',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'Samsung Galaxy S24 Ultra бьет рекорды продаж',
      date: '12 октября 2025',
      category: 'Новости',
      image: '🚀',
      excerpt: 'Корейский гигант представил смартфон с AI-процессором нового поколения',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Xiaomi 14 Pro: флагман за разумные деньги',
      date: '10 октября 2025',
      category: 'Анонсы',
      image: '⚡',
      excerpt: 'Китайский производитель удивил соотношением цена/качество',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const specs = [
    {
      brand: 'Apple',
      model: 'iPhone 15 Pro Max',
      processor: 'A17 Pro',
      ram: '8 GB',
      storage: '256 GB',
      camera: '48 MP',
      battery: '4422 mAh',
      color: 'bg-gradient-to-br from-purple-500 to-pink-500'
    },
    {
      brand: 'Samsung',
      model: 'Galaxy S24 Ultra',
      processor: 'Snapdragon 8 Gen 3',
      ram: '12 GB',
      storage: '512 GB',
      camera: '200 MP',
      battery: '5000 mAh',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-500'
    },
    {
      brand: 'Xiaomi',
      model: '14 Pro',
      processor: 'Snapdragon 8 Gen 3',
      ram: '12 GB',
      storage: '256 GB',
      camera: '50 MP',
      battery: '4880 mAh',
      color: 'bg-gradient-to-br from-orange-500 to-red-500'
    }
  ];

  const ratings = [
    {
      rank: 1,
      model: 'iPhone 15 Pro Max',
      brand: 'Apple',
      score: 9.5,
      price: '99 990 ₽',
      pros: ['Лучшая камера', 'Производительность', 'Экосистема'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      rank: 2,
      model: 'Galaxy S24 Ultra',
      brand: 'Samsung',
      score: 9.3,
      price: '89 990 ₽',
      pros: ['S Pen в комплекте', 'Большой экран', 'AI функции'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      rank: 3,
      model: 'Xiaomi 14 Pro',
      brand: 'Xiaomi',
      score: 8.9,
      price: '59 990 ₽',
      pros: ['Цена/качество', 'Быстрая зарядка', 'Камера Leica'],
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      <header className="bg-white/80 backdrop-blur-lg border-b border-purple-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent font-orbitron tracking-wider">
              FOLLOW TECH
            </h1>
            <div className="flex gap-2">
              <Badge variant="secondary" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                <Icon name="TrendingUp" size={14} className="mr-1" />
                Новинки
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Мир мобильных технологий
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Новости, характеристики и рейтинги лучших смартфонов 2025 года
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8 bg-white/80 backdrop-blur-lg">
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
          </TabsList>

          <TabsContent value="news" className="space-y-6 animate-slide-up">
            {news.map((item, index) => (
              <Card 
                key={item.id} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-purple-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${item.gradient}`} />
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className={`bg-gradient-to-r ${item.gradient} text-white border-0`}>
                          {item.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{item.date}</span>
                      </div>
                      <CardTitle className="text-2xl mb-2 font-bold">{item.title}</CardTitle>
                      <CardDescription className="text-base">{item.excerpt}</CardDescription>
                    </div>
                    <div className="text-6xl">{item.image}</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <button className={`px-6 py-2 rounded-full bg-gradient-to-r ${item.gradient} text-white font-semibold hover:shadow-lg transition-shadow`}>
                    Читать далее
                  </button>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="specs" className="animate-slide-up">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specs.map((phone, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-blue-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`h-32 ${phone.color} relative`}>
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-semibold opacity-90">{phone.brand}</p>
                      <h3 className="text-xl font-bold">{phone.model}</h3>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Icon name="Cpu" size={18} className="text-purple-500" />
                        <span className="text-sm font-medium">Процессор:</span>
                        <span className="text-sm text-muted-foreground">{phone.processor}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="MemoryStick" size={18} className="text-blue-500" />
                        <span className="text-sm font-medium">RAM:</span>
                        <span className="text-sm text-muted-foreground">{phone.ram}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="HardDrive" size={18} className="text-cyan-500" />
                        <span className="text-sm font-medium">Память:</span>
                        <span className="text-sm text-muted-foreground">{phone.storage}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Camera" size={18} className="text-pink-500" />
                        <span className="text-sm font-medium">Камера:</span>
                        <span className="text-sm text-muted-foreground">{phone.camera}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Battery" size={18} className="text-green-500" />
                        <span className="text-sm font-medium">Батарея:</span>
                        <span className="text-sm text-muted-foreground">{phone.battery}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="ratings" className="space-y-6 animate-slide-up">
            {ratings.map((item, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-orange-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${item.gradient}`} />
                <CardContent className="pt-6">
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white text-3xl font-bold shadow-lg`}>
                      #{item.rank}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">{item.brand}</p>
                          <h3 className="text-2xl font-bold mb-1">{item.model}</h3>
                          <p className="text-xl font-semibold text-purple-600">{item.price}</p>
                        </div>
                        <div className="text-right">
                          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${item.gradient} text-white font-bold text-lg shadow-lg`}>
                            <Icon name="Star" size={20} />
                            {item.score}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.pros.map((pro, i) => (
                          <Badge key={i} variant="outline" className="border-purple-300 text-purple-700">
                            <Icon name="Check" size={14} className="mr-1" />
                            {pro}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-white/80 backdrop-blur-lg border-t border-purple-100 mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2025 FOLLOW TECH. Все о мобильных технологиях
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;