import React from 'react';
import MoneyTransferHeroSection from '../../Component/MoneyTransfer/MoneyTransferHeroSection';
import Services from '../../Component/MoneyTransfer/Services';
import TitleDescription from '../../Component/MoneyTransfer/TitleDescription';

function MoneyTransfer() {
  return <>
        <MoneyTransferHeroSection/>
        <Services/>
        <TitleDescription 
        title="Swift Transfers"
        description="A person in India can receive money in just minutes after his sender has sent money from abroad. 
        Each transaction is electronically remitted through Western Union central server RIA and 
        generated through a software which is absolutely safe and easy to use. 
        Robust security features are inbuilt. The documentation and payment process 
        designed in a way to ensure that the payment is made only to the actual receiver. 
        Paul Merchants branches & locations are present in every nook and corner of the 
        country to serve the customer with utmost care, convenience and safety."
        />
         <TitleDescription 
        title="Simple Money Reception"
        description="For receiving money in India a customer has to fill up a very simple form which is 
        called ‘To Receive Money’ (TRM) Form. This form has basic information related to the transaction 
        like MTCN no., the name of the receiver, the name of the sender, amount, purpose of the transaction, 
        sending country etc. which any person having elementary education can also fill up. Our Front Office 
        Executives are trained & always keen to assist the customer to fill up the TRM. Further, to receive 
        money, a person does not need to open a bank account if his transaction is less than Rs. 50,000/-. 
        Payment in such cases is made in cash. The Receiver is required to be physically present at the 
        location with an original photo identification and address proof for any transaction and will be 
        paid immediately."
        />
  </>
}

export default MoneyTransfer