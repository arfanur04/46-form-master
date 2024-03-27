import Cousin from "../Cousin/Cousin";

const Uncle = () => {
	return (
		<div>
			<h2>
				Uncle
				<section className="flex">
					<Cousin name={"Rafsan"}></Cousin>
					<Cousin name={"Sohana"}></Cousin>
				</section>
			</h2>
		</div>
	);
};

export default Uncle;
