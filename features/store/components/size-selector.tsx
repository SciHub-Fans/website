import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SizeOption } from "../utils/variant-utils";

interface SizeSelectorProps {
  sizes: SizeOption[];
  onSelect?: (variantId: string) => void;
}

const SizeSelector = ({ sizes, onSelect }: SizeSelectorProps) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  
  const handleSizeSelect = (size: SizeOption) => {
    setSelectedSize(size.value);
    onSelect?.(size.variantId);
  };

  return (
    <div className="relative group">
      <Button
        variant={selectedSize ? "default" : "outline"}
        className={`min-w-8 min-h-8 transition-colors duration-200`}
      >
        {selectedSize || "Size"}
      </Button>
      
      <div className="absolute bottom-full right-0 mb-2 opacity-0 invisible 
                    group-hover:opacity-100 group-hover:visible 
                    transition-all duration-200 z-50">
        <div className="bg-background rounded-lg p-2 shadow-lg 
                      flex gap-2 border border-border">
          {sizes.map((size) => (
            <Button
              key={size.value}
              variant={selectedSize === size.value ? "default" : "outline"}
              className="min-w-8 min-h-8 max-w-10 max-h-10"
              onClick={() => handleSizeSelect(size)}
              disabled={size.quantity <= 0}
              title={size.quantity <= 0 ? "缺货" : `库存: ${size.quantity}`}
            >
              {size.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SizeSelector;
