import { useState } from "react";
import SlotComponent from "./Slot";
import styles from "./SlotMachine.module.css";
import slotCherry from "./Assets/slot-cherry.png";
import slotLemon from "./Assets/slot-lemon.png";
import slotMelon from "./Assets/slot-melon.png";
import slotPrune from "./Assets/slot-prune.png";
import slotSeven from "./Assets/slot-seven.png";

interface Slot {
	id: number,
	slotImage: string
}
const slots: Slot[] = [
	{ id: 0, slotImage: slotCherry },
	{ id: 1, slotImage: slotLemon },
	{ id: 2, slotImage: slotMelon},
	{ id: 3, slotImage: slotPrune },
	{ id: 4, slotImage: slotSeven }
]
const randomNum = (min: number, max: number): number => {
	return Math.floor(Math.random() * (max + 1) + min);
}
const slotMachineGenerator = (numberOfSlots: number): Slot[] => {
	let result: Slot[] = [];
	for (let i: number = 0; i < numberOfSlots; i++) {
		result.push(slots[randomNum(0, 4)]);
	}
	return result;
}
const resultGame = (game: Slot[]): boolean => {
	let result: boolean;
	let counter: number = 0;
	for (let i: number = 0; i < game.length; i++) {
		if (game[0].id === game[i].id) {
			counter++
		}
	}
	if (counter === game.length) {
		result = true;
	} else {
		result = false;
	}
	return result;

}
const SlotMachine = ({ slots }: { slots: number }) => {
	const [slotsGenerated, setSlotsGenerated] = useState<Slot[]>(slotMachineGenerator(slots));
	const [money, setMoney] = useState<number>(100);

	const game: Slot[] = slotMachineGenerator(slots);


	const pullLever: React.MouseEventHandler<HTMLButtonElement> = () => {
		setSlotsGenerated(slotMachineGenerator(slots));
		if (resultGame(game)) {
			setMoney(money => money + 20);
		} else {
			setMoney(money => money - 1);
		}
	}

	return (
		<div className={styles.container}>
			{money > 0 && <div>Saldo: €{money}</div>}
			<div className={styles.SlotMachine}>
			<button className={styles.lever} onClick={pullLever} disabled={money <= 0}>Pull Lever</button>
				{game.map((slot: Slot, id: number) =>
					<img className={styles.slot} key={id} src={slot.slotImage} alt="slot" />
				)}
			</div>
			<p className={styles.result}>
				{money === 0 && <p>You lost!</p>}
			</p>
		</div>

	)
}

export default SlotMachine;
