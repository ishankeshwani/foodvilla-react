#Hello React



/**
 * 
 * Header
 * - Logo -Nav items
 * Body
 *  - search 
 *  - RestaurentContainer
 *    - restaurent card
 *      - img
 *      - name of Res , star rating , cuisine , deleivery tie 
 *  -Cart
 * footer
 *  -CopyRight
 *  -Links
 *  -Address
 *  -contact
 * 
 * 
 * 
 * 
      <h2>Menu</h2>
      {menuCategories?.map((category) => (
        <div key={category?.card?.card?.title}>
          <h3>{category?.card?.card?.title} ({category?.card?.card?.itemCards?.length} items)</h3>
          <ul>
            {category?.card?.card?.itemCards?.map((item) => {
              const info = item?.card?.info;
              return (
                <li key={info?.id}>
                  {info?.isVeg ? "🟢" : "🔴"} <b>{info?.name}</b> — ₹{info?.price / 100}
                  {info?.isBestseller && " 🏆"}
                  {!info?.inStock && " (Out of Stock)"}
                  <br />
                  <small>{info?.description}</small>
                </li>
              );
            })}
          </ul>
        </div>
 * 
 * 
 */
