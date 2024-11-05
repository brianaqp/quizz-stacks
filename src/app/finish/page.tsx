'use client';

import { useSearchParams } from "next/navigation"

export default function Finish() {
    const searchParams = useSearchParams();
    const params = searchParams.get("id");

    return (
    <>Finish!, id - {params}
    </>
    )
}