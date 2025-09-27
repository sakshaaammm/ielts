import { Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import priyaImage from "@/assets/testimonial-priya.jpg";
import arjunImage from "@/assets/testimonial-arjun.jpg";
import sarahImage from "@/assets/testimonial-sarah.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      score: "8.5",
      image: priyaImage,
      quote: "The AI-powered feedback was incredibly accurate. I went from band 6.0 to 8.5 in just 3 months! The speaking practice sessions were game-changing.",
      location: "Mumbai, India",
      course: "Fast-Track Program",
      improvement: "+2.5 bands"
    },
    {
      name: "Arjun Verma", 
      score: "8.0",
      image: arjunImage,
      quote: "The mock tests felt exactly like the real exam. The detailed analytics showed me exactly where to focus my efforts. Couldn't have done it without IELTS Academy.",
      location: "Delhi, India",
      course: "Advanced Program",
      improvement: "+1.5 bands"
    },
    {
      name: "Sarah Johnson",
      score: "9.0",
      image: sarahImage,
      quote: "Perfect score! The personalized study plan and expert tutors made all the difference. The 24/7 support was incredible - I could practice anytime.",
      location: "Toronto, Canada",
      course: "Premium Coaching",
      improvement: "+2.0 bands"
    },
    {
      name: "Michael Chen",
      score: "7.5",
      image: priyaImage, // Using placeholder
      quote: "As a working professional, the flexible schedule was perfect. The mobile app let me practice during commutes. Highly recommend the beginner program!",
      location: "Singapore",
      course: "Beginner Program",
      improvement: "+1.0 bands"
    }
  ];

  const stats = [
    { number: "5000+", label: "Success Stories" },
    { number: "8.2", label: "Average Band Score" },
    { number: "95%", label: "Pass Rate" },
    { number: "30+", label: "Countries Served" }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Success <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Real students, real results. Discover how our students transformed their IELTS dreams into reality 
              with our innovative learning approach.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center tilt">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card glow-primary rounded-3xl p-8 group hover:-translate-y-2 transition-all duration-500 tilt"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6">
                  <Quote className="w-8 h-8 text-primary opacity-50" />
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-primary" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-foreground mb-8 text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Student Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/30 group-hover:ring-primary/60 transition-all duration-300">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-foreground text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {testimonial.location}
                      </div>
                      <div className="text-primary text-sm font-medium">
                        {testimonial.course}
                      </div>
                    </div>
                  </div>

                  {/* Score Badge */}
                  <div className="text-center">
                    <div className="bg-gradient-to-br from-primary to-primary-light text-white px-4 py-2 rounded-xl font-bold text-lg mb-1">
                      Band {testimonial.score}
                    </div>
                    <div className="text-success text-sm font-semibold">
                      {testimonial.improvement}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-12 text-center glow-primary">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of successful students who achieved their target IELTS scores. 
              Start your journey today with our proven methods and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="btn-3d glow-primary bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg">
                  Start Your Journey
                </Button>
              </Link>
              <Link to="/courses">
                <Button variant="outline" className="btn-3d glass-card border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg">
                  View Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;