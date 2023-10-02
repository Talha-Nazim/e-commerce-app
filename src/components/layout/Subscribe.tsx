
const Subscribe = () => {
    return(
        <div>
           <div className=" mt-10 bg-gray-100 py-16">
  <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
      Subscribe to Our Newsletter
    </h2>
    <p className="mt-4 text-lg text-gray-500">
      Stay updated with our latest news and offers.
    </p>
    <div className="mt-8 sm:flex">
      <div className="max-w-xs w-full">
        <label htmlFor="email" className="sr-only">Email address</label>
        <input
          type="email"
          id="email"
          className="appearance-none block w-full px-4 py-3 leading-5 rounded-md border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-400 focus:placeholder-gray-400 sm:text-sm"
          placeholder="Enter your email"
        />
      </div>
      <div className="mt-3 sm:mt-0 sm:ml-3">
        <button
          className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
        >
          Subscribe
        </button>
      </div>
    </div>
  </div>
</div>

        </div>
    )
}
export default Subscribe;