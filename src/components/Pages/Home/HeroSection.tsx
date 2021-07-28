import { PrimaryButton } from '@/components/common/PrimaryButton'
import { SecondaryButton } from '@/components/common/SecondaryButton'
import { AlienWithBoxesLottie } from '@/components/Lotties/AlienWithBoxesLottie'
import Link from 'next/link'

export const HeroSection = () => (
  <section>
    <div className="max-w-[1152px] mx-auto">
      <div className="relative flex items-center justify-between space-y-4">
        <div className="pt-10 mx-auto md:mx-0 md:-mt-8 text-blue-primary">
          <h1 className="leading-tight font-display text-[118px] dark:text-primary">
            Secret Boxes
          </h1>
          <p className="mb-5 text-2xl font-body dark:text-dark-body">
            The beautiful, fun and easy way to get
            <br />
            started building Secret Apps.
          </p>
          <div className="flex space-x-6">
            <Link href="/secret-boxes">
              <a>
                <PrimaryButton>
                  <span>Start Unboxing</span>
                  <div className="transition-all opacity-0 group-hover:scale-100 group-hover:opacity-100 group-hover:ml-2">
                    <svg
                      className="hidden group-hover:block"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.167 7.81718L3.16699 7.81718"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.13379 3.80089L13.1671 7.81689L9.13379 11.8336"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </PrimaryButton>
              </a>
            </Link>
            <SecondaryButton>Tutorials</SecondaryButton>
          </div>
        </div>
        <div className="hidden md:block">
          <AlienWithBoxesLottie
            style={{ width: '636px', height: '498px', paddingTop: '30px' }}
          />
        </div>
      </div>
      <a href="#secretBoxes">
        <span className="sr-only">To Secret Boxes</span>
        <svg
          className="w-6 h-6 mx-auto mt-20 dark:text-dark-body"
          width="18"
          height="10"
          viewBox="0 0 18 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L9 9L17 1" stroke="currentColor" strokeWidth="2" />
        </svg>
      </a>
    </div>
  </section>
)
