import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Farhan Helmy</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="Asus TUF AMD 16GB RAM">
              Single boot PopOS
            </Tool>
            <Tool title="AOC 27'' 144HZ">
              Nice monitor
            </Tool>
            <Tool title="Keychron K3 Pro V2">
              Trying out brown switch keyboard by Keychron
            </Tool>
            <Tool title="Standing Desk">
              For ergonomic reasons
            </Tool>
            <Tool title="Ikea Marcus">
              If I’m going to slouch in the worst ergonomic position imaginable
              all day, I might as well do it in an expensive chair.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="VScode">
              I’ve been using VSCode for years now and I still love it. It’s
              fast, extensible, and has a great community.
            </Tool>
            <Tool title="Ohmyzsh">
              Simple linux terminal with ohmyzsh
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Chromium">
              Best browser on linux
            </Tool>
            <Tool title="Notion">
              Best note taking app ever
            </Tool>
          </ToolsSection>
          <ToolsSection title="Cloud preference">
            <Tool title="AWS">
              Always bet on AWS
            </Tool>
          </ToolsSection>
          <ToolsSection title="Production tools">
            <Tool title="OBS">
              Best broadcasting and recording software ever.
            </Tool>
            <Tool title="Logitech webcam">
              For face recording.
            </Tool>
            <Tool title="Fifine Microphone">
              Best purchase for clear microphone.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
