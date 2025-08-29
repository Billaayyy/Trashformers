import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { CalendarDays, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export type EventCardProps = {
  slug: string;
  title: string;
  imageSrc: string;
  location: string;
  deadline: string;
  description: string;
};

const EventCard = ({ slug, title, imageSrc, location, deadline, description }: EventCardProps) => {
  return (
    <Card className="group overflow-hidden transition-transform hover:-translate-y-0.5 hover:shadow-glow">
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={`${title} event banner — TRASHFORMERS`}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="text-primary" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="text-primary" />
          <span>Deadline: {deadline}</span>
        </div>
        <div className="flex gap-3 pt-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Details</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
              </DialogHeader>
              <div className="text-sm text-muted-foreground">
                <p>
                  Agenda dan informasi lengkap akan segera hadir. Nantikan jadwal, lokasi detail,
                  persyaratan, serta cara berpartisipasi di halaman ini.
                </p>
              </div>
              <DialogFooter>
                <Link to={slug === 'education' ? '/education' : `/register/${slug}`} aria-label={`Register for ${title}`}>
                  <Button variant="hero">Join</Button>
                </Link>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Link to={slug === 'education' ? '/education' : `/register/${slug}`} aria-label={`Register for ${title}`}>
            <Button variant="hero">Join</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;