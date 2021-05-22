import React from "react";

const QuoteItself = () => {
  return (
    <div>
      QuoteItself
      <figure>
        <blockquote id="text" cite="https://www.huxley.net/bnw/four.html">
          <p>
            Words can be like X-rays, if you use them properly—they’ll go
            through anything. You read and you’re pierced.
          </p>
        </blockquote>
        <figcaption id="author">
          —Aldous Huxley, <cite>Brave New World</cite>
        </figcaption>
      </figure>
    </div>
  );
};

export default QuoteItself;
