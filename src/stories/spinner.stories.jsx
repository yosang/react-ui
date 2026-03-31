import { Spinner } from "../layout-components/Spinner/Spinner";
import { Button } from '../button/Button'
import { useEffect, useState } from "react";

export function ShowSpinner() {
    return <Spinner />
}

export function SpinnerOnButton() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [loading])

    return <Button spinner={ { state: loading} } onClick={() => setLoading(!loading)}>Save</Button>
}