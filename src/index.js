import React from 'react';
import ReactDOM from 'react-dom';

import {
  FlexBox,
  Heading,
  SpectacleLogo,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Stepper,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes,
  Link,
} from 'spectacle';

import Beyonce from './beyonce_tweet.png';
import Disabilities from './disabilities-ms.jpeg';

// sponsors
// import Sponsors from './beer-city-code-2022-sponsors.png';
const SHOW_SPONSORS = false;

const theme = {
  fonts: {
    header: 'Georgia, "Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: 'Montserrat, "Open Sans Condensed", Helvetica, Arial, sans-serif'
  }
};

const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom="-42px"
    width={1}
  >
    <Box padding="0">
      <Text fontSize="1.5em">@NathanLoding</Text>
    </Box>
    <Box textAlign="right" padding="0">
      <Text fontSize="1.5em">
        <strong>CONFERENCE NAME</strong> -
        The Value of Accessibility
      </Text>
    </Box>
  </FlexBox>
);

const Presentation = () => (
  <Deck theme={theme} template={template}>

    <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading fontSize="130px">The Value of Accessibility</Heading>
        <Heading fontSize="h3" color="#ebe5da">A Business Case for A11y</Heading>
      </FlexBox>
      <Notes>
        Welcome to my talk! In the last year or two, a lot has been written about the "ROI" or "return
        on investment" of accessibility. There are lots of sites out there (many linked in my repo), and
        I encourage everyone to do a little bit more research about accessibility in your particular
        market.
      </Notes>
    </Slide>

    {SHOW_SPONSORS &&
      <Slide>
        <FlexBox height="100%">
          <Image src={Sponsors} maxHeight="100%" maxWidth="100%" width="auto" />
        </FlexBox>
      </Slide>
    }

    <Slide>
      <FlexBox height="100%">
        <Heading fontSize="h3">Quick Poll</Heading>
        <UnorderedList>
          <Appear><ListItem>Anyone have a disability?</ListItem></Appear>
          <Appear><ListItem>Anyone had a temporary disability?</ListItem></Appear>
          <Appear><ListItem>Anyone do accessibility testing?</ListItem></Appear>
          <Appear><ListItem>Anyone have an accessibility statement?</ListItem></Appear>
        </UnorderedList>
      </FlexBox>
      <Notes>
        I like to start my talks with a quick poll so I know who I'm dealing with. Even though I'm
        up here talking, I'm usually not the smartest person in the room!
      </Notes>
    </Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">Who am I?</Heading>
    <UnorderedList>
      <Appear><ListItem>He / him ... PTSD</ListItem></Appear>
      <Appear><ListItem>Husband, father, amateur historian</ListItem></Appear>
      <Appear><ListItem>Oreo enthusiast</ListItem></Appear>
      <Appear><ListItem>Senior Developer Relations Engineer @ <Link href="https://basistheory.com/">Basis Theory</Link></ListItem></Appear>
      <Appear><ListItem><Link href="https://twitter.com/NathanLoding">@NathanLoding</Link>*</ListItem></Appear>
    </UnorderedList>
  </FlexBox>
  <Notes>
    Why I asked the poll questions - I am often not the smartest person in the room!
  </Notes>
</Slide>

    <Slide>
      <FlexBox height="100%">
        <Image src={Beyonce} maxHeight="100%" maxWidth="100%" width="auto" />
      </FlexBox>
      <Notes>
        What's your immediate reaction to this? Why?
      </Notes>
    </Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">There's more to it than lawsuits</Heading>
    <UnorderedList>
      <Appear><ListItem>🪠 - lawsuits, liabilities, PR issues</ListItem></Appear>
      <Appear><ListItem>🥕 - increased customer base, lower operational costs, aligned values</ListItem></Appear>
    </UnorderedList>
  </FlexBox>
  <Notes>
    The stick and the carrot - the two great motivators. Except there isn't a stick emoji on Mac. So plunger and carrot!
    Before we can talk about these, we need to set the stage so we all have the same basic understanding
    of what we are actually talking about!
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">What is "A11y"?</Heading>
    <Appear><Text>"Accessibility" = "A" + 11 letters "Y"</Text></Appear>
  </FlexBox>
  <Notes>
    A11y is a numeronym.
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">What is Accessibility?</Heading>
    <Appear><Text>"the practice of making your websites usable by disabled people."</Text></Appear>
  </FlexBox>
  <Notes>
    What do we think of this definition?
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">What is a Disability?</Heading>
    <Appear><Text>"A disability is any condition of the body or mind that makes it more difficult for the person with the condition to do certain activities and interact with the world around them ."</Text></Appear>
  </FlexBox>
  <Notes>
    Is this clear? What constitutes a disability then? PTSD, absolutely. Blind or deaf, absolutely.
    What if you're not completely blind or deaf? What if you have carpal tunnel? What if you broke your arm?
    What if you're pregnant? What if you're holding a baby?
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%">
    <Heading fontSize="h2">What is a Disability?</Heading>
    <Appear><Image src={Disabilities} maxHeight="75%" width="auto" /></Appear>
  </FlexBox>
  <Notes>
    We are going to focus primarily on people with permanent disabilities as a market. However,
    understand that everyone will be disabled at some point in their life.
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">What is Accessibility?</Heading>
    <Appear><Text>"the practice of making your websites usable by as many people as possible."</Text></Appear>
  </FlexBox>
  <Notes>
    What do we think of this new definition?
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">
      Accessibility === Usability
    </Heading>
  </FlexBox>
  <Notes>
    There is no difference. Accessibility is not separate from user experience. If your website isn't
    accessible, it's not usable. Period.

    <p>And now that we have a basic understanding of what we're talking about, let's look at some high level numbers.</p>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">By the numbers ...</Heading>
    <UnorderedList>
      <Appear><ListItem><strong>96.8%</strong> of top 1M websites have clear accessibility issues</ListItem></Appear>
      <Appear><ListItem><strong>71%</strong> of disabled people abandon sites with issues</ListItem></Appear>
      <Appear><ListItem><strong>93%</strong> of disabled people don't report issues</ListItem></Appear>
    </UnorderedList>
  </FlexBox>
  <Notes>
    That last bullet? That's completely about stigma.
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">Follow the money ...</Heading>
    <UnorderedList>
      <Appear>
        <ListItem>
          <strong>$490 Billion</strong> in disposable income
          <Appear tagName="ul">
            <ListItem><em>$582B</em> - Hispanic market</ListItem>
            <ListItem><em>$501B</em> - African American market</ListItem>
          </Appear>
        </ListItem>
      </Appear>
      <Appear>
        <ListItem>
          <strong>$21 Billion</strong> in discretionary income
          <Appear tagName="ul">
            <ListItem><em>$16B</em> - Hispanic market</ListItem>
            <ListItem><em>$3B</em> - African American market</ListItem>
          </Appear>
        </ListItem>
      </Appear>
    </UnorderedList>
  </FlexBox>
  <Notes>
    Don't get me wrong, DE&I is extremely important, and understanding these income gaps is very
    important. We aren't here to cover that unfortunately, though I do have some stats on DE&I
    that we will talk about later.
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">In the United States ...</Heading>
    <UnorderedList>
      <Appear><ListItem><strong>1 in 5</strong> are disabled</ListItem></Appear>
      <Appear><ListItem><strong>8.1 Million</strong> are visually impaired</ListItem></Appear>
      <Appear><ListItem><strong>2 Million</strong> are blind</ListItem></Appear>
      <Appear><ListItem><strong>7.6 Million</strong> have auditory impairment</ListItem></Appear>
      <Appear><ListItem><strong>2.2 Million</strong> suffer seizures</ListItem></Appear>
      <Appear><ListItem><strong>19.9 Million</strong> are motor impaired</ListItem></Appear>
      <Appear><ListItem><strong>35%</strong> are working age</ListItem></Appear>
    </UnorderedList>
  </FlexBox>
  <Notes>
    
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">
      Is that enough 🥕?
    </Heading>
  </FlexBox>
  <Notes>
    Part of me wants to end the talk here. Half a trillion dollars sitting on the table - go
    get it! But wait, I've got more!
  </Notes>
</Slide>

  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
