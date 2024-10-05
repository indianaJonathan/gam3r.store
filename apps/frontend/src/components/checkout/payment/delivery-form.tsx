import { OrderDelivery } from '@gstore/core'

export interface DeliveryFormProps {
    delivery: Partial<OrderDelivery>
    onDeliveryChange: (delivery: Partial<OrderDelivery>) => void
    className?: string
}

export default function DeliveryForm(props: DeliveryFormProps) {
    const { delivery, onDeliveryChange } = props

    function updateAttribute(attribute: string) {
        return (e: React.ChangeEvent<HTMLInputElement>) => {
            onDeliveryChange({ ...delivery, [attribute]: e.target.value })
        }
    }

    return (
        <div className={`flex flex-col gap-3 ${props.className ?? ''}`}>
            <span className="px-7 pb-2 text-xl font-bold text-white/70">
                Dados da Entrega
            </span>
            <div className="flex flex-col gap-5 bg-violet-dark/50 rounded-xl p-6">
                <input
                    placeholder="Nome Completo"
                    value={delivery.name}
                    onChange={updateAttribute('name')}
                    className="input"
                />
                <div className="flex gap-5">
                    <input
                        placeholder="E-mail"
                        value={delivery.email}
                        onChange={updateAttribute('email')}
                        className="input flex-1"
                    />
                    <input
                        placeholder="CPF"
                        value={delivery.document}
                        onChange={updateAttribute('document')}
                        className="input flex-1"
                    />
                </div>
                <div className="flex gap-5">
                    <input
                        placeholder="Logradouro"
                        value={delivery.address}
                        onChange={updateAttribute('address')}
                        className="input flex-1"
                    />
                    <input
                        placeholder="Complemento"
                        value={delivery.complement}
                        onChange={updateAttribute('complement')}
                        className="input"
                    />
                </div>
                <div className="flex gap-5">
                    <input
                        placeholder="Cidade"
                        value={delivery.city}
                        onChange={updateAttribute('city')}
                        className="input flex-1"
                    />
                    <input
                        placeholder="Estado"
                        value={delivery.state}
                        onChange={updateAttribute('state')}
                        className="input flex-1"
                    />
                </div>
            </div>
        </div>
    )
}
