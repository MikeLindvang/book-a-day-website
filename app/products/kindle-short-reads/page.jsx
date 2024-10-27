import Main from '../../../components/Main'; // Assuming you have a Main component
import Heading from '../../../components/Heading';
import Paragraph from '../../../components/Paragraph';
import Button from '../../../components/Button';
import List from '../../../components/List';
import CardComponent from '../../../components/CardComponent';
import EmbedCodeComponent from '../../../components/EmbedCodeComponent';
import Image from 'next/image';
import Link from 'next/link';

export default function KindleShortReadsPage() {
  const struggle = [
    'Do you struggle with coming up with new story ideas?',
    'Do you find yourself wrestling with how to move the story forward?',
    'Does every book you start writing come with the feeling of being just another unfinished project on your hard drive?',
    "Do you reach a point in every story where you don't know how to keep your reader reading?",
    'Do you get aggravated with yourself when you hear about great novelists who turn out several books per year?',
    'Do you ever question your ability to match the writing prowess of professional and well-known authors?',
    'Do you ever get mad at yourself, because you still need a job to pay the bills? ;)',
  ];

  const buyButtonCode = `
    <!-- Buy Button Code -->
    <a href="https://warriorplus.com/o2/buy/rwcsls/wr9s1x/hh8vs2"><img src="https://warriorplus.com/o2/btn/fn100011001/rwcsls/wr9s1x/85743"></a>`;

  return (
    <>
      <Main>
        <Heading level={1} color="red">
          Could You Imagine Publishing 159 Novels
          <br /> In 16 Years ON A TYPEWRITER?
        </Heading>
        <Heading level={2} color="red">
          Lester Dent Did It Between 1932-1949...
        </Heading>
        <Heading level={2} color="red">
          Keep Reading to Learn How Pulp Fiction Writers
          <br />
          Were Able To Crank Out Several Novels in the
          <br />
          Time It Takes Us To Write a Single Book...
          <br />
          <br />
          And How You Can Use That Knowledge To
          <br />
          Start Cranking Out Kindle Books Like a Pro...
        </Heading>

        <Paragraph>
          <strong>Listen.</strong>
        </Paragraph>
        <Paragraph>
          I am not going to magically channel Lester Dent or other pulp fiction
          writers straight into your mind.
        </Paragraph>
        <Paragraph>
          Heck if I could do that, you could turn out ten novels in the next
          year without thinking about it...
        </Paragraph>
        <Paragraph>
          And if I could actually do that, I guarantee you that you would be
          scrambling to find tens of thousands of dollars so that you could hire
          me. ;)
        </Paragraph>
        <Heading level={2} color="red">
          Writing Can Sometimes Be A Real Struggle
        </Heading>

        <Paragraph>For example...</Paragraph>
        <List items={struggle} alternate={true} />
        <Paragraph>
          If you answered yes to more than one of these questions, don't feel
          bad... Most authors have the same challenges as you do.
        </Paragraph>
        <Heading level={2} color="red">
          Don't Worry... I Have Also Been
          <br />
          Exactly Where You Are Today...
          <br />
          And I Will Show You How
          <br />I Overcame All Of These Challenges
        </Heading>
        <Paragraph>
          A couple of years ago I decided to participate in NaNoWriMo. You know
          that annual competition where would-be writers set a goal of finishing
          a 50k word novel in one month.
        </Paragraph>
        <Paragraph>
          At first it seemed like it would be pretty easy. I was energized and
          chomping at the bit. The first week I even finished 1463 words ahead
          of schedule. That was a major confidence boost.
        </Paragraph>
        <Paragraph>Then life showed its ugly head.</Paragraph>
        <Paragraph>
          You see, at work we had several projects, big projects, coming up. We
          always did at that time of year. I should have realized this in
          advance. Time passed and I didn't have time to do much writing. In the
          middle of the third week I was more than 5k behind the target.
        </Paragraph>
        <Paragraph>Ouch!</Paragraph>
        <Paragraph>
          <strong>
            I tried my best to make up for lost time, but with 3 kids (one just
            a baby) and work to take care of, it didn't happen.
          </strong>
        </Paragraph>
        <Paragraph>
          Over the next couple of years my library of unfinished books grew.
        </Paragraph>
        <Paragraph>
          One day while...ermm...productive surfing the web at work I happened
          across a website about some of the old pulp writers. I got sucked in.
        </Paragraph>
        <Paragraph>
          <em>Their methods simply blew me away.</em>
        </Paragraph>
        <Paragraph>
          I got to thinking about how that would work with Kindle.
        </Paragraph>
        <Paragraph>Then I did some adapting of their methods.</Paragraph>
        <Paragraph>
          <em>BOOM!</em>
        </Paragraph>
        <Paragraph>
          I never again had an issue with starting a book, finishing a book, or
          getting to the 'publish' button quickly.
        </Paragraph>
        <Paragraph>
          The pulp fiction writers taught me how to put my writing into
          hyper-drive.
        </Paragraph>
        <Paragraph>
          They taught me how I could start producing more books faster...
        </Paragraph>
        <Paragraph>
          And the pulp fiction writers taught me how I could start producing a
          new book every day.
        </Paragraph>
        <Paragraph>
          <em>Please keep reading....</em>
        </Paragraph>
        <Heading level={2} color="red">
          People Tell Us All Of The Time That
          <br />
          We Should Work Smarter, Not Harder
        </Heading>
        <Paragraph>
          Now, there are people who would tell you that the easiest way to start
          cranking out new books every day is to hire ghost writers...
        </Paragraph>
        <Paragraph>Have you ever hired a ghost writer? LOL</Paragraph>
        <Paragraph>Oh My Gosh...</Paragraph>
        <Paragraph>
          <strong>Most. Ghost. Writers. Totally. Suck.</strong>
        </Paragraph>
        <Paragraph>
          I cannot tell you how many times I have hired ghost writers, only to
          have to spend several days fixing what they "wrote" for me.
        </Paragraph>
        <Paragraph>
          Heck. With most ghost writers, I could have gotten a finished product
          faster, if I had just buckled down and wrote the story myself!
        </Paragraph>
        <Paragraph>
          Did I mention that "most ghost writers totally suck"? ;)
        </Paragraph>
        <Paragraph>
          <strong>Here is the deal.</strong>
        </Paragraph>
        <Paragraph>
          Writing actually takes a certain amount of real talent.
        </Paragraph>
        <Paragraph>
          Most of those people working as ghost writers are "learning on your
          dime", because they know they are not good enough to make it on their
          own.
        </Paragraph>
        <Paragraph>
          They figure that most of their clients really don't care about
          quality, so they can fake it until they make it.
        </Paragraph>
        <Paragraph>
          <strong>
            The question is... Are you willing to spend your money training them
            to suck? LOL
          </strong>
        </Paragraph>
        <Paragraph>
          If you have to spend three days fixing their suck, you might as well{' '}
          <strong>
            tune up your own talents and do the work right the first time.
          </strong>
        </Paragraph>
        <Heading level={2} color="red">
          If You Really Want To Work Smarter,
          <br />
          Then You Must Improve Your Skills
        </Heading>

        <Paragraph>
          <strong>
            Pulp fiction authors have a special-something that most of us don't
            have.
          </strong>
        </Paragraph>
        <Paragraph>
          They had to have that special something, because in the early days of
          publishing, they were only paid well if they were able to crank out
          large volumes of story telling.
        </Paragraph>
        <Paragraph>
          Honestly, they couldn't spend two years writing the novel of a
          lifetime.
        </Paragraph>
        <Paragraph>
          Most of them cut their teeth writing short stories for print magazines
          and newspapers.
        </Paragraph>
        <Paragraph>
          <strong>
            But here is the thing that really supported their growth as
            writers...
          </strong>
        </Paragraph>
        <Paragraph>
          They wrote serialized short stories, that for all intents-and-purposes
          enabled them to write a chapter a day, and a novel in a month.
        </Paragraph>
        <Paragraph>
          The print magazines and newspapers had very{' '}
          <strong>firm deadlines</strong>, and if they didn't make the deadline,
          the pulp writers would lose a good-paying job.
        </Paragraph>
        <Paragraph>
          Considering that Lester Dent started writing his "Doc Savage" stories
          during the Great Depression, then he needed to bring his extra
          something-special to ensure that he didn't need to stand in bread
          lines to feed his family.
        </Paragraph>
        <Paragraph>
          <strong>
            As they say, "necessity is the mother of all invention."
          </strong>
        </Paragraph>
        <Paragraph>
          Out of necessity, Lester Dent had to learn how to write fast, write
          fluently, and create characters that enthralled his readers.
        </Paragraph>
        <Paragraph>If he didn't, there was still the bread lines.</Paragraph>
        <Paragraph>
          Even Ray Bradbury and F. Scott Fitzgerald cut their writing teeth with
          the pulp fiction trade. :) The fact that you know their names is
          testament to the power of pulp fiction.
        </Paragraph>
        <Heading level={2} color="red">
          Print May Be Dead & Dying, But
          <br />
          Pulp Fiction Is Still Alive & Thriving
        </Heading>
        <Paragraph>
          So many of the print magazines that survived the Great Depression on
          account of pulp fiction are now dead and dying.
        </Paragraph>
        <Paragraph>
          But pulp fiction is still alive and well, inside of Amazon's
          marketplace.
        </Paragraph>
        <Paragraph>
          Except that Amazon doesn't limit it to "pulp fiction".
        </Paragraph>
        <Paragraph>
          <strong>Instead, Amazon calls it "Kindle Short Reads".</strong>
        </Paragraph>
        <Heading level={2} color="red">
          I Am Excited To Introduce To You My
          <br />
          "Book-A-Day Kindle Short Reads"
        </Heading>

        <EmbedCodeComponent code={buyButtonCode} align="center" />

        <Paragraph>Listen.</Paragraph>
        <Paragraph>
          I know how hard it is for new writers to imagine the day when they
          will be able to write a "book in a day".
        </Paragraph>
        <Paragraph>I get it.</Paragraph>
        <Paragraph>
          <strong>
            When I was first introduced to the concept of ME - of all people,
            being able to write a book in a day, I scoffed.
          </strong>
        </Paragraph>
        <Paragraph>"Maybe someone else, but not me," I told myself.</Paragraph>
        <Paragraph>"No way could I do that," I said.</Paragraph>
        <Paragraph>
          "Bull hockey pucks," I said, because the kids were in the room. ;)
        </Paragraph>
        <Paragraph>
          I was almost angry at the suggestion that I could write a book in a
          day.
        </Paragraph>
        <Paragraph>
          <strong>
            Then, I discovered the secrets of my pulp fiction heroes.
          </strong>
        </Paragraph>

        <Heading level={2} color="red">
          90% Of Writing Fast Is In Your Mind,
          <br />
          Or Rather Your Mindset & Planning
        </Heading>
        <Paragraph>
          I know you are set in your ways, and you probably think you cannot
          really change the way you do things...
        </Paragraph>
        <Paragraph>
          But if I was able to do it, then you can do it too.
        </Paragraph>
        <Paragraph>
          <strong>
            I am not going to be asking you to do anything that is truly
            difficult.
          </strong>
        </Paragraph>
        <Paragraph>
          The thing about writing pulp fiction is that it is not much different
          than writing a TV episode. Most TV series have a basic template from
          which they write.
        </Paragraph>
        <Paragraph>
          In the TV template, they know that each story is broken into segments
          between commercials.
        </Paragraph>
        <Paragraph>
          In the first segment, they need to present the drama of the episode.
        </Paragraph>
        <Paragraph>
          In the second segment, they need to show the characters trying to wrap
          their heads around the challenges ahead.
        </Paragraph>
        <Paragraph>
          In the third segment, the characters think they have figured out the
          solution, only to be stymied at having found the wrong answer.
        </Paragraph>
        <Paragraph>
          <strong>
            As you see, there is a formula that we need to follow when telling
            our stories.
          </strong>
        </Paragraph>
        <Paragraph>
          When you know how to structure each plot point, then creating your
          story plot is easy-peasy.
        </Paragraph>
        <Paragraph>
          The biggest factor is knowing how to structure your plot elements, so
          that they will fit neatly into your story template.
        </Paragraph>
        <Paragraph>
          <strong>
            Using this process, I have personally been able to write up entire
            6,000 word stories in as little as 5 hours and 35 minutes, and I was
            able to hit "publish" just before dinner.
          </strong>
        </Paragraph>

        <Heading level={2} color="red">
          Simple Changes In HOW You Do Things
          <br />
          Will Make All The Difference In The World
        </Heading>
        <Paragraph>
          <strong>
            In this 49-page PDF, I am going to show you how to turn your writing
            productivity on its head.
          </strong>
        </Paragraph>
        <Paragraph>I am going to teach you:</Paragraph>
        <ul>
          <li>
            <strong>
              How to build your stories around a specific word count, to reach a
              particular audience.
            </strong>
          </li>
          <li>
            How the pulp fiction masters describe the technical parts of their
            craft.
          </li>
          <li>
            <strong>
              How to apply this writing strategy to any fiction genre.
            </strong>
          </li>
          <li>
            How to use the templates to fit any story you might want to tackle.
          </li>
          <li>
            <strong>
              How to break your stories down into smaller bite-sized pieces, to
              make them easier to write.
            </strong>
          </li>
          <li>
            How to fill in the details that will be the foundation for your
            stories.
          </li>
          <li>
            <strong>
              How to outline your stories so that telling them will become much
              easier... and faster.
            </strong>
          </li>
          <li>
            How to put together the pieces so that you can write a "Kindle Short
            Read" in a day.
          </li>
          <li>
            <strong>And more...</strong>
          </li>
        </ul>
        <Paragraph>
          <strong>
            Now, you may not be able to write your first or third story in a
            day, because honestly, it takes practice.
          </strong>
        </Paragraph>
        <Paragraph>
          But once you have practiced these techniques, you will be able to
          follow these strategies and write Short Read books using the formulas
          I describe so efficiently that{' '}
          <strong>
            "writing a book in a day" will become second-nature to you.
          </strong>
        </Paragraph>
        <Paragraph>Remember the first time you climbed on a bicycle?</Paragraph>
        <Paragraph>
          I still have a scar on my knee from that experience. ;)
        </Paragraph>
        <Paragraph>
          <strong>
            We must always be willing to fall, before we are able to fly.
          </strong>
        </Paragraph>

        <Heading level={2} color="red">
          Even If You Were Only Able To
          <br />
          Write One Book Per Week...
          <br />
          That Would Be 50 Books Per Year
        </Heading>

        <Paragraph>I know what you are thinking right now...</Paragraph>
        <Paragraph>
          <strong>Writing a book a day is just fricking insane!</strong>
        </Paragraph>
        <Paragraph>
          No one with a life could possibly write and publish a book in a single
          day!
        </Paragraph>
        <Paragraph>I understand...</Paragraph>
        <Paragraph>
          I still have one of those day jobs, AND three children that always
          need my attention, AND a wife that always has a honey-do list for me.
        </Paragraph>
        <Paragraph>
          <strong>
            When I first started this journey, the first goal was to write a
            novel in a month. I failed.
          </strong>
        </Paragraph>
        <Paragraph>
          Then I tried to write a short in a month. Failed again.
        </Paragraph>
        <Paragraph>
          On my third attempt, I nailed the short in one month.
        </Paragraph>
        <Paragraph>Later, I nailed the short in a week.</Paragraph>
        <Paragraph>
          With practice and direction, I was able to shorten the curve to a
          book-a-day.
        </Paragraph>
        <Paragraph>
          <strong>
            I have written several short books, in less than 8 hours.
          </strong>
        </Paragraph>
        <Paragraph>And you will learn how to do the same.</Paragraph>
        <Paragraph>
          In theory, I should be able to write over 300 books per year.
        </Paragraph>
        <Paragraph>But then life keeps getting in the way...</Paragraph>
        <Paragraph>
          It might be different if I was single with no kids, no job, and living
          in my mother's basement. But this is the real world. ;)
        </Paragraph>
        <Paragraph>
          <strong>
            I have found that I CAN write an entire Kindle Short Read in just a
            day, when I have a full 8 hours of freedom from my other
            responsibilities.
          </strong>
        </Paragraph>
        <Paragraph>
          So rather than you thinking that I should be able to produce 365 books
          this year, UNDERSTAND that I am happy when I can take an entire day
          each week to spend it writing.
        </Paragraph>
        <Paragraph>
          I am not targeting writing a book in a day so that I can write seven
          books a week. Nope. I am targeting the goal of writing a book in a
          day, so I can put out one book each week, by giving one of my day's
          off to my writing goals.
        </Paragraph>
        <Heading level={2} color="red">
          It Is All About Priorities
        </Heading>
        <Paragraph>
          <strong>
            Are you willing to do what it takes to be successful as a book
            author?
          </strong>
        </Paragraph>
        <Paragraph>
          Are you willing to dedicate yourself to creating one book a week, and
          50 books this year?
        </Paragraph>
        <Paragraph>
          And if you are able to produce 50 books this year, do you truly
          believe that those books could have the potential to substantially
          increase your monthly royalty checks? By a lot?
        </Paragraph>
        <Paragraph>
          What are your goals? And what are you willing to do to reach your
          goals?
        </Paragraph>
        <Paragraph>
          <strong>
            Let me help you, by showing you how to become a better and more
            proficient writer...
          </strong>
        </Paragraph>
        <Heading level={2} color="red">
          "Book-A-Day Kindle Short Reads"
          <br />
          Has The Potential To Change Your Life
        </Heading>
        <Paragraph>
          <strong>Yes, really.</strong>
        </Paragraph>
        <Paragraph>
          If you were able to begin writing a book in a day, just imagine how
          many more books you could produce in a calendar year...
        </Paragraph>
        <Paragraph>
          <strong>Let's face it.</strong>
        </Paragraph>
        <Paragraph>
          If you have more titles out there, more people could find your books.
        </Paragraph>
        <Paragraph>
          If you could get more people to find your books, then you will
          naturally sell more books.
        </Paragraph>
        <Paragraph>
          If the people buying your books fall in love with your stories, they
          will be more inclined to buy more of your books.
        </Paragraph>
        <Paragraph>
          If people find that they really love your stories, they will tell more
          of their friends to also buy your books.
        </Paragraph>
        <Paragraph>All great benefits that we all understand...</Paragraph>
        <Paragraph>
          <strong>
            The key difference here is how many books you will have out there
            for people to discover, find, buy and recommend.
          </strong>
        </Paragraph>
        <Paragraph>
          <em>
            How would those additional sales and
            <br /> recommendations impact YOUR LIFE?
          </em>
        </Paragraph>
        <ul>
          <li>
            Would you have less stress, knowing that you had the extra funds
            available in your household?
          </li>
          <li>
            Would you be able to benefit by having enough extra cash to cover an
            extra car payment or house payment?
          </li>
          <li>Could you share more time with your family?</li>
          <li>Could you take more vacations?</li>
          <li>
            Could you treat yourself to a massage or an extra trip to the salon?
          </li>
        </ul>
        <Paragraph>Here is the important thing for most of us...</Paragraph>
        <ul>
          <li>
            Would you be extra thrilled to see that people like your books?
          </li>
          <li>
            Would you be happy knowing that people really do appreciate and
            value the stories that you tell? Without feedback from an audience,
            it is hard for us to see the real value in our own work. ;)
          </li>
          <li>
            Are you going to be excited to see your books showing up in the best
            seller lists?
          </li>
        </ul>
        <Paragraph>
          <strong>
            Sometimes I think the ego boost is more valuable than the royalty
            checks... Then I go buy myself a gift. :)
          </strong>
        </Paragraph>

        <CardComponent variant="primaryBorder">
          <h4>
            Here is what you are going to get inside of
            <br />
            "Book-A-Day Kindle Short Reads"
          </h4>
          <ul>
            <li>
              49-page PDF that goes into detail about how to structure and
              create pulp fiction quickly
            </li>
            <li>
              Guidance on the simple change in mindset needed to accelerate your
              writing productivity
            </li>
            <li>Lessons from the pulp fiction masters</li>
            <li>Romance Outline Template</li>
            <li>Non-Romance Outline Template</li>
          </ul>
          <h4>3 Story Idea Packs</h4>

          <ul>
            <li>1 Thriller story idea pack.</li>
            <li>2 Romance story idea packs.</li>
            <li>Each pack contain at least 10 expanded story summaries.</li>
            <li>Easy to modify into your own unique story.</li>
            <li>
              Leaves any concern of being able to get a story started in the
              dust.
            </li>
          </ul>

          <h4>Heinlein Rules</h4>
          <ul>
            <li>
              A unique and contemporary take on Robert A. Heinleins (in)famous 5
              rules for the wannabe author.
            </li>
            <li>
              Contains the key elements to making sure your manuscripts stop
              gathering dust on your hard drive.
            </li>
            <li>Helps you get more books on the market.</li>
          </ul>
        </CardComponent>

        <Heading level={3} color="red">
          Get Started Right Away
        </Heading>

        <EmbedCodeComponent code={buyButtonCode} align="center" />
        <Paragraph />
        <CardComponent variant="accentBackground">
          <Heading level={1} color="white">
            ALL SALES ARE FINAL!
          </Heading>
        </CardComponent>

        <Paragraph>
          <strong>P.S.</strong> In short. I am going to show you how you can
          learn from successful pulp fiction authors like Lester Dent, Ray
          Bradbury, F. Scott Fitzgerald and many others who made their names in
          the pulp era and use their knowledge to publish books with a
          typewriter at a pace that is astonishing in the digital age.
        </Paragraph>
        <Paragraph>
          <strong>P.P.S.</strong> Once you master the techniques shared in this
          training, you will be able to write a Kindle Short Read in a day, and
          hit publish before dinner.
        </Paragraph>
        <Paragraph>
          <strong>P.P.P.S.</strong> Even if you only publish one book, one day
          each week, you could have 50 books in just one year.
        </Paragraph>
        <Paragraph>
          <strong>P.P.P.P.S.</strong> Hey, if you already know who Lester Dent
          is, and you have already studied his work, and if you think you
          already know it all, stop reading my sales page and get back to
          writing.
        </Paragraph>
        <Paragraph>
          <strong>P.P.P.P.P.S.</strong> If you are at all worried about your
          purchase today, then don't hit the buy button. I know that you don't
          know me from Adam, but there are No Refunds available with this offer.
        </Paragraph>
        <EmbedCodeComponent code={buyButtonCode} align="center" />
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
    </>
  );
}
