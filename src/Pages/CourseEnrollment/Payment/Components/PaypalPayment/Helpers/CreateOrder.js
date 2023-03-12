import axios from "axios";

export const CreateOrder = async (Package, Installment) => {
    let PayPrice
    if (Installment === "Installments")
        PayPrice = (Package?.TotalFee / Package?.Installments).toFixed(2)
    else if (Installment === "Full")
        PayPrice = Package?.TotalFee

    const { data } = await axios.post('/api/orders', { CoursePackageId: Package?.CoursePackageId, TotalPrice: PayPrice, Currency: "USD" });

    return data.id
}

export const ApproveOrder = async (OrderId, Package, Installment, EnrollmentData) => {
    let PayPrice, InstallmentNumber
    if (Installment) {
        PayPrice = (Package?.TotalFee / Package?.Installments).toFixed(2);
        InstallmentNumber = 1
    }
    else {
        PayPrice = Package?.TotalFee;
        InstallmentNumber = Package.Installments
    }
    
    await axios.post(`/api/orders/${OrderId}/capture`,
        { CoursePackageId: Package.CoursePackageId, TotalPrice: PayPrice, Installments: InstallmentNumber, EnrollmentData })
}