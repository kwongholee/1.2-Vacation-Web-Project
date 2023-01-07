const product = {
    "products": [
      {
        "id": 0,
        "title": "식기세척기",
        "brand": "세척나라",
        "photo": "pr1.jpg",
        "price": 10000
      },
      {
        "id": 1,
        "title": "원목 침대 프레임",
        "brand": "침대나라",
        "photo": "pr2.jpg",
        "price": 20000
      },
      {
        "id": 2,
        "title": "천연 디퓨저 세트",
        "brand": "향기나라",
        "photo": "pr3.jpg",
        "price": 30000
      },
      {
        "id": 3,
        "title": "시원한 서큘레이터",
        "brand": "바람나라",
        "photo": "pr4.jpg",
        "price": 40000
      }
    ]
  }

product.products.forEach((a) => {
    var template = `<div class="white-bg">
    <img src="../shop/${a.photo}" width="200px">
    <h4>${a.title}</h4>
    <p>${a.brand}</p>
    <h4>가격: ${a.price}</h4>
    <button class="cart-in">담기</button>
    </div>`;
    $('#cart').append(template);
})