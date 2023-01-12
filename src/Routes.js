import React from "react";
import RecoveriesLoadFormShort from "pages/RecoveriesLoadFormShort";
import RecoveriesLoadForm from "pages/RecoveriesLoadForm";
import MainSettleInvoiceShort from "pages/MainSettleInvoiceShort";
import MainSettleInvoice from "pages/MainSettleInvoice";
import RecoveriesStoresShort from "pages/RecoveriesStoresShort";
import RecoveriesStores from "pages/RecoveriesStores";
import UserShort from "pages/UserShort";
import SuccessSignup from "pages/SuccessSignup";
import LoadForm1Short from "pages/LoadForm1Short";
import LoadFormOne from "pages/LoadFormOne";
import RecoveriesShort from "pages/RecoveriesShort";
import Recoveries from "pages/Recoveries";
import User from "pages/User";
import SignUp from "pages/SignUp";
import MainLoadFormShort from "pages/MainLoadFormShort";
import MainLoadForm from "pages/MainLoadForm";
import SuccessLoadform from "pages/SuccessLoadform";
import LoadFormSettlementTwo from "pages/LoadFormSettlementTwo";
import LoadFormSettlement from "pages/LoadFormSettlement";
import Store from "pages/Store";
import Stores from "pages/Stores";
import Deliveryman from "pages/Deliveryman";
import Deliverymen from "pages/Deliverymen";
import MainDashboard from "pages/MainDashboard";
import SignIn from "pages/SignIn";
import ContactUs from "pages/ContactUs";
import LoadFormSettlementShortTwo from "pages/LoadFormSettlementShortTwo";
import LoadFormSettlementShort from "pages/LoadFormSettlementShort";
import StoreShort from "pages/StoreShort";
import StoresShort from "pages/StoresShort";
import DeliverymanShort from "pages/DeliverymanShort";
import DeliverymenShort from "pages/DeliverymenShort";
import MainDashboardShort from "pages/MainDashboardShort";
import SuccessContact from "pages/SuccessContact";
import LandingPage from "pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/successcontact" element={<SuccessContact />} />
        <Route path="/maindashboardshort" element={<MainDashboardShort />} />
        <Route path="/deliverymenshort" element={<DeliverymenShort />} />
        <Route path="/deliverymanshort" element={<DeliverymanShort />} />
        <Route path="/storesshort" element={<StoresShort />} />
        <Route path="/storeshort" element={<StoreShort />} />
        <Route
          path="/loadformsettlementshort"
          element={<LoadFormSettlementShort />}
        />
        <Route
          path="/loadformsettlementshorttwo"
          element={<LoadFormSettlementShortTwo />}
        />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/maindashboard" element={<MainDashboard />} />
        <Route path="/deliverymen" element={<Deliverymen />} />
        <Route path="/deliveryman" element={<Deliveryman />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/store" element={<Store />} />
        <Route path="/loadformsettlement" element={<LoadFormSettlement />} />
        <Route
          path="/loadformsettlementtwo"
          element={<LoadFormSettlementTwo />}
        />
        <Route path="/successloadform" element={<SuccessLoadform />} />
        <Route path="/mainloadform" element={<MainLoadForm />} />
        <Route path="/mainloadformshort" element={<MainLoadFormShort />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/user" element={<User />} />
        <Route path="/recoveries" element={<Recoveries />} />
        <Route path="/recoveriesshort" element={<RecoveriesShort />} />
        <Route path="/loadformone" element={<LoadFormOne />} />
        <Route path="/loadform1short" element={<LoadForm1Short />} />
        <Route path="/successsignup" element={<SuccessSignup />} />
        <Route path="/usershort" element={<UserShort />} />
        <Route path="/recoveriesstores" element={<RecoveriesStores />} />
        <Route
          path="/recoveriesstoresshort"
          element={<RecoveriesStoresShort />}
        />
        <Route path="/mainsettleinvoice" element={<MainSettleInvoice />} />
        <Route
          path="/mainsettleinvoiceshort"
          element={<MainSettleInvoiceShort />}
        />
        <Route path="/recoveriesloadform" element={<RecoveriesLoadForm />} />
        <Route
          path="/recoveriesloadformshort"
          element={<RecoveriesLoadFormShort />}
        />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
