# About
A minimalistic Material UI inspired react library.

# Consuming the library

To consume this library simply install it on your app.

```bash
npm install @yosang/react-ui
```

then import the components as needed.

```jsx
import { Button } from '@yosang/react-ui'
```

# Documentation
No documentation yet...

# Testing the components locally
This library uses [@ladle/react](https://www.npmjs.com/package/@ladle/react) for component testing.

Simply do `npm install` inside the library to install it before using it.

Create a component story like this example `button.stories.jsx` and make sure you import the component.

Now we simply just export normal functions that apply this component in the different scenarios we want to test them.

```jsx
import { Button } from "./button.jsx";
import './button.css';

export const Primary = () => (
    <Button variant="primary">Primary Button</Button>
);

export const Secondary = () => (
    <Button variant="secondary">Secondary Button</Button>
);

export const Clickable = () => (
    <Button
        variant="primary"
        onClick={() => alert("Button clicked!")}
    >
        Click me
    </Button>
);
```

Run ladle with `npx ladle serve` or use the script provided `npm start`.

# Dependencies
- [lucide-react](https://lucide.dev/icons/)
- [m3-ripple](https://github.com/SaltyAom/m3-ripple)