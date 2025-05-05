import { cn } from "lib/utils"
import {
    Controller,
    FieldValues,
    Path,
    useController,
    UseFormReturn,
} from "react-hook-form"
import { ClassNameValue } from "tailwind-merge"
import ErrorMessage from "../ui/error-message"
import { Label } from "../ui/label"
import { CalendarProps } from "components/ui/calendar"
import { DatePicker } from "components/ui/date-picker"

interface IProps<IForm extends FieldValues> {
    methods: UseFormReturn<IForm>
    name: Path<IForm>
    label?: string
    wrapperClassName?: ClassNameValue
    hideError?: boolean
    disabled?: boolean
    format?: string
    placeholder?: string
    required?: boolean
    message?: string
}

export default function FormDatePicker<IForm extends FieldValues>({
    methods,
    name,
    label,
    hideError = false,
    disabled,
    format,
    placeholder,
    required = false,
    wrapperClassName,
    message = "",
    ...calendarProps
}: IProps<IForm> & CalendarProps) {

    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control: methods.control,
        rules: {
            required: {
                value: required,
                message: message,
            },
        },
    })
    return (
        <fieldset className={cn("flex flex-col gap-1", wrapperClassName)}>
            {label && (
                <Label
                    htmlFor={name}
                    className={cn(!!error && "text-destructive")}
                    required={required}
                >
                    {label}
                </Label>
            )}
            <Controller
                name={name}
                control={methods.control}
                render={() => (
                    <DatePicker
                        date={field.value}
                        setDate={field.onChange}
                        format={format}
                        placeholder={placeholder || label}
                        disabled={field.disabled || disabled}
                        
                        fullWidth
                        {...calendarProps}
                        defaultMonth={
                            field.value ?
                                new Date(
                                    field.value?.toString()?.replace("/", "-"),
                                )
                                : new Date()
                        }
                        style={{
                            pointerEvents:
                                field.disabled || disabled ? "none" : "auto",
                        }}
                    />
                )}
            />
            {!!error && !hideError && (
                <ErrorMessage>
                    {error.message || error.root?.message}
                </ErrorMessage>
            )}
        </fieldset>
    )
}
