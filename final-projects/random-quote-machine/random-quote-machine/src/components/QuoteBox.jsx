import React from 'react'
import IconButtons from './IconButtons'
import QuoteBoxFooter from './QuoteBoxFooter'
import QuoteButton from './QuoteButton'
import QuoteItself from './QuoteItself'

const QuoteBox = () => {
    return (
        <div id="quote-box">
            Quote Box
            <QuoteItself />
            <>
                <IconButtons />
                <QuoteButton />
            </>
            <QuoteBoxFooter />
        </div>
    )
}

export default QuoteBox
