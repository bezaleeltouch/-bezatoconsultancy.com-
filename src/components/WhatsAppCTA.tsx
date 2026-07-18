import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '2349137730282';

interface WhatsAppCTAProps {
  message: string;
  text: string;
  variant?: 'default' | 'outline' | 'ghost' | 'secondary' | 'destructive' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  className?: string;
}

export function WhatsAppCTA({ message, text, variant = 'default', size = 'default', className = '' }: WhatsAppCTAProps) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={`font-bold bg-yellow-400 hover:bg-yellow-300 text-purple-900 rounded-full shadow-md hover:shadow-lg transition-all duration-300 gap-2 ${
        variant === 'outline' ? 'bg-transparent hover:bg-purple-900 hover:text-white' : ''
      } ${className}`}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <MessageCircle size={16} />
        {text}
      </a>
    </Button>
  );
}
