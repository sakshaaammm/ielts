import { MessageCircle, FileText, Brain, Clock, Users, Trophy, BookOpen, Headphones } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <MessageCircle className="w-10 h-10" />,
      title: "AI Speaking Practice",
      description: "Advanced AI conversational partners that adapt to your skill level and provide real-time feedback on pronunciation and fluency.",
      color: "text-primary",
      bgColor: "from-primary/20 to-primary/5"
    },
    {
      icon: <FileText className="w-10 h-10" />,
      title: "Mock Test Engine",
      description: "Comprehensive practice tests that simulate the exact IELTS exam environment with detailed performance analytics.",
      color: "text-purple-400",
      bgColor: "from-purple-400/20 to-purple-400/5"
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: "AI Band Score Predictor",
      description: "Machine learning algorithms that predict your likely band score and identify specific areas for improvement.",
      color: "text-pink-400",
      bgColor: "from-pink-400/20 to-pink-400/5"
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Flexible Learning",
      description: "24/7 access to courses and materials. Learn at your own pace with personalized study schedules.",
      color: "text-blue-400",
      bgColor: "from-blue-400/20 to-blue-400/5"
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Expert Tutors",
      description: "Certified IELTS professionals providing 1:1 coaching sessions and personalized feedback on your progress.",
      color: "text-green-400",
      bgColor: "from-green-400/20 to-green-400/5"
    },
    {
      icon: <Trophy className="w-10 h-10" />,
      title: "Achievement System",
      description: "Gamified learning with progress tracking, badges, and milestones to keep you motivated throughout your journey.",
      color: "text-yellow-400",
      bgColor: "from-yellow-400/20 to-yellow-400/5"
    },
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Comprehensive Materials",
      description: "Extensive library of practice questions, study guides, and resources covering all four IELTS skills.",
      color: "text-red-400",
      bgColor: "from-red-400/20 to-red-400/5"
    },
    {
      icon: <Headphones className="w-10 h-10" />,
      title: "Listening Lab",
      description: "Advanced audio practice with accent variation, speed control, and instant transcription feedback.",
      color: "text-indigo-400",
      bgColor: "from-indigo-400/20 to-indigo-400/5"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Advanced <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Features</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our cutting-edge tools and methodologies designed to accelerate your IELTS success. 
              Every feature is crafted with precision to address specific learning challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card tilt glow-primary rounded-2xl p-8 group hover:-translate-y-2 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={feature.color}>
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Proven Results
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our features have helped thousands achieve their target scores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card rounded-2xl p-8 text-center tilt glow-primary">
              <div className="text-4xl font-bold text-primary mb-2">99.2%</div>
              <div className="text-lg font-semibold text-foreground mb-1">Accuracy Rate</div>
              <div className="text-muted-foreground">AI Predictions</div>
            </div>
            <div className="glass-card rounded-2xl p-8 text-center tilt glow-primary">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-lg font-semibold text-foreground mb-1">Years Experience</div>
              <div className="text-muted-foreground">Expert Instruction</div>
            </div>
            <div className="glass-card rounded-2xl p-8 text-center tilt glow-primary">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-lg font-semibold text-foreground mb-1">Practice Questions</div>
              <div className="text-muted-foreground">Updated Monthly</div>
            </div>
            <div className="glass-card rounded-2xl p-8 text-center tilt glow-primary">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-lg font-semibold text-foreground mb-1">AI Support</div>
              <div className="text-muted-foreground">Always Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;