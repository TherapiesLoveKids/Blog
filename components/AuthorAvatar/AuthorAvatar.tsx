import { urlForImage } from 'lib/sanity.image'
import type { Author } from 'lib/sanity.queries'
import Image from 'next/image'

export default function AuthorAvatar(props: Author) {
  const { name, picture } = props
  return (
    <div style={{display:'flex', alignItems:'center', margin:'15px 0'}}>
      <div style={{marginRight:'10px'}}>
        <Image
          src={
            picture?.asset?._ref
              ? urlForImage(picture).height(50).width(50).fit('crop').url()
              : 'https://source.unsplash.com/96x96/?face'
          }
          className="rounded-full rounded"
          height={30}
          width={30}
          alt={picture?.alt ?? name}
        />
      </div>
      <h5 className="text-xl font-bold text-balance">{name}</h5>
    </div>
  )
}
