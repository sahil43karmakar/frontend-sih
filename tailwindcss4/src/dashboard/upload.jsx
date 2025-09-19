export default function IdentifyBreed() {
  return (
    <div className="bg-[#fbf8f3] min-h-screen pt-24 px-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-green-700 to-blue-600 text-transparent bg-clip-text drop-shadow">
            Identify Breed
          </h1>
          <p className="text-gray-600 text-lg tracking-wide">
            Upload a clear image of your cattle to get instant breed identification
            and care recommendations.
          </p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2 bg-black text-white rounded-xl shadow hover:scale-105 transition">
          ⏳ View History
        </button>
      </div>

      {/* Tips Section */}
      <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 mb-10">
        <h2 className="text-xl font-bold mb-2">Tips for Best Results</h2>
        <p className="text-gray-500 mb-5 text-sm">
          Follow these guidelines for accurate breed identification
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            "Take photos in good lighting conditions",
            "Capture the full body or clear head shot",
            "Ensure the animal is clearly visible",
          ].map((tip, i) => (
            <div
              key={i}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:shadow-md transition"
            >
              <span className="bg-gray-200 rounded-full w-7 h-7 flex items-center justify-center font-bold">
                {i + 1}
              </span>
              <span className="text-sm text-gray-700">{tip}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Upload + Result Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Upload Box */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg flex flex-col items-center justify-center h-80 transition transform hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl">
          <div className="border-dashed border-2 border-gray-300 rounded-lg w-44 h-44 flex flex-col items-center justify-center mb-4">
            <span className="text-5xl mb-2">⬆️</span>
            <span className="font-semibold text-gray-700">
              Upload Cattle Image
            </span>
          </div>
          <p className="text-xs text-gray-500 mb-3">
            Drag & drop your cattle image here, or click to browse
          </p>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm shadow hover:scale-105 transition">
              📷 Take Photo
            </button>
            <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg text-sm shadow hover:scale-105 transition">
              📂 Browse Files
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            Supports: JPG, PNG, WebP (Max 10MB)
          </p>
        </div>

        {/* Results Box */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg flex flex-col items-center justify-center h-80 transition transform hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl">
          <span className="text-5xl mb-3">⏳</span>
          <span className="font-semibold text-lg mb-2 text-gray-700">
            No Results Yet
          </span>
          <span className="text-sm text-gray-500 text-center">
            Upload an image to see breed identification results here.
          </span>
        </div>
      </div>
    </div>
  );
}


