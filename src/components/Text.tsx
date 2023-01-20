import {ComponentPropsWithoutRef, ElementType, PropsWithChildren, ReactNode} from "react";

// rainbow ROYGBIV
type Rainbow = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'indigo' | 'violet'


type AsProp<C extends ElementType> = {
    as?: C
}

// type TextProps<C extends ElementType> = AsProp<C> & {
//     color?: Rainbow | "black";
//     // ==== PropsWithChildren====
//     // children: ReactNode
// }


// type Props<C extends ElementType> =
//     PropsWithChildren<TextProps<C>>
//     & Omit<ComponentPropsWithoutRef<C>, keyof TextProps<C>>


type PropsToOmit<C extends ElementType, P> = keyof (AsProp<C> & P)

type PolymorphicComponentProps<C extends ElementType, Props = {}> =
    PropsWithChildren<Props & AsProp<C>>
    & Omit<ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>


type TextProps = {
    color?: Rainbow | "black";
}

// TOD: 20. The problem(s) we want to tackle

export const Text = <C extends ElementType = 'span'>({
                                                         as,
                                                         color,
                                                         style,
                                                         children,
                                                         ...restProps
                                                     }: PolymorphicComponentProps<C, TextProps>) => {

    const Component = as || 'span'

    const internalStyles = color ? {style: {...style, color}} : {}

    return (
        <Component {...restProps} {...internalStyles}>{children}</Component>
    )
};


// <Text as="">Hello World</Text>
