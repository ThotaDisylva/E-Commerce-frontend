const initialState = {
    products: [
      {
        id: 1,
        image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
        title: "Samsung",
        subtitle:"M30",
        brand:"Samsung",
        color:"black",
        quantity: 100,
        price: 100000,
        discountedpercent:20,
        deliverycharges:100,
        category: "Electronics",
        subCategory: "Mobile",
        description:"This is a samsung mobile with M30 series",
        highlights:"Camera:  ,Battery:"
      }
    ],
    orders: [
      {
        id:10,
        image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
        title: "Samsung",
        price: 100000
      },
      {
        id:10,
        image: "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UF1000,1000_QL80_DpWeblab_.jpg",
        title: "Samsung1",
        price: 1000
      }
    ]
  };

  export default initialState;