import { CardTitle } from "../CardHeader"
import { Card } from "./styles"

export function ContentDesigner({ children, title }) {
  return (
    <Card className="card">
      <div className="card-body">
        <CardTitle text={`${title}`} />

        <div>
          {children}
        </div>
      </div>
    </Card>
  )
}
