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
      {/* PAIN SECTION — Upgraded “Twist the Knife” */}
      <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        {/* Short, visceral story snippet */}
        <Paragraph>
          You wake up with big plans to write. Coffee’s hot, doc is open… and
          somehow, by bedtime, you’ve opened it twice and closed it twice. The
          cursor stared. Your motivation cooled. Another day gone.
        </Paragraph>
        <Paragraph>
          Meanwhile, someone with fewer ideas and less experience than you just
          published. Again.
        </Paragraph>
      </div>

      <Heading level={3} align="center">
        Sound Familiar? You’re Not Alone.
      </Heading>

      <CardComponent
        variant="primaryBorder"
        style={{ marginTop: '2rem', marginBottom: '2rem' }}
      >
        <ul style={{ marginTop: '1rem' }}>
          <li style={{ marginBottom: '1rem' }}>
            <strong>The Maze of Publishing</strong> — So many “paths,” no
            signposts.
            <br />
            <em>Result:</em> Weeks of “research,” zero progress, momentum gone.
          </li>

          <li style={{ marginBottom: '1rem' }}>
            <strong>Racing Against Time</strong> — Life doesn’t pause for your
            book.
            <br />
            <em>Result:</em> Another month slips by; your idea gets stale and
            someone else ships first.
          </li>

          <li style={{ marginBottom: '1rem' }}>
            <strong>The Blank Page Stare‑Down</strong> — The cursor blinks, your
            coffee goes cold.
            <br />
            <em>Result:</em> You burn energy on doubt instead of pages, and
            writing starts to feel heavy.
          </li>

          <li style={{ marginBottom: '1rem' }}>
            <strong>Technical Tangles</strong> — Formatting, covers, metadata…
            ugh.
            <br />
            <em>Result:</em> You stall before you even start, convinced you need
            a “perfect” setup.
          </li>

          <li style={{ marginBottom: '1rem' }}>
            <strong>Marketing Mayhem</strong> — You write the book… then
            crickets.
            <br />
            <em>Result:</em> Great content dies in silence, and you swear off
            publishing “for now.”
          </li>

          <li style={{ marginBottom: '1rem' }}>
            <strong>The Doubt Monster</strong> — “Who am I to write this?”
            <br />
            <em>Result:</em> You bump it to “next month,” while someone else
            turns your idea into their royalties.
          </li>

          <li style={{ marginBottom: '1rem' }}>
            <strong>Squeezing Pennies</strong> — Editors, covers, tools add up
            fast.
            <br />
            <em>Result:</em> You assume it’s too expensive to start… and never
            discover faster, leaner paths.
          </li>

          <li style={{ marginBottom: '1rem' }}>
            <strong>Platform Puzzle</strong> — Kindle? Paperback? Wide? Where to
            begin?
            <br />
            <em>Result:</em> Analysis paralysis—zero publishing, zero momentum,
            zero audience growth.
          </li>

          <li style={{ marginBottom: '1rem' }}>
            <strong>Keeping the Pace</strong> — Consistency feels impossible.
            <br />
            <em>Result:</em> You publish once (maybe), then vanish… along with
            your income potential.
          </li>

          <li style={{ marginBottom: '1rem' }}>
            <strong>Growth Through Grit</strong> — Feedback stings, so you avoid
            it.
            <br />
            <em>Result:</em> The book that could’ve been great stays “okay”—and
            okay doesn’t sell.
          </li>
        </ul>
      </CardComponent>

      <Heading level={3} align="center">
        The Real‑Life Stakes: What Waiting Costs You
      </Heading>

      {/* REAL-LIFE STAKES — Anchor the Pain in Consequences */}

      <Paragraph>
        It’s not just frustration. Every week you delay has a price — in time,
        money, and momentum.
      </Paragraph>

      <ul>
        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Time Drift → No Pages</strong>
          <br />
          Another week of “research” = 0 pages. One focused 4–5 hour session
          with the Formula = a complete draft.
        </li>

        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Opportunity Cost → Lost Royalties</strong>
          <br />
          Even a modest short guide that averages <em>$3–$10/day</em> after
          launch can mean <em>$90–$300/month</em> you don’t capture when you
          don’t publish. (No guarantees — just simple math on low‑end outcomes.)
        </li>

        <li style={{ marginBottom: '0.75rem' }}>
          <strong>First‑Mover Loss → Someone Else Ships First</strong>
          <br />
          Trends reward speed. If you wait, the angle gets crowded and your hook
          loses punch.
        </li>

        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Confidence Erosion → Harder Starts</strong>
          <br />
          Each missed session reinforces the “I’ll do it later” loop — momentum
          shrinks, doubt grows.
        </li>

        <li style={{ marginBottom: '0.75rem' }}>
          <strong>Compounding Delayed → Smaller Platform</strong>
          <br />
          Every book is an asset: more keywords, more readers, more reviews.
          Delay one book and you delay the flywheel.
        </li>
      </ul>

      <Paragraph>
        <strong>Flip the math:</strong> outline today, draft tomorrow, publish
        this week. The sooner you ship, the sooner your book can start working
        for you — building authority, email subscribers, reviews, and revenue.
      </Paragraph>

      <Heading level={3} align="center">
        Imagine 24 Hours From Now...
      </Heading>

      <Paragraph>
        You wake up tomorrow, coffee in hand, and your book outline is already
        DONE — crisp, clear, and ready to write. The dread is gone. You know
        exactly what to do next.
      </Paragraph>

      <Paragraph>
        By the weekend, your book isn’t just a file on your laptop — it’s
        published, with a live sales page and a buy button you can send to
        anyone.
      </Paragraph>

      <Paragraph>
        A week later, you check your email: first sales notification. First
        review. First DM from someone who read it and got value. You smile —
        this is why you started.
      </Paragraph>

      <ul>
        <li>
          <strong>Time Freedom:</strong> Write, publish, and promote in less
          than the time you’d spend binge-watching a show this week.
        </li>
        <li>
          <strong>Recognition:</strong> Drop “I’m a published author” into
          conversations and watch the eyebrows raise.
        </li>
        <li>
          <strong>Income:</strong> Even modest daily royalties start adding up —
          a steady drip that grows with every new book.
        </li>
        <li>
          <strong>Creative Momentum:</strong> No more stalled projects. You can
          repeat this process whenever inspiration strikes.
        </li>
      </ul>

      <Paragraph>
        The <strong>Book-A-Day Rapid Nonfiction Formula</strong> is built for
        exactly this — instant clarity, zero fluff, and the kind of speed that
        turns ideas into assets before the excitement fades.
      </Paragraph>

      {/* More Content Sections */}
      {/* ... (Continue converting the rest of the HTML content into React components) ... */}

      {/* Buy Button */}
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <EmbedCodeComponent code={buyButtonCode} />
      </div>

      {/* Subheadline */}
      {/* BENEFITS — Emotional + Financial Payoff with Bonus Tie-In */}
      <Heading
        level={2}
        align="center"
        style={{ marginTop: '1rem', marginBottom: '1rem' }}
      >
        Unlock Your Author’s Triple Threat:
        <br />
        Write, Publish, Profit — Fast
      </Heading>

      <Paragraph>
        This isn’t just about finishing a book. It’s about{' '}
        <strong>finishing the right book, fast</strong> — and putting it to work
        for you immediately.
      </Paragraph>

      <ul>
        <li>
          <strong>Turn Ideas Into Income:</strong> Even a lean, 30–50 page
          nonfiction book can pull in <em>$90–$300/month</em> in royalties on
          the low end. With the Formula, you can publish multiple in a fraction
          of the time it used to take.
        </li>
        <li>
          <strong>Authority on Demand:</strong> Being a published author changes
          how people see you. It opens doors to interviews, speaking gigs,
          collaborations, and new clients — often faster than any other
          credibility move you can make.
        </li>
        <li>
          <strong>Time Freedom:</strong> Our step-by-step system means you can
          outline and draft in a single focused day, freeing up the rest of your
          week for work, family, or creative play.
        </li>
        <li>
          <strong>Confidence Without Guesswork:</strong> No more “Am I doing
          this right?” The path is laid out for you — just follow the steps and
          publish.
        </li>
      </ul>

      <Paragraph>And here’s where it gets even better:</Paragraph>

      <CardComponent
        variant="primaryBorder"
        style={{ background: '#f9fff9', padding: '1rem' }}
      >
        <Heading level={4} align="center">
          Bonus Power: Rapid Research Shortcuts
        </Heading>
        <Paragraph>
          Your copy of the{' '}
          <strong>Rapid Research Shortcuts for Nonfiction Authors</strong> is
          the perfect accelerator — cutting your prep time in half and giving
          you niche-specific prompts, instant validation methods, and creative
          angles on tap.
        </Paragraph>
        <Paragraph>
          That means you’re not just writing fast — you’re writing the right
          book for the right audience at the right time.
        </Paragraph>
      </CardComponent>

      <Paragraph>
        Put the Formula and the Bonus together, and you’re looking at a
        repeatable, scalable system for creating publishing assets that earn,
        build your brand, and expand your reach — without burning out or
        stalling.
      </Paragraph>

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
      {/* URGENCY — Tie to Immediate Action */}
      <Paragraph>
        The truth? Every day you delay is another day your ideas sit idle — and
        someone else’s book fills the space yours could have claimed.
      </Paragraph>

      <CardComponent
        variant="primaryBorder"
        style={{
          marginTop: '1rem',
          marginBottom: '2rem',
          background: '#fff5f5',
        }}
      >
        <Heading level={4} align="center">
          Act While the Excitement Is Hot
        </Heading>
        <Paragraph>
          Momentum fades fast. If you start this process today, you can have
          your outline done <strong>by tomorrow</strong> and your book earning{' '}
          <strong>within days</strong>.
        </Paragraph>
        <Paragraph>
          Wait a week, and that spark might be gone — along with the chance to
          ride your current wave of motivation.
        </Paragraph>
      </CardComponent>

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
      {/* Bonus Highlight + Value Anchor CTA */}
      <section style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <Heading
          level={2}
          align="center"
          style={{ marginTop: '1rem', marginBottom: '1rem', color: 'red' }}
        >
          Limited-Time Bonus: Rapid Research Shortcuts for Nonfiction Authors
        </Heading>

        <Paragraph align="center">
          For a short time, when you grab the{' '}
          <strong>Book-A-Day Rapid Nonfiction Formula</strong>, you’ll also get
          my brand-new <em>Rapid Research Shortcuts</em> guide —{' '}
          <strong>FREE</strong>.
        </Paragraph>

        <Paragraph>
          The Formula gives you the proven path from blank page to published in
          5 hours or less. The bonus hands you the{' '}
          <strong>research superpowers</strong> to get there faster, with less
          stress, and even more confidence.
        </Paragraph>

        <Paragraph>Inside this high-impact guide, you’ll discover:</Paragraph>
        <ul>
          <li>
            <strong>Advanced Prompt Layering</strong> – pull richer, more
            targeted results from ChatGPT in minutes.
          </li>
          <li>
            <strong>Niche-Specific Prompt Bank</strong> – proven, copy-and-paste
            ideas for health, business, self-help, hobbies, and more.
          </li>
          <li>
            <strong>10-Minute Book Idea Test</strong> – validate your topic
            before you write a single word.
          </li>
          <li>
            <strong>Off-Label Uses</strong> – turn your book prompts into blog
            posts, emails, webinars, or social content instantly.
          </li>
        </ul>

        <Paragraph>
          <strong>What This Means for You:</strong>
        </Paragraph>
        <ul>
          <li>
            Shave hours — even days — off your research and outlining process.
          </li>
          <li>
            Skip the “blank page” panic by starting with proven ideas and
            ready-to-use prompts.
          </li>
          <li>
            Validate your book before writing so you only invest time in
            winners.
          </li>
          <li>
            Create spin-off content to build your audience and income streams
            faster.
          </li>
        </ul>

        <Paragraph>
          If I sold this bonus on its own, it would be <strong>$47</strong> —
          and it would be worth every penny for the time and frustration it
          saves. But right now, it’s yours <strong>free</strong> when you grab
          the Rapid Nonfiction Formula.
        </Paragraph>

        <Paragraph>
          That’s a total real-world value of <strong>$94+</strong> for less than
          the cost of a dinner out — and it could pay you back for years in book
          sales, authority, and opportunities.
        </Paragraph>

        <Paragraph align="center" style={{ fontWeight: 'bold' }}>
          Lock in the Formula + Bonus combo today and you could start — and
          finish — your next book before the weekend.
        </Paragraph>

        {/* URGENCY — Bonus Scarcity */}
        <Paragraph>
          Here’s the catch — this bonus isn’t guaranteed to stick around.
        </Paragraph>

        <CardComponent
          variant="primaryBorder"
          style={{
            marginTop: '1rem',
            marginBottom: '2rem',
            background: '#fff5f9',
          }}
        >
          <Heading level={4} align="center">
            Limited-Time Bonus Access
          </Heading>
          <Paragraph>
            The <strong>Rapid Research Shortcuts</strong> bonus is currently
            included free — but it’s valued at <strong>$47</strong> on its own,
            and I reserve the right to pull it at any time.
          </Paragraph>
          <Paragraph>
            If you’re reading this now, you’re one of the lucky ones. Don’t
            assume it’ll still be here tomorrow — grab it while it’s included at
            no extra cost.
          </Paragraph>
        </CardComponent>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <EmbedCodeComponent code={buyButtonCode} />
        </div>
      </section>

      <CardComponent variant="primaryBorder">
        <Heading level={1} color="red">
          ALL SALES ARE FINAL!
        </Heading>
      </CardComponent>
      {/* FINAL CTA STACK */}
      <Heading
        level={2}
        align="center"
        style={{ marginTop: '2rem', marginBottom: '1rem', color: 'red' }}
      >
        This Is Your Moment — Don’t Let It Pass
      </Heading>

      <Paragraph>
        You’ve seen how the <strong>Book-A-Day Rapid Nonfiction Formula</strong>{' '}
        takes you from blank page to published book in just hours — not weeks,
        not months.
      </Paragraph>
      <Paragraph>
        You’ve seen how the <strong>Rapid Research Shortcuts</strong> bonus
        supercharges your speed, removes guesswork, and gives you the kind of
        professional polish most authors spend years figuring out.
      </Paragraph>
      <Paragraph>
        Together, they’re worth well over <strong>$80</strong> — but right now,
        you’re getting the entire package for a fraction of that… and the bonus{' '}
        <strong>free</strong>.
      </Paragraph>

      <CardComponent
        variant="primaryBorder"
        style={{
          marginTop: '1rem',
          marginBottom: '2rem',
          background: '#f0fff4',
        }}
      >
        <Heading level={4} align="center">
          By This Time Tomorrow…
        </Heading>
        <ul>
          <li>Your next book could be fully outlined.</li>
          <li>You could have the research locked, ready to write.</li>
          <li>
            You could be on the fast track to seeing it published by the
            weekend.
          </li>
        </ul>
        <Paragraph align="center">
          And in a week? You could be telling people,{' '}
          <strong>“I’m a published author.”</strong>
        </Paragraph>
      </CardComponent>

      <Paragraph>
        But here’s the thing — once you click away, the motivation you feel
        right now will fade. The bonus might be gone. The price might be higher.
        And you’ll be right back where you started.
      </Paragraph>
      <Paragraph>
        Or you can take the leap today, follow the exact steps I’ve laid out,
        and join the growing list of authors who stopped waiting and started
        winning.
      </Paragraph>

      {/* Buy Button */}
      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <EmbedCodeComponent code={buyButtonCode} />
      </div>

      {/* Updated P.S. Block */}
      <Paragraph>
        <strong>P.S.</strong> If you take action today, you’re not just getting
        the <strong>Book-A-Day Rapid Nonfiction Formula</strong> — you’re also
        getting the <strong>$47 Rapid Research Shortcuts</strong> bonus{' '}
        <em>free</em>. That’s like having me hand you the map AND the shortcut,
        so you reach “published” in record time.
      </Paragraph>

      <Paragraph>
        <strong>P.P.S.</strong> This isn’t just about saving money — it’s about
        saving months (or years) of frustration. By this time tomorrow, your
        book could be outlined. By the weekend, published. By next week,
        earning. That’s the difference between “thinking about it” and “doing
        it.”
      </Paragraph>

      <Paragraph>
        <strong>P.P.P.S.</strong> If you leave this page and come back later,
        the bonus might be gone or the price could be higher. Why risk it? Click
        the button, start the process, and let’s get your book out into the
        world — fast.
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
