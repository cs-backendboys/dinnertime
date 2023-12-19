import Card from '../components/card.jsx'
import getImages from './api/aws.js';

export default async function Page() {

  let images = await getImages();
  
  // console.log(images)


  const cards = [];
  for (let i of images) {
    // console.log(`https://gobi-img-upload-thumbnail.s3.us-east-2.amazonaws.com/${i}`)
    cards.push(<Card key={`key_${i}`} url={`https://gobi-img-upload-thumbnail.s3.us-east-2.amazonaws.com/${i}`} />)
  }

  return (
    <main className="m-3 h-full">

      {/** HEADER */}
      <div id="Header" className="fixed top-0 left-0 z-1 w-full shadow flex items-center justify-between bg-blue-100 dark:bg-blue-800">
        <div className="w-full max-w-xl mx-auto max-w-screen-xl p-4 flex justify-around">
          <h3 className="invisible xs:visible">Logo</h3>
          <h1 className="text-3xl">DinnerTime</h1>
          <h3 className='invisible xs:visible'>Search</h3>
        </div>
      </div>

      {/** Main Content */}
      <div className='my-20 h-full flex flex-col items-center'>
        {cards}
      </div>

      {/** FOOTER */}
      <footer className="fixed bottom-0 left-0 z-1 w-full border-t bg-white dark:bg-gray-800">
        <div className="w-full max-w-xl mx-auto max-w-screen-xl p-4 flex justify-around">
          <span className="tex-sm text-gray-500 dark:text-gray-400">Feed</span>
          <span className="tex-sm text-gray-500 dark:text-gray-400">New</span>
          <span className="tex-sm text-gray-500 dark:text-gray-400">Posts</span>
        </div>
      </footer>
    </main>
  )
}