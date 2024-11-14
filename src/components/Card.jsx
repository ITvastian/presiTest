export const Card = ({ card, handleCardClick }) => {
	return (
		<div
			className={`drop-shadow-md flex items-center ${
				card.flipped ? '[transform: rotateY(10deg)]' : 'bg-white'
			} justify-center cursor-pointer h-20 w-20 hover:scale-105 rounded-xl transition-all duration-1000`}
            onClick={()=> handleCardClick(card.id)}
		>
			<div>
				<img
					src={card.img}
					alt={card.alt}
					className={`h-24 w-28 scale-100 ${
						!card.flipped
							? '[transform:rotateY(180deg)] [backface-visibility:hidden] transition-all duration-1000'
							: ''
					}`}
				/>
			</div>
		</div>
	);
};