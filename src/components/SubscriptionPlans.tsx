import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Plan {
  id: string;
  name: string;
  price: number;
  period: string;
  discount?: string;
  features: string[];
  popular?: boolean;
}

const plans: Plan[] = [
  {
    id: '1',
    name: 'Месячный',
    price: 599,
    period: 'месяц',
    features: [
      'Безлимитный трафик',
      'Все серверы доступны',
      'До 5 устройств',
      'Без логов',
    ],
  },
  {
    id: '2',
    name: 'Годовой',
    price: 3990,
    period: 'год',
    discount: '-45%',
    popular: true,
    features: [
      'Безлимитный трафик',
      'Все серверы доступны',
      'До 10 устройств',
      'Без логов',
      'Приоритетная поддержка',
    ],
  },
  {
    id: '3',
    name: '2 года',
    price: 6990,
    period: '2 года',
    discount: '-51%',
    features: [
      'Безлимитный трафик',
      'Все серверы доступны',
      'Неограниченные устройства',
      'Без логов',
      'VIP поддержка 24/7',
      'Статический IP',
    ],
  },
];

export default function SubscriptionPlans() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold mb-2">Тарифные планы</h2>
        <p className="text-muted-foreground">Выберите подходящий план подписки</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`
              p-6 relative overflow-hidden transition-all duration-300 hover:scale-105
              ${plan.popular 
                ? 'border-primary border-2 shadow-xl shadow-primary/20' 
                : 'hover:border-primary/50'
              }
            `}
          >
            {plan.popular && (
              <Badge className="absolute top-4 right-4 bg-secondary">
                Популярный
              </Badge>
            )}

            {plan.discount && (
              <Badge variant="destructive" className="absolute top-4 left-4">
                {plan.discount}
              </Badge>
            )}

            <div className="mt-6">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}₽</span>
                <span className="text-muted-foreground ml-2">/ {plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-secondary' : ''}`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                Выбрать план
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-6 rounded-lg bg-card/50 backdrop-blur border">
        <div className="flex items-start gap-4">
          <Icon name="Info" size={24} className="text-primary flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold mb-2">Гарантия возврата денег</h4>
            <p className="text-sm text-muted-foreground">
              Мы уверены в качестве нашего сервиса. Если вы не останетесь довольны в течение 30 дней, 
              мы вернём деньги без вопросов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
