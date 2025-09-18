import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Mail, Linkedin, Github } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About & Contact - Nivora',
    description: 'Learn more about the Nivora team and how to get in touch.',
};

const teamMembers = [
  {
    name: 'Prapti Gupta',
    role: 'Co-Founder & CEO',
    avatarUrl: 'https://picsum.photos/seed/prapti/100/100',
    avatarFallback: 'PG',
    socials: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Vanshika',
    role: 'Co-Founder & CTO',
    avatarUrl: 'https://picsum.photos/seed/vanshika/100/100',
    avatarFallback: 'V',
     socials: {
      linkedin: '#',
      github: '#',
    },
  },
   {
    name: 'Suhani',
    role: 'Lead Designer',
    avatarUrl: 'https://picsum.photos/seed/suhani/100/100',
    avatarFallback: 'S',
     socials: {
      linkedin: '#',
      github: '#',
    },
  },
   {
    name: 'Garima',
    role: 'Marketing Head',
    avatarUrl: 'https://picsum.photos/seed/garima/100/100',
    avatarFallback: 'G',
     socials: {
      linkedin: '#',
      github: '#',
    },
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-6">
        <section className="text-center w-full py-12 md:py-20 flex flex-col justify-center items-center">
          <h1 className="text-4xl sm:text-5xl font-bold font-headline mb-4">
            About Nivora
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nivora was born from a simple idea: to make finding a place to live near college easier for students. We are a team of passionate individuals who understand the challenges of finding the perfect PG, mess, or flat. Our mission is to provide a seamless, AI-powered platform that offers reliable listings and genuine reviews, helping you find your home away from home with confidence.
          </p>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-bold font-headline text-center mb-10">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <CardHeader className="items-center">
                  <Avatar className="h-24 w-24 mb-4">
                    <AvatarImage src={member.avatarUrl} alt={member.name} data-ai-hint="person portrait" />
                    <AvatarFallback>{member.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                   <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center gap-4">
                     <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href={member.socials.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      <Github className="h-6 w-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-12">
           <Card className="max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle className="text-2xl font-bold font-headline text-center">Get In Touch</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
                <p className="text-muted-foreground mb-4">Have questions or want to collaborate? Reach out to us!</p>
                <a href="mailto:contact.nivora@gmail.com" className="inline-flex items-center gap-2 text-lg text-accent hover:underline">
                    <Mail className="h-5 w-5" />
                    contact.nivora@gmail.com
                </a>
            </CardContent>
           </Card>
        </section>

      </main>
      <Footer />
    </div>
  );
}
