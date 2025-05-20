import React from 'react';

interface ColorProps {
  name: string;
  hex: string;
  description?: string;
  className?: string;
}

const Color = ({ name, hex, description, className }: ColorProps) => {
  return (
    <div className="flex flex-col rounded-md overflow-hidden border border-gray-200 shadow-sm">
      <div 
        className={`h-20 w-full ${className}`} 
        style={{ backgroundColor: hex }}
      />
      <div className="p-3 bg-white">
        <h3 className="font-medium text-sm text-gray-800">{name}</h3>
        <p className="text-xs text-gray-500 mb-1">{hex}</p>
        {description && <p className="text-xs text-gray-500">{description}</p>}
      </div>
    </div>
  );
};

const ColorShowcase = () => {
    const brandColors = [
        { name: "Blue", hex: "#0D47A1", description: "CMYK 100, 58, 0, 37", className: "" },
        { name: "Bright", hex: "#1565C0", description: "CMYK 87, 49, 0, 24", className: "" },
        { name: "Bright", hex: "#1E88E5", description: "CMYK 73, 40, 0, 10", className: "" },
        { name: "Dark", hex: "#0C1219", description: "CMYK 33, 27, 0, 90", className: "" },
        { name: "White", hex: "#E0E0E0", description: "CMYK 0, 0, 0, 12", className: "" },
        { name: "Mint", hex: "#10B981", description: "CMYK 91, 0, 30, 27", className: "" },
        { name: "Shade", hex: "#10DCAE", description: "CMYK 93, 0, 21, 14", className: "" },
        { name: "Shade", hex: "#059669", description: "CMYK 94, 0, 31, 42", className: "" },
        { name: "Metal", hex: "#1F1F1F", description: "CMYK 0, 0, 0, 88", className: "" },
        { name: "Shade", hex: "#6B7280", description: "CMYK 16, 10, 0, 50", className: "" },
        { name: "Grey", hex: "#0F766E", description: "CMYK 87, 0, 8, 54", className: "" },
        { name: "Gradient", hex: "#0D9488", description: "CMYK 91, 0, 10, 47", className: "" },
    ];

    const statusColors = [
        { name: "Success", hex: "#4CAF50", description: "CMYK 64, 0, 52, 31", className: "" },
        { name: "Error", hex: "#F44336", description: "CMYK 0, 72, 77, 4", className: "" },
        { name: "Warning", hex: "#FFC107", description: "CMYK 0, 25, 96, 0", className: "" },
        { name: "Info", hex: "#2196F3", description: "CMYK 86, 39, 0, 5", className: "" },
    ];

    const neutralColors = [
        { name: "Black", hex: "#000000", description: "CMYK 0, 0, 0, 100", className: "" },
        { name: "Gray 900", hex: "#212121", description: "CMYK 0, 0, 0, 87", className: "" },
        { name: "Gray 800", hex: "#424242", description: "CMYK 0, 0, 0, 74", className: "" },
        { name: "Gray 700", hex: "#616161", description: "CMYK 0, 0, 0, 62", className: "" },
        { name: "Gray 600", hex: "#757575", description: "CMYK 0, 0, 0, 54", className: "" },
        { name: "Gray 500", hex: "#9E9E9E", description: "CMYK 0, 0, 0, 38", className: "" },
        { name: "Gray 400", hex: "#BDBDBD", description: "CMYK 0, 0, 0, 26", className: "" },
        { name: "Gray 300", hex: "#E0E0E0", description: "CMYK 0, 0, 0, 12", className: "" },
        { name: "Gray 200", hex: "#EEEEEE", description: "CMYK 0, 0, 0, 7", className: "" },
        { name: "Gray 100", hex: "#F5F5F5", description: "CMYK 0, 0, 0, 4", className: "" },
        { name: "Gray 50", hex: "#FAFAFA", description: "CMYK 0, 0, 0, 2", className: "" },
        { name: "White", hex: "#FFFFFF", description: "CMYK 0, 0, 0, 0", className: "" },
    ];

    const accentColors = [
        { name: "Purple", hex: "#9C27B0", description: "CMYK 12, 77, 0, 31", className: "" },
        { name: "Indigo", hex: "#3F51B5", description: "CMYK 65, 55, 0, 29", className: "" },
        { name: "Teal", hex: "#009688", description: "CMYK 100, 0, 9, 47", className: "" },
        { name: "Orange", hex: "#FF9800", description: "CMYK 0, 40, 100, 0", className: "" },
        { name: "Pink", hex: "#E91E63", description: "CMYK 0, 87, 57, 9", className: "" },
        { name: "Lime", hex: "#CDDC39", description: "CMYK 8, 0, 77, 14", className: "" },
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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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

      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Neutral Colors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {neutralColors.map((color, index) => (
            <Color 
              key={`neutral-${index}`}
              name={color.name}
              hex={color.hex}
              description={color.description}
              className={color.className}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Accent Colors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {accentColors.map((color, index) => (
            <Color 
              key={`accent-${index}`}
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