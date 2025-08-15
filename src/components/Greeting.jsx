export default function Greeting({ name, children }) {
    return <div>Hello {name ? name : "World"}{children}</div>;
}