// pages/book-a-day-lists-unlimited/page.js

import Main from '../../components/Main';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import CardComponent from '../../components/CardComponent';
import EmbedCodeComponent from '../../components/EmbedCodeComponent';
import Image from 'next/image';
import Link from 'next/link';

// Buy Button Code
const buyButtonCode = `
  <a href="https://warriorplus.com/o2/buy/sy7t2x/kzl113/dnkdwq">
    <img src="https://warriorplus.com/o2/btn/fn210011000/sy7t2x/kzl113/190730" alt="Buy Now">
  </a>
`;

export default function BookADayListsUnlimitedPage() {
  return (
    <Main>
      {/* Heading */}
      <Heading level={1} color="red" align="center" weight="bold">
        7-Page Book Still Selling
        <br />
        Three Months After Publication
      </Heading>

      <Heading level={2} color="blue" align="center">
        Do You Believe Only Long Books
        <br />
        With Vast Marketing Budgets
        <br />
        Become Bestsellers?
        <br />
        <br />
        Indie-Publishers Are Proving Otherwise
        <br />
        <strong>Every Single Day...</strong>
      </Heading>

      {/* Spacing */}
      <br />
      <br />

      {/* Introduction */}
      <Paragraph>
        I think we’ve all published a book that didn't perform as expected. It
        happens.
      </Paragraph>

      <Paragraph>
        It's easy to think that getting your book ranked on Amazon requires a
        magic formula only a select few know about.
      </Paragraph>

      <Paragraph>
        <strong>Fortunately, that's not the case!</strong>
      </Paragraph>

      <Paragraph>
        The good news - ranking on Amazon doesn't require...
      </Paragraph>

      {/* List */}
      <ul>
        <li>Really long books.</li>
        <li>Big marketing campaigns.</li>
        <li>Knowledge of a secret algorithm.</li>
        <li>Absolute perfection.</li>
        <li>Or levels of luck that might be better put to use in a lottery.</li>
      </ul>

      <Paragraph>
        <strong>But that almost makes it worse, doesn't it?</strong>
      </Paragraph>
      <Paragraph>
        At least, if you needed any of the above, it wouldn't be your fault...
      </Paragraph>

      {/* Subheading */}
      <Heading
        level={2}
        color="blue"
        align="center"
        style={{ marginBottom: '25px' }}
      >
        You Don't Get A Bestseller
        <br />
        Without Publishing Books...
      </Heading>

      <Paragraph>I realized it's kind of stating the obvious...</Paragraph>
      <Paragraph>
        <strong>
          But the number one thing you have to do to get on the Kindle Charts is
          to keep publishing books.
        </strong>
      </Paragraph>
      <Paragraph>
        You're probably aware of that, but a vast number of beginning publishers
        give up too soon.
      </Paragraph>
      <Paragraph>
        I know it's demoralizing putting in hours and weeks when the result is
        worth less than you'd be able to collect from the sofa cushions.
      </Paragraph>
      <Paragraph>That's when you have to keep going...</Paragraph>
      <Paragraph>
        Sure, the sofa might provide a bigger payday today, but eventually that
        vein of cash is going to dry up.
      </Paragraph>
      <Paragraph>
        <strong>And someone HAS to get on the charts.</strong>
      </Paragraph>
      <Paragraph>Other indie-publishers are doing it all the time.</Paragraph>
      <Paragraph>They manage to get books ranking on Amazon...</Paragraph>
      <Paragraph>
        <strong>
          For the longest time, I wondered what crazy miracle had turned these
          books into bestsellers...
        </strong>
      </Paragraph>

      {/* Subheading */}
      <Heading
        level={2}
        color="blue"
        align="center"
        style={{ marginBottom: '25px' }}
      >
        Time To Market Is <strong>EVERYTHING!</strong>
      </Heading>

      <Paragraph>
        If you want a bestseller you have to publish books.{' '}
        <strong>Fast!</strong>
      </Paragraph>

      <Paragraph>
        These authors got there because they had the courage to create something
        and put it on the market.
      </Paragraph>

      <Paragraph>
        <strong>You fail because you don’t publish!</strong>
      </Paragraph>

      <Paragraph>
        <strong>
          <em>It’s as simple as that.</em>
        </strong>
      </Paragraph>
      <Paragraph>And the thing is it doesn’t have to be perfect.</Paragraph>

      <Paragraph>What I’m saying here is quite simple...</Paragraph>

      <Paragraph>
        <strong>The only thing holding you back is... you...</strong>
      </Paragraph>
      <Paragraph>You know why?</Paragraph>
      <Paragraph>
        <strong>
          You’re making it way more difficult than it needs to be.
        </strong>
      </Paragraph>

      {/* Subheading */}
      <Heading
        level={2}
        color="blue"
        align="center"
        style={{ marginBottom: '25px' }}
      >
        The Pursuit of Perfection
      </Heading>

      <Paragraph>
        If you’re just starting out in publishing you’re probably going through
        a lot of different feelings.
      </Paragraph>

      {/* List */}
      <ul>
        <li>Anxiety</li>
        <li>Excitement</li>
        <li>Stress</li>
        <li>Expectation</li>
        <li>And eventually disappointment.</li>
      </ul>

      <Paragraph>
        You’ll be striving for perfection.{' '}
        <strong>We all do to some degree.</strong>
      </Paragraph>

      <Paragraph>
        <strong>And it will stop you in its tracks!</strong>
      </Paragraph>

      <Paragraph>
        <strong>
          <em>In the words of Roy McAvoy, "Perfection is Unattainable."</em>
        </strong>
      </Paragraph>

      <Paragraph>
        Perfect is never going to happen. Chasing it will hurt you... Badly.
      </Paragraph>

      <Paragraph>
        <strong>
          Learning to accept that "Good Enough" is good enough is the single
          most important thing you can do as a publisher and author.
        </strong>
      </Paragraph>

      {/* Subheading */}
      <Heading
        level={2}
        color="blue"
        align="center"
        style={{ marginBottom: '25px' }}
      >
        I Proudly Introduce To You
        <br />
        "Book-A-Day Lists Unlimited"
      </Heading>

      <Paragraph>
        During my research a specific type of book kept popping up when I
        browsed the charts.
      </Paragraph>
      <Paragraph>
        <strong>List books.</strong>
      </Paragraph>
      <Paragraph>
        Books that were just lists of something or the other.
      </Paragraph>
      <Paragraph>
        <strong>I kid you not!</strong>
      </Paragraph>
      <Paragraph>
        <strong>
          <em>Plain old lists.</em>
        </strong>
      </Paragraph>
      <Paragraph>
        These were not bringing home thousands of dollars for their publishers…
      </Paragraph>
      <Paragraph>
        <strong>But they were making sales.</strong>
      </Paragraph>
      <Paragraph>
        <strong>
          <em>They hit the bestseller charts!</em>
        </strong>
      </Paragraph>
      <Paragraph>
        In “Book-A-Day Lists Unlimited” I show you the secrets of these books.
      </Paragraph>
      <Paragraph>
        And more importantly,{' '}
        <strong>what types of list books will work for you!</strong>
      </Paragraph>
      <Paragraph>The beauty of list books lies in the simplicity.</Paragraph>
      <Paragraph>
        <strong>
          Many of these books can be created in just 1 or 2 hours!
        </strong>
      </Paragraph>
      <Paragraph>None of these books will bring in huge numbers.</Paragraph>

      {/* What's Inside */}
      <CardComponent variant="primaryBorder">
        <strong>
          Here’s what you’ll find inside “Book-A-Day Lists Unlimited”
        </strong>
        <ul>
          <li>
            A 33-Page PDF breaking down everything you need to know about list
            books.
          </li>
        </ul>
      </CardComponent>

      {/* Subheading */}
      <Heading
        level={2}
        color="blue"
        align="center"
        style={{ marginBottom: '25px' }}
      >
        Would You Like To?
      </Heading>

      {/* List */}
      <ul>
        <li>Create bestsellers with minimal effort?</li>
        <li>Publish books proven to work for numerous publishers?</li>
        <li>Create books that are super-easy to write?</li>
        <li>Learn which numbers seem to be the most effective for lists?</li>
        <li>Create books on a wide variety of topics?</li>
        <li>Make research fun and productive?</li>
        <li>
          Figure out what you need to do when your excitement gets out of hand?
        </li>
        <li>
          Avoid hindering your progress by making your books needlessly
          complicated?
        </li>
        <li>Learn a simple approach to making good-looking covers?</li>
        <li>
          Figure out exactly what you need to do to maximize productivity with
          minimal effort?
        </li>
        <li>
          Sleep like a baby knowing that you are making real steps forward in
          your publishing business?
        </li>
        <li>Start earning some real actual royalties?</li>
        <li>And much, much more?</li>
      </ul>

      {/* Subheading */}
      <Heading
        level={2}
        color="blue"
        align="center"
        style={{ marginBottom: '25px' }}
      >
        The Proof Is In The List
      </Heading>

      <Paragraph>
        The main place you’re going to find these books is in the “Kindle Short
        Reads” section of the Amazon bestsellers page.
      </Paragraph>
      <Paragraph>
        As I went through the subgenres, making sure my discovery wasn’t a
        fluke, I stopped searching when I was halfway through the “30-Minutes”
        part of the page.
      </Paragraph>
      <Paragraph>
        That’s the section for books it takes no more than 30 minutes to read.
      </Paragraph>
      <Paragraph>
        <strong>At that point I’d found 41 list books.</strong>
      </Paragraph>

      <Paragraph>
        Now, I didn't read all of them. But I looked at a wide variety of the
        ones available through the KDP program. And even some that are not.
      </Paragraph>
      <Paragraph>
        Trust me when I say the authors haven’t strained themselves too hard
        coming up with these books.
      </Paragraph>
      <Paragraph>
        <strong>The authors focused on one simple thing.</strong>
      </Paragraph>
      <Paragraph>
        Giving people the exact information they needed...{' '}
        <strong>
          In exactly the right format to make it easily digestible.
        </strong>
      </Paragraph>
      <Paragraph>
        Doing so the authors managed to both minimize their workload AND create
        highly desirable books.
      </Paragraph>
      <Paragraph>
        And some of the results achieved by these publishers are actually quite
        impressive.{' '}
        <strong>
          Among other things I found a 7-page book that was still ranked #41 in
          its category after 3 Months!
        </strong>
      </Paragraph>
      <Paragraph>
        Trust me when I say that's <em>not</em> an easy thing to achieve.
      </Paragraph>
      <Paragraph>
        <strong>
          And this <em>could</em> happen to you too!
        </strong>
      </Paragraph>

      {/* Subheading */}
      <Heading
        level={2}
        color="blue"
        align="center"
        style={{ marginBottom: '25px' }}
      >
        A Bestseller? For Real?
      </Heading>

      <Paragraph>If you’ve never published a book before...</Paragraph>
      <Paragraph>
        Or had a book anywhere near the Amazon Kindle Bestseller Charts I get
        that it’s hard to imagine getting there with a simple list.
      </Paragraph>
      <Paragraph>Let me make something clear...</Paragraph>
      <Paragraph>
        <strong>
          Hitting a bestseller list is NOT going to make you rich!
        </strong>
      </Paragraph>
      <Paragraph>But it’s a step in the right direction.</Paragraph>
      <Paragraph>
        That’s true for both seasoned publishers and “newbies.”
      </Paragraph>
      <Paragraph>And if you’re not sure this will work I get it.</Paragraph>
      <Paragraph>
        All I can say is that in less than an hour I found 41 such books on
        various subcharts...
      </Paragraph>
      <Paragraph>
        <strong>
          The only reason that number isn’t any bigger is that I stopped
          looking!
        </strong>
      </Paragraph>

      {/* Subheading */}
      <Heading
        level={2}
        color="blue"
        align="center"
        style={{ marginBottom: '25px' }}
      >
        Hit The Charts Tomorrow...
      </Heading>

      <Paragraph>
        You’re reading this because you are publishing books, or...
      </Paragraph>
      <Paragraph>You want to publish books.</Paragraph>
      <Paragraph>
        However, most of us, when we get into book publishing, dream of, at the
        very least secretly, getting that bestseller to our name.
      </Paragraph>
      <Paragraph>I can’t promise you that.</Paragraph>
      <Paragraph>I can't even promise you’ll hit the charts.</Paragraph>
      <Paragraph>
        What I can do is show you what types of books are getting on there…
      </Paragraph>
      <Paragraph>
        Imagine what you could do with these types of books.
      </Paragraph>
      <Paragraph>
        <strong>
          Not only could you supplement your income with royalties, you might
          also be able to see YOUR name on the charts...
        </strong>
      </Paragraph>
      <Paragraph>How cool would that be?</Paragraph>
      <Paragraph>
        How awesome would it be to tell your friends about that?
      </Paragraph>
      <Paragraph>
        And when you start publishing books that make sales your confidence
        grows.
      </Paragraph>
      <Paragraph>
        And with that growing confidence... who knows? The sky is the limit.
      </Paragraph>
      <Paragraph>
        <strong>
          And while it might not make you wealthy, who couldn’t use a few extra
          bucks? <em>Some cash for all the fun stuff in life.</em>
        </strong>
      </Paragraph>

      {/* Subheading */}
      <Heading
        level={2}
        color="blue"
        align="center"
        style={{ marginBottom: '25px' }}
      >
        The First Step Of A Wonderful Journey...
      </Heading>

      <Paragraph>Publishing your own books online is...</Paragraph>

      {/* List */}
      <ul>
        <li>Fun</li>
        <li>Exciting</li>
        <li>Entertaining</li>
        <li>Horrifying</li>
        <li>Nerve-Wracking</li>
        <li>Fulfilling</li>
        <li>And so much more...</li>
      </ul>

      <Paragraph>
        The first book you publish is just that. Your first book.
      </Paragraph>
      <Paragraph>
        It’s not too likely it will become an instant worldwide bestseller.
      </Paragraph>
      <Paragraph>In truth, that’s highly unlikely.</Paragraph>
      <Paragraph>
        <strong>But it is a thrilling journey.</strong>
      </Paragraph>
      <Paragraph>Or it can be.</Paragraph>
      <Paragraph>
        <em>
          The first publishing experience can also be hugely demoralizing.
        </em>{' '}
        <strong>There's no sense denying that.</strong>
      </Paragraph>
      <Paragraph>
        I vividly remember checking the sales of my first (many) books with
        great anticipation...
      </Paragraph>
      <Paragraph>And the inevitable disappointment...</Paragraph>
      <Paragraph>It didn’t go the way I hoped for those books.</Paragraph>
      <Paragraph>
        <strong>And I only had myself to blame.</strong>
      </Paragraph>
      <Paragraph>I made it way too complicated.</Paragraph>
      <Paragraph>
        <strong>A common rookie mistake!</strong>
      </Paragraph>
      <Paragraph>
        You want to make sure you’re publishing a great book. And you should
        absolutely strive to do that!
      </Paragraph>
      <Paragraph>
        <strong>
          But not at the expense of shooting yourself in the foot.
        </strong>
      </Paragraph>
      <Paragraph>No.</Paragraph>
      <Paragraph>
        It’s better to go with a simple approach. Get the hang of publishing.
      </Paragraph>
      <Paragraph>
        Maybe even see some sales of some of those first books.
      </Paragraph>
      <Paragraph>Lord knows that would have been delightful.</Paragraph>
      <Paragraph>
        It took a while before I was consistently able to make sales with my
        books.
      </Paragraph>
      <Paragraph>Don’t make that same mistake.</Paragraph>
      <Paragraph>Take a simpler approach.</Paragraph>
      <Paragraph>
        <strong>
          One with a proven track record based on a vast number of publishers
          out there.
        </strong>
      </Paragraph>
      <Paragraph>Publishers who are doing this today.</Paragraph>
      <Paragraph>
        <strong>And earning royalties.</strong>
      </Paragraph>
      <Paragraph>
        In “Book-A-Day Lists Unlimited” I show you some of the different
        approaches taken by these publishers.
      </Paragraph>
      <Paragraph>
        <em>What they do that works.</em>
      </Paragraph>
      <Paragraph>And I break it down for you to emulate.</Paragraph>
      <Paragraph>
        <strong>That’s the head start you need!</strong>
      </Paragraph>

      {/* Subheading */}
      <Heading
        level={2}
        color="blue"
        align="center"
        style={{ marginBottom: '25px' }}
      >
        Begin <strong>Your</strong> Journey Today...
      </Heading>

      <Paragraph>The world is filled with uncertainty.</Paragraph>
      <Paragraph>As is publishing.</Paragraph>
      <Paragraph>
        But publishing is a great way to supplement your lifestyle.
      </Paragraph>
      <Paragraph>
        A long-term insurance policy that can help you gain a greater level of
        independence.
      </Paragraph>
      <Paragraph>It’s not a quick fix to anything.</Paragraph>
      <Paragraph>However, it can provide a lasting income.</Paragraph>
      <Paragraph>
        I have books that have been earning royalties for me for years.
      </Paragraph>
      <Paragraph>Most of them just tiny trickles of income.</Paragraph>
      <Paragraph>But I get royalty payments every month.</Paragraph>
      <Paragraph>Wouldn’t you like that?</Paragraph>
      <Paragraph>Wouldn’t you want to build to that?</Paragraph>
      <Paragraph>
        In less than a day from now you could be on your way to publishing your
        book on Amazon.
      </Paragraph>
      <Paragraph>A critical and important step for your future.</Paragraph>
      <Paragraph>Don’t let your time be wasted.</Paragraph>
      <Paragraph>Start now.</Paragraph>

      {/* Call to Action */}
      <Heading level={3} align="center" weight="bold">
        Get Started Right Away
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
        <strong>P.S.</strong> In short. How you can create simple books that
        will continue to earn royalties for you for years to come.
      </Paragraph>

      <Paragraph>
        <strong>P.P.S.</strong> Once you realize just how easy it is to create a
        list book you will be shocked that you haven't done so before.
      </Paragraph>

      <Paragraph>
        <strong>P.P.P.S.</strong> Even if you only publish one book every week
        you could have 50 books in just one year.
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
    </Main>
  );
}
