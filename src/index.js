import React from 'react';
import ReactDOM from 'react-dom';

import {
  FlexBox,
  Heading,
  UnorderedList,
  ListItem,
  Appear,
  Slide,
  Deck,
  Text,
  Box,
  Image,
  Notes,
  Link,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Quote,
} from 'spectacle';

import Beyonce from './beyonce_tweet.png';
import Disabilities from './disabilities-ms.jpeg';
import Huddle from './huddle.jpeg';
import CurbCut from './curb-cut.jpeg';
import Lawsuits from './ada-lawsuits.png';

// sponsors
import Sponsors from './kcdc-2022-sponsors.png';
const SHOW_SPONSORS = true;

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
        <strong>KCDC</strong> -
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
        Welcome to my talk! This is meant to give you ammunition to take to the C-suite to build the
        business case for accessibility. This isn't about the internet as a human right (it is),
        this isn't about why discriminating against disabled people is a terrible moral choice. It's
        about trying to sell people who don't care about anything but the bottom line.
        
        <p>In the last year or two, a lot has been written about the "ROI" or "return
        on investment" of accessibility. There are lots of sites out there (many linked in my repo), and
        I encourage everyone to do a little bit more research about accessibility in your particular
        market. I am going to be throwing a TON of numbers at you. I don't expect anyone to remember all of
        this, come back to the slides on GitHub and check the data and sources for yourself.  What I
        want to do is dispel the myths that accessibility is cost prohibitive, and that the opposite is,
        in fact, true: accessibility leads to increased profits, lower development costs, and happier
        customers. That's the goal of any business right?</p>
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
        <Heading fontSize="h3">The internet is a human right</Heading>
      </FlexBox>
      <Notes>
        If you don't agree with this need to have a talk, come see me. Unfortunately "human rights"
        aren't often considered a good business case. So here we are.
      </Notes>
    </Slide>

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
      <Appear><ListItem>IAAP CPWA</ListItem></Appear>
      <Appear><ListItem>Senior Developer Relations Engineer @ <Link href="https://basistheory.com/">Basis Theory</Link></ListItem></Appear>
      <Appear><ListItem><Link href="https://twitter.com/NathanLoding">@NathanLoding</Link>*</ListItem></Appear>
    </UnorderedList>
  </FlexBox>
  <Notes>
    Why I asked the poll questions - I am often not the smartest person in the room! (Reminder to self:
    Internation Association of Accessibility Professionals Certified Professional in Web Accessibility)
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
      <Appear><ListItem>🥕 - increased customer base, lower operational costs, aligned values, increased profits</ListItem></Appear>
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
    <Heading fontSize="h2">What is Accessibility?</Heading>
    <Text>"the practice of making your websites usable by people with disabilities."</Text>
  </FlexBox>
  <Notes>
    People first language.
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

    <p>
      Source: CDC
    </p>
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

    <p>
      Source: Microsoft Inclusive Design Toolkit / Mismatch
    </p>
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
    <ol>
      <li>The WebAIM project measure the top 1M sites annually. It improves by 1% or so a year.</li>
      <li>71%!! Do you think they just never purchased that item? No, they went somewhere it was easier to purchase from.</li>
      <li>That's it. And that last bullet? That's completely about stigma.</li>
    </ol>

    <p>
      Sources:
      <ol>
        <li>https://webaim.org/projects/million/</li>
        <li>http://www.clickawaypound.com/downloads/cap16final2711.pdf</li>
      </ol>
    </p>
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

    <p>
      Sources:
      <ol>
        <li>https://www.air.org/resource/report/hidden-market-purchasing-power-working-age-adults-disabilities</li>
      </ol>
    </p>
  </Notes>
</Slide>

