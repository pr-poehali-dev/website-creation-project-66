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
      icon: 'FileSpreadsheet',
      title: 'Программы 1С',
      description: 'Продажа, внедрение и настройка программ 1С под ключ. Сопровождение и обновление конфигураций.'
    },
    {
      icon: 'Receipt',
      title: 'Контрольно-кассовая техника',
      description: 'Онлайн-кассы, фискальные накопители, регистрация в ФНС. Полное сопровождение ККТ.'
    },
    {
      icon: 'ShoppingCart',
      title: 'Торговое оборудование',
      description: 'Сканеры штрих-кодов, принтеры чеков, весы, терминалы сбора данных. Установка и настройка.'
    },
    {
      icon: 'Headphones',
      title: 'Техническая поддержка 1С',
      description: 'Оперативное решение проблем, консультации по работе с программами 1С.'
    },
    {
      icon: 'Database',
      title: 'Восстановление баз 1С',
      description: 'Восстановление повреждённых информационных баз, миграция данных.'
    }
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
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Building2" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Бизнес Форум</h1>
                <p className="text-xs text-gray-500">Автоматизация бизнеса</p>
              </div>
            </div>
            <a href="tel:+79131898885" className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
              <Icon name="Phone" size={20} />
              <span className="hidden md:inline">+7 (913) 189-88-85</span>
            </a>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Автоматизация бизнеса под ключ
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Программы 1С, онлайн-кассы, торговое оборудование и ремонт техники
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="MessageSquare" className="mr-2" size={20} />
                Получить консультацию
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
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Наши услуги
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Комплексные решения для автоматизации и развития вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 bg-white border border-gray-200"
              >
                <div className="mb-4 w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Icon name={service.icon as any} size={28} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-white text-center">
            <div className="space-y-2">
              <div className="text-5xl font-bold">10+</div>
              <p className="text-blue-100">лет опыта работы</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">500+</div>
              <p className="text-blue-100">довольных клиентов</p>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">24/7</div>
              <p className="text-blue-100">техподдержка</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Сертифицированный партнёр 1С
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-green-500 flex-shrink-0 mt-1" />
                  <p>Официальная лицензия и гарантия качества внедрения</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-green-500 flex-shrink-0 mt-1" />
                  <p>Квалифицированные специалисты с сертификатами 1С</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="CheckCircle2" size={24} className="text-green-500 flex-shrink-0 mt-1" />
                  <p>Поддержка и обновление на всех этапах работы</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/3e98281e-b231-4b04-9fca-6c375b11cc8f/files/9c4c1fe5-6999-4c38-a395-178c839afc61.jpg"
                alt="Сертификат 1С"
                className="rounded-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 md:p-12 shadow-lg bg-white">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-3 text-gray-900">
                  Получить консультацию
                </h2>
                <p className="text-gray-600">
                  Оставьте заявку, и мы свяжемся с вами в течение 15 минут
                </p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Опишите вашу задачу"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-lg py-6"
                >
                  Отправить заявку
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Building2" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">ООО "Бизнес Форум"</h3>
              </div>
              <p className="text-gray-400">
                Профессиональная автоматизация бизнеса и техническая поддержка
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Контакты</h4>
              <div className="space-y-3 text-gray-400">
                <a href="tel:+79131898885" className="flex items-center gap-3 hover:text-white transition-colors">
                  <Icon name="Phone" size={20} />
                  <span>+7 (913) 189-88-85</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">Адрес офиса</h4>
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
