import * as React from "react"
import { Eye, EyeOff, Search } from "lucide-react"
import { cn } from "lib/utils"

export type InputProps = {
    fullWidth?: boolean
    suffix?: React.ReactNode
    prefixIcon?: React.ReactNode
} & React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, fullWidth, suffix, prefixIcon, ...props }, ref) => {
        const [hide, setHide] = React.useState<boolean>(true)
        const iconClassnames = `absolute right-1 top-0.5 text-muted-foreground p-1 box-content cursor-pointer backdrop-blur z-2 ${props.disabled && "pointer-events-none cursor-not-allowed opacity-50"}`
        const searchIconClassnames = `absolute right-1 top-0.5 text-muted-foreground p-1 box-content cursor-pointer z-1 ${props.disabled && "pointer-events-none cursor-not-allowed opacity-50"}`

        return (
            <div
                className={`${fullWidth ? "w-full" : "w-full sm:w-max"} ${props.hidden ? "h-0" : "h-12"} relative`}
            >
                {type === "search" && (
                    <Search width={16} className={searchIconClassnames} />
                )}
                {!!prefixIcon && (
                    <span className="absolute left-1 top-0.5 text-muted-foreground p-1 box-content cursor-pointer backdrop-blur z-1">
                        {prefixIcon}
                    </span>
                )}
                <input
                    type={
                        type === "password" ?
                            hide ?
                                "password"
                            :   "text"
                        :   type
                    }
                    className={cn(
                        "flex h-full w-full rounded-md border bg-[#F5F5F5] shadow-none border-input px-3 py-1 text-sm  transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
                        className,
                        (type === "search" || !!prefixIcon) && "pr-8",
                        (type === "password" || !!suffix) && "pr-8",
                    )}
                    ref={ref}
                    {...props}
                />
                {type === "password" &&
                    (hide ?
                        <Eye
                            width={18}
                            className={iconClassnames}
                            onClick={() => setHide(false)}
                        />
                    :   <EyeOff
                            width={18}
                            className={iconClassnames}
                            onClick={() => setHide(true)}
                        />)}
                {!!suffix && (
                    <span
                        className={`absolute right-2 top-[50%] translate-y-[-50%] text-muted-foreground box-content cursor-pointer backdrop-blur z-1 ${props.disabled && "pointer-events-none cursor-not-allowed opacity-50"} `}
                    >
                        {suffix}
                    </span>
                )}
            </div>
        )
    },
)
Input.displayName = "Input"

export { Input }
