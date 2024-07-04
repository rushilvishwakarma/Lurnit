import { useEffect, useRef, memo } from 'react';

// Define TypeScript types for props
interface MathJaxRendererProps {
  math: string;
  isExpanded: boolean;
  previewLines?: number; // Optional prop
}

// Define MathJax if it's not defined globally
declare global {
  interface Window {
    MathJax?: {
      typesetPromise: (elements?: Element[]) => Promise<void>;
    };
  }
}

// Load MathJax script only once
const loadMathJax = (): Promise<void> => {
  return new Promise((resolve) => {
    if (window.MathJax) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.0/es5/tex-mml-chtml.js';
    script.async = true;
    script.onload = () => resolve();
    document.head.appendChild(script);
  });
};

const MathJaxRenderer = memo(({ math, isExpanded, previewLines = 3 }: MathJaxRendererProps) => {
  const mathJaxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const renderMath = async () => {
      if (!mathJaxRef.current) return;
      await loadMathJax();
      window.MathJax?.typesetPromise([mathJaxRef.current])
        .catch(error => console.error('MathJax typeset error:', error));
    };
    renderMath();
  }, [math, isExpanded]); // Re-render when math or isExpanded changes

  const isMathExpression = math.startsWith('\\(') && math.endsWith('\\)');

  const containerStyle: React.CSSProperties = isExpanded
    ? {}
    : {
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: previewLines,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        lineHeight: '1.2em',
        fontFamily: 'Roboto, sans-serif',
      };

  return (
    <div>
      <div
        ref={mathJaxRef}
        className={`mathjax-container ${isMathExpression ? 'mathjax' : 'plain-text'}`}
        style={containerStyle}
        dangerouslySetInnerHTML={{ __html: isMathExpression ? `\\(${math}\\)` : math.replace(/\n/g, '<br>') }}
      />
    </div>
  );
});

export default MathJaxRenderer;
