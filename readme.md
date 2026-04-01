![npm version](https://img.shields.io/npm/v/@yosang/react-ui)
![npm downloads](https://img.shields.io/npm/dw/@yosang/react-ui)
![license](https://img.shields.io/npm/l/@yosang/react-ui)

# About
A minimalistic and professional React UI component library.

> ⚠️ This library is currently experimental and not recommended for production use.
> Components are still being improved for type safety and accessibility.

Built as a learning project to explore modern UI architecture and design systems.

## Features
- Minimal and clean design system
- Reusable UI components (Navbar, Container, Button, and more)
- Icon support via lucide-react
- Lightweight and easy to integrate

## Roadmap

- [ ] TypeScript support
- [ ] Accessibility improvements (ARIA)
- [ ] Component documentation
- [ ] Theme customization

## Components

**Layout**
- Container
- Divider
- Modal
- Drawer
- Hero

**Navigation**
- Navbar

**Inputs & Actions**
- Button
- Input

**Feedback**
- Spinner

**Data Display**
- Table
- ProductCard
- Label

## Installation

```bash
npm install @yosang/react-ui
```

## Usage

```jsx
import { Button } from '@yosang/react-ui';

export default function App() {
  return <Button variant="primary">Click me</Button>;
}
```

## Documentation
Documentation is currently in progress.  
In the meantime, you can explore components using Ladle stories.

## Preview

Run the development environment to explore components interactively:

```bash
npm install
npm start
```

## Local Development & Testing
This library uses [@ladle/react](https://www.npmjs.com/package/@ladle/react) for component development and testing.

### Getting started

```bash
npm install
npm start
```

### Creating stories
Create a component story like `button.stories.jsx`:

```jsx
import { Button } from "./button.jsx";

export const Primary = () => (
  <Button variant="primary">Primary Button</Button>
);
```

## Why this library?
This project is a personal effort to learn and understand how modern UI libraries such as Tailwind, shadcn and Material UI are built, with a focus on:

- Component reusability
- Design systems
- Clean and scalable architecture

## Dependencies
- [lucide-react](https://lucide.dev/icons/)
- [m3-ripple](https://github.com/SaltyAom/m3-ripple)