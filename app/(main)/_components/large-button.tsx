import Link from "next/link";

import "./_scss/large-button.scss"

interface LargeButtonProps {
    children: React.ReactNode;
    target?: string
}

export const LargeButton = ({
    children,
    target
}: LargeButtonProps) => {
    return (
        <Link href={target ? target : "#"} className="large-button bg-white text-dark ff-serif uppercase">
            {children}
        </Link>
    )
}