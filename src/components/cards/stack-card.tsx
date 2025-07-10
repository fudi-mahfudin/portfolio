import Card from "../ui/card";
import Tooltip from "../ui/tooltip";
import { STACK_DATA } from "../../data";

export default function StackCard() {
  return (
    <Card title="My Tech stack">
      <div className="flex flex-col gap-6 mt-2">
        {STACK_DATA.map((tech, i) => (
          <div
            key={i}
            className="grid grid-cols-[50px_1fr] items-center gap-[15%] lg:gap-20"
          >
            {/*Stack group name*/}
            <div className="h-auto flex-none break-words whitespace-pre">
              <p className="text-secondary-foreground">{tech.title}</p>
            </div>
            {/*Tooltip */}
            <div className="flex gap-3 flex-wrap">
              {tech.stack.map((t) => (
                <Tooltip
                  key={t.label}
                  title={t.label}
                  image={t.image}
                  bgColor={t.bgColor}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}