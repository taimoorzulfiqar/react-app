import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <p className="headline">
        This project was generated By{" "}
        <a href="https://www.dhiwise.com">Dhiwise</a>. Quickly use below links
        to navigate through all pages.
      </p>
      <ul>
        <li>
          <Link to="/">LandingPage</Link>
        </li>
        <li>
          <Link to="/successcontact">SuccessContact</Link>
        </li>
        <li>
          <Link to="/maindashboardshort">MainDashboardShort</Link>
        </li>
        <li>
          <Link to="/deliverymenshort">DeliverymenShort</Link>
        </li>
        <li>
          <Link to="/deliverymanshort">DeliverymanShort</Link>
        </li>
        <li>
          <Link to="/storesshort">StoresShort</Link>
        </li>
        <li>
          <Link to="/storeshort">StoreShort</Link>
        </li>
        <li>
          <Link to="/loadformsettlementshort">LoadFormSettlementShort</Link>
        </li>
        <li>
          <Link to="/loadformsettlementshorttwo">
            LoadFormSettlementShortTwo
          </Link>
        </li>
        <li>
          <Link to="/contactus">ContactUs</Link>
        </li>
        <li>
          <Link to="/signin">SignIn</Link>
        </li>
        <li>
          <Link to="/maindashboard">MainDashboard</Link>
        </li>
        <li>
          <Link to="/deliverymen">Deliverymen</Link>
        </li>
        <li>
          <Link to="/deliveryman">Deliveryman</Link>
        </li>
        <li>
          <Link to="/stores">Stores</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/loadformsettlement">LoadFormSettlement</Link>
        </li>
        <li>
          <Link to="/loadformsettlementtwo">LoadFormSettlementTwo</Link>
        </li>
        <li>
          <Link to="/successloadform">SuccessLoadform</Link>
        </li>
        <li>
          <Link to="/mainloadform">MainLoadForm</Link>
        </li>
        <li>
          <Link to="/mainloadformshort">MainLoadFormShort</Link>
        </li>
        <li>
          <Link to="/signup">SignUp</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/recoveries">Recoveries</Link>
        </li>
        <li>
          <Link to="/recoveriesshort">RecoveriesShort</Link>
        </li>
        <li>
          <Link to="/loadformone">LoadFormOne</Link>
        </li>
        <li>
          <Link to="/loadform1short">LoadForm1Short</Link>
        </li>
        <li>
          <Link to="/successsignup">SuccessSignup</Link>
        </li>
        <li>
          <Link to="/usershort">UserShort</Link>
        </li>
        <li>
          <Link to="/recoveriesstores">RecoveriesStores</Link>
        </li>
        <li>
          <Link to="/recoveriesstoresshort">RecoveriesStoresShort</Link>
        </li>
        <li>
          <Link to="/mainsettleinvoice">MainSettleInvoice</Link>
        </li>
        <li>
          <Link to="/mainsettleinvoiceshort">MainSettleInvoiceShort</Link>
        </li>
        <li>
          <Link to="/recoveriesloadform">RecoveriesLoadForm</Link>
        </li>
        <li>
          <Link to="/recoveriesloadformshort">RecoveriesLoadFormShort</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;