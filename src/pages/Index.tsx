import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface CareerPath {
  id: string;
  title: string;
  description: string;
  duration: string;
  readiness: number;
  overallProgress: number;
  requiredSkills: Array<{
    name: string;
    current: number;
    target: number;
  }>;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('career');

  const careerPaths: CareerPath[] = [
    {
      id: '1',
      title: 'Senior Frontend Developer',
      description: 'Technical expert with deep knowledge of architecture',
      duration: '6-9 months',
      readiness: 75,
      overallProgress: 75,
      requiredSkills: [
        { name: 'System Design', current: 60, target: 85 },
        { name: 'Code Review & Mentorship', current: 45, target: 80 },
        { name: 'Technical Leadership', current: 50, target: 75 }
      ]
    },
    {
      id: '2',
      title: 'Team Lead',
      description: 'Team management and process coordination',
      duration: '12-18 months',
      readiness: 58,
      overallProgress: 58,
      requiredSkills: [
        { name: 'People Management', current: 30, target: 85 },
        { name: 'Planning & Prioritization', current: 52, target: 80 },
        { name: 'Business Communication', current: 60, target: 90 }
      ]
    },
    {
      id: '3',
      title: 'Frontend Architect',
      description: 'Designing frontend system architecture',
      duration: '18-24 months',
      readiness: 62,
      overallProgress: 62,
      requiredSkills: [
        { name: 'Architectural Thinking', current: 60, target: 90 },
        { name: 'Infrastructure & DevOps', current: 45, target: 75 },
        { name: 'Cross-functional Work', current: 55, target: 80 }
      ]
    }
  ];

  const navItems = [
    { id: 'home', label: 'Home', icon: 'Home' },
    { id: 'diagnostics', label: 'Diagnostics', icon: 'ClipboardList' },
    { id: 'profile', label: 'Profile', icon: 'User' },
    { id: 'career', label: 'Career', icon: 'TrendingUp' },
    { id: 'plan', label: 'Plan', icon: 'Calendar' },
    { id: 'resources', label: 'Resources', icon: 'BookOpen' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                <Icon name="Target" size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">HR Consultant</h1>
                <p className="text-sm text-slate-600">Career Development & AI</p>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                    activeTab === item.id 
                      ? 'text-cyan-600' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-12 text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Career Trajectories
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            AI analyzed your profile and built potential development paths considering your current competencies
          </p>
        </div>

        {/* Career Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerPaths.map((path, index) => (
            <Card 
              key={path.id} 
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in border-slate-200 bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {path.title}
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  {path.description}
                </p>
                
                <div className="flex items-center gap-2 text-sm text-slate-700 mb-1">
                  <Icon name="Clock" size={16} className="text-cyan-600" />
                  <span>{path.duration}</span>
                </div>
                
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-700 text-sm font-medium">
                  Readiness {path.readiness}%
                </div>
              </div>

              {/* Overall Progress */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-slate-700">Overall Progress</span>
                  <span className="text-sm font-bold text-slate-900">{path.overallProgress}%</span>
                </div>
                <Progress value={path.overallProgress} className="h-2" />
              </div>

              {/* Required Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-900 mb-4">Required Competencies:</h4>
                <div className="space-y-4">
                  {path.requiredSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-slate-700">{skill.name}</span>
                        <span className="text-sm text-slate-600">
                          {skill.current} → {skill.target}
                        </span>
                      </div>
                      <div className="relative h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full transition-all duration-500"
                          style={{ width: `${(skill.current / skill.target) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-medium transition-all duration-200"
              >
                Choose This Path
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </Card>
          ))}
        </div>
      </main>

      {/* Chat Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-200">
        <Icon name="MessageCircle" size={24} className="text-white" />
      </button>
    </div>
  );
};

export default Index;
