
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Bot, Zap, TrendingUp, CheckCircle, ArrowRight, Users, Clock, Target, BarChart3, Smartphone, MessageCircle, Instagram, Send, Calendar, FileText, Headphones } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: MessageSquare,
      title: "Atendimento Humanizado",
      description: "Automações inteligentes para WhatsApp, Instagram e Telegram que proporcionam experiências naturais e personalizadas.",
      features: ["Respostas instantâneas 24/7", "Integração com múltiplas plataformas", "Personalização avançada"]
    },
    {
      icon: Bot,
      title: "Agentes Inteligentes",
      description: "Criação de assistentes virtuais especializados em vendas, agendamentos e suporte ao cliente.",
      features: ["IA conversacional avançada", "Qualificação automática de leads", "Integração com CRM"]
    },
    {
      icon: Zap,
      title: "Automação de Processos",
      description: "Otimização completa de fluxos empresariais para aumentar eficiência e reduzir custos operacionais.",
      features: ["Workflows personalizados", "Integração entre sistemas", "Monitoramento em tempo real"]
    },
    {
      icon: BarChart3,
      title: "Relatórios Inteligentes",
      description: "Geração automática de relatórios detalhados com insights valiosos para tomada de decisões.",
      features: ["Dashboards interativos", "Análises preditivas", "Alertas automáticos"]
    }
  ];

  const benefits = [
    { icon: TrendingUp, title: "Aumento de 300% na Eficiência", description: "Processos automatizados reduzem tempo de resposta e aumentam produtividade" },
    { icon: Users, title: "Experiência do Cliente Aprimorada", description: "Atendimento 24/7 com respostas personalizadas e humanizadas" },
    { icon: Clock, title: "Economia de Tempo", description: "Automatize tarefas repetitivas e foque no que realmente importa" },
    { icon: Target, title: "Resultados Mensuráveis", description: "Acompanhe métricas detalhadas e otimize continuamente seus processos" }
  ];

  const platforms = [
    { icon: MessageCircle, name: "WhatsApp", color: "text-green-600" },
    { icon: Instagram, name: "Instagram", color: "text-pink-600" },
    { icon: Send, name: "Telegram", color: "text-blue-600" },
    { icon: Calendar, name: "Agendamentos", color: "text-purple-600" },
    { icon: FileText, name: "Relatórios", color: "text-orange-600" },
    { icon: Headphones, name: "Suporte", color: "text-indigo-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold gradient-text">Automações Broz</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#servicos" className="text-gray-600 hover:text-blue-600 transition-colors">Serviços</a>
            <a href="#beneficios" className="text-gray-600 hover:text-blue-600 transition-colors">Benefícios</a>
            <a href="#contato" className="text-gray-600 hover:text-blue-600 transition-colors">Contato</a>
          </div>
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
            Começar Agora
          </Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
            🚀 Soluções Inteligentes para Empresas Modernas
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transforme sua Empresa com
            <span className="block gradient-text">Automações Inteligentes</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Revolucione seu atendimento ao cliente, otimize processos e aumente suas vendas com 
            soluções de automação personalizadas para todos os portes de empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg">
              Solicitar Consultoria Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-blue-300 text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg">
              Ver Demonstração
            </Button>
          </div>
          
          {/* Platforms */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 max-w-2xl mx-auto">
            {platforms.map((platform, index) => (
              <div key={index} className="flex flex-col items-center p-4 rounded-lg hover:bg-white/50 transition-colors">
                <platform.icon className={`w-8 h-8 ${platform.color} mb-2`} />
                <span className="text-sm text-gray-600">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-700">Nossos Serviços</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Soluções Completas de Automação</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Oferecemos um ecossistema completo de automações para revolucionar sua operação
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white/70 backdrop-blur-sm animate-scale-in">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="bg-white/30 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700">Resultados Comprovados</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Por que Escolher a Automações Broz?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Impacto real no seu negócio com resultados mensuráveis desde o primeiro dia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:bg-white/50 transition-colors">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-12 bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-center">
          <CardContent className="p-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pronto para Revolucionar seu Negócio?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Agende uma consultoria gratuita e descubra como nossas automações podem transformar sua empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Consultoria Gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
                (11) 99999-9999
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Automações Broz</span>
              </div>
              <p className="text-gray-400 mb-4">
                Transformando empresas através de automações inteligentes e soluções personalizadas.
              </p>
              <p className="text-gray-400">
                automacoesbroz.com.br
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Automação WhatsApp</li>
                <li>Agentes Inteligentes</li>
                <li>Automação de Processos</li>
                <li>Relatórios Automáticos</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-gray-400">
                <p>contato@automacoesbroz.com.br</p>
                <p>(11) 99999-9999</p>
                <p>São Paulo, SP</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Automações Broz. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
