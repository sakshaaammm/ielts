import { Check, Clock, Users, Trophy, Star, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Courses = () => {
  const courses = [
    {
      name: "Beginner Program",
      subtitle: "Foundation Builder",
      price: "$299",
      duration: "8 weeks",
      students: "2000+",
      rating: "4.8",
      badge: "Most Popular",
      badgeColor: "bg-green-500",
      description: "Perfect for first-time test takers. Build strong fundamentals across all four IELTS skills.",
      features: [
        "Comprehensive skill assessment",
        "Basic to intermediate grammar",
        "Vocabulary building (2000+ words)",
        "Speaking confidence sessions",
        "Writing structure mastery",
        "10 practice tests",
        "Weekly progress tracking",
        "Mobile app access"
      ],
      highlights: [
        "Band 5.0 to 7.0 improvement",
        "Beginner-friendly approach",
        "Expert tutor support"
      ]
    },
    {
      name: "Advanced Program",
      subtitle: "Score Maximizer",
      price: "$499",
      duration: "6 weeks",
      students: "1500+",
      rating: "4.9",
      badge: "Best Value",
      badgeColor: "bg-primary",
      description: "For students targeting Band 7+ scores. Advanced strategies and intensive practice.",
      features: [
        "Advanced speaking techniques",
        "Complex writing patterns",
        "Critical thinking skills",
        "Academic vocabulary (3000+ words)",
        "Time management strategies",
        "20 practice tests",
        "1:1 coaching sessions (4 hours)",
        "AI-powered feedback system"
      ],
      highlights: [
        "Band 6.5 to 8.5 improvement", 
        "Advanced test strategies",
        "Personalized coaching"
      ]
    },
    {
      name: "Fast-Track Program",
      subtitle: "Intensive Booster",
      price: "$799",
      duration: "4 weeks",
      students: "800+",
      rating: "4.9",
      badge: "Premium",
      badgeColor: "bg-purple-500",
      description: "Intensive program for urgent test dates. Maximum learning in minimum time.",
      features: [
        "Daily intensive sessions (2 hours)",
        "Instant AI feedback",
        "Emergency doubt clearing",
        "Speed reading techniques",
        "Rapid vocabulary acquisition",
        "30 practice tests",
        "1:1 coaching sessions (8 hours)",
        "24/7 tutor support",
        "Score guarantee program"
      ],
      highlights: [
        "Band 7.0 to 9.0 potential",
        "Intensive daily practice",
        "Score guarantee included"
      ]
    }
  ];

  const features = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Comprehensive Curriculum",
      description: "All four IELTS skills covered with latest exam patterns"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Instructors", 
      description: "Certified IELTS professionals with 10+ years experience"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Proven Results",
      description: "95% of our students achieve their target band scores"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Flexible Timing",
      description: "Learn at your own pace with recorded and live sessions"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              IELTS <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Courses</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose the perfect program for your IELTS goals. All courses include our signature AI-powered 
              learning system and expert guidance.
            </p>
          </div>

          {/* Course Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="glass-card rounded-xl p-6 text-center tilt">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-primary">{feature.icon}</div>
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={index}
                className={`glass-card glow-primary rounded-3xl p-8 relative group hover:-translate-y-2 transition-all duration-500 tilt ${
                  index === 1 ? 'lg:scale-105 border-2 border-primary/30' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Badge */}
                <div className={`${course.badgeColor} text-white px-4 py-2 rounded-full text-sm font-semibold absolute -top-3 left-8`}>
                  {course.badge}
                </div>

                {/* Header */}
                <div className="text-center mb-8 pt-4">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{course.name}</h3>
                  <p className="text-primary font-medium mb-4">{course.subtitle}</p>
                  
                  <div className="flex justify-center items-baseline mb-4">
                    <span className="text-4xl font-bold text-foreground">{course.price}</span>
                    <span className="text-muted-foreground ml-2">/course</span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed">{course.description}</p>
                </div>

                {/* Course Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="flex items-center justify-center text-primary mb-1">
                      <Clock className="w-4 h-4 mr-1" />
                    </div>
                    <div className="text-sm font-medium text-foreground">{course.duration}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center text-primary mb-1">
                      <Users className="w-4 h-4 mr-1" />
                    </div>
                    <div className="text-sm font-medium text-foreground">{course.students}</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center text-primary mb-1">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                    </div>
                    <div className="text-sm font-medium text-foreground">{course.rating}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-semibold text-foreground mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Highlights */}
                <div className="mb-8">
                  <h4 className="font-semibold text-foreground mb-4">Key Highlights:</h4>
                  <div className="space-y-2">
                    {course.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="bg-primary/10 rounded-lg p-3 text-sm text-primary font-medium">
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enroll Button */}
                <Link to="/contact" className="block">
                  <Button className="w-full btn-3d glow-primary bg-primary hover:bg-primary-dark text-white py-4 text-lg font-semibold">
                    Enroll Now
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card rounded-3xl p-12 text-center glow-primary">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              100% Money Back Guarantee
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              We're so confident in our teaching methods that we offer a full refund if you don't 
              improve by at least 0.5 bands within your program duration.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">30 Days</div>
                <div className="text-muted-foreground">Risk-free trial</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Success rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support included</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;