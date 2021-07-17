import React, {useState, useEffect} from 'react';
import jsonFile from '../assets/data.json'
import '../style/function.scss'

type Props = {};

const Function: React.FC<Props> = (props) => {
    const [order, setOrder] = useState(new Array());

    useEffect(() => {
        if (order.length <= 0) {
            var targetData = jsonFile.filter(i => i.shop === 1)
            var orders: Array<any> = [];

            for (let i in targetData) {
                orders = [...orders, ...targetData[i].data]
            }

            orders = findAmount(orders)

            orders = orders.filter((val, index, all) => {
                return all.findIndex(item => (item.id === val.id)) === index // findIndex always get first match to compare with current index
            })

            setOrder(orders);
        }
    })

    const findAmount = (orders:Array<any>) => {
        for (let i in orders) {
            let found = orders.filter(item => orders[i].id === item.id)
            orders[i].amount = found.map(i => i.order.amount).reduce((a, b) => a + b, 0);
        }

        return orders
    }

    return (
        <div className="func container px-1 pb-0">
            <pre className="order-list p-2">
                {JSON.stringify(
                    order.map(i => ({id: i.id, name: i.name, price: i.price, amount: i.amount}))
                , null, 2)}
            </pre>
        </div>
    )
}

export default Function;