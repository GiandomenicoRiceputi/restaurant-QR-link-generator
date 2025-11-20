import { useState } from 'react'
import qrCode from "./assets/image-qr-code.png"




function App() {
  const [restaurantName, setRestaurantName] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [qrImage, setQrImage] = useState(qrCode);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    return (
      setQrImage(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputUrl}`)
    )
  };

  return (
    <main data-compo='center'>
      <article className='card' data-compo='flow'>
        <form data-compo='flow' onSubmit={handleSubmit}>
          <label htmlFor="restaurantName">restaurant name</label>
          <input className='input' type='text' id='restaurantName' value={restaurantName} onChange={(e) => setRestaurantName(e.target.value)} />
          <label htmlFor="inputUrl">restaurant url</label>
          <input className='input' type='url' id='inputUrl' value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} />
          <button className='button' type='submit'>Generate QR code</button>
        </form>
        <img src={qrImage} alt="QR Code to Frontend Mentor" />
        <h1>{restaurantName || "Improve your skills..."}</h1>
        <p>Scan the QR code to visit {restaurantName || "Frontend Mentor to improve your skills"}</p>
      </article>
    </main>
  )
}

export default App
