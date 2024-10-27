// pages/connect-the-dots/page.js

import Main from '../../../../components/Main';
import Heading from '../../../../components/Heading';
import Paragraph from '../../../../components/Paragraph';
import CardComponent from '../../../../components/CardComponent';
import EmbedCodeComponent from '../../../../components/EmbedCodeComponent';
import Image from 'next/image';
import Link from 'next/link';

// Assuming you have a buy button code snippet
const buyButtonCode = `
  <a href="https://warriorplus.com/o2/buy/rwcsls/l4tb1m/z4hgc1">
    <img src="https://warriorplus.com/o2/btn/fn100011001/rwcsls/l4tb1m/121358" alt="Buy Now">
  </a>
`;

export default function ConnectTheDotsPage() {
  return (
    <Main>
      {/* Heading */}
      <Heading level={1} color="red" align="center">
        Stranger Than Fiction
      </Heading>

      {/* Quote Section */}
      <CardComponent variant="primaryBorder">
        <Paragraph>
          One night, I was lying in bed, and I was channel surfing between
          reality TV programs and actual war coverage. On one channel, there's a
          group of young people competing for I don't even know; and on the
          next, there's a group of young people fighting in an actual war. I was
          really tired, and the lines between these stories started to blur in a
          very unsettling way. That's the moment when Katniss's story came to
          me.
        </Paragraph>
        <Paragraph>
          <strong>--Suzanne Collins</strong>
        </Paragraph>
      </CardComponent>

      {/* Subheading */}
      <Heading level={2} color="red" align="center">
        Story Ideas Are
        <br />
        All Around You
        <br />
        <br />
        It's A Simple Matter Of
        <br />
        Piecing Them Together
      </Heading>

      {/* Content Paragraphs */}
      <Paragraph>
        <strong>
          A lot of authors struggle to come up with new story ideas.
        </strong>
      </Paragraph>
      <Paragraph>I never do.</Paragraph>
      <Paragraph>
        When you realize that all you have to do is look around you it becomes a
        lot easier.
      </Paragraph>
      <Paragraph>
        Not all ideas are good...if you struggle to come up with them that's a
        major problem.
      </Paragraph>
      <Paragraph>
        You can always emulate stories you see selling well, and that's not a
        bad idea. After all, Cinderella stories always sell...
      </Paragraph>
      <Paragraph>
        <strong>
          Wouldn't it be nice though, to be able to write something that feels a
          bit fresh?
        </strong>
      </Paragraph>
      <Paragraph>That's not as easy as I make it sound, is it?</Paragraph>
      <Paragraph>
        I mean, most stories have already been written, haven't they?
      </Paragraph>
      <Paragraph>
        And if you adjust and modify an existing storyline it's still going to
        feel familiar to the reader...right?
      </Paragraph>
      <Paragraph>
        <strong>Worse...It's going to feel familiar to you...</strong>
      </Paragraph>
      <Paragraph>
        The thing is, even pro authors fall into that trap from time to time.
      </Paragraph>
      <Paragraph>
        For every <em>"Hunger Games," "Harry Potter,"</em> or{' '}
        <em>"Da Vinci Codes"</em> there's a lot of horseshit out there.
      </Paragraph>
      <Paragraph>
        There's nothing wrong with using the same old rehashed stories...per
        se...
      </Paragraph>
      <Paragraph>
        <strong>
          But wouldn't it be nice to just for once come up with something
          original?
        </strong>
      </Paragraph>
      <Paragraph>Of course it would.</Paragraph>

      {/* Subheading */}
      <Heading level={2} color="red" align="center">
        If You Can't Be Original
        <br />
        To Save Your Life...
      </Heading>

      <Paragraph>
        <strong>How are you supposed to do it on command?</strong>
      </Paragraph>
      <Paragraph>
        That could easily be the question on your mind right now.
      </Paragraph>
      <Paragraph>
        I get it. There are days when I feel physically sick because I can't
        think of anything deserving of a single syllable.
      </Paragraph>
      <Paragraph>
        It's not the case every day, but more often than I like.
      </Paragraph>
      <Paragraph>
        Crap. <strong>Crap...</strong>{' '}
        <span style={{ fontWeight: 'bold' }}>More CRAP!</span>
      </Paragraph>
      <Paragraph>At least it used to be...</Paragraph>
      <Paragraph>
        <strong>
          Until I learned how to come up with new ideas on command!
        </strong>
      </Paragraph>
      <Paragraph>It's true.</Paragraph>
      <Paragraph>And you can do it too.</Paragraph>
      <Paragraph>
        <strong>You too can come up with ideas on command.</strong>
      </Paragraph>
      <Paragraph>
        When I tell you how, you won't believe how ridiculously simple it is.
      </Paragraph>

      {/* Subheading */}
      <Heading level={2} color="red" align="center">
        Ideas Are All Around You
      </Heading>

      <Paragraph>
        <strong>It's true.</strong>
      </Paragraph>
      <Paragraph>The world you live in is littered with ideas.</Paragraph>
      <Paragraph>
        <strong>You just have to see them.</strong>
      </Paragraph>
      <Paragraph>
        With the right tools, you too can create captivating stories at will.
      </Paragraph>
      <Paragraph>
        <strong>
          The best part is that these tools are readily available to you.
        </strong>
      </Paragraph>
      <Paragraph>You just have to learn how to use them.</Paragraph>
      <Paragraph>
        In fact, I'm willing to bet a fair amount of money that you're looking
        at the tools you need to use on a daily basis.
      </Paragraph>
      <Paragraph>
        <strong>You just haven't cracked the code yet.</strong>
      </Paragraph>

      {/* Subheading */}
      <Heading level={2} color="red" align="center">
        I'm Excited To Introduce To You My
        <br />
        "Connect-The-Dots Story Ideas"
      </Heading>

      {/* Buy Button */}
      <EmbedCodeComponent code={buyButtonCode} align="center" />

      <Paragraph>
        Within this training I'll show you everything you need to create
        stunningly realistic story ideas out of thin air.
      </Paragraph>
      <Paragraph>
        <strong>
          Ideas so original that your readers won't know what hit them.
        </strong>
      </Paragraph>
      <Paragraph>
        The best part is that you can do this over and over again.
      </Paragraph>
      <Paragraph>The source of these ideas is virtually limitless.</Paragraph>
      <Paragraph>
        All you have to do is open your mind and you'll realize just how easy it
        is to generate these ideas.
      </Paragraph>
      <Paragraph>
        From that point all you have to do is turn them into a plot...or if
        you're a gung-ho pantser you just start writing.
      </Paragraph>

      {/* Subheading */}
      <Heading level={2} color="red" align="center">
        Imagine Never Running Out Of Ideas
      </Heading>

      <Paragraph>
        Imagine just 30 minutes from now that your mind has opened up to a whole
        new world of ideas. Ideas so original, so realistic, so freaking awesome
        that you can't believe you hadn't thought of this.
      </Paragraph>
      <Paragraph>
        <strong>How would that make you feel?</strong>
      </Paragraph>
      <Paragraph>
        Ok, initially you might hit yourself on the head for not thinking of
        this...
      </Paragraph>
      <Paragraph>
        But then the realization hits you. This means you're never out of ideas.
        This means you will always know what to write.
      </Paragraph>
      <Paragraph>
        <strong>
          Better yet, because you're using the source I show you, the stories
          will resonate with your reader on a deeper level.
        </strong>
      </Paragraph>
      <Paragraph>
        Your reader <strong>will</strong> recognize elements of your story from
        the real world. They will be able to connect with what you're writing.
      </Paragraph>
      <Paragraph>
        <strong>
          Chances are they'll even praise you for writing such a captivating
          story.
        </strong>
      </Paragraph>

      {/* Subheading */}
      <Heading level={2} color="red" align="center">
        Pride Yourself On Your Work
      </Heading>

      <Paragraph>
        With the great stories you're going to write based on these ideas, you
        should take pride in your work.
      </Paragraph>
      <Paragraph>
        These will be stories not many other authors have thought to write.
      </Paragraph>
      <Paragraph>
        You will no longer be stuck using the same old rehashed story
        frameworks.
      </Paragraph>
      <Paragraph>
        <strong>You will stand tall among your peers.</strong>
      </Paragraph>
      <Paragraph>
        Don't be surprised if other authors start asking you how you come up
        with your ideas.
      </Paragraph>
      <Paragraph>
        <strong>They will be looking at you with envy.</strong>
      </Paragraph>
      <Paragraph>
        <strong>
          <em>You deserve to bask in the recognition of your awesomeness.</em>
        </strong>
      </Paragraph>

      {/* What's Included Section */}
      <CardComponent variant="primaryBorder">
        <Paragraph>Here's what's in "Connect-The-Dots Story Ideas":</Paragraph>
        <ul>
          <li>11 Minute Video showing you the process.</li>
          <li>
            A brief checklist of the steps you need to take{' '}
            <strong>designed to have you hit the road running!</strong>
          </li>
          <li>
            A cheatsheet containing links to resources you can use for your
            story ideas.
          </li>
        </ul>
      </CardComponent>

      <Paragraph>
        With this at your fingertips you'll be ready to go in 30 minutes.
      </Paragraph>
      <Paragraph>
        <strong>
          You could have your first original story ideas less than an hour from
          now.
        </strong>
      </Paragraph>
      <Paragraph>
        And then the next one, and the next one, and the next one.
      </Paragraph>

      {/* Subheading */}
      <Heading level={2} color="red" align="center">
        It's So Easy My 7-Year-Old Can Do This
      </Heading>

      <Paragraph>I kid you not.</Paragraph>
      <Paragraph>The steps you go through are laughably simple.</Paragraph>
      <Paragraph>
        <strong>
          You don't need to spend hours studying before you're ready to go...
        </strong>
      </Paragraph>
      <Paragraph>And when you've done it once it becomes easier.</Paragraph>
      <Paragraph>
        <strong>Soon the process will be second nature...</strong>
      </Paragraph>
      <Paragraph>Or you can use the same old worn-out clichés...</Paragraph>
      <Paragraph>
        <strong>The choice is yours.</strong>
      </Paragraph>

      {/* Subheading */}
      <Heading level={2} color="red" align="center">
        Get Started Right Here
      </Heading>

      {/* Buy Button */}
      <EmbedCodeComponent code={buyButtonCode} align="center" />

      {/* Guarantee Section */}
      <CardComponent variant="primaryBorder">
        <Heading level={1} color="red" align="center">
          ALL SALES ARE FINAL!
        </Heading>
      </CardComponent>

      {/* Closing Remarks */}
      <Paragraph>
        <strong>P.S.</strong> "Connect-The-Dots Story Ideas" will help you churn
        out more books faster because you don't waste time staring at a screen
        trying to come up with an idea.
      </Paragraph>
      <Paragraph>
        Sincerely,
        <br />
        Mike Nielsen
      </Paragraph>

      {/* Image */}
      <Image
        src="/officialmike.jpg"
        alt="Mike Nielsen"
        width={200}
        height={200}
        style={{ borderRadius: '10px' }}
      />

      <Paragraph>
        <a href="https://netscribepro.ladesk.com/" target="_blank">
          Need Support
        </a>
      </Paragraph>

      {/* No Thanks Link */}
      <Paragraph align="center">
        <Link href="https://warriorplus.com/o/nothanks/l4tb1m">No Thanks</Link>
      </Paragraph>
    </Main>
  );
}
