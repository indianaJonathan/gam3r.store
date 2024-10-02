import type Installment from "./installment";
import { MAX_INSTALLMENT, MONTH_FEES } from "../constants";

export default class CalcInstallment {
    exec(
        value: number,
        amount: number = MAX_INSTALLMENT,
        taxes: number = MONTH_FEES
    ): Installment {
        if (amount < 2 || amount > MAX_INSTALLMENT) {
            throw new Error("Quantidade de parcelas inválida");
        }

        const totalWithTaxes = this.calcCompoundInterest(value, taxes, amount);

        return {
            total: this.fixed2(totalWithTaxes),
            value: this.fixed2(totalWithTaxes / amount),
            amount,
            taxes
        }
    }

    private calcCompoundInterest(
        value: number,
        taxes: number,
        amount: number
    ): number {
        return value * ((1 + taxes) ** amount);
    }

    private fixed2(value: number): number {
        return Math.round(value * 100) / 100;
    }
}
