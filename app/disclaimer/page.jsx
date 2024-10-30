import Main from '../../components/Main'; // Assuming you have a Main component
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';
import List from '../../components/List';
import CardComponent from '../../components/CardComponent';
import EmbedCodeComponent from '../../components/EmbedCodeComponent';
import Header from '../../components/Header';

export default function DisclaimerPage() {
  return (
    <>
      <Header />
      <Main>
        <Heading level="1">Disclaimer</Heading>
        <Paragraph>
          The information contained in this website is for general information
          purposes only. The information is provided by Netscribepro, and while
          we endeavor to keep the information up to date and correct, we make no
          representations or warranties of any kind, express or implied, about
          the completeness, accuracy, reliability, suitability, or availability
          with respect to the website or the information, products, services, or
          related graphics contained on the website for any purpose. Any
          reliance you place on such information is therefore strictly at your
          own risk.
        </Paragraph>
        <Paragraph>
          In no event will we be liable for any loss or damage including,
          without limitation, indirect or consequential loss or damage, or any
          loss or damage whatsoever arising from loss of data or profits arising
          out of, or in connection with, the use of this website.
        </Paragraph>
        <Paragraph>
          Through this website, you are able to link to other websites that are
          not under the control of Netscribepro. We have no control over the
          nature, content, and availability of those sites. The inclusion of any
          links does not necessarily imply a recommendation or endorse the views
          expressed within them.
        </Paragraph>
        <Paragraph>
          Every effort is made to keep the website up and running smoothly.
          However, Netscribepro takes no responsibility for, and will not be
          liable for, the website being temporarily unavailable due to technical
          issues beyond our control.
        </Paragraph>
      </Main>
    </>
  );
}
