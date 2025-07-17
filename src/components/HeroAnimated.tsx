
import * as React from "react"
import { motion, type Transition, type HTMLMotionProps } from "framer-motion"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

// Utility
function cn(...classes: any[]) {
  return classes.filter(Boolean).join(" ")
}

// Gradient config
const GRADIENT_COLORS = {
  blue: [
    { color: "rgb(180, 176, 254)", start: "0%" },
    { color: "rgb(54, 50, 133)", start: "22.92%" },
    { color: "rgb(17, 13, 91)", start: "42.71%" },
    { color: "rgb(5, 3, 39)", start: "88.54%" },
  ],
}
const GRADIENT_SIZES = {
  lg: { width: "85%", height: "70%" },
}
const GRADIENT_POSITIONS = {
  top: { x: "50%", y: "-10%" },
}

// Motion variants
type TransformDirectionType = "top" | "bottom" | "left" | "right" | "z"
const transformVariants = (direction?: TransformDirectionType) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : 0,
    scale: direction === "z" ? 0 : 1,
    opacity: 0,
  },
  visible: { x: 0, y: 0, scale: 1, opacity: 1 },
})

const TRANSITION_CONFIG = { ease: "easeInOut", duration: 0.5 }

// Hero container
const heroVariants = cva("relative min-h-screen w-full overflow-hidden", {
  variants: {
    layout: {
      default: "flex flex-col items-center justify-center text-center",
      colLeft: "flex flex-col justify-center items-start",
    },
  },
  defaultVariants: {
    layout: "default",
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

// Background Gradient
function BgGradient({
  gradientSize = GRADIENT_SIZES["lg"],
  gradientPosition = GRADIENT_POSITIONS["top"],
  gradientColors = GRADIENT_COLORS["blue"],
  className,
  ...props
}: any) {
  const gradientString = gradientColors
    .map(({ color, start }: any) => `${color} ${start}`)
    .join(", ")

  const gradientStyle = `radial-gradient(${gradientSize.width} ${gradientSize.height} at ${gradientPosition.x} ${gradientPosition.y}, ${gradientString})`

  return (
    <div
      className={cn("absolute inset-0 pointer-events-none select-none", className)}
      style={{
        background: gradientColors[gradientColors.length - 1].color,
        backgroundImage: gradientStyle,
        ...props.style,
      }}
      {...props}
    />
  )
}

// Word animation
function Word({
  word,
  transition = TRANSITION_CONFIG,
  direction = "bottom",
}: {
  word: string
  transition?: Transition
  direction?: TransformDirectionType
}) {
  const characters = word.split("")
  return (
    <span className="inline-block whitespace-nowrap align-top">
      {characters.map((char, index) => (
        <span key={index} className="inline-block">
          <motion.span
            className="inline-block"
            variants={transformVariants(direction)}
            transition={transition}
          >
            {char}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

// Staggered text animation
function TextStagger({
  text,
  stagger = 0.05,
  transition,
  direction,
  className,
  as: Component = "span",
  ...props
}: {
  text: string
  stagger?: number
  transition?: Transition
  direction?: TransformDirectionType
  className?: string
  as?: keyof JSX.IntrinsicElements
}) {
  const words = text.split(" ")
  const MotionComponent = motion(Component)

  return (
    <MotionComponent
      className={cn("relative", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: stagger }}
      {...props}
    >
      {words.map((word, i) => (
        <React.Fragment key={i}>
          <Word word={word} transition={transition} direction={direction} />{" "}
        </React.Fragment>
      ))}
    </MotionComponent>
  )
}

// Animated container
const AnimatedContainer = ({
  children,
  className,
  transformDirection = "bottom",
  ...props
}: {
  children: React.ReactNode
  className?: string
  transformDirection?: TransformDirectionType
} & HTMLMotionProps<"div">) => {
  return (
    <motion.div
      className={cn("relative z-10", className)}
      variants={transformVariants(transformDirection)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, ...props.viewport }}
      transition={{
        duration: props.transition?.delay ?? 0.4,
        ease: "easeIn",
        delay: props.transition?.delay ?? 0.4,
        ...props.transition,
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// ✅ Final Exported Component
export default function HeroAnimated() {
  return (
    <section className={cn(heroVariants({ layout: "default" }), "text-zinc-100 px-6 py-12 md:px-10 lg:px-12")}>
      <BgGradient />
      <TextStagger
        text="DEVELOP PEOPLE"
        className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl font-[700]"
      />
      
      <div className="pt-4 md:pt-8">
        <TextStagger
          text="YOU DEPEND ON THE MOST"
          className="text-3xl font-medium tracking-tight md:text-4xl lg:text-7xl font-[700]"
        />
      </div>
      

        
      
      <AnimatedContainer className="mt-8 md:mt-12 mx-auto w-4/5 text-muted/80 md:w-1/2">
        <p className="whitespace-pre-line text-lg font-light font-[300] leading-relaxed">
          High-Impact Blended Learning Programs For All Your Managers To Thrive</p>
      </AnimatedContainer>
      <br/>
      <AnimatedContainer
        className="mt-6 md:mt-10 flex items-center justify-center gap-4"
        transition={{ delay: 0.6 }}
      >
        <Button variant="secondary" size="lg">Get Started</Button>
        <Button variant="outline" size="lg">Learn More</Button>
      </AnimatedContainer>
    </section>
  )
}




// import * as React from "react"
// import { motion, type Transition, type HTMLMotionProps } from "framer-motion"
// import { cva, type VariantProps } from "class-variance-authority"
// import { Slot } from "@radix-ui/react-slot"

// // Utility
// function cn(...classes: any[]) {
//   return classes.filter(Boolean).join(" ")
// }

// // Gradient config
// const GRADIENT_COLORS = {
//   blue: [
//     { color: "rgb(180, 176, 254)", start: "0%" },
//     { color: "rgb(54, 50, 133)", start: "22.92%" },
//     { color: "rgb(17, 13, 91)", start: "42.71%" },
//     { color: "rgb(5, 3, 39)", start: "88.54%" },
//   ],
// }
// const GRADIENT_SIZES = {
//   lg: { width: "85%", height: "70%" },
// }
// const GRADIENT_POSITIONS = {
//   top: { x: "50%", y: "-10%" },
// }

// // Motion variants
// type TransformDirectionType = "top" | "bottom" | "left" | "right" | "z"
// const transformVariants = (direction?: TransformDirectionType) => ({
//   hidden: {
//     x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
//     y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : 0,
//     scale: direction === "z" ? 0 : 1,
//     opacity: 0,
//   },
//   visible: { x: 0, y: 0, scale: 1, opacity: 1 },
// })

// const TRANSITION_CONFIG = { ease: "easeInOut", duration: 0.5 }

// // Hero container
// const heroVariants = cva("relative min-h-screen w-full overflow-hidden", {
//   variants: {
//     layout: {
//       default: "flex flex-col items-center justify-center text-center",
//       colLeft: "flex flex-col justify-center items-start",
//     },
//   },
//   defaultVariants: {
//     layout: "default",
//   },
// })

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
//     VariantProps<typeof buttonVariants> {
//   asChild?: boolean
// }

// const buttonVariants = cva(
//   "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50",
//   {
//     variants: {
//       variant: {
//         secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
//         outline:
//           "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
//       },
//       size: {
//         lg: "h-11 rounded-full px-8",
//       },
//     },
//     defaultVariants: {
//       variant: "secondary",
//       size: "lg",
//     },
//   },
// )

// const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
//   ({ className, variant, size, asChild = false, ...props }, ref) => {
//     const Comp = asChild ? Slot : "button"
//     return (
//       <Comp
//         className={cn(buttonVariants({ variant, size, className }))}
//         ref={ref}
//         {...props}
//       />
//     )
//   }
// )
// Button.displayName = "Button"

// // Background Gradient
// function BgGradient({
//   gradientSize = GRADIENT_SIZES["lg"],
//   gradientPosition = GRADIENT_POSITIONS["top"],
//   gradientColors = GRADIENT_COLORS["blue"],
//   className,
//   ...props
// }: any) {
//   const gradientString = gradientColors
//     .map(({ color, start }: any) => `${color} ${start}`)
//     .join(", ")

//   const gradientStyle = `radial-gradient(${gradientSize.width} ${gradientSize.height} at ${gradientPosition.x} ${gradientPosition.y}, ${gradientString})`

//   return (
//     <div
//       className={cn("absolute inset-0 pointer-events-none select-none", className)}
//       style={{
//         background: gradientColors[gradientColors.length - 1].color,
//         backgroundImage: gradientStyle,
//         ...props.style,
//       }}
//       {...props}
//     />
//   )
// }

// // Word animation
// function Word({
//   word,
//   transition = TRANSITION_CONFIG,
//   direction = "bottom",
// }: {
//   word: string
//   transition?: Transition
//   direction?: TransformDirectionType
// }) {
//   const characters = word.split("")
//   return (
//     <span className="inline-block whitespace-nowrap align-top">
//       {characters.map((char, index) => (
//         <span key={index} className="inline-block">
//           <motion.span
//             className="inline-block"
//             variants={transformVariants(direction)}
//             transition={transition}
//           >
//             {char}
//           </motion.span>
//         </span>
//       ))}
//     </span>
//   )
// }

// // Staggered text animation
// function TextStagger({
//   text,
//   stagger = 0.05,
//   transition,
//   direction,
//   className,
//   as: Component = "span",
//   ...props
// }: {
//   text: string
//   stagger?: number
//   transition?: Transition
//   direction?: TransformDirectionType
//   className?: string
//   as?: keyof JSX.IntrinsicElements
// }) {
//   const words = text.split(" ")
//   const MotionComponent = motion(Component)

//   return (
//     <MotionComponent
//       className={cn("relative", className)}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       transition={{ staggerChildren: stagger }}
//       {...props}
//     >
//       {words.map((word, i) => (
//         <React.Fragment key={i}>
//           <Word word={word} transition={transition} direction={direction} />{" "}
//         </React.Fragment>
//       ))}
//     </MotionComponent>
//   )
// }

// // Animated container
// const AnimatedContainer = ({
//   children,
//   className,
//   transformDirection = "bottom",
//   ...props
// }: {
//   children: React.ReactNode
//   className?: string
//   transformDirection?: TransformDirectionType
// } & HTMLMotionProps<"div">) => {
//   return (
//     <motion.div
//       className={cn("relative z-10", className)}
//       variants={transformVariants(transformDirection)}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, ...props.viewport }}
//       transition={{
//         duration: props.transition?.delay ?? 0.4,
//         ease: "easeIn",
//         delay: props.transition?.delay ?? 0.4,
//         ...props.transition,
//       }}
//       {...props}
//     >
//       {children}
//     </motion.div>
//   )
// }

// // ✅ Final Exported Component
// export default function HeroAnimated() {
//   return (
//     <section className={cn(heroVariants({ layout: "default" }), "text-zinc-100 px-6 py-12 md:px-10 lg:px-12")}>
//       <BgGradient />
//       <TextStagger
//         text="DEVELOP PEOPLE"
//         className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl font-[700]"
//       />
      
//       <div className="pt-4 md:pt-8">
//         <TextStagger
//           text="YOU DEPEND ON THE MOST"
//           className="text-3xl font-medium tracking-tight md:text-4xl lg:text-7xl font-[700]"
//         />
//       </div>
      

        
      
//       <AnimatedContainer className="mt-8 md:mt-12 mx-auto w-4/5 text-muted/80 md:w-1/2">
//         <p className="whitespace-pre-line text-lg font-light font-[300] leading-relaxed">
//           High-Impact Blended Learning Programs For All Your Managers To Thrive</p>
//       </AnimatedContainer>
//       <br/>
//       <AnimatedContainer
//         className="mt-6 md:mt-10 flex items-center justify-center gap-4"
//         transition={{ delay: 0.6 }}
//       >
//         <Button variant="secondary" size="lg">Get Started</Button>
//         <Button variant="outline" size="lg">Learn More</Button>
//       </AnimatedContainer>
//     </section>
//   )
// }
