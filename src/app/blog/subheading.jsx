export default function SubheadingDescription({ subheading, text }) {
    return (
      <section className="mt-12">
        <h2 className="text-3xl font-bold">{subheading}</h2>
        <p>{text}</p>
      </section>
    );
  }
  