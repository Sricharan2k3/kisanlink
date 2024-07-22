export default function QuoteComponent({ quote, author }) {
    return (
      <blockquote className="mt-6 border-l-4 border-primary pl-6 text-2xl font-medium italic">
        <p>{quote}</p>
        <cite className="mt-4 block text-base not-italic text-muted-foreground">
           {author}
        </cite>
      </blockquote>
    );
  }
  