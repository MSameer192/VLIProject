import React from "react";
import { CreateOrder, ApproveOrder } from "./Helpers/CreateOrder";


export const PaypalBtn = ({ Package, Installment, setSuccess, EnrollmentData, PayPalButton,PaypalBtnRef}) => {
    
    return (
        <div style={{ maxWidth: "750px", minHeight: "200px" }} ref={PaypalBtnRef}>

            <PayPalButton
                createOrder={(data, actions) => CreateOrder(Package, Installment,)}


                onApprove={async (data, actions) => {
                    await ApproveOrder(data.orderID, Package, Installment, EnrollmentData)
                    let Check = await actions.order.capture();
                    if (Check.status === 'COMPLETED')
                        setSuccess(true)
                    return actions.order.capture()
                }}
            />

        </div>
    );
}