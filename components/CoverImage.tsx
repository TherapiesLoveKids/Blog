import cn from 'classnames'
import { urlForImage } from 'lib/sanity.image'
import Image from 'next/image'
import Link from 'next/link'

interface CoverImageProps {
  title: string
  slug?: string
  image: any
  priority?: boolean
}

export default function CoverImage(props: CoverImageProps) {
  const { title, slug, image: source, priority } = props

  const renderedImage = source?.asset?._ref ? (
    <div
      className={cn('shadow-small', {
        'transition-shadow duration-200 hover:shadow-medium': slug,
      })}
      style={{ margin:'25px 0'}}
    >
      <img
        className="h-auto w-full"
        alt=""
        src={urlForImage(source).height(1000).width(2000).url()}
        sizes="100vw"
        style={{ width: '60vw'}}
      />
    </div>
  ) : (
    <div style={{ paddingTop: '20%', backgroundColor: '#eeee' }} />
  )

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/posts/${slug}`} aria-label={title}>
          {renderedImage}
        </Link>
      ) : (
        renderedImage
      )}
    </div>
  )
}
