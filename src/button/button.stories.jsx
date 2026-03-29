import { Button } from "./button.jsx";

export const Primary = () => (
    <Button tone="primary">Primary Button</Button>
);

export const Secondary = () => (
    <Button tone="secondary">Secondary Button</Button>
);

export const Clickable = () => (
    <Button
        tone="primary"
        onClick={() => alert("Button clicked!")}
    >
        Click me
    </Button>
);

export const Custom = () => (
    <Button tone="primary" style={{ backgroundColor: "red" }}>
        Custom color
    </Button>
)