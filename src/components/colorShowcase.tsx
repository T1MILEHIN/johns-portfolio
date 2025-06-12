import React from 'react';

interface ColorProps {
  name: string;
  hex: string | string[];
  description?: string;
  className?: string;
}

const Color = ({ name, hex, description, className }: ColorProps) => {
  return (
    <div className="flex flex-col rounded-md overflow-hidden">
      <div
        className={`h-48 rounded-3xl w-full ${className}`}
        style={
          typeof hex === "string"
            ? { backgroundColor: hex }
            : { backgroundImage: `linear-gradient(to right, ${hex.join(', ')})` }
        }
      />
      <div className="p-3">
        <h3 className="font-medium text-lg text-[#222222]">{name}</h3>
        <p className="text-xs text-gray-500 mb-1">{hex}</p>
        {description && <p className="text-xs text-[#737373] leading-5">{
          description.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))
        }</p>}
      </div>
    </div>
  );
};

const ColorShowcase = () => {
  const brandColors = [
    { name: "Pry", hex: "#074994", description: "rgba(7,73,148,1) \n hsla(212,91,30,1) \n #074994", className: "" },
    { name: "Shade", hex: "#0850A3", description: "rgba(7,73,148,1) \n hsla(212,91,30,1) \n #0850A3", className: "" },
    { name: "Shade", hex: "#0085CA", description: "rgba(7,73,148,1) \n hsla(212,91,30,1) \n #0085cA", className: "" },
    { name: "font", hex: "#121520", description: "rgba(18,21,32,1) \n hsla(227,28,10,1) \n #121520", className: "" },
    { name: "Stroke", hex: "#96989966", description: "rgba(150,152,153,0.40) \n hsla(200,1,59,0.40) \n #969899", className: "" },
    { name: "Sec", hex: "#30CC83", description: "rgba(48,204,131,1) \n hsla(152,62,49,1) \n #30CC83", className: "" },
    { name: "Shade", hex: "#18EA88", description: "rgba(48,204,131,1) \n hsla(152,62,49,1) \n #18EA88", className: "" },
    { name: "Shade", hex: "#10A05D", description: "rgba(48,204,131,1) \n hsla(152,62,49,1) \n #10A05D", className: "" },
    { name: "White", hex: "#FFFFFF", description: "rgba(255,255,255,1) \n hsla(0,0,100,1) \n #FFFFFF", className: "" },
    { name: "Shade", hex: "#000000", description: "rgba(18,21,32,1) \n hsla(227,28,10,1) \n #00000", className: "" },
    { name: "Grey", hex: "#7F8C8D", description: "rgba(127,140,141,1) \n hsla(184,6,53,1) \n #7F8C8D", className: "" },
    { name: "Gradient", hex: ['#30CC83', '#074994'], description: "rgba(7,73,148,1) \n rgba(48,204,131,1)", className: "" },
  ];

  const statusColors = [
    { name: "success", hex: "#18EA88", description: "rgba(83,169,63,1) \n hsla(109,46,45,1) \n #53A93F", className: "" },
    { name: "error", hex: "#E74C3C", description: "rgba(231,76,60,1) \n hsla(6,78,57,1) \n #E74C3C", className: "" },
  ];

  return (
    <div className="space-y-8 bg-[#07499408] border-2 border-dashed p-6 rounded-3xl">
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brandColors.map((color, index) => (
            <Color
              key={`brand-${index}`}
              name={color.name}
              hex={color.hex}
              description={color.description}
              className={color.className}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Status Colors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {statusColors.map((color, index) => (
            <Color
              key={`status-${index}`}
              name={color.name}
              hex={color.hex}
              description={color.description}
              className={color.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorShowcase;