
import React from "react";

interface TeamMemberImageProps {
  image: string;
  name: string;
  personIndex: number;
}

const TeamMemberImage: React.FC<TeamMemberImageProps> = ({ image, name, personIndex }) => {
  // This component extracts the correct portion of the composite image
  // Each person takes up roughly 1/3 of the width
  
  const getStyle = () => {
    if (personIndex === 0) {
      // Ipek (left person)
      return {
        objectPosition: "0% center",
        clipPath: "inset(0 66% 0 0)"
      };
    } else if (personIndex === 1) {
      // Agustin (middle person)
      return {
        objectPosition: "50% center",
        clipPath: "inset(0 33% 0 33%)"
      };
    } else {
      // Deniz (right person)
      return {
        objectPosition: "100% center",
        clipPath: "inset(0 0 0 66%)"
      };
    }
  };
  
  return (
    <div className="relative w-full h-64 overflow-hidden">
      <img
        src={image}
        alt={name}
        className="absolute w-[300%] h-full object-cover"
        style={getStyle()}
      />
    </div>
  );
};

export default TeamMemberImage;
