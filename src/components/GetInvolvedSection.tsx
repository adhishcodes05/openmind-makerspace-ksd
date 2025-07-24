import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
const GetInvolvedSection = () => {
  return <section id="get-involved" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Get Involved
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Students Card */}
          <Card className="card-hover fade-in-up border-none shadow-card">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🛠️</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Got ideas? Let's build them.
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Join our maker tribe, access tools, and pitch to founders. 
                  Turn your creative concepts into real prototypes.
                </p>
                
              </div>
            </CardContent>
          </Card>
          
          {/* Mentors/Founders Card */}
          <Card className="card-hover fade-in-up border-none shadow-card" style={{
          animationDelay: '200ms'
        }}>
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-primary rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Be a mentor, change a life.
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Support student innovators and connect with fresh talent. 
                  Share your expertise and help shape the next generation.
                </p>
                
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default GetInvolvedSection;