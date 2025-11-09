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
              Программы 1С, онлайн-кассы, торговое оборудование и ремонт компьютеров, ноутбуков
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
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Почему выбирают нас
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Надёжный партнёр для развития вашего бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="p-6 text-center border border-gray-200">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-green-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Сертифицированный партнёр</h3>
              <p className="text-sm text-gray-600">Официальный партнёр 1С с подтверждённой квалификацией</p>
            </Card>

            <Card className="p-6 text-center border border-gray-200">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-blue-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Быстрое реагирование</h3>
              <p className="text-sm text-gray-600">Выезд специалиста в день обращения, круглосуточная поддержка</p>
            </Card>

            <Card className="p-6 text-center border border-gray-200">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-orange-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Гарантия качества</h3>
              <p className="text-sm text-gray-600">Официальная гарантия на все работы и оборудование</p>
            </Card>

            <Card className="p-6 text-center border border-gray-200">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Users" size={32} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">Опытная команда</h3>
              <p className="text-sm text-gray-600">Специалисты с опытом работы более 10 лет</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Цены на услуги
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Прозрачное ценообразование без скрытых платежей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="p-8 border-2 border-gray-200 hover:border-blue-500 transition-colors">
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Laptop" size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Ремонт компьютеров, ноутбуков</h3>
                <p className="text-gray-600 text-sm">Диагностика и ремонт любой сложности</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Диагностика</span>
                  <span className="font-semibold text-gray-900">от 500 ₽</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Чистка от пыли</span>
                  <span className="font-semibold text-gray-900">от 1 000 ₽</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Замена комплектующих</span>
                  <span className="font-semibold text-gray-900">от 800 ₽</span>
                </div>
              </div>
              <Button className="w-full" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Заказать
              </Button>
            </Card>

            <Card className="p-8 border-2 border-blue-500 relative hover:shadow-xl transition-shadow">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Популярное</span>
              </div>
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileSpreadsheet" size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Программы 1С</h3>
                <p className="text-gray-600 text-sm">Внедрение и сопровождение</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Консультация</span>
                  <span className="font-semibold text-gray-900">Бесплатно</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Внедрение</span>
                  <span className="font-semibold text-gray-900">от 15 000 ₽</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Абонемент сопровождения</span>
                  <span className="font-semibold text-gray-900">от 5 000 ₽/мес</span>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Заказать
              </Button>
            </Card>

            <Card className="p-8 border-2 border-gray-200 hover:border-blue-500 transition-colors">
              <div className="mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Receipt" size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Онлайн-кассы</h3>
                <p className="text-gray-600 text-sm">Регистрация и обслуживание ККТ</p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Регистрация в ФНС</span>
                  <span className="font-semibold text-gray-900">от 2 000 ₽</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Настройка ККТ</span>
                  <span className="font-semibold text-gray-900">от 3 000 ₽</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Замена ФН</span>
                  <span className="font-semibold text-gray-900">от 1 500 ₽</span>
                </div>
              </div>
              <Button className="w-full" variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Заказать
              </Button>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Точная стоимость рассчитывается индивидуально после диагностики</p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Получить расчёт стоимости
            </Button>
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