import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('news');







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