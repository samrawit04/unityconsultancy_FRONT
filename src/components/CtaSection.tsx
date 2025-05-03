
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <div className="bg-gradient-to-b from-[#3a2057] to-[#4b2a75] text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Whether you are newly married or adapting to a relationship after a significant change, our professional consultants are here to guide you to the right place.
        </p>
        <Button className="bg-white hover:bg-gray-100 text-black rounded-full px-8 py-2">
          Get Started!
        </Button>
      </div>
    </div>
  );
};

export default CtaSection;
