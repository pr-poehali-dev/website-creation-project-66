import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const services = [
    {
      icon: 'Laptop',
      title: 'Ремонт компьютеров и ноутбуков',
      description: 'Диагностика и ремонт любой сложности. Замена комплектующих, чистка, апгрейд.'
    },
    {
      icon: 'Receipt',
      title: 'Прошивка ККТ Атол',
      description: 'Профессиональная прошивка и настройка кассовой техники Атол.'
    },
    {
      icon: 'Settings',
      title: 'Обслуживание ККТ Атол',
      description: 'Регулярное техническое обслуживание и поддержка кассового оборудования.'
    },
    {
      icon: 'FileText',
      title: 'Консультации по 1С',
      description: 'Помощь в работе с программами 1С любой конфигурации.'
    },
    {
      icon: 'AlertCircle',
      title: 'Устранение сбоев 1С',
      description: 'Быстрое решение проблем с работой программ 1С.'
    },
    {
      icon: 'ShoppingCart',
      title: 'Настройка торгового оборудования',
      description: 'Установка и настройка сканеров, принтеров чеков, весов.'
    },
    {
      icon: 'Database',
      title: 'Восстановление баз 1С',
      description: 'Восстановление повреждённых баз данных 1С.'
    }
  ];

  const advantages = [
    { icon: 'Zap', title: 'Быстро', text: 'Выезд в день обращения' },
    { icon: 'Award', title: 'Профессионально', text: 'Опыт работы более 10 лет' },
    { icon: 'Shield', title: 'Надёжно', text: 'Гарантия на все работы' },
    { icon: 'Clock', title: 'Круглосуточно', text: 'Работаем 24/7' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена!',
      description: 'Мы свяжемся с вами в ближайшее время.'
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <div 
        className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(139, 92, 246, 0.95), rgba(217, 70, 239, 0.95), rgba(14, 165, 233, 0.95))'
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                IT-Сервис полного цикла
              </h1>
              <p className="text-xl md:text-2xl text-purple-100">
                Ремонт техники • Обслуживание ККТ • Поддержка 1С
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-6"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="Phone" className="mr-2" size={20} />
                  Оставить заявку
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Наши услуги
                </Button>
              </div>
            </div>
            <div className="hidden md:block animate-float">
              <img 
                src="https://cdn.poehali.dev/projects/3e98281e-b231-4b04-9fca-6c375b11cc8f/files/9c4c1fe5-6999-4c38-a395-178c839afc61.jpg"
                alt="IT Service"
                className="rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div id="services" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Комплексное решение всех IT-задач вашего бизнеса
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-purple-200 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name={service.icon as any} size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 mb-20 text-white">
          <div className="grid md:grid-cols-4 gap-8">
            {advantages.map((adv, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto backdrop-blur-sm">
                  <Icon name={adv.icon as any} size={32} />
                </div>
                <h4 className="text-2xl font-bold">{adv.title}</h4>
                <p className="text-purple-100">{adv.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="contact" className="max-w-2xl mx-auto">
          <Card className="p-8 shadow-2xl border-2">
            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Оставьте заявку
            </h2>
            <p className="text-gray-600 text-center mb-8">
              Мы свяжемся с вами в течение 15 минут
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 text-lg"
                />
              </div>
              <div>
                <Input
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="h-12 text-lg"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Опишите вашу проблему"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="text-lg"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-lg py-6"
              >
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заявку
              </Button>
            </form>
          </Card>
        </div>
      </div>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Cpu" size={32} className="text-purple-400" />
                <h3 className="text-2xl font-bold">ООО "Бизнес Форум"</h3>
              </div>
              <p className="text-gray-400">
                Профессиональное обслуживание компьютерной техники и программного обеспечения
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-purple-400">Контакты</h4>
              <div className="space-y-3 text-gray-400">
                <a href="tel:+79131898885" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Icon name="Phone" size={20} />
                  <span>+7 (913) 189-88-85</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-purple-400">Адрес офиса</h4>
              <div className="flex items-start gap-3 text-gray-400">
                <Icon name="MapPin" size={20} className="mt-1 flex-shrink-0" />
                <p>
                  г. Шарыпово,<br />
                  микрорайон Пионерный, д. 5,<br />
                  офис 217
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>© 2024 ООО "Бизнес Форум". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;