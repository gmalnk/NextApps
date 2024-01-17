import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is algorithmic trading?",
    answer:
      "Algorithmic trading, also known as algo trading or automated trading, is the use of computer algorithms to execute trading strategies in financial markets. It involves programming predefined rules to automatically execute trades based on specific conditions.",
  },
  {
    question: "How does your algorithmic trading platform work?",
    answer:
      "Our platform utilizes sophisticated algorithms to generate Trendlines (support and resistance lines), so that you don't have to draw trendlines for 100's of stocks manually, and execute predefined trades on behalf of users.",
  },
  {
    question: "What markets does your platform support?",
    answer:
      "Our platform supports NSE stocks. We continuously expand our market coverage to provide users with diverse trading opportunities.",
  },
  {
    question: "What brokers can i integrate on this platform?",
    answer:
      "We have tailored our platform to cater to the needs of users in the Indian market, and as such, we offer seamless integration with prominent brokerage services. Specifically, our platform is compatible with well-known brokers in India, including Zerodha, Upstox, and Angel One. This integration enables users to directly connect their trading accounts with these brokers, streamlining the execution of trades and providing a convenient and efficient experience for our users in the Indian financial market.",
  },
  {
    question: "Is algorithmic trading suitable for beginners?",
    answer:
      "Yes, our platform is designed to cater to both beginners and experienced traders. We provide user-friendly tools for beginners to get started, while also offering advanced features for seasoned traders to fine-tune their trading journey.",
  },
  {
    question: "How secure is my data on your platform?",
    answer:
      "Security is our top priority. We employ state-of-the-art encryption protocols to protect your data and ensure the confidentiality of your trading activities. Additionally, we regularly conduct security audits to identify and address potential vulnerabilities.",
  },
  {
    question: "What technical skills do I need to use your platform?",
    answer:
      "Our platform is designed to be user-friendly, and no advanced programming skills are required. However, for users who want to create custom algorithms, basic programming knowledge can be beneficial. We also provide documentation and support to assist users at every skill level.",
  },
  {
    question: "Can I backtest my trading strategies on your platform?",
    answer:
      "We currently do not offer a backtesting functionality on our platform. However, we have implemented a neural network that has been trained extensively on a vast dataset of trendlines generated using our Trendline generator algorithms, from NSE stocks data across all timeframes. This neural network can provide an efficiency or probability of success for a given trendline, which is used to rank trendlines. While it may not replace traditional backtesting, it offers an alternative approach to assessing the potential success of your trades based on historical trendline data.",
  },
  {
    question: "How fast are trade executions on your platform?",
    answer:
      "Trade execution speed is crucial in algorithmic trading. Our platform is optimized for low-latency trade executions, ensuring that orders are processed swiftly to capitalize on market opportunities.",
  },
  {
    question: "Is customer support available?",
    answer:
      "Yes, we provide customer support to assist you with any questions or issues. Our support team is available via email, chat, and phone during regular business hours.",
  },
];

export default function FAQ() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-[50px] p-10 pb-2">FAQ'S</div>
      <div className="w-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center mx-20 px-20 py-10 pt-0 w-[1000px] h-full ">
          <Accordion type="single" collapsible className="w-full">
            <>
              {faqs.map((faq, index) => {
                return (
                  <AccordionItem value={`item-${index + 1}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                );
              })}
            </>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
