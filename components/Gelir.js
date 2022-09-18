
export default function Gelir({ gelir}) {
  return (

    <div className='mb-4 grid grid-cols-7 border text-center'>
        <div>
        <p className='flex-shrink pl-1 pr-2 text-base font-normal color-primary width-auto'>
          {gelir.id}
        </p>
        </div>
        <div>
        <p className='flex-shrink pl-1 pr-2 text-base font-normal color-primary width-auto'>
          {gelir.ay}/{gelir.yil}
        </p>
        </div>
        <div>
        <p className='flex-shrink pl-1 pr-2 text-base font-normal color-primary width-auto'>
          {gelir.sube}
        </p>
        </div>
        <div>
        <p className='flex-shrink pl-1 pr-2 text-base font-normal color-primary width-auto'>
          {gelir.kategori}
        </p>  
        </div>
        <div>      
        <p className='flex-shrink pl-1 pr-2 text-base font-normal color-primary width-auto'>
          {gelir.miktar}
        </p>
        </div>
        <div>
        <p className='flex-shrink pl-1 pr-2 text-base font-normal color-primary width-auto'>
          {gelir.authorId}
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