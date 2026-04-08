import { useEffect, useState } from "react";
import { Input } from "../Forms/Input.jsx";

export function TextInput() {
    return <Input />
}

export function TextInputWithLabel() {
    return <Input labelText="Username"/>
}
export function TextInputWithLabelLeft() {
    return (
        <>
        <Input error="Bad shit" labelText="Username" labelPosition="left"/>
        <Input labelText="Password" labelPosition="left"/>
        <Input labelText="Email" labelPosition="left"/>
        <Input labelText="A looong as text" labelPosition="left"/>
        </>
    )
}
export function TextInputWithLabelRight() {
    const [error, setError] = useState(false)

    useEffect(() => {
        setTimeout(() => setError("bad shit"), 500)
    }, [])

    return (
        <>
        <Input error={error} labelText="Username" labelPosition="right"/>
        <Input labelText="Password" labelPosition="right"/>
        <Input labelText="Email" labelPosition="right"/>
        <Input labelText="A looong as text" labelPosition="right"/>
        </>
    )
}

export function DisabledInput() {
    return <Input disabled={true} labelText="Username"/>
}
export function InputWithAnError() {
    return <Input error="Bad shit" labelText="Username"/>
}