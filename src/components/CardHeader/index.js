import { CardHeader } from "../styles"

export function CardTitle({ text, children }) {
  return (
    <>
      <CardHeader>
        <div>
          <p>{text}</p>
        </div>

        {children}
      </CardHeader>
    </>
  )
}