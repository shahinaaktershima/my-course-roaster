# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



i have used many feature in this projects.like:
01.jsx
02.component
03.virtual DOM
04.conditional statement
Discussing how i managed the state in my assignment project:

Begin by identifying which components in my project need to maintain state. Stateful components are those that have data that can change over time.

Consider whether the state should be local to a specific component or shared among multiple components. Local state is managed within a single component, while shared state is managed at a higher level and can be accessed by multiple components.

For component-specific state, i use the useState hook to create and manage local state within functional components.then i define my state variable and a function to update it.

If i need to share state between parent and child components, pass the state data and update functions as props from the parent to the child components. This allows child components to receive and display the state while the parent component retains control over it.
that's it.