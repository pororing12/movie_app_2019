import React from 'react'

function Food( { name, picture }) {
  return (
    <div>
      <h2>I like {name} </h2>
      <img src = { picture } />
    </div>
  )
}

const FoodLike = [
  {
    name : "김치",
    image : "http://www.jungoneshop.com/_ui/desktop/theme-jungwoneshop/imgs/kimchi/img_kimchi.png"
  },
  {
    name : "삼겹살",
    image : "https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg"
  },
  {
    name : "쭈꾸미",
    image : "http://recipe1.ezmember.co.kr/cache/recipe/2017/06/21/b30caebf25bda7193fb1c345f082f8d41.jpg"
  }
]

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {FoodLike.map(item => (
        <Food name = {item.name}
          picture = {item.image}/>
      ))}
      
    </div>
  )
}

export default App;