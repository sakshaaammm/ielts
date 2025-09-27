import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, FileText, Brain, Clock, Star, ArrowRight } from "lucide-react";
import priyaImage from "@/assets/testimonial-priya.jpg";
import arjunImage from "@/assets/testimonial-arjun.jpg";
import sarahImage from "@/assets/testimonial-sarah.jpg";

const Index = () => {
  const featuresPreview = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "AI Speaking Practice",
      description: "Advanced AI conversations with real-time pronunciation feedback and fluency analysis."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Mock Test Engine", 
      description: "Comprehensive practice tests that simulate the exact IELTS exam environment."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Band Predictor",
      description: "Machine learning algorithms that predict your likely band score with 99% accuracy."
    }
  ];

  const testimonialsPreview = [
    {
      name: "Priya Sharma",
      score: "8.5",
      image: priyaImage,
      quote: "The AI-powered feedback was incredibly accurate. I went from band 6.0 to 8.5 in just 3 months!",
      location: "Mumbai, India"
    },
    {
      name: "Arjun Verma",
      score: "8.0", 
      image: arjunImage,
      quote: "The mock tests felt exactly like the real exam. The detailed analytics were game-changing.",
      location: "Delhi, India"
    },
    {
      name: "Sarah Johnson",
      score: "9.0",
      image: sarahImage,
      quote: "Perfect score! The personalized study plan and expert tutors made all the difference.",
      location: "Toronto, Canada"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        
        {/* Features Preview */}
        <section className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose <span className="text-primary">IELTS Academy</span>?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our cutting-edge features and proven methodologies ensure your IELTS success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuresPreview.map((feature, index) => (
                <div
                  key={index}
                  className="glass-card glow-primary rounded-2xl p-8 group hover:-translate-y-2 transition-all duration-500 tilt"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary">{feature.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/features">
                <Button className="btn-3d glow-primary bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg">
                  Explore All Features
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Preview */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Student <span className="text-primary">Success Stories</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real students achieving their dream IELTS scores with our proven methods
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {testimonialsPreview.map((testimonial, index) => (
                <div
                  key={index}
                  className="glass-card glow-primary rounded-2xl p-6 group hover:-translate-y-2 transition-all duration-500 tilt"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <div className="bg-gradient-to-br from-primary to-primary-light text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Band {testimonial.score}
                    </div>
                  </div>

                  <blockquote className="text-muted-foreground mb-6 italic leading-relaxed text-sm">
                    "{testimonial.quote}"
                  </blockquote>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden mr-3 ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/testimonials">
                <Button variant="outline" className="btn-3d glass-card border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg">
                  View All Success Stories
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
