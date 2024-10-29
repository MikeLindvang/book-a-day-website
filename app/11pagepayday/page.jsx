// pages/book-a-day-11-page-payday/page.js

import Main from '../../components/Main';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import CardComponent from '../../components/CardComponent';
import EmbedCodeComponent from '../../components/EmbedCodeComponent';
import Image from 'next/image';
import Link from 'next/link';

// Buy Button Code
const buyButtonCode = `
  <a href="https://warriorplus.com/o2/buy/bztypd/z8l57s/j0hc9d">
    <img src="https://warriorplus.com/o2/btn/cn200011000/bztypd/z8l57s/318114" alt="Buy Now">
  </a>
`;

export default function BookADay11PagePayday() {
  return (
    <Main>
      {/* Headline */}
      <Heading level={1} align="center" weight="bold">
        20 Daily Sales From
        <br />
        One 11-Page Book?
      </Heading>

      <Heading level={2} align="center">
        Publish Your Next Book
        <br />
        in Less Than 2 Hours
      </Heading>

      {/* Introduction */}
      <Paragraph>
        If you're like most people, you've probably always wanted to write a
        book. But you may have thought it was too hard, too time-consuming, or
        you didn't know where to start.
      </Paragraph>
      <Paragraph>
        What if I told you that you could write your next book in less than 2
        hours? And what if I said that this book could bring in 20 sales every
        day?
      </Paragraph>
      <Paragraph>
        You might be thinking this is too good to be true. But it's not.
      </Paragraph>
      <Paragraph>And quite frankly...</Paragraph>
      <Paragraph>
        Considering the economy, wouldn't it be nice to have{' '}
        <strong>a simple solution?</strong>
      </Paragraph>

      {/* Section Headline */}
      <Heading level={2} align="center" style={{ marginBottom: '25px' }}>
        Is Hyperinflation Killing
        <br />
        Your Budget?
      </Heading>

      <Paragraph>
        <strong>It's rough isn't it?</strong>
      </Paragraph>
      <Paragraph>
        You are struggling to make ends meet during a period of Hyperinflation
      </Paragraph>

      {/* List */}
      <ul>
        <li>
          <strong>
            When food is up 30%, you might need another $120 per month.
          </strong>
        </li>
        <li>
          When the price of fuel is up 150%, you could use another $100 per
          month.
        </li>
        <li>
          <strong>
            When the cost of home heating has doubled, you might need to pick up
            an extra $200 per month.
          </strong>
        </li>
      </ul>

      <Paragraph>
        Whatever issues you are facing with the costs of our modern-day
        hyper-inflation, these simple books might help you recoup that money you
        didn't plan on spending.
      </Paragraph>

      {/* Section Headline */}
      <Heading
        level={2}
        align="center"
        style={{ marginTop: '45px', marginBottom: '30px' }}
      >
        Don't Let the Economy
        <br />
        Ruin Your Breakfast
      </Heading>

      <Paragraph>
        It sucks having to choose between your favorite breakfast foods.
      </Paragraph>
      <Paragraph>
        But when the register rings and you realize the eggs ate up your bacon
        money...
      </Paragraph>
      <Paragraph>Well...</Paragraph>
      <Paragraph>
        <strong>It's just not right!</strong>
      </Paragraph>
      <Paragraph>
        I read a news article recently, my heart sinking as I read that the
        price of eggs had increased by a third. I knew that meant my grocery
        bills would be significantly higher.
      </Paragraph>
      <Paragraph>
        Sure enough, when I checked my wallet, it seemed like the store had
        fleeced me.
      </Paragraph>
      <Paragraph
        align="center"
        style={{ fontWeight: 'bold', fontSize: '22px' }}
      >
        <em>We all feel the effects of the current economy!</em>
      </Paragraph>
      <Paragraph>We're all struggling to make ends meet.</Paragraph>
      <Paragraph>It's hard not to worry about your financial future.</Paragraph>
      <Paragraph>
        It sucks not being able to afford the things you want for yourself or
        your loved ones.
      </Paragraph>

      {/* Section Headline */}
      <Heading level={2} align="center">
        In 2 Hours or Less You Can
        <br />
        Turn Your Fortunes Around!
      </Heading>

      <Paragraph>We're in a period of inflation.</Paragraph>
      <Paragraph>Some even say hyperinflation.</Paragraph>
      <Paragraph>
        <strong>Every day your money is worth less than the day before</strong>
      </Paragraph>
      <Paragraph>You don't have to be one of the people suffering!</Paragraph>
      <Paragraph>
        <strong>
          I found a way to create and publish books in less than 2 hours...
        </strong>
      </Paragraph>
      <Paragraph>
        Books that generate a small but constant stream of royalties.
      </Paragraph>
      <Paragraph>
        Enough to take the edge off whatever the economy throws at you!
      </Paragraph>

      {/* Section Headline */}
      <Heading level={2} align="center">
        I Proudly Introduce to You
        <br />
        "Book-A-Day 11-Page Payday"
      </Heading>

      <Paragraph>
        Why not write short books that could be easily published and generate
        royalties for their publishers? I figured if I could write just one of
        these books a day, I could quickly start generating royalties.
      </Paragraph>
      <Paragraph>So that's what I did. And it worked like a charm!</Paragraph>
      <Paragraph>
        In just over an hour of "writing" I was able to publish a book that went
        on to make me more than $300!
      </Paragraph>
      <Paragraph>
        <strong>Not a bad hourly rate!</strong>
      </Paragraph>
      <Paragraph>Now...</Paragraph>
      <Paragraph>It didn't make me a fortune overnight.</Paragraph>
      <Paragraph>
        But every month since I created this book it has generated new sales...
      </Paragraph>
      <Paragraph>
        <strong>And royalties!</strong>
      </Paragraph>
      <Paragraph>It has done this for years now...</Paragraph>
      <Paragraph>
        <strong>
          <span style={{ backgroundColor: 'yellow' }}>
            And it's still going!
          </span>
        </strong>
      </Paragraph>
      <Paragraph>
        Now, I want to show other aspiring publishers how they can do the same
        thing.
      </Paragraph>

      {/* Buy Button */}

      <EmbedCodeComponent code={buyButtonCode} />

      {/* Section Headline */}
      <Heading level={2} align="center">
        Don't Spend Years
        <br />
        Writing a Book!
      </Heading>

      <Paragraph>
        <strong>
          With Book-A-Day 11 Page Payday, you can have a finished, published
          book in just hours.
        </strong>
      </Paragraph>
      <Paragraph>
        And you'll be earning royalties from your book sales in no time.
      </Paragraph>
      <Paragraph>
        At the best of times publishing seems like an endless marathon.
      </Paragraph>
      <Paragraph>
        Getting just one book on the market seems to take forever.
      </Paragraph>
      <Paragraph>
        <strong>
          Why spend days, months or even years when you don't have to?
        </strong>
      </Paragraph>
      <Paragraph>When you can publish simple to create books like...</Paragraph>

      {/* Book Images */}
      <div style={{ width: '18rem', margin: '0 auto' }}>
        <Image
          src="/519FFASQNiL.jpg"
          alt="Book Example 1"
          width={288}
          height={450}
        />
      </div>
      <Paragraph>Or...</Paragraph>
      <div style={{ width: '18rem', margin: '0 auto' }}>
        <Image
          src="/51fzXw5zFpS.jpg"
          alt="Book Example 2"
          width={288}
          height={450}
        />
      </div>

      <Paragraph>
        A lot of publishers are finding success with simple short books.
      </Paragraph>
      <Paragraph>
        <strong>Books they can create in a very short amount of time!</strong>
      </Paragraph>
      <Paragraph>You have limited time available. We all do.</Paragraph>
      <Paragraph>
        <strong>Don't you want to make it count?</strong>
      </Paragraph>

      {/* Section Headline */}
      <Heading level={2} align="center">
        At the End of the Day
        <br />
        It's Not Even About
        <br />
        the Money!
      </Heading>

      <Paragraph>Don't get me wrong.</Paragraph>
      <Paragraph>I love having money to spend.</Paragraph>
      <Paragraph>But not for the sake of having money...</Paragraph>
      <Paragraph>
        <strong>Money is simply a path to freedom!</strong>
      </Paragraph>
      <Paragraph>There are things you want to do...</Paragraph>
      <Paragraph>Things you want to do...</Paragraph>
      <Paragraph>Places you want to go...</Paragraph>
      <Paragraph>
        <strong>But it all comes with a price tag</strong>
      </Paragraph>

      {/* What's Inside */}
      <CardComponent variant="primaryBorder">
        <Heading level={4} weight="bold">
          Here's what's inside the "Book-A-Day 11-Page Payday" Training:
        </Heading>
        <ul>
          <li>
            A 50-page PDF showing you everything you need to know to publish
            less than 2 hours from now. Including...
            <ul>
              <li>Why these books work so well.</li>
              <li>The 5 top categories.</li>
              <li>Three examples of books that are doing well.</li>
              <li>How to come up with amazing book ideas instantly.</li>
              <li>How to set your book up for success.</li>
              <li>And much, much more...</li>
            </ul>
          </li>
          <li>
            2 easy to use templates (both available in PDF AND DOCX format)
          </li>
        </ul>
      </CardComponent>

      <Paragraph>
        Imagine the difference it would make to your life if you could...
      </Paragraph>

      {/* List */}
      <ul>
        <li>
          <strong>No more writer's block</strong>
        </li>
        <li>You can produce books that sell</li>
        <li>
          <strong>You can earn royalties in as little as a few days</strong>
        </li>
        <li>You can publish these books in your own time</li>
        <li>
          <strong>
            You can have the things you want and still be able to afford the
            things you need
          </strong>
        </li>
        <li>You can share your knowledge</li>
        <li>
          <strong>Give your family the best of everything</strong>
        </li>
        <li>You can enjoy the freedom of writing</li>
        <li>
          <strong>Spend your money on things that matter to you</strong>
        </li>
        <li>You can be proud of your book</li>
        <li>
          <strong>And so much more...</strong>
        </li>
      </ul>

      {/* Section Headline */}
      <Heading level={2} align="center">
        Turn Your Passion
        <br />
        Into Royalties
      </Heading>

      <Paragraph>
        You are worried about the future of your money{' '}
        <strong>and your family</strong>
      </Paragraph>
      <Paragraph>
        <strong>Every day wealth is shrinking.</strong>
      </Paragraph>
      <Paragraph>There is a very simple solution.</Paragraph>
      <Paragraph>
        A solution where you help others save money and fix problems in their
        life...
      </Paragraph>
      <Paragraph>
        <strong>While earning a steady stream of royalties for YOU!</strong>
      </Paragraph>
      <Paragraph>
        In fact, these books are likely to earn royalties for a long, long time.
      </Paragraph>
      <Paragraph>Would you not like to publish a book like that?</Paragraph>
      <Paragraph>
        The best part is you can do it in less than two hours.
      </Paragraph>
      <Paragraph>
        <strong>
          In fact, why not publish a book today that will earn royalties for you
          every day, potentially, for the rest of your life?
        </strong>
      </Paragraph>

      {/* Section Headline */}
      <Heading level={2} align="center">
        Don't You and Your Loved Ones
        <br />
        Deserve the Very Best?
      </Heading>

      <Paragraph>
        You want to give your family a better lifestyle, but you don't have the
        time to do it...
      </Paragraph>
      <Paragraph>
        <strong>Or simply don't know how!</strong>
      </Paragraph>
      <Paragraph>
        You are tired of being stuck in the rat race, working day and night{' '}
        <strong>unable to get ahead of the financial storm.</strong>
      </Paragraph>
      <Paragraph>The solution is simple.</Paragraph>
      <Paragraph>
        <strong>
          Book-A-Day 11-Page Payday is here to help you get ahead without
          sacrificing too much of your time.
        </strong>
      </Paragraph>
      <Paragraph>Time you want to spend with your loved ones.</Paragraph>
      <Paragraph>Time doing the things YOU love to do!</Paragraph>

      {/* Section Headline */}
      <Heading level={2} align="center">
        Get Your Book Published Fast
      </Heading>

      <Paragraph>You are struggling to make money with your books.</Paragraph>
      <Paragraph>You can't find a good way to publish your book.</Paragraph>
      <Paragraph>
        <strong>Maybe you're going about it wrong?</strong>
      </Paragraph>
      <Paragraph>
        How about a publishing system that leaves only a few hours between idea
        and published book?
      </Paragraph>
      <Paragraph>
        <strong>
          All you need is a text editor and an Internet connection...
        </strong>
      </Paragraph>
      <Paragraph>
        <strong>
          <span style={{ backgroundColor: 'yellow' }}>
            And 1-2 hours to spare!
          </span>
        </strong>
      </Paragraph>

      {/* Call to Action */}
      <Heading level={3} align="center">
        Get Started Right Away
      </Heading>

      {/* Buy Button */}

      <EmbedCodeComponent code={buyButtonCode} />

      {/* Update Section */}
      <CardComponent
        variant="primaryBorder"
        style={{ backgroundColor: '#E5E4E2', padding: '1rem' }}
      >
        <Heading level={2} align="center">
          MASSIVE Update For 2023
        </Heading>
        <Heading level={3} align="center">
          Introducing The Game-Changing
          <br />
          Update to Book-A-Day 11-Page Payday:
          <br />
          Harness the Power of ChatGPT!
        </Heading>
        <Paragraph>
          Are you tired of feeling stuck and overwhelmed when it comes to
          writing your own short how-to books?
        </Paragraph>
        <Paragraph>
          I have fantastic news for you! The revolutionary "Book-A-Day 11-Page
          Payday" just got even better!
        </Paragraph>
        <Paragraph>
          The latest update brings you the cutting-edge AI technology of ChatGPT
          to help you brainstorm and create stunning outlines for your short
          how-to books in record time.
        </Paragraph>
        <Heading level={3} align="center">
          Unlock Your Creative Genius with ChatGPT
        </Heading>
        <Paragraph>
          Since its release, ChatGPT has taken the world by storm, transforming
          industries and the way we work.
        </Paragraph>
        <Paragraph>
          Now, you can leverage this groundbreaking tool to come up with fresh,
          unique ideas and craft compelling outlines for your short how-to
          books.
        </Paragraph>
        <Paragraph>
          <strong>
            In the updated "Book-A-Day 11-Page Payday," you'll discover:
          </strong>
        </Paragraph>
        <ul>
          <li>
            The incredible impact of ChatGPT and how it can revolutionize your
            writing process
          </li>
          <li>
            Powerful techniques to brainstorm and generate captivating book
            ideas with ChatGPT
          </li>
          <li>
            Expert strategies to create detailed, engaging outlines for your
            how-to books using ChatGPT
          </li>
        </ul>
        <Heading level={3} align="center">
          Navigate the World of AI with Confidence
        </Heading>
        <Paragraph>
          I know that using AI can feel daunting, especially if you're new to
          it.
        </Paragraph>
        <Paragraph>
          That's why I've included essential guidance on how to use ChatGPT
          effectively and safely. <strong>I'll show you:</strong>
        </Paragraph>
        <ul>
          <li>
            The importance of fact-checking and verifying information generated
            by ChatGPT
          </li>
          <li>
            Potential pitfalls and challenges when using AI and how to avoid
            them
          </li>
          <li>
            Tips for making the most of ChatGPT's capabilities while staying
            within ethical boundaries
          </li>
        </ul>
        <Heading level={3} align="center">
          Turn Your Dreams into Reality
        </Heading>
        <Paragraph>
          Imagine the satisfaction of seeing your own how-to books published and
          available for Kindle on Amazon!
        </Paragraph>
        <Paragraph>
          The updated "Book-A-Day 11-Page Payday" empowers you with the
          knowledge and tools you need to transform your dreams into a reality.
        </Paragraph>
        <Paragraph>
          Don't let the fear of the blank page or lack of inspiration hold you
          back any longer.
        </Paragraph>
        <Paragraph>
          With the updated "Book-A-Day 11-Page Payday" and ChatGPT at your
          fingertips, you'll be on your way to becoming a prolific, successful
          self-published author in no time.
        </Paragraph>
        <Heading level={3} align="center">
          Limited Time Offer: Don't Miss Out!
        </Heading>
        <Paragraph>
          This major update won't be available at the current price for long.
        </Paragraph>
        <Paragraph>
          Act now to secure your copy of the "Book-A-Day 11-Page Payday" and
          unlock the full potential of ChatGPT to skyrocket your self-publishing
          journey!
        </Paragraph>
        {/* Buy Button */}

        <EmbedCodeComponent code={buyButtonCode} />
      </CardComponent>

      {/* Guarantee Section */}
      <CardComponent variant="primaryBorder">
        <Heading level={1} weight="bold" color="red">
          ALL SALES ARE FINAL!
        </Heading>
      </CardComponent>

      {/* Closing Remarks */}
      <Paragraph>
        <strong>P.S.</strong> Book-A-Day 11-Page Payday is a simple system that
        is easy to use and generates royalties month after month. A system you
        can use to take the edge off your bleeding bank account.
      </Paragraph>
      <Paragraph>
        <strong>P.P.S.</strong> Just two hours (or less) from now you can click
        the publish button and start generating royalties.
      </Paragraph>
      <Paragraph>
        <strong>P.P.P.S.</strong> Right now, the price of this training is crazy
        low.{' '}
        <strong>
          <span style={{ backgroundColor: 'yellow' }}>
            On Midnight April 30th Book-A-Day 11-Page Payday will no longer be
            available at the discounted price!
          </span>
        </strong>
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
