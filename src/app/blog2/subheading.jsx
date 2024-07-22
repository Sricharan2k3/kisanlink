export default function SubheadingDescription({ subheading, text }) {
    return (
      <section className="mt-4">
        <h2 className="text-xl font-bold">{subheading}</h2>
        <p className="text-md">{text}</p>
      </section>
    );
  }
  