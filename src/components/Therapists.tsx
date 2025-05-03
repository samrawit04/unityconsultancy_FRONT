
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { User } from "lucide-react";

const therapists = [
  {
    name: "Emma",
    id: 1,
    image: "/therapists/emma.jpg"
  },
  {
    name: "Monica",
    id: 2,
    image: "/therapists/monica.jpg"
  },
  {
    name: "Sandra",
    id: 3,
    image: "/therapists/sandra.jpg"
  },
  {
    name: "John",
    id: 4,
    image: "/therapists/john.jpg"
  },
  {
    name: "Amara",
    id: 5,
    image: "/therapists/amara.jpg"
  }
];

const Therapists = () => {
  return (
    <div id="therapists" className="py-16">
      <div className="text-center mb-10">
        <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">MEET OUR TEAM</h3>
        <h2 className="text-2xl font-bold">Our Highly Experienced Relationship Therapists</h2>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6">
        {therapists.map((therapist) => (
          <div key={therapist.id} className="text-center">
            <Avatar className="w-24 h-24 mx-auto mb-2">
              <AvatarImage 
                src={therapist.image} 
                alt={`${therapist.name}'s profile picture`} 
                className="object-cover"
              />
              <AvatarFallback>
                <User className="w-12 h-12 text-gray-500" />
              </AvatarFallback>
            </Avatar>
            <p className="text-sm font-medium">{therapist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Therapists;
