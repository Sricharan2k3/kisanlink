export default function ImageComponent({ src, alt }) {
    return (
      <img
        src={src}
        width={800}
        height={400}
        alt={alt}
        className="mt-6 rounded-lg object-cover"
      />
    );
  }
  