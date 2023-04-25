import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const TitleLogo = () => {
  // <h1 id="title" key="h2">
  //   Food Villa
  // </h1>
  return (
    <a href="https://www.facebook.com/foodvillarestaurant1/photos/">
      <img
        className="logoImage"
        src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
        alt="logo"
      />
    </a>
  );
};

const UserIcon = () => (
  <img
    className="user-icon"
    src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg "
  ></img>
);

const CartIcon = () => (
  <a href="#">
    <img
      className="cart-icon"
      src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
      alt="cart logo"
      width="50"
      height="50"
    />
  </a>
);

const NavBar = () => (
  <div className="navItems">
    <ul>
      <li>Home </li>
      <li>About Us</li>
      <li>Contact</li>
    </ul>

    <UserIcon />
    <CartIcon />
  </div>
);

const Header = () => {
  return (
    <div className="header">
      <TitleLogo />
      <NavBar />
    </div>
  );
};

const restaurantListObj=[  
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "684427",
      name: "Cafe Amudham",
      uuid: "e56f2694-6e06-4135-9c08-eb87c2496398",
      city: "1",
      area: "Jayanagar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "0bcdca61f3cd1e9135b98328593d044f",
      cuisines: ["South Indian", "Snacks"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 42,
      minDeliveryTime: 42,
      maxDeliveryTime: 42,
      slaString: "42 MINS",
      lastMileTravel: 4,
      slugs: {
        restaurant: "cafe-amudham-jayanagar-jayanagar",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "No. 192, , Lalbhagh  Siddapura, Jayanagar 1st Block, Ward No. 144,  Bangalore, B.B.M.P South, Karnataka-560011",
      locality: "Lalbhagh  Siddapura",
      parentId: 396620,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 3900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 3900,
        message: "",
        title: "Delivery Charge",
        amount: "3900",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6517552~p=1~eid=00000187-b17b-64c9-0ee6-a080000d010a",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "684427",
        deliveryTime: 42,
        minDeliveryTime: 42,
        maxDeliveryTime: 42,
        lastMileTravel: 4,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.6",
      totalRatings: 100,
      new: true,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "47385",
      name: "Priyadarshini Grand",
      uuid: "cbca89ad-df12-4303-a7d2-baadc5700ff8",
      city: "1",
      area: "Basaveshwara Nagar",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "c9elzh8awx7jcx70cood",
      cuisines: [
        "South Indian",
        "North Indian",
        "Chaat",
        "Chinese",
        "Beverages",
      ],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 46,
      minDeliveryTime: 46,
      maxDeliveryTime: 46,
      slaString: "46 MINS",
      lastMileTravel: 7.5,
      slugs: {
        restaurant: "priyadarshini-grand-basaveshwaranagar",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "315, Siddhaiah Puranik Road, Basaveshwara Nagar, Bangalore - 560020",
      locality: "Siddhaiah Puranik Road",
      parentId: 9727,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 5700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 5700,
        message: "",
        title: "Delivery Charge",
        amount: "5700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 1,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "7.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "47385",
        deliveryTime: 46,
        minDeliveryTime: 46,
        maxDeliveryTime: 46,
        lastMileTravel: 7.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "IT_IS_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.5",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "200701",
      name: "Sri Udupi Grand",
      uuid: "72044222-a7ba-420b-a70f-2fb7124f36f8",
      city: "1",
      area: "R T Nagar",
      totalRatingsString: "5000+ ratings",
      cloudinaryImageId: "cipxp48z8ecjskh9k43z",
      cuisines: ["South Indian"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 42,
      minDeliveryTime: 42,
      maxDeliveryTime: 42,
      slaString: "42 MINS",
      lastMileTravel: 6.699999809265137,
      slugs: {
        restaurant: "sri-udupi-grand-r.t.-nagar-r.t.-nagar",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "1/1, Ayyapa Complex, Next to LBS College, Near Pushpanjali Theatre, Sultanpalya, R T Nagar, Bengaluru - 560032  Karnataka, India",
      locality: "Sultanpalya",
      parentId: 19010,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "30% off",
        shortDescriptionList: [
          {
            meta: "30% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹75 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "30% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "30% off up to ₹75 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 5100,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 5100,
        message: "",
        title: "Delivery Charge",
        amount: "5100",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "200701",
        deliveryTime: 42,
        minDeliveryTime: 42,
        maxDeliveryTime: 42,
        lastMileTravel: 6.699999809265137,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 5000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "205813",
      name: "Paakashala",
      uuid: "656070fb-1fa1-4f10-9be0-c807d1bfecf0",
      city: "1",
      area: "MG Road",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "thkhqrsskc5745ztfz2v",
      cuisines: ["South Indian", "North Indian", "Chinese"],
      tags: [],
      costForTwo: 50000,
      costForTwoString: "₹500 FOR TWO",
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: "33 MINS",
      lastMileTravel: 1.7999999523162842,
      slugs: {
        restaurant: "paakashala-central-bangalore-central-bangalore",
        city: "bangalore",
      },
      cityState: "1",
      address:
        "Paakashala @ MG Road, Mahatma Gandhi Road, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka, India",
      locality: "MG Road",
      parentId: 6959,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "15% off",
        shortDescriptionList: [
          {
            meta: "15% off | Use PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "15% off | Use code PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "15% OFF",
        shortDescriptionList: [
          {
            meta: "Use PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "15% off | Use code PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 2700,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 2700,
        message: "",
        title: "Delivery Charge",
        amount: "2700",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6548325~p=4~eid=00000187-b17b-64c9-0ee6-a081000d041b",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "205813",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 1.7999999523162842,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "72350",
      name: "Vishnu Garden",
      uuid: "bfbd0f0e-05cf-4a9a-87af-c946d1c96d62",
      city: "1",
      area: "R.T. Nagar",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "q1yoajwctcy33cjhregi",
      cuisines: ["Chinese", "South Indian", "North Indian"],
      tags: [],
      costForTwo: 25100,
      costForTwoString: "₹251 FOR TWO",
      deliveryTime: 43,
      minDeliveryTime: 43,
      maxDeliveryTime: 43,
      slaString: "43 MINS",
      lastMileTravel: 6.400000095367432,
      slugs: {
        restaurant: "vishnu-garden-rt-nagar-rt-nagar",
        city: "bangalore",
      },
      cityState: "1",
      address: "r.t nagar main road",
      locality: "Ganganagar",
      parentId: 21653,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 5100,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 5100,
        message: "",
        title: "Delivery Charge",
        amount: "5100",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "6.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "72350",
        deliveryTime: 43,
        minDeliveryTime: 43,
        maxDeliveryTime: 43,
        lastMileTravel: 6.400000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "4.4",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
]

// making Card Dynamic: writing JS-code(obj ie. restaurantListObj inside HTML-code RestaurantCard  )

const RestaurantCard = () => {
    return (
      <div className="res-card">
   
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+restaurantListObj?.[0]?.data?.cloudinaryImageId}/>
        <div className="short-desc">
        <h4>{restaurantListObj?.[0]?.data?.name}</h4>
        <h5>{restaurantListObj?.[0]?.data?.cuisines.join(", ")}</h5>
        <h5>₹{restaurantListObj?.[0]?.data?.costForTwo/100} for two</h5>
        <h6>{restaurantListObj?.[0]?.data?.avgRating} *</h6>
        <h6>at your doorstep within {restaurantListObj?.[0]?.data?.deliveryTime} minutes</h6>
        <h6>{restaurantListObj?.[0]?.data?.area} </h6>


        </div>
      </div>
    );
  };

const Body = () => {
  return (
  <div className="body">
    <div className="RestaurantList">
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    <RestaurantCard/>
    </div>
  </div>
  )
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    // <React.Fragment>
    <>
      <Header />
      <Body />
      <Footer />
    </>
    //</React.Fragment>
  );
};

root.render(AppLayout());
