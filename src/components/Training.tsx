import { GraduationCap, Award, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const courses = [
  {
    title: "Professional Cleaning Certification",
    duration: "4 weeks",
    students: "20",
    topics: ["Sanitation Standards", "Chemical Safety", "Equipment Handling", "Customer Service"],
    price: "Ksh. 2999",
    popular: true,
  },
  {
    title: "Landscaping Fundamentals",
    duration: "6 weeks",
    students: "18",
    topics: ["Plant Care", "Design Principles", "Equipment Operation", "Business Basics"],
    price: "Ksh. 3999",
    popular: false,
  },
  {
    title: "Home Management Expert",
    duration: "8 weeks",
    students: "10+",
    topics: ["Property Maintenance", "Organization Systems", "Vendor Management", "Client Relations"],
    price: "Ksh. 4999",
    popular: false,
  },
];

const Training = () => {
  return (
    <section id="training" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            For Service Providers
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Professional Training Programs
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enhance your skills, get certified, and attract more clients with our industry-recognized training programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className={`relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-300 animate-fade-up ${
                course.popular ? "ring-2 ring-primary" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {course.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">{course.title}</h3>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {course.students} enrolled
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {course.topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    {topic}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <span className="text-2xl font-bold text-foreground">{course.price}</span>
                </div>
                <Button variant={course.popular ? "hero" : "default"} size="sm">
                  Enroll Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 rounded-3xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Become a Certified Provider</h3>
                <p className="text-muted-foreground">Join our network and grow your business</p>
              </div>
            </div>
            <Button variant="hero" size="lg" className="gap-2">
              Apply Now <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
