import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-white flex flex-col items-center'>
        <div>
          <span className='flex flex-col font-black text-2xl leading-6 uppercase text-left  cursor-pointer ml-10 items-center mt-10'>
              Global 
            <span>
                Watch
            </span>
            <span className='text-xs'>
              Catalogue
            </span>
          </span>
          <p className='text-center p-10'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.<br/>
               Fuga adipisci sequi fugit porro magni excepturi nobis ut consequuntur quidem  Facilis suscipit dolores .<br/>
               repellat distinctio eos dignissimos aliquid officia numquam fugit?
          </p>
        </div>

    </footer>
  )
}

export default Footer