
export default function Gider({ gider}) {
  return (

    <div className='mb-4 grid grid-cols-9 border text-center'>
        <div>
        <p className='flex-shrink pl-1 pr-2 text-base font-normal color-primary width-auto'>
          {gider.id}
        </p>
        </div>
        <div>
        <p className='flex-shrink pl-1 pr-2 text-base font-normal color-primary width-auto'>
          {gider.ay}/{gider.yil}
        </p>
        </div>
        <div>
        <p className='flex-shrink pl-1 pr-2 text-base font-normal color-primary width-auto'>
          {gider.sube}
        </p>
        </div>
        <div>
        <p className='flex-shrink pl-1 pr-2 text-base font-normal color-primary width-auto'>
          {gider.kategori}
        </p>  
        </div>
        <div>
        <p className='flex-shrink pl-1 pr-2 text-base font-normal color-primary width-auto'>
          {gider.altkategori}
        </p>  
        </div>
        <div>
        <p className='flex-shrink pl-1 pr-2 text-base font-normal color-primary width-auto'>
          {gider.aciklama}
        </p>  
        </div>
        <div>      
        <p className='flex-shrink pl-1 pr-2 text-base font-normal color-primary width-auto'>
          {gider.miktar}
        </p>
        </div>
        <div>
        <p className='flex-shrink pl-1 pr-2 text-base font-normal color-primary width-auto'>
          {gider.authorId}
        </p>
        </div>
    </div>
  )
}


  //id            Int     @id @default(autoincrement())
  //ay            Int
  //yil           Int
  //sube          String
  //kategori      String
  //miktar        Float
  //author        User @relation(fields: [authorId], references: [id])
  //authorId      String