import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Me | My Portfolio</title>
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <form className="w-full max-w-md mt-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-3 bg-gray-800 border border-gray-700 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-3 bg-gray-800 border border-gray-700 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-3 bg-gray-800 border border-gray-700 rounded"
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded"
          >
            Send Message
          </button>
        </form>
      </main>
    </>
  );
}
