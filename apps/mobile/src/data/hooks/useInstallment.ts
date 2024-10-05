import { CalcInstallment } from '@gstore/core'

export default function useInstallment(value: number, amount: number = 12) {
    return new CalcInstallment().exec(value, amount)
}
