import Cart from "@/components/othersPages/Cart";
import React from "react";
import Products from "@/components/shopDetails/Products";
import Overlay from "@/components/common/Overlay";

export const metadata = {
  title: "View Cart",
  description: "View Cart",
};

export default function page() {
  return (
    <>
      <div
        className="tf-page-title"
        style={{
          position: "relative",
        }}
      >
        <Overlay />
        <div className="container-full">
          <div className="row">
            <div
              className="col-12"
              style={{
                zIndex: 3,
                color: "white",
              }}
            >
              <div className="text-center heading" style={{}}>
                Giỏ hàng
              </div>
            </div>
          </div>
        </div>
      </div>

      <Cart />
      <Products />
    </>
  );
}
