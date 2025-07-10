import { EXPERIENCE_DATA } from "@/data";
import Timeline, { TimelineItem } from "../timeline";
import Card from "../ui/card";

export default function ExperienceCard() {
  return (
    <Card title="My Experience">
      <Timeline>
        {EXPERIENCE_DATA.map((ex, i) => (
          <TimelineItem
            key={i}
            date={ex.date}
            title={ex.title}
            subTitle={ex.subTitle}
            link={ex.link}
            tag={ex.tag}
          />
        ))}
      </Timeline>
    </Card>
  )
}
