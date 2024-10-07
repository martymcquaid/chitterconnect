import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

const Slider = React.forwardRef(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...props}>
    <SliderPrimitive.Track
      className="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      className="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

const SliderWithValue = React.forwardRef(({ className, min, max, step, formatValue, ...props }, ref) => {
  const [localValue, setLocalValue] = React.useState(props.value?.[0] || min);

  React.useEffect(() => {
    setLocalValue(props.value?.[0] || min);
  }, [props.value, min]);

  const handleChange = (newValue) => {
    setLocalValue(newValue[0]);
    props.onValueChange?.(newValue);
  };

  return (
    <div className="space-y-2">
      <Slider
        ref={ref}
        min={min}
        max={max}
        step={step}
        className={cn("w-full", className)}
        onValueChange={handleChange}
        {...props}
      />
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{formatValue ? formatValue(min) : min}</span>
        <span className="text-lg font-bold text-primary">{formatValue ? formatValue(localValue) : localValue}</span>
        <span className="text-sm font-medium">{formatValue ? formatValue(max) : max}</span>
      </div>
    </div>
  );
});
SliderWithValue.displayName = "SliderWithValue";

export { Slider, SliderWithValue }