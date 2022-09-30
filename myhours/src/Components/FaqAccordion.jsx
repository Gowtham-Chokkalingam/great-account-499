import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'

const FaqAccordion = () => {
  return (
<Accordion  w={'60%'} allowToggle>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        Will I be charged after the 14 day trial?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    No, you don't have to enter your credit card details to start your Free trial. When you decide to continue using My Hours, enter your payment details and you'll be automatically charged each period (monthly or annually).
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        Can I switch to a Free account after the Pro Trial ends?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Sure! You'll always have a choice between staying on the Pro version that comes with a subscription or downgrading to a Free account. Just keep in mind that you will lose access to Pro features.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        What if we need more than 14 days to test the Pro edition?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Just send us an email to support@myhours.com and we'll provide you with an extension.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        What's included in the Pro Trial?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Pro Trial comes with every feature that My Hours offers. If you have trouble finding a functionality you need, send us an email.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        What kind of payment do you accept?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    We accept Visa, MasterCard, American Express, Discover, and PayPal. Additional payment options, including wire transfer, are available for larger teams with 10+ members and an annual payment.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        Do you offer discounts?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    We offer discounts to non-profit companies and larger teams.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        What type of support is included?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    All My Hours users receive email support, while Pro customers can also engage via live chat. Our typical response time is less than 24 hours. Teams with 3+ members can sign up for a free training here.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        Can I get a refund?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    We issue a refund when My Hours account with active subscription was not being used for a few months.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
        Can I deactivate inactive team members?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    You can archive inactive team members while keeping their data for reporting. We do not charge for archived team members.
    </AccordionPanel>
  </AccordionItem>

 
</Accordion>
  )
}

export default FaqAccordion