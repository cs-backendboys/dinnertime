import Card from '../components/card.jsx'

function getImages() {
  const s3url = ''
  const bucket = new AWS.S3( { params: { Bucket:'' } } );
  bucket.listObjects((err, data) => {
    if(err) {
      console.log (err);
      return
    }
    else {
      console.log(data.Contents);
      return data.Contents;
    }
  })
}

export default function Page() {

  const images = getImages();

  const cards = [];
  for (let i = 0; i < 10; i++) {
    cards.push(<Card key={`key_${i}`} />)
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