import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface ConnectionButtonProps {
  onToggle: (connected: boolean) => void;
}

export default function ConnectionButton({ onToggle }: ConnectionButtonProps) {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  const handleClick = () => {
    if (isConnected) {
      setIsConnected(false);
      onToggle(false);
    } else {
      setIsConnecting(true);
      setTimeout(() => {
        setIsConnecting(false);
        setIsConnected(true);
        onToggle(true);
      }, 1500);
    }
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative">
        <Button
          onClick={handleClick}
          disabled={isConnecting}
          className={`
            w-48 h-48 rounded-full text-lg font-semibold
            transition-all duration-300 shadow-2xl
            ${isConnected 
              ? 'bg-gradient-to-br from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700' 
              : 'bg-gradient-to-br from-primary to-blue-600 hover:from-blue-500 hover:to-primary'
            }
            ${isConnecting ? 'animate-pulse-glow' : ''}
          `}
        >
          <div className="flex flex-col items-center gap-2">
            {isConnecting ? (
              <Icon name="Loader2" size={48} className="animate-spin" />
            ) : isConnected ? (
              <Icon name="Shield" size={48} />
            ) : (
              <Icon name="ShieldOff" size={48} />
            )}
            <span className="text-sm">
              {isConnecting ? 'Подключение...' : isConnected ? 'Защищено' : 'Подключиться'}
            </span>
          </div>
        </Button>
        
        {isConnected && (
          <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-ping" />
        )}
      </div>

      <div className="text-center">
        <p className="text-muted-foreground text-sm">
          {isConnected ? 'Ваше подключение защищено' : 'Нажмите для подключения к VPN'}
        </p>
      </div>
    </div>
  );
}
