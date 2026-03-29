import { Button } from "./button/Button.jsx";
import { CrossIcon } from "./icons/action/CrossIcon.jsx";
import { TrashIcon } from "./icons/content/TrashIcon.jsx";

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

export const Custom = () => (
    <Button variant="primary" style={{ backgroundColor: "red" }}>
        Custom color
    </Button>
)

export const IconWithText = () => (
    <Button variant="primary" icon={<CrossIcon />} hasText={true}>
        Button with an icon
    </Button>
)

export const IconWithTextAndNoRipple = () => (
    <Button variant="primary" icon={<CrossIcon />} hasText={true} rippleEffect={false}>
        Button with an icon
    </Button>
)

export const IconWithoutText = () => (
    <Button variant="primary" icon={<CrossIcon />} />
)

export const TrashIconWithoutText = () => (
    <Button variant="primary" icon={<TrashIcon />} />
)

export const DisabledButton = () => (
    <Button variant="primary" disabled={true}>
        Button
    </Button>
)
export const DisabledButtonWithIcon = () => (
    <Button variant="primary" icon={<CrossIcon />} hasText={true} disabled={true}>
        Button with an icon
    </Button>
)
