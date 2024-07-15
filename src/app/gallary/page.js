import Background from "../../utils/background"
export default function Component() {
    return (
      <div className="max-w-full   ">
       <Background title={"Our Gallary"}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">
          <div className="bg-background rounded-lg overflow-hidden shadow-lg">
            <img
              src="/placeholder.svg"
              alt="Gallery Image 1"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Stunning Landscape</h3>
              <p className="text-muted-foreground">Capture the beauty of nature in this breathtaking landscape.</p>
            </div>
          </div>
          <div className="bg-background rounded-lg overflow-hidden shadow-lg">
            <img
              src="/placeholder.svg"
              alt="Gallery Image 2"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Vibrant City Skyline</h3>
              <p className="text-muted-foreground">Witness the bustling energy of our thriving city.</p>
            </div>
          </div>
          <div className="bg-background rounded-lg overflow-hidden shadow-lg">
            <img
              src="/placeholder.svg"
              alt="Gallery Image 3"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Architectural Masterpiece</h3>
              <p className="text-muted-foreground">Explore the intricate details of this architectural wonder.</p>
            </div>
          </div>
          <div className="bg-background rounded-lg overflow-hidden shadow-lg">
            <img
              src="/placeholder.svg"
              alt="Gallery Image 4"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Serene Waterfall</h3>
              <p className="text-muted-foreground">Immerse yourself in the tranquility of this cascading waterfall.</p>
            </div>
          </div>
          <div className="bg-background rounded-lg overflow-hidden shadow-lg">
            <img
              src="/placeholder.svg"
              alt="Gallery Image 5"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Colorful Street Art</h3>
              <p className="text-muted-foreground">Discover the vibrant and expressive street art in our city.</p>
            </div>
          </div>
          <div className="bg-background rounded-lg overflow-hidden shadow-lg">
            <img
              src="/placeholder.svg"
              alt="Gallery Image 6"
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Majestic Mountain Range</h3>
              <p className="text-muted-foreground">Gaze upon the awe-inspiring beauty of our mountain range.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }