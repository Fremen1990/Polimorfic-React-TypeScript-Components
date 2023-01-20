import {ComponentPropsWithoutRef, ElementType, PropsWithChildren, ReactNode} from "react";

// rainbow ROYGBIV
type Rainbow = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet'

type TextProps<C extends ElementType> = {
    as?: C;
    color?: Rainbow | "black";
    // ==== PropsWithChildren====
    // children: ReactNode
}


type Props<C extends ElementType> =
    PropsWithChildren<TextProps<C>>
    & Omit<ComponentPropsWithoutRef<C>, keyof TextProps<C>>

export const Text = <C extends ElementType = 'span'>({as, color, style, children, ...restProps}: Props<C>) => {

    const Component = as || 'span'

    const internalStyles = color ? {style: {...style, color}} : {}

    return (
        <Component {...restProps} {...internalStyles}>{children}</Component>
    )
};

// <Text as="">Hello World</Text>
