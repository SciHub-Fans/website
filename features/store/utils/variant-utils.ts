import { Product, ProductVariant } from "../types";

export interface SizeOption {
  value: string;
  label: string;
  quantity: number;
  variantId: string;
}

export const extractSizeOptions = (product: Product): SizeOption[] => {
  return product.variants.map(variant => {
    const sizeValue = variant.variantValues.find(
      v => v.productVariantOptionId === product.variantOptions[0].id
    )?.value || "";
    
    return {
      value: sizeValue,
      label: sizeValue,
      quantity: variant.quantity,
      variantId: variant.id
    };
  });
};

export const findVariantBySize = (
  product: Product,
  size: string
): ProductVariant | undefined => {
  return product.variants.find(variant =>
    variant.variantValues.some(
      v => 
        v.productVariantOptionId === product.variantOptions[0].id && 
        v.value === size
    )
  );
}; 