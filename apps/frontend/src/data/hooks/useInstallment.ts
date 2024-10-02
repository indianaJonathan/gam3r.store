import { CalcInstallment } from "@gstore/core";

export default function useInstallment (value: number, amount = 12) {
    const installment = new CalcInstallment().exec(value, amount);
    return installment;
}
