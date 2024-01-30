import "./page-title.scss"

interface PageTitleProps {
    number: "01" | "02" | "03";
    text: string;
}

export const PageTitle = ({
    number,
    text
}: PageTitleProps) => {
    return (
        <h1 className="page-title numbered-title">
            <span aria-hidden="true">{number}</span>{text}
        </h1>
    )
}