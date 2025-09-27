import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: ""
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours. Check your email for confirmation.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      content: "info@ieltsacademy.com",
      subContent: "24/7 Support Available"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      content: "+91 98765 43210",
      subContent: "Mon-Fri: 9 AM - 8 PM IST"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      content: "Multiple Locations",
      subContent: "Delhi | Mumbai | Bangalore"
    }
  ];

  const courses = [
    "Beginner Program",
    "Advanced Program", 
    "Fast-Track Program",
    "Corporate Training",
    "One-on-One Coaching"
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Get <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">Started</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to begin your IELTS journey? Contact our experts for personalized guidance 
              and start achieving your dream band score today.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="glass-card rounded-2xl p-8 text-center tilt glow-primary">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-primary">{info.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{info.title}</h3>
                <p className="text-lg font-semibold text-primary mb-1">{info.content}</p>
                <p className="text-muted-foreground">{info.subContent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="glass-card rounded-3xl p-8 glow-primary">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">Send us a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and our IELTS experts will get back to you with 
                  personalized course recommendations and next steps.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass-card rounded-xl border border-border/50 text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass-card rounded-xl border border-border/50 text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass-card rounded-xl border border-border/50 text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-foreground mb-2">
                      Interested Course *
                    </label>
                    <select
                      id="course"
                      name="course"
                      required
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-3 glass-card rounded-xl border border-border/50 text-foreground bg-transparent focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">Select a course</option>
                      {courses.map((course, index) => (
                        <option key={index} value={course}>{course}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 glass-card rounded-xl border border-border/50 text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your IELTS goals and any specific questions you have..."
                  ></textarea>
                </div>

                <Button 
                  type="submit"
                  className="w-full btn-3d glow-primary bg-primary hover:bg-primary-dark text-white py-4 text-lg font-semibold"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div className="glass-card rounded-3xl p-8 glow-primary">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Quick Contact</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Need immediate assistance? Our IELTS counselors are available to help you 
                  choose the right program and answer all your questions.
                </p>
                <div className="space-y-4">
                  <Button className="w-full btn-3d bg-green-500 hover:bg-green-600 text-white">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: +91 98765 43210
                  </Button>
                  <Button variant="outline" className="w-full btn-3d glass-card border-primary text-primary hover:bg-primary hover:text-white">
                    <Mail className="w-5 h-5 mr-2" />
                    Email: info@ieltsacademy.com
                  </Button>
                </div>
              </div>

              {/* Office Hours */}
              <div className="glass-card rounded-3xl p-8 glow-primary">
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Office Hours</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Monday - Friday</span>
                    <span className="text-primary font-semibold">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Saturday</span>
                    <span className="text-primary font-semibold">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      * Online support available 24/7 for enrolled students
                    </p>
                  </div>
                </div>
              </div>

              {/* Free Consultation */}
              <div className="glass-card rounded-3xl p-8 glow-primary bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="flex items-center mb-4">
                  <Calendar className="w-8 h-8 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">Free Consultation</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Book a free 30-minute consultation with our IELTS experts to discuss 
                  your goals and get personalized advice.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Skill level assessment
                  </li>
                  <li className="flex items-center text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Personalized study plan
                  </li>
                  <li className="flex items-center text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    Course recommendations
                  </li>
                </ul>
                <Button className="w-full btn-3d bg-primary hover:bg-primary-dark text-white">
                  Book Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;