{/* <Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">In the United States ...</Heading>
    <UnorderedList>
      <Appear><ListItem><strong>1 in 5</strong> are disabled</ListItem></Appear>
      <Appear><ListItem><strong>8.1 Million</strong> are visually impaired</ListItem></Appear>
      <Appear><ListItem><strong>2 Million</strong> are blind</ListItem></Appear>
      <Appear><ListItem><strong>7.6 Million</strong> are auditorily impaired</ListItem></Appear>
      <Appear><ListItem><strong>2.2 Million</strong> suffer seizures</ListItem></Appear>
      <Appear><ListItem><strong>19.9 Million</strong> are motor impaired</ListItem></Appear>
      <Appear><ListItem><strong>35%</strong> are working age</ListItem></Appear>
    </UnorderedList>
  </FlexBox>
  <Notes>
    Source: CDC
  </Notes>
</Slide> */}

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

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">e-Commerce</Heading>
    <UnorderedList>
      <Appear><ListItem><strong>$870B</strong> in revenue in 2021 (14.2% increase)</ListItem></Appear>
      <Appear><ListItem><strong>2%</strong> of that is blind users</ListItem></Appear>
      <Appear><ListItem><strong>$17.4B</strong> market share for blind users <em>alone</em></ListItem></Appear>
      <Appear><ListItem><strong>70%</strong> of e-Commerce sites have <strong>critical</strong> accessibility issues</ListItem></Appear>
    </UnorderedList>
  </FlexBox>
  <Notes>
    <ol>
      <li>e-Commerce is _everything_ these days. Everything is going online, it's why we have jobs!</li>
      <li>e-Commerce is also generally more profitable, which we will discuss in a minute</li>
      <li>2% is blind users ... remember they are 3% of the disabled community</li>
      <li>"Critical" meaning the site is fully inoperable for a disabled user, different than the 1M stat before</li>
    </ol>
    <p>
      Sources:
      <ol>
        <li>https://www.forbes.com/sites/jasongoldberg/2022/02/18/e-commerce-sales-grew-50-to-870-billion-during-the-pandemic/?sh=20329ce04e83</li>
        <li>https://accessibility.deque.com/nucleus-accessibility-research-2019</li>
      </ol>
    </p>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">
      Omni-channel
    </Heading>
  </FlexBox>
  <Notes>
    Let's talk omni-channel for a minute - stores that have multiple ways to
    purchase goods, hopefully in a seamless way. Website, a call center, a brick
    and mortar store, etc. Anyone work for an omni-channel organization?

    <p><strong>Important!</strong> I need to give credit to Greg Williams at
    Deque for this particular way of measuring missed revenue.</p>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">Profit margin by channel</Heading>
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Channel</TableCell>
          <TableCell>Margin</TableCell>
          <TableCell>Cost</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Ship from store</TableCell>
          <TableCell>$17</TableCell>
          <TableCell>$83</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Curbside</TableCell>
          <TableCell>$23</TableCell>
          <TableCell>$77</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>BOPIS</TableCell>
          <TableCell>$23</TableCell>
          <TableCell>$77</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>In-store</TableCell>
          <TableCell>$33</TableCell>
          <TableCell>$67</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Ship from Distribution Center</TableCell>
          <TableCell>$36</TableCell>
          <TableCell>$64</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </FlexBox>
  <Notes>
    Source: AlixPartners, https://www.retaildive.com/news/the-omnichannel-age-is-here-and-its-expensive/597653/
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">Cost by channel</Heading>
    <Text fontSize="1em">*assuming 500K sales per month</Text>
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Channel</TableCell>
          <TableCell>%/sales</TableCell>
          <TableCell>Cost</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Ship from store</TableCell>
          <TableCell>5%</TableCell>
          <TableCell>${(83 * 500000 * .05).toLocaleString()}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Curbside</TableCell>
          <TableCell>10%</TableCell>
          <TableCell>${(77 * 500000 * .1).toLocaleString()}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>BOPIS</TableCell>
          <TableCell>10%</TableCell>
          <TableCell>${(77 * 500000 * .1).toLocaleString()}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>In-store</TableCell>
          <TableCell>65%</TableCell>
          <TableCell>${(67 * 500000 * .65).toLocaleString()}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Ship from Distribution Center</TableCell>
          <TableCell>10%</TableCell>
          <TableCell>${(64 * 500000 * .1).toLocaleString()}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell />
          <TableCell>Total:</TableCell>
          <TableCell>
            ${((83 * 500000 * .05) +
            (77 * 500000 * .1) +
            (77 * 500000 * .1) +
            (67 * 500000 * .65) +
            (64 * 500000 * .1)).toLocaleString()
            }
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </FlexBox>
  <Notes>
    2021 figures: $933.30 billion on ecommerce; brick-and-mortar is $5.149 trillion. Approximately 15-20% is e-Commerce.
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">Cost by channel</Heading>
    <Text fontSize="1em">*assuming 500K sales per month</Text>
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell>Channel</TableCell>
          <TableCell>%/sales</TableCell>
          <TableCell>Cost</TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>Ship from store</TableCell>
          <TableCell>5%</TableCell>
          <TableCell>${(83 * 500000 * .05).toLocaleString()}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Curbside</TableCell>
          <TableCell>10%</TableCell>
          <TableCell>${(77 * 500000 * .1).toLocaleString()}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>BOPIS</TableCell>
          <TableCell>10%</TableCell>
          <TableCell>${(77 * 500000 * .1).toLocaleString()}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>In-store</TableCell>
          <TableCell>65% <strong>- 15%</strong>: 50%</TableCell>
          <TableCell>${(67 * 500000 * .55).toLocaleString()}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Ship from Distribution Center</TableCell>
          <TableCell>10% <strong>+ 15%</strong>: 25%</TableCell>
          <TableCell>${(64 * 500000 * .2).toLocaleString()}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell />
          <TableCell>Total:</TableCell>
          <TableCell>
            ${((83 * 500000 * .05) +
            (77 * 500000 * .1) +
            (77 * 500000 * .1) +
            (67 * 500000 * .50) +
            (64 * 500000 * .25)).toLocaleString()
            }
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </FlexBox>
  <Notes>
    Drive additional online sales.
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">
      Savings with 15% increase in online sales
    </Heading>
    <Text fontSize="h2"><strong>${((34750000 - 34525000) * 12).toLocaleString()}</strong> annually</Text>
  </FlexBox>
  <Notes>
    Original cost was $3,475,000, new cost is $3,452,500 per month!
    Can that pay for you accessibility program? Probably with some to spare!
    This is why companies encourage paperless, discounts if you use ACH/EFT, etc.
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">
      Whoa, let's look back for a moment
    </Heading>
    <UnorderedList>
      <Appear><ListItem>Most websites have accessibility issues</ListItem></Appear>
      <Appear><ListItem>$490 billion in disposable income</ListItem></Appear>
      <Appear><ListItem>Driving more online traffic lowers costs</ListItem></Appear>
      <Appear><ListItem>There's a huge market having issues online</ListItem></Appear>
    </UnorderedList>
  </FlexBox>
  <Notes>
    Add it all together! Now, let's go back for a minute. We've looked at a confusing array of numbers
    that show the untapped potential of the disabled market. But there's more to it than just potential
    new customers. Let's go back to what accessibility is.
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">What is Accessibility?</Heading>
    <Appear><Text>"the practice of making your websites <strong>usable by as many people as possible</strong>."</Text></Appear>
  </FlexBox>
  <Notes>
    If accessibility is usability, that means your overall usability improves with
    accessibility. 
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">Is there ROI for good UX?</Heading>
    <UnorderedList>
      <Appear><ListItem><strong>35%</strong> increase in sales conversions</ListItem></Appear>
      <Appear><ListItem><strong>83%</strong> increase for all KPIs</ListItem></Appear>
      <Appear><ListItem><strong>43%</strong> increase in performance, vs 14.5%</ListItem></Appear>
      <Appear><ListItem><strong>79%</strong> of users will go elsewhere</ListItem></Appear>
    </UnorderedList>
  </FlexBox>
  <Notes>
    <p>Sources:</p>
    <ol>
      <li>https://baymard.com/lists/cart-abandonment-rate</li>
      <li>http://ux.walkme.com/infographic-making-strong-business-case-roi-ux/</li>
      <li>https://www.experiencedynamics.com/blog/2015/03/30-ux-statistics-you-should-not-ignore-infographic</li>
      <li>http://solutions.forrester.com/Global/FileLib/Forr_Perspective/Forrester-Perspective-CX-2.pdf</li>
    </ol>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">Case Studies</Heading>
    <UnorderedList>
      <Appear><ListItem><strong>Anthropologie</strong> increased sales <strong>24%</strong> after UX redesign</ListItem></Appear>
      <Appear><ListItem><strong>Staples</strong> increased visitors <strong>80%</strong>, with <strong>67%</strong> increase in repeat visitors</ListItem></Appear>
    </UnorderedList>
  </FlexBox>
  <Notes>
    <p>Sources:</p>
    <ol>
      <li>https://uxmag.com/articles/designing-superior-shopping-experiences</li>
      <li>https://humanfactors.com/case-studies-staples.aspx</li>
    </ol>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">Development Time</Heading>
    <UnorderedList>
      <Appear><ListItem><strong>33%-50%</strong> reduction in development time</ListItem></Appear>
      <Appear><ListItem><strong>50%</strong> savings in development re-work</ListItem></Appear>
      <Appear><ListItem><strong>47%</strong> increase in profits <em>from employee training</em></ListItem></Appear>
    </UnorderedList>
  </FlexBox>
  <Notes>
    <p>Sources:</p>
    <ol>
      <li>http://www.usabilitynet.org/management/c_business.htm</li>
      <li>https://www.experiencedynamics.com/blog/2014/07/making-strong-business-case-roi-ux-infographic</li>
      <li>https://web.archive.org/web/20160417011136/http://www.protential.ae/corporate-training-importance-areas-and-roi-investments/</li>
    </ol>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">
      <em>So. Many. Numbers!</em>
    </Heading>
  </FlexBox>
  <Notes>
    Like I mentioned at the beginning, I don't expect anyone to remember these numbers. I want you to
    remember the overall conclusion here: accessibility is usability, usability improves the customer
    experience, improved customer experiences lead directly to increased profits. Couple that with a
    very probably untapped marketshare of $490B and you've got a winning solution!

    <p>I've got one more carrot to discuss before we move on.</p>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Image src={Huddle} maxHeight="100%" width="auto" />
  </FlexBox>
  <Notes>
    Who knows what this is? The huddle. Who knows when - and WHY - the huddle was invented?

    <p>
      In 1894, the Gallaudet University football team was playing against another deaf team. Paul Hubbard,
      the quarterback didn't want to risk the other team seeing him using ASL to explain the play to his
      teammates, so he asked them to form a tight circle formation, now known as a huddle.
    </p>

    <p>
      Source: https://www.gallaudet.edu/about/huddle/
    </p>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Image src={CurbCut} maxHeight="100%" width="auto" maxWidth="100%" />
  </FlexBox>
  <Notes>
    Who knows what this is? The curb cut. Who knows when - and WHY - curb cuts became a thing?

    <p>
      Ed Roberts was stuck in an iron lung after polio. He needed it at night to sleep, but he was able
      to get around during the day after teaching himself the same deep breathing techniques deep sea free
      divers use. He joined with other disabled students at Berkeley and began fighting for their basic
      civil rights. In the early 1970's they bought bags of concrete and, at night, made their own ramps
      over the curbs. Their activism led to a September 1971 Berkeley city council resolution to make 
      sidewalks accessible.
    </p>

    <p>
      Around the same time, a bit earlier, the city of Kalamazoo, MI, actually had the first municipally
      sponsored curb cuts, which happened because of a retired veteran who got fed up with watching his
      fellow disabled vets struggle to cross the street and step over the curb.
    </p>

    <p>
      Source:
      <ol>
        <li>https://99percentinvisible.org/episode/curb-cuts/</li>
        <li>https://mosaicofminds.medium.com/the-curb-cut-effect-how-making-public-spaces-accessible-to-people-with-disabilities-helps-everyone-d69f24c58785</li>
        <li>https://ssir.org/articles/entry/the_curb_cut_effect</li>
      </ol>
    </p>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%">
    <Heading fontSize="h2">The Curb Cut Effect</Heading>
    <Appear><Text>addressing disadvantages or exclusions experienced by one group of people creates an environment that enables <strong>everyone</strong> to participate and contribute fully</Text></Appear>
  </FlexBox>
  <Notes>
    This is the root cause of most of the numbers I've shard above. Making things more usable is an
    objective, studied, documented way to increase the share of people who can participate, able-bodied or
    not. Think about handicap doors and the beginning of the pandemic; think about ramps for wheelchairs that
    are then used by parents with strollers; think about curb cuts and how annoying your bike commute would
    be without them. Accessibily - USABILITY - helps EVERYONE.

    <p>But it's not all carrots, remember ...</p>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%">
    <Image src={Beyonce} maxHeight="100%" maxWidth="100%" width="auto" />
  </FlexBox>
  <Notes>
    Remember this? The truth is that this matter was settled out of court without any compensation to the
    plaintiff. However, beyonce.com now has an accessibility statement and lots of improvements (though
    it has a ways to go to be fully accessible [last I checked in early 2021]).

    <p>
      Source: https://www.pacermonitor.com/public/case/26585881/Conner_v_Parkwood_Entertainment_LLC
    </p>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">
      It is time for the 🪠
    </Heading>
  </FlexBox>
  <Notes>
    It's a stick. Remember? Carrots and sticks? Glad you're still with me, thanks! I am not going to spend
    a lot of time on the liabilities. I think we all know they exist. I just want to highlight a couple items
    to really drive the point home that you can be held liable if your site is not compliant.
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">
      Americans With Disabilities Act
    </Heading>
  </FlexBox>
  <Notes>
    The simplest definition: it prohibits discrimination based on disability. There are analogous laws
    in other countries around the world. Tell your legal team to make sure you are compliant in all your
    markets! https://www.un.org/development/desa/disabilities/disability-laws-and-acts-by-country-area.html
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%">
    <Image src={Lawsuits} maxHeight="100%" maxWidth="100%" width="auto" />
  </FlexBox>
  <Notes>
    This chart shows all you need - ADA lawsuits are on the rise, and most are won by the plaintiffs.
    There are some recent cases where federal courts have found the plaintiffs didn't have standing,
    but it was done on technicalities. The overall trend favors the plaintiff, not the defendant. We
    are going to take a quick look at two major suits.

    <p>
      Source:
      <ol>
        <li>https://www.adatitleiii.com/2022/03/federal-website-accessibility-lawsuits-increased-in-2021-despite-mid-year-pandemic-lull/</li>
        <li>ttps://usablenet.com/resources</li>
      </ol>
    </p>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">
      National Federation of the Blind (NFB), et al. v. Target Corporation
    </Heading>
  </FlexBox>
  <Notes>
    Targets website was not accessible to blind users, and this case in 2006 set a major precedent for
    online presences needing to be compliant with the ADA. Target lost, having to pay out $6M in damages
    and $3M in fees. Target settled the lawsuit and has since partnered with the NFB and has won awards
    for their accessibility efforts.

    <p>
      Source: https://dralegal.org/case/national-federation-of-the-blind-nfb-et-al-v-target-corporation/
    </p>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">
      Robles v. Domino's Pizza LLC
    </Heading>
    <Appear>
      <Text>
        How much did Dominos admit, in court, that it would have cost them to make their site compliant?
      </Text>
    </Appear>
    <Appear><Text><strong>$38,000</strong></Text></Appear>
  </FlexBox>
  <Notes>
    As with Targets case, this was due to screen reader incompatibility with both Dominos web and mobile
    presence. One key feature of this case is that users were given incentives for using those platforms for
    their orders, and because they were inaccessible it excluded disabled users from receiving those same
    incentives.

    <p>
      This case was settle this year, in July 2022, in Robles favor. It went all the way to the US Supreme
      Court, who declined to hear the case, letting the 9th Circuit ruling in favor of Robles stand. Without
      getting into a bunch of legalese, that ruling said Robles had standing to sue, and the case moved
      forward, with Dominoes eventually losing.
    </p>

    <p>$38k to fix, how much did they spend fighting it up to the Supreme Court?</p>

    <p>
      Source:
      <ol>
        <li>https://www.courtlistener.com/docket/4615111/guillermo-robles-v-dominos-pizza-llc/</li>
        <li>https://arstechnica.com/tech-policy/2019/10/accessibility-the-future-and-why-dominos-matters/</li>
      </ol>
    </p>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">
      Cost of Non-Compliance
    </Heading>
    <Appear><Text><strong>2.71x</strong> the cost of compliance</Text></Appear>
  </FlexBox>
  <Notes>
    So let's assume that it would cost you $100,000 to become compliant. Your liability is at least
    $271,000. Which would you rather risk?

    <p>
      Source: https://www.globalscape.com/resources/whitepapers/data-protection-regulations-study
    </p>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">
      Cost of "No Code" Compliance
    </Heading>
    <Appear><Text>Overlays <strong>are not</strong> accessible</Text></Appear>
    <Appear><Link href="https://overlayfactsheet.com/">https://overlayfactsheet.com/</Link></Appear>
  </FlexBox>
  <Notes>
    Accessibility overlays are snake oil and don't save you from any liability, and they create
    a worse user experience. The literal anti-thesis of what we want.
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">
      Is that enough 🪠?
    </Heading>
  </FlexBox>
  <Notes>
    I think that's enough stick. I think most everyone in the room understands the liabilities.
    Unfortunately, a lot people view these are "one time" costs and don't view it as a significant
    risk. That's why I started with the carrots. That's where the real value is.
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Quote>
      "Many organisations are waking up to the fact that embracing accessibility leads to multiple benefits – reducing legal risks, strengthening brand presence, improving customer experience and colleague productivity."
      - Paul Smyth, Head of Digital Accessibility, Barclays
    </Quote>
  </FlexBox>
  <Notes>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">But ... there's something we need to talk about</Heading>
    <UnorderedList>
      <Appear><ListItem>Do you have a <strong>disabled user persona</strong>?</ListItem></Appear>
      <Appear><ListItem>Do you measure <strong>disabled user engagement</strong>?</ListItem></Appear>
    </UnorderedList>
  </FlexBox>
  <Notes>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">
      If your site was inaccessible, you already lost that market
    </Heading>
    <Appear><Text>And you want to know the best part?</Text></Appear>
  </FlexBox>
  <Notes>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">
      IT'S YOUR FAULT!
    </Heading>
    <Appear><Text>No, really, <strong>that's a great thing!</strong></Text></Appear>
  </FlexBox>
  <Notes>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">
      YOU CAN FIX IT!
    </Heading>
  </FlexBox>
  <Notes>
    You are here. You care. That's important. That's huge. There's almost nothing holding you back
    from an accessible product except bureaucracy. There's no technological barriers to over come,
    we already have the technology. There's no lack of training, we have training from amazing
    people available at a moments notice.

    <p>
      Now, I know some of you may be limited in what you can fix due to that bureaucracy. We have all
      worked with that person who cares about every penny, and counts them every hour. Take some time
      to work some numbers for your firm and make the business case. The data is real.
    </p>

    <p>
      And I know that's possible for some people. That's hard to put together, and it's hard to stand
      up to management and confront that. I get it and I don't blame you. Again, you're here. That
      matters. So do the things you can. Talk to your immediate co-workers about it. Make sure you
      run some basic accessibility tests on your own code before submitting the pull request. Do the
      things you can. Every small step makes a world of difference.
    </p>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="h2">
      Accessibility is a market differentiator
    </Heading>
    <Appear><Text>How will <strong>you</strong> make a difference?</Text></Appear>
  </FlexBox>
  <Notes>
  </Notes>
</Slide>

<Slide>
  <FlexBox height="100%" flexDirection="column">
    <Heading fontSize="130px">That's All Folks!</Heading>
  </FlexBox>
  <Notes>
      Thank you all so much for coming.

      <p>
        Other sources:
        <ol>
          <li>https://www.w3.org/WAI/business-case/</li>
          <li>https://karlgroves.com/the-truth-about-the-roi-of-web-accessibility/</li>
          <li>https://techcrunch.com/2021/07/21/the-real-roi-of-making-your-products-more-accessible/</li>
          <li>https://www.boia.org/blog/brands-are-losing-billions-by-not-being-digitally-accessible</li>

        </ol>
      </p>
  </Notes>
</Slide>

  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));
