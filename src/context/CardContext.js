import { createContext, useState } from "react";

export const CardStoreManagement = createContext()

export const CardStore = ({ children }) => {
  const [card, setCard] = useState([])

  const [products] = useState([ //Butun mallara reng property elave olunub
    {
      id: 1,
      productName: "Huawei P50 Pro",
      price: 800,
      imageUrl: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/03/Huawei-P50-Pro-4.jpg",
      brand: "Huawei",
      color: "white"
    },

    {
      id: 2,
      productName: "Huawei Nova",
      price: 380,
      imageUrl: "https://i0.wp.com/walastech.com/wp-content/uploads/2021/11/huawei-nova-9-review-philippines-2.jpg?resize=1024%2C768&ssl=1",
      brand: "Huawei",
      color: "blue"
    },

    {
      id: 3,
      productName: "Tecno Phantom X2",
      price: 530,
      imageUrl: "https://www.digitaltrends.com/wp-content/uploads/2022/12/Tecno-Phantom-X2-Pro-Back-in-Hand.jpg?p=1",
      brand: "Tecno",
      color: "red"
    },

    {
      id: 4,
      productName: "OnePlus 10 Pro",
      price: 480,
      imageUrl: "https://expertreviews.b-cdn.net/sites/expertreviews/files/2022/03/oneplus_10_pro_review_4.jpg",
      brand: "OnePlus",
      color: "black"
    },

    {
      id: 5,
      productName: "Sony Xperia 10",
      price: 480,
      imageUrl: "https://preview.redd.it/chhz47gucqd91.jpg?auto=webp&s=2fa8421daf79492b8c38a48c11a40077ecaaaf45",
      brand: "Sony",
      color: "blue"
    },

    {
      id: 6,
      productName: "Huawei Mate 50",
      price: 830,
      imageUrl: "https://imageio.forbes.com/specials-images/imageserve/63619b4605dee5b16e08fd10/0x0.jpg?format=jpg&width=1200",
      brand: "Huawei",
      color: "red"
    },
  ])

  const addToCard = (id, productName, price, imageUrl, description, quantity) => {
    const existingId = card.find(item => item.id == id)
    if (existingId) {
      const getNonExisting = card.filter(item => item.id !== existingId.id)
      setCard([...getNonExisting, { ...existingId, quantity: existingId.quantity + 1 }])
    } else {
      setCard([...card, { id, productName, price, imageUrl, description, quantity: 1 }])
    }
  }
  const decreaseInCard = (id, productName, price, imageUrl, description, quantity) => {
    const existingId = card.find(item => item.id == id)
    if (existingId) {
      const getNonExisting = card.filter(item => item.id !== existingId.id)
      setCard([...getNonExisting, { ...existingId, quantity: existingId.quantity - 1 }])
    } else {
      setCard([...card, { id, productName, price, imageUrl, description, quantity: 1 }])
    }
  }


  const deleteCard = (id) => {
    const filteredData = card.filter(item => item.id !== id)
    setCard(filteredData)
  }

  return (
    <CardStoreManagement.Provider value={{ products, card, addToCard, deleteCard, decreaseInCard }}>
      {children}
    </CardStoreManagement.Provider>
  )
}