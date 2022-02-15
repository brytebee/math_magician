import { useEffect, useState } from 'react';

const Quotes = () => {
  const [theQuote, setTheQuote] = useState('Vanity upon vanity.');
  const [author, setAuthor] = useState('King Solomon');

  useEffect(() => {
    const getQuote = async () => {
      const quote = await (
        await fetch('https://api.quotable.io/random')
      ).json();
      setTheQuote(quote.content);
      setAuthor(quote.author);
    };
    getQuote();
  }, []);

  return (
    <div className="paddy">
      <h2 className="heading j-right">Quote</h2>
      <p className="quote j-right">{`"${theQuote}"`}</p>
      <p className="author j-right p-bot">
        <i>{`~${author}`}</i>
      </p>
    </div>
  );
};

export default Quotes;
