import { AuroraText } from '@/components/magicui/aurora-text'
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'
import { SparklesText } from '@/components/magicui/sparkles-text'
import { ScrollIndicator } from '@/components/shared/scroll-indicator'
import { Magnetic } from '@/components/ui/magnetic'
import { ArrowDownRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('Hero')

  return (
    <div className="relative flex h-screen items-center bg-[url(/gradient.png)] bg-contain bg-[center_right_-200px] bg-no-repeat p-24">
      <div className="w-[55%]">
        <h1 className="mb-8 text-5xl">
          {t('text1')}
          <AuroraText className="font-bold">{t('text2')}</AuroraText>
          {t('text3')}
        </h1>
        <h1 className="text-5xl">
          {t('subtext1')}
          <SparklesText text={t('subtext2')} />?
        </h1>
        <ScrollIndicator />
      </div>
      <div className="absolute bottom-24 right-24">
        <ArrowDownRight size={24} className="absolute bottom-full" />
        <Magnetic>
          <InteractiveHoverButton href="mailto:joaoinez.info@gmail.com">
            {t('connect')}
          </InteractiveHoverButton>
        </Magnetic>
      </div>
    </div>
  )
}
