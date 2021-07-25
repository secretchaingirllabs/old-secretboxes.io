import Image from 'next/image'

export const NewsSection = () => {
  return (
    <section className="max-w-[1152px] mx-auto flex flex-col items-center">
      <h1 className="mb-5 leading-tight font-display text-8xl dark:text-primary text-dark-text">
        News & Updates
      </h1>
      <p className="mb-[84px]">
        What’s going on in the Secret Boxes universe? Here is where devs can find out
        about new
        <br />
        Secret Boxes, launch announcements, protocol updates, developer working groups and
        more.
      </p>
      <div className="grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-9">
        <div className="relative group md:col-start-1 md:col-end-3 h-[282px]">
          <div className="absolute inset-0 z-10 transition-all duration-400 bg-gradient-to-t to-white/0 via-black/80 from-black/80 bg-size-200 bg-pos-0 group-hover:bg-pos-100" />
          <Image
            className="absolute top-0"
            src="/images/news_griptape.webp"
            layout="fill"
          />
          <p className="absolute group-hover:flex flex-col items-center justify-center transition-all group-hover:bottom-36 transform z-30 text-white bottom-5 left-6 group-hover:translate-y-1/4 group-hover:translate-x-[5%] tracking-wider">
            <h2 className="whitespace-nowrap group-hover:text-5xl text-[34px] transition-all group-hover:mb-3 font-display">
              &ldquo;GripTape&rdquo; Secret Box Launching Soon
            </h2>
            <div className="hidden group-hover:block">
              <p className="h-0 tracking-tighter text-center whitespace-nowrap">
                Brought to you by the Stake or Die! team, GripTape makes it easy to
                interact with the network.
              </p>
            </div>
          </p>
        </div>
        <div className="relative group md:col-start-3 md:col-end-4 h-[282px]">
          <div className="absolute inset-0 z-10 transition-all duration-400 bg-gradient-to-t to-white/0 via-black/80 from-black/80 bg-size-200 bg-pos-0 group-hover:bg-pos-100" />
          <Image
            className="absolute top-0"
            src="/images/news_richie_rich.webp"
            layout="fill"
          />
          <p className="absolute group-hover:flex flex-col items-center justify-center transition-all group-hover:bottom-36 transform z-30 text-white bottom-5 left-6 group-hover:translate-y-1/4 group-hover:translate-x-[5%] tracking-wider">
            <h2 className="whitespace-nowrap group-hover:text-5xl text-[34px] transition-all group-hover:mb-3 font-display">
              &ldquo;Richie Rich&rdquo; Secret Box
            </h2>
            <div className="hidden group-hover:block">
              <p className="h-0 tracking-tighter text-center whitespace-nowrap">
                Who’s the richest?
              </p>
            </div>
          </p>
        </div>
        <div className="relative group md:col-start-1 md:col-end-2 h-[282px]">
          <div className="absolute inset-0 z-20 transition-all duration-400 bg-gradient-to-t to-white/0 via-black/80 from-black/80 bg-size-200 bg-pos-0 group-hover:bg-pos-100" />
          <Image
            className="absolute top-0 z-10"
            src="/images/news_secret_voting.webp"
            layout="fill"
          />
          <Image
            className="absolute top-0"
            src="/images/news_secret_voting_fg.webp"
            layout="fill"
          />
          <p className="absolute group-hover:flex flex-col items-center justify-center transition-all group-hover:bottom-36 transform z-30 text-white bottom-5 left-6 group-hover:translate-y-1/4 group-hover:translate-x-[25%] tracking-wider">
            <h2 className="whitespace-nowrap group-hover:text-5xl text-[34px] transition-all group-hover:mb-3 font-display">
              Secret Voting Box
            </h2>
            <div className="hidden group-hover:block">
              <p className="h-0 tracking-tighter text-center whitespace-nowrap">
                Vote early, often and in private.
              </p>
            </div>
          </p>
        </div>
        <div className="relative group md:col-start-2 md:col-end-4 h-[282px] bg-black">
          <div className="absolute inset-0 z-10 transition-all duration-400 bg-gradient-to-t to-white/0 via-black/80 from-black/80 bg-size-200 bg-pos-0 group-hover:bg-pos-100" />
          <div className="absolute translate-x-1/2 translate-y-1/2 right-1/2 bottom-1/2">
            <Image src="/images/news_sienna_network.webp" width="170px" height="170px" />
          </div>
          <p className="absolute group-hover:flex flex-col items-center justify-center transition-all group-hover:bottom-36 transform z-30 text-white bottom-5 left-6 group-hover:translate-y-1/4 group-hover:translate-x-[75%] tracking-wider">
            <h2 className="whitespace-nowrap group-hover:text-5xl text-[34px] transition-all group-hover:mb-3 font-display">
              Sienna Network
            </h2>
            <div className="hidden group-hover:block">
              <p className="h-0 tracking-tighter text-center whitespace-nowrap">
                First DeFi Protocol built on Secret Network.
              </p>
            </div>
          </p>
        </div>
        <div className="w-[750px]" />
      </div>
    </section>
  )
}
