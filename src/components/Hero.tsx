import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-students.jpg";

const Hero = () => {
  return (
    <section className="pt-20 pb-16 min-h-screen flex items-center bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Achieve Your Dream{" "}
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent animate-glow">
                  IELTS Score
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                Join thousands of students who improved their band score with our
                expert training and <span className="text-primary font-semibold">AI-powered tools</span>.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="btn-3d glow-primary bg-primary hover:bg-primary-dark text-white px-10 py-6 text-xl font-semibold rounded-xl"
                >
                  Get Started
                </Button>
              </Link>
              <Link to="/courses">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="btn-3d glass-card border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-6 text-xl font-semibold rounded-xl"
                >
                  View Courses
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-12">
              <div className="text-center glass-card p-6 rounded-xl tilt">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">5000+</div>
                <div className="text-sm text-muted-foreground font-medium">Students</div>
              </div>
              <div className="text-center glass-card p-6 rounded-xl tilt">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">8.5</div>
                <div className="text-sm text-muted-foreground font-medium">Avg Band Score</div>
              </div>
              <div className="text-center glass-card p-6 rounded-xl tilt">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-sm text-muted-foreground font-medium">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-float">
            <div className="relative overflow-hidden rounded-3xl glass-card tilt">
              <img
                src={heroImage}
                alt="IELTS students studying and preparing for exam"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
            </div>
            
            {/* Floating Achievement Badge */}
            <div className="absolute -bottom-8 -left-8 glass-card glow-primary rounded-2xl p-6 animate-glow">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-success to-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <div>
                  <div className="font-bold text-foreground text-lg">Band 8.0+</div>
                  <div className="text-muted-foreground">Guaranteed</div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-1/3 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;