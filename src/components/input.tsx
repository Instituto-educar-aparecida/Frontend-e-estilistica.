import { Controller, useFormContext, type FieldValues } from "react-hook-form";
import { cn } from "../lib/utils";
import type { InputProps } from "../types/input";

export const Input = <TFieldValues extends FieldValues = FieldValues>({
  name,
  label,
  placeholder,
  type = "text",
  disabled,
  icon: Icon,
  className,
}: InputProps<TFieldValues>) => {
  const { control } = useFormContext();

  const inputClasses = cn(
    "w-full h-12 bg-secondary/60 border border-white/10 rounded-xl px-3",
    Icon ? "pl-10 pr-3" : "px-3",
    "text-white text-sm placeholder:text-gray-500",
    "focus:outline-none focus:ring-2 focus:ring-violet-400/40 focus:border-violet-400/50",
    "transition-all duration-200",
    disabled && "bg-secondary/40 cursor-not-allowed opacity-60",
    className,
  );

  const iconClasses = cn(
    "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-violet-400/50 transition-colors duration-200 text-lg",
    disabled && "text-gray-600",
  );

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider ml-0.5">
          {label}
        </label>
      )}

      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <>
            <div className="relative group">
              {Icon && <Icon className={iconClasses} />}
              <input
                {...field}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                className={inputClasses}
              />
            </div>

            {error?.message && (
              <span className="text-danger text-xs ml-0.5 mt-1">
                {error.message}
              </span>
            )}
          </>
        )}
      />
    </div>
  );
};
