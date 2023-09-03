const testTexts = [
  `
const [value, setValue] = useState(defaultValue);
const [isDrawing, setIsDrawing] = useState(true);

return (
<span> Look at this!</span>
)
`,
  `
export default function App() {
const [value, setValue] = useState(defaultValue);
const [isDrawing, setIsDrawing] = useState(true);

return (
<span> I'm drawing this circle now!</span>
)
`,
  `
import { useEffect, useState } from 'react';

export default function useMounted() {
const [mounted, setMounted] = useState(false);

useEffect(() => {
setMounted(true);
}, []);

return mounted;
}
`,
  `
return () => {
button.removeEventListener('mousedown', handleButtonClick);
document.removeEventListener('scroll', handleScroll);
button.removeEventListener('mouseover', handleMouseOver);
button.removeEventListener('mouseleave', handleMouseLeave);
};
`,
  `
const [selectedObject, setSelectedObject] = useState("cube");
const [isDrawing, setIsDrawing] = useState(true);

return (
<span> Look at this!</span>
)
`,
  `
useEffect(() => {
if (!element) return;

const handleScroll = debounce(() => {
const scrollTop = element.scrollTop;
const scrollLeft = element.scrollLeft;

setScrollRestoration((prevScrollRestoration) => ({
...prevScrollRestoration, [key]: { scrollTop, scrollLeft },}));
}, debounceTime);

element.addEventListener("scroll", handleScroll);
return () => { element.removeEventListener("scroll", handleScroll);};
}, [debounceTime, key, element, persist, setScrollRestoration]);
`,
];

export default testTexts;
