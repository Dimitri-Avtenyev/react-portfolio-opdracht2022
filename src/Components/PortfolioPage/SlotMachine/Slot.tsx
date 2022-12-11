interface Value {
    value:  number
}
interface Slot {
    id:   number,
    slotImage: string
}
const slots:Slot[] = [
    {id: 0, slotImage: "./slot-cherry.png"},
    {id: 1, slotImage: "./slot-lemon.png"},
    {id: 2, slotImage: "./slot-melon.png"},
    {id: 3, slotImage: "./slot-prune.png"},
    {id: 4, slotImage: "./slot-seven.png"}
]
const Slot = ({value}:Value) => {
    return (
        <img src={slots[value].slotImage} alt="slot"/>
    )
}

export default Slot;