var data = [
    {"id":"p01","name":"Dried Cherries(100g)", "pic":"cherries.jpg","price":1.72,"description":"", "dry":"foreign"},
    
    {"id":"p02","name":"Dried Peaches(100g)", "pic":"dao.jpg","price":2.69, "description":"","dry":"domestic"},

    {"id":"p03","name":"Dried Longan(100g)", "pic":"nhan.jpg","price":3.08,"description":"", "dry":"domestic"},

    {"id":"p04","name":"Dried Apple(100g)", "pic":"tao.jpg","price":2.20,"description":"", "dry":"domestic"},

    {"id":"p05","name":"Dried Grapes(100g)", "pic":"nho.jpg","price":1.76,"description":"", "dry":"domestic"},

    {"id":"p06","name":"Dried Aroma(100g)", "pic":"thom.jpg","price":3.88,"description":"", "dry":"domestic"},

    {"id":"p07","name":"Dried Plums(100g)", "pic":"man.jpg","price":2.73,"description":"", "dry":"domestic"},

    {"id":"p08","name":"Dried Kiwi(100g)", "pic":"kiwisaydeo.png","price":2.2,"description":"", "dry":"domestic"},

    {"id":"p09","name":"Dried Mulberry(100g)", "pic":"dautam.jpg","price":1.72,"description":"", "dry":"domestic"},

    {"id":"p10","name":"Dried Banana(100g)", "pic":"chuoisay.jpg","price":0.97,"description":"", "dry":"domestic"},
    
    {"id":"p11","name":"Dried Jackfruit(100g)", "pic":"mit.jpg","price":2.86,"description":"", "dry":"domestic"},

    {"id":"p12","name":"Dried Blueberries(100g)", "pic":"DriedBlueberries.png","price":3.5,"description":"", "dry":"foreign"},

    {"id":"p13","name":"Dried Almonds(200g)", "pic":"Almonds.jpg","price":4,"description":"", "dry":"foreign"},

    {"id":"p14","name":"Indian Organic Dried Mango(200g)", "pic":"IndianOrganicDriedMango.jpg","price":4,"description":"", "dry":"foreign"},

    {"id":"p15","name":"Mixed Dried Fruits(350g)", "pic":"traicaysaydeo.jpg","price":4.5,"description":"", "dry":"domestic"},
    
    {"id":"p16","name":"Mixed Nuts, Fruits And Dried Yoghurt(737g)", "pic":"drymix.jpg","price":23.9,"description":"", "dry":"foreign"},

    {"id":"p17","name":"Dried Grapefruit", "pic":"buoi.png","price":2.69,"description":"", "dry":"domestic"},

    {"id":"p18","name":"Crispy desiccated coconut", "pic":"duasaydon.jpg","price":5.45,"description":"", "dry":"domestic"},

    {"id":"p19","name":"Dried cherry tomatoes", "pic":"cachuabi.jpg","price":2.7,"description":"", "dry":"domestic"},

    {"id":"p20","name":"DRYING LEMONS", "pic":"chanhday.jpg","price":2.18,"description":"", "dry":"domestic"},

];

function displayImage(items){
    let s =``;
    $.each(items, function(k, v){
        s +=`<div class="col-sm-4 col-md-4 col-lg-2 divImage">
        <div class="detailImage" data-id="${v.id}">
        <a href="product_${v.id}.html"><img src="img/${v.pic}" alt="" class="driedFruit"></a>
            <hr><h3>${v.name}</h3>
            <h4>Price:${v.price}$</h4>

        </div>

            <a data-name="${v.name}" data-price="${v.price}" class="add-to-cart btn btn-warning">Add to cart</a>
        </div>` ;
           
    });
    $("#products").html(s);

}



/*$(function(){
    $(".col-sm-4 col-md-4 col-lg-2 divImage").slice(0, 3).show(); // select the first ten
    $(".load").click(function(e){ // click event for load more
        e.preventDefault();
        $("col-sm-4 col-md-4 col-lg-2 divImage:hidden").slice(0, 3).show(); // select next 10 hidden divs and show them
        if ($("col-sm-4 col-md-4 col-lg-2 divImage:hidden").length == 0){ // check if any hidden divs still exist
            $(".load").fadeOut('slow')
            alert("No more products"); // alert if there are none left
        }
    });
});*/

//lap trinh su kien xem chi tiet san pham
 $(".detailImage").click(function(){
     alert("detailImage");
     let id = $(this).data('id');
    alert("test + " + id);
     location.href = "product_" + id+  ".html";
 });

 function showProduct(pid){
  let products = data.filter(ele => ele.id == pid);
  let product = products[0];
  let x=`
      <div class="row">
          <div class="col-sm-md-10">
              <div><img src="img/${product.pic}" alt="" class="driedFruit"></div>
          </div>
          <div class="col-md-2">
            <h3>${product.name}</h3>
            <div class="stars">
                <form action="">
                    <input class="star star-5" id="star-5" type="radio" name="star"/>
                    <label class="star star-5" for="star-5"></label>
                    <input class="star star-4" id="star-4" type="radio" name="star"/>
                    <label class="star star-4" for="star-4"></label>
                    <input class="star star-3" id="star-3" type="radio" name="star"/>
                    <label class="star star-3" for="star-3"></label>
                    <input class="star star-2" id="star-2" type="radio" name="star"/>
                    <label class="star star-2" for="star-2"></label>
                    <input class="star star-1" id="star-1" type="radio" name="star"/>
                    <label class="star star-1" for="star-1"></label>
                </form>
            </div>
            <h4>Price:${product.price}$</h4>
          <table>
          <h5><tr><th>Transport:
             <input select="shipping place" placeholder="Enter address"></th></h5>
                <th><select name="shipping place">
                   <option value="">VietNam</option>
                   <option value="">India</option>
             </select></th></tr>
             <tr><th>Transport Fee:
                <select name="shipping place">
                   <option value="">VietNam 0$</option>
                   <option value="">India 1$</option>
             </select>
             </th></tr>
          </table><br>
          <a onclick="alert(${product})" data-name="${product.name}" data-price="${product.price}" class="add-to-cart btn btn-success">Add to cart</a>
          
          </div>
      </div>           
      `;
  $("#productDetail").html(x);
}

//call function to show all image
displayImage(data);

//event search
$("#formSearch").submit(function(e){
    e.preventDefault();

    // lay noi dung cua the input
    let value=$("#search").val();
    let re=new RegExp(value, "ig");
    let subdata=data.filter(item => item.name.search(re)>=0);
    displayImage(subdata);
})

$("input[type=checkbox]").click(function(){
    let drys=$(".ck-dryfruit:checked").map(function(){return $(this).val()}).toArray().toString();

    let subdata=(drys.length==0)?data: data.filter(item=>drys.search(item.dry)>=0);
  
    displayImage(subdata);
  })
