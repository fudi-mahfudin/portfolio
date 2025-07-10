
import Heading from '../heading';
import Card from '../ui/card';
import ContactCard from '../cards/contact-card';
import { PROFILE_DATA } from '@/data';
import ContactCardForm from '../cards/contact-card-form';
import { MdEmail } from 'react-icons/md';

export default function ContactSection() {

  return (
    <div className="pt-24 px-3 lg:px-8">
      <Heading number="03" title="Contact" subtitle="Me" />
      <Card>
        <div className="grid gap-8 md:grid-cols-[350px_1fr]">
          {/*contact cards*/}
          <div className="flex flex-col gap-8">
            <ContactCard
              title="Chat with me"
              icon={<MdEmail className="fill-[#333] text-lg" />}
              text={PROFILE_DATA.email}
              btnText="Email me"
            />
          </div>
          {/*contact form*/}
          <ContactCardForm />
        </div>
      </Card>
    </div>
  );
}
