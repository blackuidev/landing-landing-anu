import { Button, Input, Textarea } from "@/components/lightswind";
import { Send } from "lucide-react";

const Contact = () => {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center mb-16">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">Get In Touch</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-300">
                    Have a question or a project in mind? I'd love to hear from you.
                </p>
            </div>

            <div className="max-w-2xl mx-auto">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input type="text" placeholder="Your Name" className="bg-neutral-900 border-neutral-700" />
                        <Input type="email" placeholder="Your Email" className="bg-neutral-900 border-neutral-700" />
                    </div>
                    <Input type="text" placeholder="Subject" className="bg-neutral-900 border-neutral-700" />
                    <Textarea placeholder="Your Message" rows={6} className="bg-neutral-900 border-neutral-700" />
                    <div className="text-center">
                        <Button size="lg" className="rounded-full w-full md:w-auto">
                            Send Message <Send className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
