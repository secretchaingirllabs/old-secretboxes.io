import {
  MailingListSignupBanner,
  MailingListSignupBannerFormValues,
} from '@/components/forms/MailingListSignupBanner'
import { FigmentLearnRow } from '@/components/Pages/SecretBoxes/FigmentLearnRow'
import { RichieRichRow } from '@/components/Pages/SecretBoxes/RichieRichRow'
import { SecretCounterRow } from '@/components/Pages/SecretBoxes/SecretCounterRow'

const SecretBoxes = () => {
  const onMailingListSubmit = (values: MailingListSignupBannerFormValues) => {
    /* eslint-disable-next-line no-console */
    console.log(values)
  }
  return (
    <>
      <div className="max-w-[1152px] mx-auto py-[137px] space-y-60">
        <div id="secretCounter">
          <SecretCounterRow />
        </div>
        <div id="figmentLearn">
          <FigmentLearnRow />
        </div>
        <div id="richieRich">
          <RichieRichRow />
        </div>
        <MailingListSignupBanner onSubmit={onMailingListSubmit} />
      </div>
    </>
  )
}

SecretBoxes.title = 'Secret Boxes'

export default SecretBoxes
