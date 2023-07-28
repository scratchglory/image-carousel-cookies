import { useState } from "react";
import "./styles.css";

const images = [
  "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29va2llc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1559622214-f8a9850965bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29va2llc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1598839950984-034f6dc7b495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29va2llc3xlbnwwfDF8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1618923850107-d1a234d7a73a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvb2tpZXN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1629324482344-58ac79e26b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvb2tpZXN8ZW58MHwxfDB8fHww&auto=format&fit=crop&w=500&q=60",
];

export default function App() {
  const [current, setCurrent] = useState(0);

  function nextSlide() {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  }

  function prevSlide() {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  }

  return (
    <div>
      <h2>IMAGE CAROUSEL: COOKIES</h2>
      <div className="slider">
        <div className="left-arrow" onClick={prevSlide}>
          ⬅
        </div>
        <div className="right-arrow" onClick={nextSlide}>
          ⮕
        </div>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slide">
                <img src={image} alt="images" />
              </div>
            )
        )}
      </div>
    </div>
  );
}
