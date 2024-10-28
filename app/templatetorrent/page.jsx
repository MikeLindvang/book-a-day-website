// pages/book-a-day-template-torrent/page.js

import Main from '../../components/Main';
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import CardComponent from '../../components/CardComponent';
import EmbedCodeComponent from '../../components/EmbedCodeComponent';
import Image from 'next/image';
import Link from 'next/link';

// Assuming you have a buy button code snippet
const buyButtonCode = `
  <a href="https://warriorplus.com/o2/buy/phgdg2/z1jfxv/bnl2dr">
    <img src="https://warriorplus.com/o2/btn/cn200011000/phgdg2/z1jfxv/184026" alt="Buy Now">
  </a>
`;

export default function BookADayTemplateTorrentPage() {
  return (
    <Main>
      {/* Headings */}
      <Heading level={2} color="red" align="center">
        Dear Self-Published Author...
      </Heading>

      <Heading level={1} color="red" align="center" weight="bold">
        Would You Like To Know How I Create Books
        <br />
        <strong>In Just A Few Hours...</strong>
      </Heading>

      <Heading level={2} color="red" align="center">
        That Makes Even Surgeons Envy Your Hourly Rate?
      </Heading>

      {/* Introduction */}
      <Paragraph>
        If you’ve published a book this might sound familiar...
      </Paragraph>

      <Paragraph>
        You log into your KDP dashboard. Check if there are any yellow
        <em>...or even blue bars.</em>
      </Paragraph>

      <Paragraph>
        <strong>
          Anything to indicate someone has read or even just noticed that you
          have a book out.
        </strong>
      </Paragraph>

      <Paragraph>
        If you’ve just recently published your book you’re likely to spend a lot
        of time on the screen refreshing the page.
      </Paragraph>

      <Paragraph>
        <em>More often than not the results are the same...</em>
      </Paragraph>

      <Paragraph>
        <strong>NOTHING!</strong>
      </Paragraph>

      <Paragraph>
        If you’ve not published a book yet you still get to look forward to that
        experience...
      </Paragraph>

      <Paragraph>
        <em>Of course, it might be different for you.</em>
      </Paragraph>

      <Paragraph>
        I mean, we will be talking about <strong>your</strong> book.{' '}
        <span style={{ backgroundColor: 'yellow' }}>
          And surely people will just tear it off the shelves.
        </span>
      </Paragraph>

      <Paragraph>Right?</Paragraph>

      <Paragraph>I hate to break it to you...</Paragraph>

      <Paragraph>
        <strong>That’s highly unlikely.</strong>
      </Paragraph>

      <Paragraph>
        But at least it won’t be a book you’ve been sweating over for days,
        weeks, and months. If that had been the case it would really suck. So
        it’s a good thing that’s not the case...
      </Paragraph>

      <Paragraph>
        <strong>Oh... You have?</strong>
      </Paragraph>

      <Paragraph>
        <em>I’m terribly sorry to hear that...</em>
      </Paragraph>

      <Paragraph>
        <strong>Truly.</strong>
      </Paragraph>

      {/* Subheading */}
      <Heading
        level={2}
        align="center"
        weight="bold"
        style={{ marginBottom: '25px' }}
      >
        Why Does That @#¤?&@! Book
        <br />
        Pop Up All The Damn Time?!?!?!
      </Heading>

      <Paragraph>
        July 24, 2012, I published my first book of this particular type.
      </Paragraph>

      <Paragraph>
        That’s almost 8 years ago at the time of this writing.
      </Paragraph>

      <Paragraph>
        <strong>Since then I’ve published dozens of books.</strong>
      </Paragraph>

      <Paragraph>
        Whenever I publish a new book I’m always that bit more attentive to the
        KDP sales dashboard.
      </Paragraph>

      <Paragraph>
        And every time I’m excitedly monitoring the progress of my latest
        publication.
      </Paragraph>

      <Paragraph>
        <strong>
          And almost without fail that damn 8-year-old book pops up with new
          sales.
        </strong>
      </Paragraph>

      <Paragraph>
        Now, I realize I’m sounding like a spoiled brat complaining about book
        sales.
      </Paragraph>

      <Paragraph>But I like my stats to look clean.</Paragraph>

      <Paragraph>
        And the truth is, these days it just makes me happy.
      </Paragraph>

      <Paragraph>
        Back then, though, I was still learning how to create books that could
        get sales and it was kind of annoying seeing the “wrong” book make
        sales.
      </Paragraph>

      <Paragraph>
        <strong>
          Now, what’s really annoying is how long it took me to learn my lesson.
        </strong>
      </Paragraph>

      <Paragraph>
        If that type of book makes sales over and over... Do more of those.
      </Paragraph>

      <Paragraph>
        Especially when creating this type of book takes significantly less
        effort than most books.
      </Paragraph>

      <Paragraph>These days I’ve taken the lesson to heart.</Paragraph>

      <Paragraph>
        Realizing that the book has generated more than $300 worth of royalties
        made it easier to do.
      </Paragraph>

      <Paragraph>
        <strong>
          Especially when I only spent a couple of hours putting it together.
        </strong>
      </Paragraph>

      {/* Subheading */}
      <Heading
        level={2}
        align="center"
        weight="bold"
        style={{ marginTop: '45px', marginBottom: '30px' }}
      >
        Why Spend Hours, Days Or Weeks...
        <br />
        Doing Something That...
        <br />
        Just Doesn’t Work?
      </Heading>

      <Paragraph>I’ve made a lot of mistakes.</Paragraph>

      <Paragraph>
        God knows I still do. <strong>A lot</strong>{' '}
        <span style={{ fontSize: '2rem' }} role="img" aria-label="smile">
          😊
        </span>
      </Paragraph>

      <Paragraph>
        The good news though is that every time you make a mistake or fail to
        accomplish a goal, <strong>it's an opportunity</strong> to learn.
      </Paragraph>

      <Paragraph>
        Some projects are, will be, and should be time-consuming, but not all of
        them.
      </Paragraph>

      <Paragraph>
        <strong>
          You can see results from your publishing without spending months
          fine-tuning your book.
        </strong>
      </Paragraph>

      <Paragraph>
        And here’s the thing... If you don’t spend months working on a book{' '}
        <strong>you won’t beat yourself up</strong> too much if it doesn’t
        necessarily skyrocket up the charts.
      </Paragraph>

      <Paragraph>
        <strong>
          Some books can yield results with very little effort on your part.
        </strong>
      </Paragraph>

      <Paragraph>
        <strong>Not all rewards require a vast amount of risk.</strong>
      </Paragraph>

      {/* Subheading */}
      <Heading level={2} align="center" weight="bold">
        Or...
        <br />
        You Could Curl Up In A Corner...
        <br />
        With a Box of Tissues...
      </Heading>

      <Paragraph>
        <strong>
          Most people who get into publishing get out just as fast.
        </strong>
      </Paragraph>

      <Paragraph>Usually because...</Paragraph>

      <Paragraph>
        ➡️ <strong>A.</strong> They realize it’s going to take a crap-ton of
        work to do what they’ve set out to do, or...
      </Paragraph>

      <Paragraph>
        ➡️ <strong>B.</strong> They don’t get those initial results that spur
        them on.
      </Paragraph>

      <Paragraph>Both are victims of a set of publishing myths.</Paragraph>

      <Paragraph>
        One of the myths is that in order to publish something it has to be
        perfect.
      </Paragraph>

      <Paragraph>
        <strong>You have to kick that mindset right away.</strong>
      </Paragraph>

      <Paragraph>
        <span style={{ color: 'red' }}>
          <strong>Perfection is unattainable!</strong>
        </span>
      </Paragraph>

      <Paragraph>The second is...</Paragraph>

      <Paragraph>
        <strong>
          That as soon as you publish your book the talk shows are knocking on
          your door hoping for an interview with a bestselling author.
        </strong>
      </Paragraph>

      <Paragraph>
        Unless you’re exceptionally lucky...{' '}
        <strong>And I mean "Mega Millions" lucky!</strong>
      </Paragraph>

      <Paragraph>
        <span style={{ color: 'red' }}>
          <strong>It’s just not going to happen!</strong>
        </span>
      </Paragraph>

      <Paragraph>
        If you’re expecting either you don’t have the mindset you need.
      </Paragraph>

      <Paragraph>And I’m not saying it to bring you down.</Paragraph>

      <Paragraph>
        <strong>I’m saying there is a better way.</strong>
      </Paragraph>

      <Paragraph>
        A way that you can start building an income from your publishing.
      </Paragraph>

      <Paragraph>
        <strong>
          A method that doesn’t require you to work for months to get a book
          published.
        </strong>
      </Paragraph>

      <Paragraph>It won’t let you quit your day job right away.</Paragraph>

      <Paragraph>And probably not for a while.</Paragraph>

      <Paragraph>But it will allow you to slowly build an income.</Paragraph>

      <Paragraph>
        <strong>To (FINALLY) see results...</strong>
      </Paragraph>

      <Paragraph>Not results you have to wait for years to see.</Paragraph>

      <Paragraph>
        But if you keep at it{' '}
        <strong>
          you will start to see more and more of those wonderful yellow bars
        </strong>{' '}
        on your KDP dashboard.
      </Paragraph>

      <Paragraph>
        <strong>Over time it adds up.</strong>
      </Paragraph>

      <Paragraph>
        Maybe not to the $300+ my first book has made (so far)...
      </Paragraph>

      <Paragraph>
        <strong>
          In fact, this is as good a time as any to add a disclaimer.
        </strong>
      </Paragraph>

      <Paragraph>Many of my books have made significantly less...</Paragraph>

      <Paragraph>Some, nothing at all...</Paragraph>

      <Paragraph>
        <strong>You WILL experience that too!</strong>
      </Paragraph>

      <Paragraph>Some of your books won't make a dime.</Paragraph>

      <Paragraph>
        But some just might finally earn you some royalties.{' '}
        <strong>For me, personally, that has certainly been the case.</strong>
      </Paragraph>

      {/* Subheading */}
      <Heading level={2} align="center" weight="bold">
        I Proudly Introduce To You
        <br />
        Book-A-Day Template Torrent
      </Heading>

      <Paragraph>
        So, how do you create something in a few hours that earns you royalties?
      </Paragraph>

      <Paragraph>
        <strong>It’s simple.</strong>
      </Paragraph>

      <Paragraph>
        <em>You create templates.</em>
      </Paragraph>

      <Paragraph>
        Short, often just 10-20-page books, offering instructions on simple
        tasks.
      </Paragraph>

      <Paragraph>
        <strong>You can't seriously mean people will buy that, Mike?</strong>
      </Paragraph>

      <Paragraph>You'd be surprised.</Paragraph>

      <Paragraph>
        The other day I found a book with quilting templates that was in the top
        20 on its subchart on Amazon.{' '}
        <strong>And it didn't even have any images!</strong>
      </Paragraph>

      <Paragraph>So, yeah. Template books.</Paragraph>

      <Paragraph>Now, of course, there is more to it than that.</Paragraph>

      <Paragraph>
        But these books CAN be created in just a couple of hours, and while they
        won’t make you rich, over time they will{' '}
        <strong>continue to generate royalties for you...</strong>
      </Paragraph>

      <Paragraph>
        <strong>Over and over!</strong>
      </Paragraph>

      <Paragraph>You see, it’s all about numbers.</Paragraph>

      <Paragraph>
        The more books you get on the market. Books that will stay useful for
        years and years. The more royalties you’ll get.
      </Paragraph>

      <Paragraph>None of these books will bring in huge numbers.</Paragraph>

      <Paragraph>Heck! Some won’t make a dime.</Paragraph>

      <Paragraph>
        But more often than not they will be worth far more than the time you
        invested in them.
      </Paragraph>

      <Paragraph>
        And because you’re not investing too much of your time{' '}
        <strong>you’ve got nothing to lose.</strong>
      </Paragraph>

      <Paragraph>
        The best part is, you can do this even if you don’t have much time to
        put into it.
      </Paragraph>

      {/* Subheading */}
      <Heading level={2} align="center" weight="bold">
        Will It Work For Me?
      </Heading>

      <Paragraph>
        <strong>
          Book-A-Day Template Torrent is a 72-page PDF containing EVERYTHING you
          need to know to get started.
        </strong>
      </Paragraph>

      <Paragraph>
        With this training you can start churning out template books TODAY!
      </Paragraph>

      <Paragraph>In fact, this is perfect for you if you:</Paragraph>

      {/* List */}
      <ul>
        <li>
          ➡️ 
          <strong>
            Only have a limited amount of time available every day.
          </strong>
        </li>
        <li>
          ➡️ Have trouble justifying the time you spend on your publishing.
        </li>
        <li>➡️ Don't feel your efforts yield enough of a return.</li>
        <li>
          ➡️ 
          <strong>Are sick of complicated methods that just don't work.</strong>
        </li>
        <li>➡️ Can't get your books to gain traction.</li>
        <li>
          ➡️ 
          <strong>
            Would like something that will make sales years down the road.
          </strong>
        </li>
        <li>➡️ Can only work weekends... Or late nights.</li>
        <li>➡️ Are sick of collecting tomes of information for no reward.</li>
        <li>➡️ Are willing to share what you know with others.</li>
        <li>➡️ Want some extra “fun” money.</li>
        <li>
          ➡️ 
          <strong>
            Think (wrongfully) that you need to be an expert at something to
            publish non-fiction.
          </strong>
        </li>
        <li>
          ➡️ Want to feel good about helping people. (And, you know, who doesn’t
          want that?)
        </li>
        <li>
          ➡️ Know how to open a word-processor... And I’m betting you do :-)
        </li>
        <li>
          ➡️ <strong>And oh... so much more...</strong>
        </li>
      </ul>

      <Paragraph>
        Any of that ring true for you? Please keep reading...
      </Paragraph>

      {/* Subheading */}
      <Heading level={2} align="center" weight="bold">
        8 Years of...
        <br />
        Stupid, Idiotic, Knuckleheaded...
        <br />
        Miserable Failure!
      </Heading>

      <Paragraph>
        <strong>My system is simple.</strong>
      </Paragraph>

      <Paragraph>The best ones usually are.</Paragraph>

      <Paragraph>But it didn’t start out like that.</Paragraph>

      <Paragraph>
        <strong>
          In fact, I try not to think about all the time I’ve wasted.
        </strong>
      </Paragraph>

      <Paragraph>
        All the times I’ve looked at my “progress” and wondered why the hell I
        was doing this in the first place.
      </Paragraph>

      <Paragraph>
        Publishing requires a certain level of... I’d like to call it
        determination... or perseverance...{' '}
        <em>
          or you know, something cool, but the truth is sometimes you just have
          to be stupidly stubborn.
        </em>
      </Paragraph>

      <Paragraph>
        <strong>
          Fortunately, for me, I possess those attributes in abundance.
        </strong>
      </Paragraph>

      <Paragraph>
        I could say it’s about not accepting failure. Having a never-say-die
        attitude. Or something else that’s awesome.
      </Paragraph>

      <Paragraph>
        The truth is for the past decade I’ve been too dumb to know when to call
        it quits.
      </Paragraph>

      <Paragraph>
        <strong>
          That’s resulted in dozens of books published... Hundreds if we count
          other non-Amazon platforms.
        </strong>
      </Paragraph>

      <Paragraph>
        Even more books than that exist as unfinished drafts on my hard drive.
      </Paragraph>

      <Paragraph>Most of what I’ve done has failed miserably.</Paragraph>

      <Paragraph>I know.</Paragraph>

      <Paragraph>
        <strong>It sounds like a pretty silly move saying that here...</strong>
      </Paragraph>

      <Paragraph>But here's the thing...</Paragraph>

      <Paragraph>
        <strong>The road to success is paved with failure.</strong>
      </Paragraph>

      <Paragraph>
        And while I’ve done lots that’s failed, I’ve done a lot that has been
        successful as well.
      </Paragraph>

      <Paragraph>The process is all about trial and error.</Paragraph>

      <Paragraph>
        <strong>And when you find something that works, hang on to it!</strong>{' '}
        Cherish it like a treat you’ve been saving all week.
      </Paragraph>

      <Paragraph>
        The funny thing is, sometimes you’re too close to what you’re doing to
        determine if it’s a success or a failure.
      </Paragraph>

      <Paragraph>
        Ok. I mean... some successes are pretty easy to see.
      </Paragraph>

      <Paragraph>
        But some things you do won’t seem like successes to begin with.
      </Paragraph>

      <Paragraph>After 8 years I’ve identified one of those...</Paragraph>

      <Paragraph>
        <strong>About bloody time too!</strong>{' '}
        <span style={{ fontSize: '2rem' }} role="img" aria-label="smile">
          😊
        </span>
      </Paragraph>

      {/* Subheading */}
      <Heading level={2} align="center" weight="bold">
        Still...
        <br />
        This Can't Possibly
        <br />
        Be The Best Way
      </Heading>

      <Paragraph>Look.</Paragraph>

      <Paragraph>
        You won’t see me saying this is the best way to earn royalties from
        publishing.
      </Paragraph>

      <Paragraph>And I probably won’t say it’s the easiest either.</Paragraph>

      <Paragraph>I mean, who am I to know that?</Paragraph>

      <Paragraph>
        Still, <strong>it IS incredibly easy.</strong>
      </Paragraph>

      <Paragraph>
        I’m a family man. That means Christmas is just about the busiest time of
        the year imaginable.{' '}
        <strong>
          And most publishing ventures almost always have to take a backseat to
          all the other crap that’s going on around that time of year.
        </strong>
      </Paragraph>

      <Paragraph>
        This year I decided I still wanted to do something for my publishing
        business.
      </Paragraph>

      <Paragraph>
        <strong>How?!?!?!?!</strong>
      </Paragraph>

      <Paragraph>I squeezed in about 20 minutes for research.</Paragraph>

      <Paragraph>
        At night when the rest of the family was sound asleep I snuck in 30
        minutes here and there to get the actual writing done.
      </Paragraph>

      <Paragraph>Finally, I tossed a cover together real quick.</Paragraph>

      <Paragraph>
        <strong>In total I spent 2, maybe 3, hours.</strong>
      </Paragraph>

      <Paragraph>Lo and behold! My book was done!</Paragraph>

      <Paragraph>
        <strong>That’s how easy it is!</strong>
      </Paragraph>

      {/* Subheading */}
      <Heading level={2} align="center" weight="bold">
        Would Yellow Bars Make A Difference To You?
      </Heading>

      <Paragraph>
        I need to be as clear about this as possible. There are no guarantees
        with this system.
      </Paragraph>

      <Paragraph>None.</Paragraph>

      <Paragraph>You may not make anything at all.</Paragraph>

      <Paragraph>But your odds are sure as shit improving!</Paragraph>

      <Paragraph>
        And chances are, if you stick to it, that you will start seeing yellow
        bars.
      </Paragraph>

      <Paragraph>You may even hit the bestseller charts.</Paragraph>

      <Paragraph>
        Maybe only the free charts..., but that’s still better than nothing.
      </Paragraph>

      <Paragraph>
        <strong>It’s a start.</strong>
      </Paragraph>

      <Paragraph>
        Get more and more books on the market and you go from no bars to blue
        bars to yellow bars.
      </Paragraph>

      <Paragraph>What does that mean?</Paragraph>

      <Paragraph>Royalties.</Paragraph>

      <Paragraph>But what does that really mean?</Paragraph>

      <Paragraph>
        <strong>When are you an author? When are you a publisher?</strong>
      </Paragraph>

      <Paragraph>
        When would you want to tell your friends, your family about what you’re
        doing?
      </Paragraph>

      <Paragraph>
        <strong>Would you tell them with no sales at all?</strong>
      </Paragraph>

      <Paragraph>
        What would it do for you to be able to say that you’re a publisher or an
        author?
      </Paragraph>

      <Paragraph>
        <strong>And you know... One that’s even sold books?</strong>
      </Paragraph>

      {/* Subheading */}
      <Heading level={2} align="center" weight="bold">
        What’s Pride In Your Work Worth?
      </Heading>

      <Paragraph>
        "Book-A-Day Template Torrent" won’t get you instant riches.
      </Paragraph>

      <Paragraph>
        <strong>But it WILL get you progress!</strong>
      </Paragraph>

      <Paragraph>
        And it won’t be something you have to spend weeks or months learning how
        to do.
      </Paragraph>

      <Paragraph>
        <strong>
          In fact, 30 minutes from now you could know everything you need to
          know to publish your first template book.
        </strong>
      </Paragraph>

      <Paragraph>
        And if you want to you could be able to publish your first book in just
        a few hours.
      </Paragraph>

      <Paragraph>
        <strong>
          It’s that simple. <em>IT'S THAT EASY!</em>
        </strong>
      </Paragraph>

      <Paragraph>
        Who knows, a few days from now when you log in to your dashboard you
        might be seeing some of those yellow bars I’ve been talking about.
      </Paragraph>

      <Paragraph>Maybe even tomorrow?</Paragraph>

      <Paragraph>It’s a possibility.</Paragraph>

      <Paragraph>Not a certainty, but a possibility.</Paragraph>

      <Paragraph>
        <strong>How many other systems can do that for you?</strong>
      </Paragraph>

      {/* Subheading */}
      <Heading level={2} align="center" weight="bold">
        Your Future Starts Right Now
      </Heading>

      <Paragraph>I know.</Paragraph>

      <Paragraph>
        <strong>That sounds cheesy as hell.</strong>
      </Paragraph>

      <Paragraph>The thing is, that doesn’t make it any less true.</Paragraph>

      <Paragraph>
        The first step is the most important part of your future.
      </Paragraph>

      <Paragraph>Without that the next one never comes.</Paragraph>

      <Paragraph>You need to take that step now.</Paragraph>

      <Paragraph>
        Do you feel your publishing business is going nowhere?
      </Paragraph>

      <Paragraph>Change that.</Paragraph>

      <Paragraph>Change it today.</Paragraph>

      <Paragraph>
        <strong>Right now!</strong>
      </Paragraph>

      <Paragraph>
        On the other side of the button below is your future.
      </Paragraph>

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
        <strong>P.P.S.</strong> Once you master the techniques shared in this
        training, you will be able to write a Kindle Template book in a few
        hours, and hit publish before dinner.
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
