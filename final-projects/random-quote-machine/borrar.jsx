function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
    },
    url: "https://andruxnet-random-famous-quotes.p.mashape.com/cat=",
    success: function (r) {
      if (typeof r === "string") {
        r = JSON.parse(r);
      }
      if (Array.isArray(r)) {
        r = r[0];
      }
      currentQuote = r.quote;
      currentAuthor = r.author;
      if (inIframe()) {
        $("#tweet-quote").attr(
          "href",
          "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
            encodeURIComponent('"' + currentQuote + '" ' + currentAuthor)
        );
        $("#tumblr-quote").attr(
          "href",
          "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" +
            encodeURIComponent(currentAuthor) +
            "&content=" +
            encodeURIComponent(currentQuote) +
            "&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button"
        );
      }
      $(".quote-text").animate(
        {
          opacity: 0,
        },
        500,
        function () {
          $(this).animate(
            {
              opacity: 1,
            },
            500
          );
          $("#text").text(r.quote);
        }
      );

      $(".quote-author").animate(
        {
          opacity: 0,
        },
        500,
        function () {
          $(this).animate(
            {
              opacity: 1,
            },
            500
          );
          $("#author").html(r.author);
        }
      );

      var color = Math.floor(Math.random() * colors.length);
      $("html body").animate(
        {
          backgroundColor: colors[color],
          color: colors[color],
        },
        1000
      );
      $(".button").animate(
        {
          backgroundColor: colors[color],
        },
        1000
      );
    },
  });
}