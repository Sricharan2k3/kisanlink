export default function ImageComponent({ src, alt }) {
    return (
      <img
        src={src}
        width={1200}
        height={600}
        alt={alt}
        className="mt-6 rounded-lg object-cover"
      />
    );
  }
  