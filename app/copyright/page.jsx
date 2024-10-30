import Main from '../../components/Main'; // Assuming you have a Main component
import Heading from '../../components/Heading';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';
import List from '../../components/List';
import CardComponent from '../../components/CardComponent';
import EmbedCodeComponent from '../../components/EmbedCodeComponent';
import Header from '../../components/Header';

export default function CopyrightPage() {
  return (
    <>
      <Header />
      <Main>
        <Heading level="1">Copyright</Heading>
        <Paragraph>
          This website "www.bookaday.com" and its content is copyright of
          Netscribepro &copy; Netscribepro 2019. All rights reserved. Any
          redistribution or reproduction of part or all of the contents in any
          form is prohibited other than the following:
        </Paragraph>
        <Paragraph>
          You may print or download to a local hard disk extracts for your
          personal and non-commercial use only You may copy the content to
          individual third parties for their personal use, but only if you
          acknowledge the website as the source of the material.
        </Paragraph>
        <Paragraph>
          You may not, except with our express written permission, distribute or
          commercially exploit the content. Nor may you transmit it or store it
          in any other website or other form of electronic retrieval system.
        </Paragraph>
      </Main>
    </>
  );
}
