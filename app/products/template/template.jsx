import Main from '../../../components/Main'; // Assuming you have a Main component
import Heading from '../../../components/Heading';
import Paragraph from '../../../components/Paragraph';
import Button from '../../../components/Button';
import List from '../../../components/List';
import CardComponent from '../../../components/CardComponent';
import EmbedCodeComponent from '../../../components/EmbedCodeComponent';

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
      <Main></Main>
    </>
  );
}
