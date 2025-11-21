import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

interface Server {
  id: string;
  country: string;
  city: string;
  flag: string;
  ping: number;
  load: number;
}

const servers: Server[] = [
  { id: '1', country: 'США', city: 'Нью-Йорк', flag: '🇺🇸', ping: 45, load: 32 },
  { id: '2', country: 'Германия', city: 'Берлин', flag: '🇩🇪', ping: 28, load: 45 },
  { id: '3', country: 'Великобритания', city: 'Лондон', flag: '🇬🇧', ping: 38, load: 28 },
  { id: '4', country: 'Франция', city: 'Париж', flag: '🇫🇷', ping: 35, load: 56 },
  { id: '5', country: 'Нидерланды', city: 'Амстердам', flag: '🇳🇱', ping: 30, load: 41 },
  { id: '6', country: 'Япония', city: 'Токио', flag: '🇯🇵', ping: 120, load: 38 },
  { id: '7', country: 'Сингапур', city: 'Сингапур', flag: '🇸🇬', ping: 140, load: 35 },
  { id: '8', country: 'Канада', city: 'Торонто', flag: '🇨🇦', ping: 52, load: 29 },
];

export default function ServerList() {
  const [selectedServer, setSelectedServer] = useState('2');

  const getLoadColor = (load: number) => {
    if (load < 40) return 'bg-emerald-500';
    if (load < 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Серверы</h2>
        <p className="text-muted-foreground text-sm">Выберите страну для подключения</p>
      </div>

      <ScrollArea className="h-[500px] rounded-lg">
        <div className="space-y-2">
          {servers.map((server) => (
            <Card
              key={server.id}
              className={`
                p-4 cursor-pointer transition-all duration-200 hover:scale-[1.02]
                ${selectedServer === server.id 
                  ? 'border-primary bg-primary/10' 
                  : 'hover:border-primary/50'
                }
              `}
              onClick={() => setSelectedServer(server.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{server.flag}</span>
                  <div>
                    <h3 className="font-semibold">{server.country}</h3>
                    <p className="text-sm text-muted-foreground">{server.city}</p>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Activity" size={16} className="text-muted-foreground" />
                    <span className="text-sm font-medium">{server.ping}ms</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full ${getLoadColor(server.load)} transition-all duration-300`}
                        style={{ width: `${server.load}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground w-10">{server.load}%</span>
                  </div>

                  {selectedServer === server.id && (
                    <Badge variant="default" className="bg-primary">
                      <Icon name="Check" size={14} />
                    </Badge>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
