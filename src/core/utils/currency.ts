export default class Currency {
    static format(value: number, locale = "pt-BR", currency = "BRL"): string {
        return (value ?? 0).toLocaleString(locale, { style: "currency", currency })
    }
}
