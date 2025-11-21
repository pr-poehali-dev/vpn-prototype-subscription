import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import ConnectionButton from '@/components/ConnectionButton';
import ServerList from '@/components/ServerList';
import SubscriptionPlans from '@/components/SubscriptionPlans';

export default function Index() {
  const [isConnected, setIsConnected] = useState(false);
  const [activeTab, setActiveTab] = useState('connect');

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <Icon name="Shield" size={28} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">SecureVPN</h1>
                <p className="text-sm text-muted-foreground">Ваша безопасность в сети</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {isConnected && (
                <Badge variant="default" className="bg-emerald-500 animate-fade-in">
                  <Icon name="Check" size={14} className="mr-1" />
                  Подключено
                </Badge>
              )}
              <Card className="p-3 bg-card/50 backdrop-blur">
                <div className="flex items-center gap-2">
                  <Icon name="User" size={20} className="text-muted-foreground" />
                  <span className="text-sm font-medium">Аккаунт</span>
                </div>
              </Card>
            </div>
          </div>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8 bg-card/50 backdrop-blur">
            <TabsTrigger value="connect" className="gap-2">
              <Icon name="Power" size={18} />
              Подключение
            </TabsTrigger>
            <TabsTrigger value="servers" className="gap-2">
              <Icon name="Globe" size={18} />
              Серверы
            </TabsTrigger>
            <TabsTrigger value="subscription" className="gap-2">
              <Icon name="CreditCard" size={18} />
              Подписка
            </TabsTrigger>
          </TabsList>

          <TabsContent value="connect" className="animate-fade-in">
            <Card className="max-w-2xl mx-auto p-12 bg-card/50 backdrop-blur">
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold mb-2">
                    {isConnected ? 'Вы защищены' : 'Подключитесь к VPN'}
                  </h2>
                  <p className="text-muted-foreground">
                    {isConnected 
                      ? 'Ваш IP скрыт, трафик зашифрован' 
                      : 'Защитите своё интернет-соединение'
                    }
                  </p>
                </div>

                <ConnectionButton onToggle={setIsConnected} />

                <div className="grid grid-cols-3 gap-4 pt-8 border-t">
                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="Lock" size={24} className="text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-sm mb-1">Шифрование</h3>
                    <p className="text-xs text-muted-foreground">AES-256</p>
                  </div>

                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                        <Icon name="Zap" size={24} className="text-secondary" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-sm mb-1">Скорость</h3>
                    <p className="text-xs text-muted-foreground">Без лимитов</p>
                  </div>

                  <div className="text-center">
                    <div className="flex justify-center mb-2">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center">
                        <Icon name="Server" size={24} className="text-emerald-500" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-sm mb-1">Серверы</h3>
                    <p className="text-xs text-muted-foreground">50+ стран</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="servers" className="animate-fade-in">
            <ServerList />
          </TabsContent>

          <TabsContent value="subscription" className="animate-fade-in">
            <SubscriptionPlans />
          </TabsContent>
        </Tabs>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Поддержка</a>
            <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-foreground transition-colors">Условия использования</a>
          </div>
          <p className="mt-4">© 2024 SecureVPN. Все права защищены.</p>
        </footer>
      </div>
    </div>
  );
}
