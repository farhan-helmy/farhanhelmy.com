import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon,
} from '@/components/SocialIcons'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Farhan Helmy</title>
        <meta name="description" content="I’m Farhan Helmy" />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src="/potrait.jpeg"
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Farhan Helmy. Available for <em>AWS Consulting</em> and{' '}
              <em> Software Development Freelance.</em>
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Hey there, welcome to my portfolio! My name is Farhan, and I`m a
                software engineer working at Servicerocket. I love building
                software that`s both functional and elegant, and I`m always on
                the lookout for new challenges and projects to sink my teeth
                into.
              </p>
              <p>
                In addition to my day job, I also do some freelance AWS
                consulting and software development on the side. I`ve got a
                knack for AWS, and I enjoy helping people leverage its power to
                build awesome stuff.
              </p>
              <p>
                I`m all about finding creative solutions to tricky problems, and
                I believe that the best software is both beautiful and
                functional. So take a look around my portfolio and see if
                anything catches your eye.
              </p>
              <p>
                And if you`re interested in working together, don`t hesitate to
                reach out! I`m always happy to chat with fellow tech
                enthusiasts.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="twitter.com/farhanhelmycode" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="github.com/farhan-helmy"
                icon={GitHubIcon}
                className="mt-4"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="linkedin.com/in/muhammad-farhan-helmy-0529501a7/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on Linkedin
              </SocialLink>
              <SocialLink
                href="https://www.youtube.com/channel/UCAby1ePn-lO3WiLpKMPvXyA"
                aria-label="Follow on YouTube"
                icon={YoutubeIcon}
                className="mt-4"
              >
                Subscribe to my Youtube
              </SocialLink>
              <SocialLink
                href="mailto:farhanhlmy@gmail"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                farhanhlmy@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
