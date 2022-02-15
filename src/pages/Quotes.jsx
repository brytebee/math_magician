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
    <div>
      <h1>Quote</h1>
      <p>{theQuote}</p>
      <p>{author}</p>
    </div>
  );
};

export default Quotes;
