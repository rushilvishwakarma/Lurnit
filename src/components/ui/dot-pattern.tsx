import * as React from 'react'
import { useId } from 'react'
import { cn } from "@/lib/utils";

interface DotPatternProps {
  width?: any
  height?: any
  x?: any
  y?: any
  cx?: any
  cy?: any
  cr?: any
  className?: string
  [key: string]: any
}

const DotPattern = React.forwardRef<HTMLDivElement, DotPatternProps>(
  ({ width = 16, height = 16, x = 0, y = 0, cx = 1, cy = 1, cr = 1, className, ...props }, ref) => {
    const id = useId()

    return (
      <div ref={ref} className={cn('dot-pattern', className)} {...props}>
        <svg
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80'
          )}
        >
          <defs>
            <pattern
              id={id}
              width={width}
              height={height}
              patternUnits="userSpaceOnUse"
              patternContentUnits="userSpaceOnUse"
              x={x}
              y={y}
            >
              <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
        </svg>
      </div>
    )
  }
)

DotPattern.displayName = 'DotPattern'

export default DotPattern
