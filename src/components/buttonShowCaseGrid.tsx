import React from "react"
import { ButtonDisplay } from "./buttonDisplay";
import { Check } from "lucide-react";

interface ButtonStateRow {
  state: "default" | "hover" | "pressed" | "disabled";
  label: string;
}

const buttonStates: ButtonStateRow[] = [
  { state: "default", label: "Default" },
  { state: "hover", label: "Hover" },
  { state: "pressed", label: "Pressed" },
  { state: "disabled", label: "Disabled" }
];

export const ButtonShowcaseGrid: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 bg-[#07499408] p-10 rounded-3xl border-2 border-dashed">
      <div className="bg-[#07499408] p-10 rounded-3xl border-2 border-dashed">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Button Components</h3>
        <div className="border border-dashed border-purple-200 rounded-3xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Primary Button Column */}
            <div className="space-y-4">
              {buttonStates.map((row) => (
                <div key={row.state} className="flex items-center">
                  <div className="w-20 text-sm text-gray-500 hidden md:block">{row.label}</div>
                  <div className="flex-1">
                    <ButtonDisplay 
                      variant="primary" 
                      state={row.state} 
                      text={<div className="flex items-center justify-center gap-2">Button <Check size={14} className="text-white" /></div>} 
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {buttonStates.map((row) => (
                <div key={row.state} className="flex items-center">
                  <div className="w-20 text-sm text-gray-500 hidden md:block"></div>
                  <div className="flex-1">
                    <ButtonDisplay 
                      variant="primary" 
                      state={row.state} 
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {buttonStates.map((row) => (
                <div key={row.state} className="flex items-center">
                  <div className="w-20 text-sm text-gray-500 hidden md:block"></div>
                  <div className="flex-1">
                    <ButtonDisplay 
                      variant="outline" 
                      state={row.state} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Second section: Buttons with Cancel */}
      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Default</h3>
        <div className="border-2 border-dashed border-purple-200 rounded-3xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Primary Button with Cancel */}
            <div className="space-y-4">
              {buttonStates.map((row) => (
                <div key={row.state} className="flex items-center gap-2">
                  <ButtonDisplay 
                    variant="primary" 
                    state={row.state} 
                  />
                  <span className="text-gray-500 text-sm">Cancel</span>
                </div>
              ))}
            </div>
            
            {/* Secondary Button with Cancel */}
            <div className="space-y-4">
              {buttonStates.map((row) => (
                <div key={row.state} className="flex items-center gap-2">
                  <span className="text-gray-500 text-sm">Cancel</span>
                  <ButtonDisplay 
                    variant="primary" 
                    state={row.state} 
                  />
                </div>
              ))}
            </div>
            
            {/* Toggle Buttons */}
            <div className="space-y-4">
              {buttonStates.map((row) => (
                <div key={row.state} className="flex items-center gap-2">
                  <ButtonDisplay 
                    variant="outline" 
                    state={row.state} 
                  />
                  <div className={`w-12 h-6 rounded-full transition-all flex items-center ${row.state === "disabled" ? "bg-gray-300" : "bg-green-500"} p-1 ${row.state !== "disabled" && "cursor-pointer"}`}>
                    <div className={`w-4 h-4 rounded-full bg-white transform transition-transform ${row.state !== "disabled" && "translate-x-6"}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};