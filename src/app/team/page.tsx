import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Linkedin, Github } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Team - Nivora',
    description: 'Meet the passionate team behind Nivora.',
};

const teamMembers = [
  {
    name: 'Ayush Kumar',
    role: 'Team Leader',
    avatarUrl: 'https://picsum.photos/seed/ayush/100/100',
    avatarFallback: 'AK',
    socials: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Aanchal Chaudhary',
    role: 'Tech Specialist',
    avatarUrl: 'https://picsum.photos/seed/aanchal/100/100',
    avatarFallback: 'AC',
     socials: {
      linkedin: '#',
      github: '#',
    },
  },
   {
    name: 'Avneet Singh',
    role: 'Tech Specialist',
    avatarUrl: 'https://i.ibb.co/4ZzqPLTw/Whats-App-Image-2025-09-18-at-21-14-08-8624a829.jpg',
    avatarFallback: 'AS',
     socials: {
      linkedin: '#',
      github: '#',
    },
  },
   {
    name: 'Anirudh Kanwat',
    role: 'Integration Expert',
    avatarUrl: 'https://i.ibb.co/gMjyf40c/Whats-App-Image-2025-09-18-at-21-14-07-d1f702a9.jpg',
    avatarFallback: 'AK',
     socials: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Aman',
    role: 'Content Specialist',
    avatarUrl: 'https://picsum.photos/seed/aman-2/100/100',
    avatarFallback: 'A',
     socials: {
      linkedin: '#',
      github: '#',
    },
  },
];

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto p-4 md:p-6">
        <section className="py-12">
          <h1 className="text-4xl sm:text-5xl font-bold font-headline text-center mb-10">Meet Our Team</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.name} className="text-center">
                <CardHeader className="items-center">
                  <Avatar className="h-24 w-24 mb-4 overflow-hidden">
                    <AvatarImage
                      src={member.avatarUrl}
                      alt={member.name}
                      data-ai-hint="person portrait"
                      className={['Avneet Singh', 'Anirudh Kanwat'].includes(member.name) ? 'scale-150' : ''}
                    />
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
      </main>
      <Footer />
    </div>
  );
}
