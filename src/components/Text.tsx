import {
    ComponentPropsWithoutRef,
    ComponentPropsWithRef,
    ElementType,
    forwardRef,
    PropsWithChildren, ReactElement,
    ReactNode
} from "react";

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

type PolymorphicRef<C extends ElementType> = ComponentPropsWithRef<C>["ref"]

type Props<C extends ElementType, P> = PolymorphicComponentProps<C, P>

type PolymorphicComponentPropsWithRef<C extends ElementType, P> =
    PolymorphicComponentProps<C, P>
    & { ref?: PolymorphicRef<C> }

type TextComponent = <C extends ElementType>(props: PolymorphicComponentPropsWithRef<C, TextProps>) => ReactElement | null

export const TextWithRef: TextComponent = forwardRef(<C extends ElementType = 'span'>({
                                                                                          as,
                                                                                          color,
                                                                                          style,
                                                                                          children,
                                                                                          ...restProps
                                                                                      }: Props<C, TextProps>, ref?: PolymorphicRef<C>) => {

        const Component = as || 'span'

        const internalStyles = color ? {style: {...style, color}} : {}

        return (
            <Component {...restProps} {...internalStyles} ref={ref}>{children} </Component>
        )
    }
)


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
