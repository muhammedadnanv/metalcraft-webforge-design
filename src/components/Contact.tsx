
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    project: 'General Inquiry'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Quote Request Sent",
        description: "We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        project: 'General Inquiry'
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding bg-matte-black text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In <span className="text-accent-orange">Touch</span>
            </h2>
            <p className="mb-8 text-white/80">
              Ready to discuss your custom fabrication needs? Contact us for expert consultation and a detailed quote tailored to your project requirements.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent-orange/20 rounded-full text-accent-orange">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Call Us</h3>
                  <p className="text-white/80">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent-orange/20 rounded-full text-accent-orange">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Email Us</h3>
                  <p className="text-white/80">info@jawadmetalworks.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent-orange/20 rounded-full text-accent-orange">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Visit Our Workshop</h3>
                  <p className="text-white/80">1234 Fabrication Lane<br />Industry City, ST 12345</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/5 rounded-lg">
              <h3 className="font-bold text-xl mb-4">Business Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white/10 backdrop-blur-sm p-6 md:p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name *</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 text-white"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-white/5 border-white/10 text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-1">Company</label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="bg-white/5 border-white/10 text-white"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="project" className="block text-sm font-medium mb-1">Project Type</label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full p-2 rounded-md bg-white/5 border border-white/10 text-white"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Exhaust Hood Systems">Exhaust Hood Systems</option>
                    <option value="Worktables & Prep Stations">Worktables & Prep Stations</option>
                    <option value="Sinks & Washing Stations">Sinks & Washing Stations</option>
                    <option value="Equipment Stands">Equipment Stands</option>
                    <option value="Custom Project">Custom Project</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Project Details</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="bg-white/5 border-white/10 text-white"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-accent-orange hover:bg-accent-orange/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Request Quote"}
                  <Send size={16} className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
