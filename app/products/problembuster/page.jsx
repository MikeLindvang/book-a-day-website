// pages/book-a-day-problem-buster/page.js

import Main from '../../../components/Main';
import Heading from '../../../components/Heading';
import Paragraph from '../../../components/Paragraph';
import CardComponent from '../../../components/CardComponent';
import EmbedCodeComponent from '../../../components/EmbedCodeComponent';
import Image from 'next/image';
import Link from 'next/link';

// Assuming you have a buy button code snippet
const buyButtonCode = `
  <a href="https://warriorplus.com/o2/buy/ll3blk/x0snk5/qpzbm2"><img src="https://warriorplus.com/o2/btn/fn100011001/ll3blk/x0snk5/123855"></a>
`;

const salesPageDisclaimer = `
<script type="text/javascript" src="https://warriorplus.com/o2/disclaimer/ll3blk" defer></script><div class="wplus_spdisclaimer"></div>
`;

export default function BookADayProblemBusterPage() {
  return (
    <Main>
      {/* Top Image */}
      <Heading level={1} align="center" color="red">
        Mo' Problems
        <br />
        Mo' Money!
      </Heading>

      {/* Heading */}
      <Heading level={2} align="center" weight="bold">
        Are You Losing The Publishing Battle?
        <br />
        <br />
        Is The Rat-Race Killing You?
        <br />
        <br />
        Are You Facing One Problem After Another?
        <br />
        <br />
      </Heading>

      <Paragraph>
        <em>Listen,</em>
      </Paragraph>

      <Paragraph>
        Just like everybody else you are looking for the magical formula that
        will change your fortunes.
      </Paragraph>

      <Paragraph>
        <strong>
          There are no magic tricks that will make you a successful publisher.
        </strong>
      </Paragraph>

      <Paragraph>Does that mean all hope is lost?</Paragraph>

      <Paragraph>
        <strong>No.</strong>
      </Paragraph>

      <Paragraph>It means you're trying too hard.</Paragraph>

      <Paragraph>
        <strong>I get it.</strong>
      </Paragraph>

      <Paragraph>
        All you want is some small sign that you're moving in the right
        direction.
      </Paragraph>

      <Paragraph>
        <strong>Something to show for all the effort you're making.</strong>
      </Paragraph>

      {/* Subheading */}
      <Heading level={2} align="center" weight="bold">
        If You Haven't Made It By Now
        <br />
        You're Never Going To Make It
      </Heading>

      <Paragraph>
        <strong>Have you ever had anyone tell you this?</strong>
      </Paragraph>

      <Paragraph>I have.</Paragraph>

      <Paragraph>
        <strong>It hurt like hell too!</strong>
      </Paragraph>

      <Paragraph>
        Having fought tooth and nail for months or even years that is the last
        thing you want to hear.
      </Paragraph>

      <Paragraph>
        Now, there was no ill-intent on the part of the person who told me this.
      </Paragraph>

      <Paragraph>
        <strong>
          It was rooted in his personal experience of how the business works.
        </strong>
      </Paragraph>

      <Paragraph>
        It's a message that will make you want to curl up in a corner and weep
        for days.
      </Paragraph>

      <Paragraph>
        <strong>I couldn't do that though.</strong>
      </Paragraph>

      <Paragraph>
        I had a family who depended on me to provide for them.
      </Paragraph>

      <Paragraph>I dusted myself off and told him...</Paragraph>

      {/* Image */}
      <Heading level={1} align="center" color="red">
        BULLSHIT!
      </Heading>

      <Paragraph>
        <strong>I can be stubborn like that.</strong>
      </Paragraph>

      {/* Subheading */}
      <Heading level={2} align="center" weight="bold">
        There's a Time To Quit...
      </Heading>

      <Paragraph>
        <strong>Look,</strong>
      </Paragraph>

      <Paragraph>
        There are times when you want to throw in the towel.
      </Paragraph>

      <Paragraph>
        Just cut your losses and get out while you're not too far behind.
      </Paragraph>

      <Paragraph>
        <strong>I've been there.</strong>
      </Paragraph>

      <Paragraph>Numerous times.</Paragraph>

      <Paragraph>Why haven't I then?</Paragraph>

      <Paragraph>
        <strong>
          Well, if you ask my wife it's because I can be a stubborn son of a
          bitch at times.
          <em> And by that she means all the time.</em>
        </strong>
      </Paragraph>

      <Paragraph>
        She might also say it's because I'm childish. That when the gauntlet is
        thrown down, I have to answer.
      </Paragraph>

      <Paragraph>
        <strong>Now, that sounds a lot more heroic than it is.</strong>
      </Paragraph>

      <Paragraph>
        The truth remains, however, that sometimes you have to be stupidly
        obnoxiously stubborn if you want things done.
      </Paragraph>

      <Paragraph>
        <strong>
          So that if someone asks you if you're ready to quit there's only one
          reply you're willing to offer.
        </strong>
      </Paragraph>

      <Paragraph>And that reply can only be...</Paragraph>

      {/* Image */}
      <Heading level={1} align="center" color="red">
        NEVER!
      </Heading>

      <Paragraph>I'm reminded of one of my favorite quotes.</Paragraph>

      <Paragraph>It's from Alfred in "Batman Begins."</Paragraph>

      <Paragraph>"Why do we fall?"</Paragraph>

      <Paragraph>
        <strong>"So that we can learn to pick ourselves up."</strong>
      </Paragraph>

      <Paragraph>It's a lofty quote, but I love it.</Paragraph>

      <Paragraph>
        Now, as you'll learn soon enough, falling, failing, and facing problems
        also presents you with an opportunity.
      </Paragraph>

      {/* Subheading */}
      <Heading level={2} align="center" weight="bold">
        I'm Excited To Introduce To You My
        <br />
        "Book-A-Day Problem Buster" Training
      </Heading>

      {/* Buy Button */}
      <EmbedCodeComponent code={buyButtonCode} align="center" />

      <Paragraph>Often you try to do too much.</Paragraph>

      <Paragraph>
        <strong>And THAT is where you go wrong.</strong>
      </Paragraph>

      <Paragraph>
        We live in a world where everybody is suffering from information
        overload.
      </Paragraph>

      <Paragraph>
        <strong>You know this from your own life.</strong>
      </Paragraph>

      <Paragraph>
        So, if you're having trouble keeping up with everything...
      </Paragraph>

      <Paragraph>
        <strong>How are your readers supposed to do it?</strong>
      </Paragraph>

      <Paragraph>
        Why force them through endless pages of useless background information?
      </Paragraph>

      <Paragraph>
        <strong>
          Why not just give them the solution they're looking for?
        </strong>
      </Paragraph>

      <Paragraph>
        Isn't that a better solution for you and for your reader?
      </Paragraph>

      {/* Subheading */}
      <Heading level={2} align="center" weight="bold">
        One Problem...
      </Heading>

      <Paragraph>
        If your best friend asks you about a solution to a problem he's having
        what do you do?
      </Paragraph>

      <Paragraph>
        <strong>You tell her the solution right?</strong>
      </Paragraph>

      <Paragraph>
        Would you ever dream of putting her through several hours of lectures
        about ins and outs of a topic?
      </Paragraph>

      <Paragraph>
        <strong>Why on Earth would you put her through that?</strong>
      </Paragraph>

      <Paragraph>I know you're not that mean.</Paragraph>

      {/* Subheading */}
      <Heading level={2} align="center" weight="bold">
        One Solution
      </Heading>

      <Paragraph>
        A long time ago a friend of mine told me something that's helped me a
        lot.
      </Paragraph>

      <Paragraph>
        <strong>
          "People don't want to become experts. They just want to fix their
          problem."
        </strong>
      </Paragraph>

      <Paragraph>
        You might feel that it's useful for your reader to know more than{' '}
        <em>just</em> what fixes their problem.
      </Paragraph>

      <Paragraph>
        <strong>Don't!</strong>
      </Paragraph>

      <Paragraph>You will be wasting your time.</Paragraph>

      <Paragraph>
        <strong>And get crappy reviews.</strong>
      </Paragraph>

      {/* Subheading */}
      <Heading level={2} align="center" weight="bold">
        Mo' Problems...
        <br />
        Mo' Money!
      </Heading>

      <Paragraph>
        This neatly takes us back to the opening statement.
        <em>(It's almost as if I planned it) </em>
      </Paragraph>

      <Paragraph>
        <strong>
          The simple fact is every problem you've ever faced is a new book you
          can publish.
        </strong>
      </Paragraph>

      <Paragraph>It doesn't really matter what that problem is.</Paragraph>

      <Paragraph>
        <strong>
          Someone else will have faced this problem, and needed a solution.
        </strong>
      </Paragraph>

      <Paragraph>Problems like...</Paragraph>

      {/* List of Problems */}
      <ul>
        <li>
          <strong>Needing more money.</strong>
        </li>
        <li>Boredom.</li>
        <li>
          <strong>Too many commitments.</strong>
        </li>
        <li>Stress.</li>
        <li>
          <strong>Not liking your looks.</strong>
        </li>
        <li>Tiredness.</li>
        <li>
          <strong>Hating your job.</strong>
        </li>
        <li>Wanting to learn more without having the time to do so.</li>
        <li>
          <strong>Loneliness.</strong>
        </li>
        <li>Remorse about how you treated someone.</li>
        <li>
          <strong>Self-doubt.</strong>
        </li>
        <li>Don't like where you live.</li>
        <li>
          <strong>Don't know how to do something.</strong>
        </li>
        <li>Being offended by someone.</li>
        <li>
          <strong>Worried what people think about you.</strong>
        </li>
        <li>Addicted to a substance.</li>
        <li>
          <strong>Anger issues.</strong>
        </li>
        <li>You're brought down by people in your life.</li>
        <li>
          <strong>Don't feel like exercising.</strong>
        </li>
        <li>Don't trust people.</li>
        <li>
          <strong>Don't have any friends.</strong>
        </li>
        <li>Don't know how to boil an egg.</li>
        <li>
          <strong>Unhappy.</strong>
        </li>
        <li>Need help switching a lightbulb.</li>
        <li>
          <strong>And many, many more...</strong>
        </li>
      </ul>

      <Paragraph>
        <strong>Literally any problem is a source for a new book.</strong>
      </Paragraph>

      <Paragraph>
        And you don't have to write a 50,000 page dissertation on it either.
      </Paragraph>

      <Paragraph>
        <strong>In fact, you should avoid doing that at all cost.</strong>
      </Paragraph>

      <Paragraph>
        A short book providing the solution is more than enough.
      </Paragraph>

      <Paragraph>
        <strong>
          In "Book-A-Day Problem Busters" I show you how to do exactly that.
        </strong>
      </Paragraph>

      {/* Subheading */}
      <Heading level={2} align="center" weight="bold">
        Live Your Dream And...
        <br />
        Make It As An Author
      </Heading>

      <Paragraph>Self-publishing is a numbers game.</Paragraph>

      <Paragraph>
        <strong>
          The more books you have on the market the better chances you have of
          selling them.
        </strong>
      </Paragraph>

      <Paragraph>
        However, you don't want to just push something out there that doesn't
        offer value to your readers.
      </Paragraph>

      <Paragraph>
        You need to find the balance between speed and quality.
      </Paragraph>

      <Paragraph>
        <strong>
          The easiest way to do that is to find the best angle for your book.
        </strong>
      </Paragraph>

      <Paragraph>
        When you manage to do that you not only sell more books...
      </Paragraph>

      <Paragraph>
        <strong>You also turn readers into fans.</strong>
      </Paragraph>

      <Paragraph>Fans that will buy everything you publish.</Paragraph>

      <Paragraph>What do you think that will do for your royalties?</Paragraph>

      <Paragraph>
        <strong>Will that help you live the life you deserve?</strong>
      </Paragraph>

      <Paragraph>Will it offer you the freedom you've always wanted.</Paragraph>

      {/* Subheading */}
      <Heading level={2} align="center" weight="bold">
        Do You Really Intend To Stay
        <br />
        In The Endless Rat-Race?
      </Heading>

      <Paragraph>Today you have to ask yourself a big question.</Paragraph>

      <Paragraph>
        <span style={{ fontSize: '1.25em' }}>
          "Am I happy with the way things are, or do I want more from life?"
        </span>
      </Paragraph>

      <Paragraph>
        I'm not saying you can't be perfectly happy with how you're doing right
        now. You might have published a few books and that is something to be
        proud of.
      </Paragraph>

      <Paragraph>
        <strong>Seriously, don't knock your achievement.</strong>
      </Paragraph>

      <Paragraph>
        The truth is most people who dream of publishing a book never get that
        far.
      </Paragraph>

      <Paragraph>
        If you've published your first book you're already way ahead of the
        curve.
      </Paragraph>

      <Paragraph>
        <strong>
          And if you haven't, wouldn't it be great to have done so by tomorrow?
        </strong>
      </Paragraph>

      <Paragraph>
        I trudged along in the same dreary old day job for more than 8 years
        before I finally made it. I've still got a lot of work to do to get to
        where I really want to be in life, but I've achieved the freedom I
        always wanted.
      </Paragraph>

      <Paragraph>
        <strong>
          I get to wake up every morning with nobody telling me what to do!
        </strong>
      </Paragraph>

      <Paragraph>
        Deep down I think you're dreaming of something like that.
      </Paragraph>

      <Paragraph>
        <strong>
          You're definitely not reading this if you don't aspire for something
          more.
        </strong>
      </Paragraph>

      {/* Subheading */}
      <Heading level={2} align="center" weight="bold">
        Be The Master Of Your Own Destiny
      </Heading>

      <Paragraph>Today you can make that first step.</Paragraph>

      <Paragraph>
        <strong>Make your first step to calling your own shots.</strong>
      </Paragraph>

      <Paragraph>
        You might not necessarily want to quit your job, but wouldn't it be
        great to have just a little extra financial freedom to do the things
        you've always wanted to do?
      </Paragraph>

      <Paragraph>
        With <em>"Book-A-Day Problem Buster"</em> you can publish your first, or
        your next, nonfiction book in just one day.
      </Paragraph>

      <Paragraph>A book your readers will thank you for writing.</Paragraph>

      <Paragraph>You know what makes my day more than anything else?</Paragraph>

      <Paragraph>The emails I get from my readers about my books.</Paragraph>

      <Paragraph>
        <strong>
          Emails telling me how the book they bought helped them through some
          major problem.
        </strong>
      </Paragraph>

      <Paragraph>
        See, selling books is not <em>just</em> about earning royalty checks.
      </Paragraph>

      <Paragraph>
        The feeling of knowing you've genuinely helped someone is priceless.
      </Paragraph>

      {/* Subheading */}
      <Heading level={2} align="center" weight="bold">
        If You Can Boil An Egg,
        <br />
        You Can Do This
      </Heading>

      <Paragraph>
        The real secret to the <em>"Book-A-Day Problem Buster"</em> system is
        that it's dead easy.
      </Paragraph>

      {/* List */}
      <ul>
        <li>
          If you can have a conversation with a friend explaining how to boil an
          egg you've got what it takes to write one of these books.
        </li>
        <li>
          If you can explain how to change the lightbulb in your car, you can
          write one of these books.
        </li>
        <li>
          If you explain how you get in shape to run 5 miles, you can write one
          of these books.
        </li>
      </ul>

      <Paragraph>
        <strong>It's that simple.</strong>
      </Paragraph>

      <Paragraph>
        If you can do any of the above you can publish a "problem buster" book
        by tomorrow.
      </Paragraph>

      {/* What's Included Section */}
      <CardComponent variant="primaryBorder">
        <Heading level={4} color="red" align="center" weight="bold">
          When you buy "Book-A-Day Problem Buster" you get:
        </Heading>
        <ul>
          <li>
            A 31-page PDF showing you every step of the stupid simple system I'm
            using to create amazing problem buster books.
          </li>
          <li>
            Word and PDF outline template ensuring you can get started with this
            simple system right away.
          </li>
        </ul>
      </CardComponent>

      {/* Call to Action */}
      <Heading level={3} color="blue" align="center" weight="bold">
        Get Started Right Here
      </Heading>

      {/* Buy Button */}
      <EmbedCodeComponent code={buyButtonCode} align="center" />

      {/* Guarantee Section */}
      <CardComponent variant="primaryBorder">
        <Heading level={1} color="red" align="center" weight="bold">
          ALL SALES ARE FINAL!
        </Heading>
      </CardComponent>

      {/* Closing Remarks */}
      <Paragraph>
        <strong>P.S.</strong> With more books on the market you can earn bigger
        royalty checks and be able to do the things you've always wanted to do.
      </Paragraph>
      <Paragraph>
        <strong>P.P.S.</strong> This system is stupid simple. Literally anyone
        can do this. All you've got to do is bust a few problems here and there.
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

      <EmbedCodeComponent code={salesPageDisclaimer} />
    </Main>
  );
}
