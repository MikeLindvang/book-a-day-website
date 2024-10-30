// pages/book-a-day-rapid-nonfiction-formula/page.js

import Main from '../../components/Main';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import CardComponent from '../../components/CardComponent';
import EmbedCodeComponent from '../../components/EmbedCodeComponent';
import Image from 'next/image';

// Buy Button Code
const buyButtonCode = `
  <a href="https://warriorplus.com/o2/buy/ss1gdj/mwvt3r/l8zw21">
    <img src="https://warriorplus.com/o2/btn/cn200011000/ss1gdj/mwvt3r/387714" alt="Buy Now">
  </a>
`;

// Disclaimer Script
const disclaimerScript = `
  <script type="text/javascript" src="https://warriorplus.com/o2/disclaimer/ss1gdj" defer></script>
  <div class="wplus_spdisclaimer"></div>
`;

export default function BookADayRapidNonfictionFormulaPage() {
  return (
    <Main>
      {/* Attention Paragraph */}
      <Paragraph align="center" style={{ fontWeight: 'bold' }}>
        Dear Aspiring Author,
      </Paragraph>

      {/* Headline */}
      <Heading level={1} align="center" color="red">
        From Empty Document
        <br />
        to Complete Book in
        <br />5 Hours or Less...
      </Heading>

      {/* Subheadline */}
      <Heading
        level={2}
        align="center"
        style={{ marginTop: '1rem', marginBottom: '1rem' }}
      >
        Transform Your Expertise into a
        <br />
        Published Masterpiece Overnight
        <br />-
        <br />
        The Fast Track to Turning
        <br />
        Your Knowledge into Success
        <br />
      </Heading>

      <hr />

      {/* Introduction */}
      <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <Paragraph>
          <strong>
            <em>Feeling the pinch?</em>
          </strong>
        </Paragraph>
        <Paragraph>You're not alone.</Paragraph>
        <Paragraph>
          In today's world, finding{' '}
          <strong>a little extra room in the budget</strong> can feel like
          searching for a needle in a haystack.
        </Paragraph>
        <Paragraph>
          And let's be honest, the idea of turning your knowledge or passion
          into a side income has crossed your mind more than once.
        </Paragraph>
        <Paragraph>
          <em>But where do you even start?</em>
        </Paragraph>
        <Paragraph>
          The world of self-publishing seems like a maze, with too many paths
          and not enough signposts.
        </Paragraph>
        <Paragraph>
          You have ideas, maybe pages of notes or half-finished manuscripts, but
          the leap from there to a published book feels like jumping across a
          chasm—wide and intimidating.
        </Paragraph>
      </div>

      {/* Section */}
      <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <Heading level={2} align="center">
          From Dreamers to Doers:
          <br />
          Why Publishing Feels
          <br />
          Like Climbing Everest
          <br />
        </Heading>
        <Paragraph>
          Let's cut to the chase. It's tough out there. Prices are up, and so is
          the pressure to finally get your ideas out into the world.
        </Paragraph>
        <Paragraph>
          You're sitting on a goldmine of knowledge. For example...
        </Paragraph>
        {/* List */}
        <ul>
          <li>Alex wants to share digital marketing secrets.</li>
          <li>Mia's ready to guide budding artists with practical tips.</li>
          <li>
            Carlos is a master of urban gardening, eager to spread green thumb
            tactics.
          </li>
          <li>and Liz? She's got teaching techniques worth spreading.</li>
        </ul>
        <Paragraph>
          <strong>
            They all have one thing in common: a message to share, but no clear
            path to do it.
          </strong>
        </Paragraph>
        <Paragraph>The publishing world? It's a jungle out there.</Paragraph>
        <Paragraph>
          You need a map just to start. And let's not even start on the endless
          "advice" that's as clear as mud.
        </Paragraph>
        <Paragraph>
          <strong>
            Feeling stuck before you've even begun is more common than you'd
            think.
          </strong>
        </Paragraph>
        <Paragraph>
          It's not just about putting pen to paper or fingers to keys.
        </Paragraph>
        <Paragraph>
          It's about breaking through the noise, standing out in a crowd that's
          more like a stampede.
        </Paragraph>
        <Paragraph>
          Yet, here you are, dream in heart, ready to share what you know, what
          you love. But how?
        </Paragraph>
        <Paragraph>
          <strong>
            The path's not just twisted; it's practically invisible.
          </strong>
        </Paragraph>
      </div>

      {/* Customer Review Section */}
      <CardComponent
        variant="primaryBorder"
        style={{ marginTop: '2rem', marginBottom: '2rem' }}
      >
        <Heading level={3} align="center">
          Sound Familiar? You're Not Alone.
        </Heading>
        <ul style={{ marginTop: '1rem' }}>
          <li style={{ marginBottom: '1rem' }}>
            <strong>The Maze of Publishing:</strong>
            <br />
            Feeling lost in the wilderness of publishing options and advice
            that's as clear as fog.
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>Racing Against Time:</strong>
            <br />
            Juggling life's demands and trying to find a moment to write—let
            alone publish.
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>The Blank Page Stare-Down:</strong>
            <br />
            When inspiration runs dry and every word feels like pulling teeth.
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>Technical Tangles:</strong>
            <br />
            Wrestling with the nitty-gritty of formatting and design, wishing
            you had a magic wand.
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>Marketing Mayhem:</strong>
            <br />
            The daunting task of shouting loud enough in a crowded room to get
            your book noticed.
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>The Doubt Monster:</strong>
            <br />
            The little voice questioning if your ideas are good enough or if
            anyone will even care.
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>Squeezing Pennies:</strong>
            <br />
            Stretching your budget to cover the costs of editing, cover design,
            and getting the word out.
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>Platform Puzzle:</strong>
            <br />
            Deciphering the best place to share your work where it'll shine the
            brightest.
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>Keeping the Pace:</strong>
            <br />
            The challenge of consistently creating and sharing your work to
            build a following.
          </li>
          <li style={{ marginBottom: '1rem' }}>
            <strong>Growth Through Grit:</strong>
            <br />
            Craving constructive criticism that helps you grow, even when it
            stings.
          </li>
        </ul>
      </CardComponent>

      {/* More Content Sections */}
      {/* ... (Continue converting the rest of the HTML content into React components) ... */}

      {/* Buy Button */}
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <EmbedCodeComponent code={buyButtonCode} />
      </div>

      {/* Subheadline */}
      <Heading
        level={2}
        align="center"
        style={{ marginTop: '1rem', marginBottom: '1rem' }}
      >
        Unlock Your Triple Threat:
        <br />
        Write, Publish, Thrive!
      </Heading>
      <Paragraph>
        Imagine if writing wasn't just about crossing the finish line; it's
        about how you soar past it.
      </Paragraph>
      <Paragraph>
        The Book-A-Day Rapid Nonfiction Formula isn't just a game-changer—it's
        your playbook for success. Ready to see how?
      </Paragraph>
      <ul>
        <li>
          <strong>Turn Words into Wealth:</strong> Picture this: Your writing
          doesn't just fill pages; it fills your pockets. Dive into a world
          where every chapter you write adds to your income, giving you the
          freedom to live, play, and create on your terms.
        </li>
        <li>
          <strong>Confidence at Your Core:</strong> Say goodbye to
          second-guessing. Armed with crystal-clear steps and insider insights,
          you'll hit 'publish' with unwavering confidence, ready to take on the
          world one book at a time.
        </li>
        <li>
          <strong>Speed Without Sacrifice:</strong> Who said quality takes time?
          Slash your writing schedule without cutting corners. More output, more
          impact, more accolades—get ready to multiply your authorial
          achievements without the wait.
        </li>
        <li>
          <strong>Creativity Unchained:</strong> Free yourself from the mire of
          'how-to's and 'should-do's. With the shackles of complexity gone, your
          creativity isn't just alive; it's unleashed. Write with freedom,
          knowing every word paves the path to your publishing dreams.
        </li>
      </ul>
      <Paragraph>
        Behind every sentence, there's a strategy; behind every paragraph, a
        path to prosperity.
      </Paragraph>
      <Paragraph>
        The Book-A-Day Rapid Nonfiction Formula is more than principles—it's
        your bridge to turning aspirations into achievements.
      </Paragraph>
      <Paragraph>
        <strong>
          Stay tuned; the curtain's about to rise on your writing revolution.
        </strong>
      </Paragraph>

      <Heading
        level={2}
        align="center"
        style={{ marginTop: '1rem', marginBottom: '1rem' }}
      >
        Your Writing Dream, Supercharged:
        <br />
        From Draft to Published,
        <br />
        Faster Than Ever!
      </Heading>
      <Paragraph>Picture this:</Paragraph>
      <Paragraph>You're not just another aspiring author.</Paragraph>
      <Paragraph>
        You're the master of your narrative, cruising down the fast lane of
        publishing with confidence and style.
      </Paragraph>
      <Paragraph>
        The Book-A-Day Rapid Nonfiction Formula is the fuel for your journey,
        transforming the way you bring your ideas to the world—and turning those
        ideas into income.
      </Paragraph>
      <Paragraph>
        <strong>
          Enough with the waiting game. Enough with the 'one day' dreams.
        </strong>
      </Paragraph>
      <Paragraph>It's time to hit the accelerator.</Paragraph>
      <Paragraph>
        Embrace the method that catapults your book from concept to the hands of
        avid readers, slashing the wait and multiplying your impact.
      </Paragraph>
      <Paragraph>
        <strong>
          Why dream of tomorrow when the finish line could be today?
        </strong>
      </Paragraph>
      {/* Buy Button */}
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <EmbedCodeComponent code={buyButtonCode} />
      </div>
      <CardComponent variant="primaryBorder">
        <Heading
          level={3}
          align="center"
          style={{ marginTop: '1rem', marginBottom: '1rem' }}
        >
          Transform Your Writing World
          <br />
          In Just 34 Pages!
        </Heading>
        <Paragraph>
          In this 34-page powerhouse PDF, you're not just reading another guide;
          you're unlocking the vault to publishing prowess that's been just out
          of reach.
        </Paragraph>
        <Paragraph>
          Peek into the chapters that are changing the game for writers
          everywhere:
        </Paragraph>
        <ul>
          <li>
            <strong>Page 4 - Fuel Your Writing Fire:</strong> Ignite your
            passion for writing with strategies that keep you motivated from the
            first word to the last period.
          </li>
          <li>
            <strong>Page 7 - Outline Like a Pro:</strong> Say goodbye to
            writer's block with an outlining technique that makes blank pages a
            thing of the past.
          </li>
          <li>
            <strong>Page 14 - The Nonfiction Writing Booster:</strong> Discover
            the secret sauce to writing content that captures and keeps
            attention, making your book impossible to put down.
          </li>
          <li>
            <strong>Page 16 - Streamline Your Writing Process:</strong> Learn
            how to make your writing process as efficient as your morning
            coffee, ensuring every writing session is productive.
          </li>
          <li>
            <strong>Page 23 - Maximize Writing Focus:</strong> Techniques to
            laser-focus your attention on writing, turning distractions into
            background noise.
          </li>
          <li>
            <strong>Page 28 - Overcoming Common Challenges:</strong> Overcome
            the hurdles that have tripped you up in the past, paving a smooth
            road to publishing success.
          </li>
        </ul>
        <Paragraph>
          Every page, every tip, is a step towards not just finishing your book
          but mastering the art of rapid writing and publishing.
        </Paragraph>
        <Paragraph>
          <strong>
            Imagine the feeling of holding your published book in your hands,
          </strong>{' '}
          or seeing it on the screen, knowing you've cracked the code to making
          your dreams a tangible reality.
        </Paragraph>
        <Paragraph>
          It's not just possible; it's within your grasp, right here in the
          pages of the Book-A-Day Rapid Nonfiction Formula.
        </Paragraph>
      </CardComponent>

      <Heading
        level={2}
        align="center"
        style={{ marginTop: '1rem', marginBottom: '1rem' }}
      >
        There is No Tomorrow
        <br />
        Seize Your Dreams Today
      </Heading>
      <Paragraph>
        Imagine this—by tomorrow, you could be on the path not just to writing,
        but to living the life you've always dreamed of. A life where...
      </Paragraph>
      <ul>
        <li>
          Alex isn't just dreaming of sharing his digital marketing wisdom; he's
          doing it.
        </li>
        <li>
          Where Mia isn't just imagining her art tips helping thousands; she's
          watching them come to life.
        </li>
        <li>
          Where Carlos's green thumb isn't just for his backyard; his gardening
          tips are sprouting up in homes around the world.
        </li>
        <li>
          And where Liz's innovative teaching techniques aren't just noted in
          her diary; they're shaping futures.
        </li>
      </ul>
      <Paragraph>
        The Book-A-Day Rapid Nonfiction Formula is more than a guide; it's your
        launchpad. The only question left is:{' '}
        <strong>Are you ready to leap?</strong> It's not about tomorrow, next
        month, or 'someday.'
      </Paragraph>
      <Paragraph>
        <strong>It's about today.</strong>
      </Paragraph>
      <EmbedCodeComponent code={buyButtonCode} />

      <Heading
        level={2}
        align="center"
        style={{ marginTop: '1rem', marginBottom: '1rem' }}
      >
        Would Have
        <br />
        Could Have
        <br />
        Should Have
      </Heading>
      <Paragraph>
        Stepping into the world of self-publishing might feel like gearing up
        for an epic leap. We get it.
      </Paragraph>
      <Paragraph>
        But here's the thing - the{' '}
        <strong>Book-A-Day Rapid Nonfiction Formula</strong> isn't just any
        guide.
      </Paragraph>
      <Paragraph>
        It's your blueprint, your behind-the-scenes guru, transforming{' '}
        <strong>"I wish I could" into "I did."</strong>
      </Paragraph>
      <Paragraph>
        Imagine having a toolkit, one that demystifies the maze of publishing,
        arms you with insider know-how, and champions your journey from the word
        'go.' That's what we're offering.
      </Paragraph>
      <Paragraph>
        A way to <strong>channel your passion and prowess into pages</strong>{' '}
        that not only exist but excel.
      </Paragraph>
      <Paragraph>Sure, we're not selling magic beans here.</Paragraph>
      <Paragraph>
        Success loves sweat. But with this formula, every ounce of effort moves
        you miles closer to your goal.
      </Paragraph>
      <Paragraph>
        We're talking about <strong>real, measurable strides</strong> in your
        publishing journey, making <strong>'effective and efficient'</strong>{' '}
        your new mantra.
      </Paragraph>
      <Paragraph>
        The reins? <strong>Firmly in your hands.</strong>
      </Paragraph>
      <Paragraph>
        The potential? <strong>Limitless.</strong>
      </Paragraph>
      <Paragraph>
        Let the <strong>Book-A-Day Rapid Nonfiction Formula</strong> be your
        guide, your mentor, your cheerleader.
      </Paragraph>
      <Paragraph>
        It's time to <strong>unleash the stories</strong> you've been holding
        close, ready for the world to read and revel in.
      </Paragraph>
      <Paragraph>
        <strong>Your next chapter starts now.</strong>
      </Paragraph>
      <EmbedCodeComponent code={buyButtonCode} />
      <CardComponent variant="primaryBorder">
        <Heading level={1} color="red">
          ALL SALES ARE FINAL!
        </Heading>
      </CardComponent>

      <Paragraph>
        <strong>P.S.</strong> Dive into the Book-A-Day Rapid Nonfiction Formula
        today and start seeing the world of publishing in a new light. Remember,
        the sooner you begin, the faster you'll transform your ideas into
        published works that can start generating income.
      </Paragraph>
      <Paragraph>
        <strong>P.P.S.</strong> Still wondering if this is right for you? Think
        about where you could be a month from now with the Book-A-Day Rapid
        Nonfiction Formula in your toolkit. More than just a guide, it's the
        first step towards turning your passion for writing into a fruitful
        venture.
      </Paragraph>

      {/* Signature */}
      <Paragraph>
        Sincerely,
        <br />
        Mike Nielsen
      </Paragraph>
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

      {/* Disclaimer Script */}
      <EmbedCodeComponent code={disclaimerScript} />
    </Main>
  );
}
