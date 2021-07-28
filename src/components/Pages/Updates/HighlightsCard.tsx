import Image from 'next/image'

export const HighlightsCard = () => (
  <div className="flex p-6 space-x-10 transition shadow-md hover:shadow-lg">
    <div>
      <div className="flex items-center flex-grow mb-1 space-x-2">
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="8" cy="8.5" r="7.5" stroke="#4E4B66" />
          <path
            d="M9.85286 5.67716C9.85286 6.70051 9.02327 7.5301 7.99991 7.5301C6.97656 7.5301 6.14697 6.70051 6.14697 5.67716C6.14697 4.65381 6.97656 3.82422 7.99991 3.82422C9.02327 3.82422 9.85286 4.65381 9.85286 5.67716Z"
            stroke="#4E4B66"
          />
          <path
            d="M12.2352 13.6785C12.2352 12.4305 11.789 11.2335 10.9947 10.351C10.2005 9.46845 9.12321 8.97266 7.99994 8.97266C6.87667 8.97266 5.79941 9.46845 5.00514 10.351C4.21087 11.2335 3.76465 12.4305 3.76465 13.6785"
            stroke="#4E4B66"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>Secret Agent</p>
      </div>
      <h3 className="text-xl">Richie Rich Secret Box</h3>
      <div className="flex space-x-2">
        <span>Mar 3</span>
        <span>&bull;</span>
        <span>8 min read</span>
      </div>
    </div>
    <div
      className="flex items-center justify-center flex-none bg-black"
      style={{ width: '122px', height: '122px' }}
    >
      <Image src="/images/news_sienna_network.webp" width="82px" height="82px" />
    </div>
  </div>
)
