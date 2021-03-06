import React from "react";
import style from "./Offers.module.css";
import { offers } from "./data";
import { useNavigate } from "react-router-dom";
const Offers = () => {
  const navigate=useNavigate()
  return (
    <div className={style.offers}>
      <h1>Special Offers From Your Favorite Stores</h1>
      <div className={style.offerDiv1}>
        <div>
          <input type="text" placeholder="Search store name" />
          <div>
            {" "}
            <img src="https://cdn.modesens.com/static/img/search_keyword_icon_20180510.svg" />
          </div>
        </div>
        <div>
          <button>SHARE</button>
          <div>
            {" "}
            <img src="https://cdn.modesens.com/static/img/20190805Vector.svg" />
          </div>
        </div>
      </div>
      <div className={style.offerDiv2}>
        {offers.map((e, i) => (
          <div key={i} className={style.child}>
            <img src={e.img} />
            <br />
            <br />
            <br />
            <button onClick={()=>navigate('/beauty')}>SHOP NOW</button>
            <br />
            <br />
            <p>{e.p}</p>
            <hr />
            <div>
              <div>
                <p>No Code Needed</p>
                <p>{e.date}-TBD</p>
              </div>
              <div className={style.chil}>
                <img src="https://cdn.modesens.com/static/img/20190805Vector.svg" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;
